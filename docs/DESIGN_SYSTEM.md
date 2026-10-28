# Design System Specification — Fryzo

This specification establishes the visual language, color palette, typography scales, spacing units, and responsive layout behavior reverse-engineered from the Fryzo reference website.

---

## 1. Color Palette

### 1.1 Brand & Accent Colors
| Role | Name | Hex Code | HSL / RGB | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Brand** | Fryzo Azure Blue | `#046BD2` | `rgb(4, 107, 210)` | Header CTA, active nav states, primary buttons, icons |
| **Primary Hover** | Deep Royal Blue | `#045CB4` | `rgb(4, 92, 180)` | Hover state for primary buttons and interactive links |
| **Accent Warm** | Golden Fry Amber | `#FDA256` | `rgb(253, 162, 86)` | Badges, discount banners, highlights, food theme accents |
| **WhatsApp Action**| Emerald Green | `#25D366` | `rgb(37, 211, 102)` | Floating WhatsApp contact trigger & success states |
| **Alert / Sale** | Crimson Red | `#CF2E2E` | `rgb(207, 46, 46)` | Sale badges, stock alert, discount tags |

### 1.2 Neutral & Background Tokens
| Role | Name | Hex Code | Usage |
| :--- | :--- | :--- | :--- |
| **Base Surface** | Pure White | `#FFFFFF` | Main card backgrounds, clean containers, header bar |
| **Subtle Tint** | Frost Blue Light | `#F0F5FA` | Section backgrounds (From Farm to Fryer, FAQ alternating rows) |
| **Surface Alt** | Ghost Gray | `#F9FAFB` | Input field backgrounds, table heads, secondary card surfaces |
| **Border Soft** | Slate Gray 200 | `#ECEFF3` | Card borders, subtle divider lines |
| **Border Active** | Border Neutral | `#D1D5DB` | Input borders, accordion borders |
| **Text Primary** | Deep Charcoal | `#111827` / `#111111` | Main headings, title copy, high-contrast text |
| **Text Secondary**| Slate Gray 700 | `#334155` / `#475569` | Body paragraphs, descriptions, metadata |
| **Text Muted** | Slate Gray 400 | `#9CA3AF` / `#666666` | Helper text, breadcrumbs, placeholder text |

---

## 2. Typography

The website combines expressive display typography for food excitement with clean modern sans-serifs for readability.

### 2.1 Font Families
- **Display / Heading Accent:** `'Chewy', cursive, display`
  - Playful, rounded, cartoon-style fast-food feel used for hero punchlines, discount callouts, and informal headers.
- **Primary Headings & Titles:** `'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
  - Font weights: `500` (Medium), `600` (SemiBold), `700` (Bold), `800` (ExtraBold).
- **Body & Editorial Copy:** `'Ubuntu', -apple-system, Roboto, sans-serif`
  - Font weights: `400` (Regular), `500` (Medium), `700` (Bold).
- **System Fallback:** `Roboto, Arial, sans-serif`.

### 2.2 Type Scale
| Level | Font Family | Size (Desktop) | Size (Mobile) | Line Height | Weight |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display / Hero H1** | Chewy / Poppins | `48px - 56px` | `32px - 38px` | `1.15 - 1.2` | `700 - 800` |
| **Section Title H2** | Poppins | `36px - 40px` | `26px - 30px` | `1.25` | `700` |
| **Sub-section H3** | Poppins | `24px - 28px` | `20px - 22px` | `1.3` | `600` |
| **Card Heading H4** | Poppins | `20px - 22px` | `18px - 20px` | `1.35` | `600` |
| **Item Title H5** | Poppins | `17px - 18px` | `16px` | `1.4` | `600` |
| **Eyebrow / Badge H6**| Poppins | `13px - 14px` | `12px` | `1.2` | `700` (Uppercase, track `1px`) |
| **Body Large** | Ubuntu | `18px` | `16px` | `1.6` | `400` |
| **Body Regular** | Ubuntu | `15px - 16px` | `14px - 15px` | `1.6` | `400` |
| **Caption / Small** | Ubuntu | `13px` | `12px` | `1.5` | `400` |

---

## 3. Spacing, Layout & Grid System

### 3.1 Breakpoints
| Breakpoint | Width Range | Layout Behavior |
| :--- | :--- | :--- |
| **Mobile (`xs`/`sm`)** | `< 768px` | Single-column stack, collapsed hamburger nav, 16px - 20px edge gutters |
| **Tablet (`md`)** | `768px - 1024px` | 2-column grids for products and features, compact header |
| **Desktop (`lg`/`xl`)** | `> 1024px` | Full multi-column grid, horizontal navbar, max content container |

### 3.2 Containers & Gutters
- **Default Container Max Width:** `1200px` (`--ast-normal-container-width: 1200px`)
- **Slider Grid Width:** `1240px` (Slider Revolution breakpoint base)
- **Narrow Reading Container:** `750px` (Article/message readability)
- **Section Padding (Desktop):** `80px - 100px` top & bottom
- **Section Padding (Mobile):** `48px - 60px` top & bottom

### 3.3 Radii & Elevation (Shadows)
- **Border Radii:**
  - `rounded-sm`: `4px` (Inputs, secondary badges)
  - `rounded-md`: `8px` (Product cards, feature blocks)
  - `rounded-lg`: `16px` (Promotional modal/banners)
  - `rounded-full`: `9999px` (Pill buttons: "Order Online", category pills)
- **Elevation / Box Shadows:**
  - `card-shadow`: `0 4px 20px rgba(0, 0, 0, 0.06)`
  - `card-hover`: `0 12px 30px rgba(4, 107, 210, 0.12)`
  - `dropdown-shadow`: `0 10px 25px rgba(0, 0, 0, 0.1)`

---

## 4. UI Components & Interaction States

### 4.1 Buttons
- **Primary Pill Button (`.btn-primary`):**
  - Background: `#046BD2`, Color: `#FFFFFF`, Radius: `9999px`, Padding: `12px 28px`.
  - Hover: Background `#045CB4`, transform `translateY(-2px)`, shadow transition.
- **Secondary Ghost Button (`.btn-secondary`):**
  - Background: `transparent`, Border: `2px solid #046BD2`, Color: `#046BD2`.
  - Hover: Background `#046BD2`, Color: `#FFFFFF`.

### 4.2 Cards
- **Product Card (`.product-card`):**
  - Clean white surface, 1px border (`#ECEFF3`), soft shadow.
  - Image container with aspect ratio `1:1`, subtle zoom on hover (`scale(1.04)`).
  - Price formatted cleanly with currency badge.
  - Quick action button at bottom.
- **Step Card ("From Farm To Fryer"):**
  - Sequential step badge (`1` to `6`).
  - Circular icon container in light blue/amber tint.
  - Crisp heading and 2-sentence description.

### 4.3 Accordions (FAQ)
- Single open item or multi-expandable accordion.
- Chevron rotation animation (`180deg` transition `0.25s ease`).
- Smooth height animation on expand (`max-height` transition).
