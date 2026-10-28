'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/data/fryzoData';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  lastAddedItem: Product | null;
  showToast: boolean;
  addItem: (product: Product, quantity?: number) => void;
  dismissToast: () => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  generateWhatsAppLink: (orderData?: { name: string; phone: string; city: string; address: string; notes?: string }) => string;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      lastAddedItem: null,
      showToast: false,

      addItem: (product: Product, quantity: number = 1) => {
        set((state) => {
          const existing = state.items.find((i) => i.product.id === product.id);
          let newItems: CartItem[];
          if (existing) {
            newItems = state.items.map((i) =>
              i.product.id === product.id
                ? { ...i, quantity: i.quantity + quantity }
                : i
            );
          } else {
            newItems = [...state.items, { product, quantity }];
          }

          return {
            items: newItems,
            lastAddedItem: product,
            showToast: true, // Trigger the rounded popup screen
          };
        });
      },

      dismissToast: () => set({ showToast: false }),

      removeItem: (productId: string) => {
        set((state) => ({
          items: state.items.filter((i) => i.product.id !== productId),
        }));
      },

      updateQuantity: (productId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }
        set((state) => ({
          items: state.items.map((i) =>
            i.product.id === productId ? { ...i, quantity } : i
          ),
        }));
      },

      clearCart: () => set({ items: [] }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
      openCart: () => set({ isOpen: true, showToast: false }),
      closeCart: () => set({ isOpen: false }),

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0
        );
      },

      generateWhatsAppLink: (orderData) => {
        const { items, getTotalPrice } = get();
        const whatsappNumber = '923000000000'; // Official customer ordering number

        let msg = `🍟 *FRYZO ONLINE ORDER CONFIRMATION*\n`;
        msg += `==============================\n\n`;

        if (orderData) {
          msg += `👤 *Customer Details:*\n`;
          msg += `• Name: ${orderData.name}\n`;
          msg += `• Phone: ${orderData.phone}\n`;
          msg += `• City: ${orderData.city}\n`;
          msg += `• Delivery Address: ${orderData.address}\n`;
          if (orderData.notes) msg += `• Instructions: ${orderData.notes}\n`;
          msg += `\n------------------------------\n`;
        }

        msg += `📦 *Order Items:*\n`;
        items.forEach((item, idx) => {
          msg += `${idx + 1}. *${item.product.name}*\n   Qty: ${item.quantity} x Rs ${item.product.price.toLocaleString()} = Rs ${(item.quantity * item.product.price).toLocaleString()}\n`;
        });

        msg += `\n------------------------------\n`;
        msg += `💰 *Total Amount:* Rs ${getTotalPrice().toLocaleString()}\n`;
        msg += `🚚 *Delivery Method:* Cold-Chain Refrigerated Van (-18°C)\n`;
        msg += `💵 *Payment Mode:* Cash On Delivery (COD)\n\n`;
        msg += `Please confirm my order and send the dispatch schedule!`;

        return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
      },
    }),
    {
      name: 'fryzo-cart-storage',
    }
  )
);
