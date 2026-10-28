# Reference Audit — Fryzo Website

**Target URL:** `https://fryzo.com.pk/fryzo/`  
**Auditor:** Senior Frontend Engineer & UI/UX Reverse-Engineer  
**Audit Date:** October 28, 2026  
**Environment:** LiteSpeed Server, PHP 7.4.33, WordPress Core

---

## 1. Executive Summary

The Fryzo website is a food brand web presence designed to showcase frozen french fry products, brand values, manufacturing pipeline ("From Farm to Fryer"), package combos, business hours/locations, and an e-commerce catalog powered by WooCommerce. 

The site currently runs on WordPress with the Astra theme and Elementor page builder. While visually vibrant with punchy fast-food style colors (golden yellows, energetic blues, clean whites), the underlying implementation suffers from template bloat (Slider Revolution scripts, unused legacy CSS, unoptimized image thumbnails, and stock template placeholder copy).

Rebuilding the website from scratch provides an opportunity to:
1. Strip all Elementor/Slider Revolution weight, delivering a sub-second, 100/100 Lighthouse performance score.
2. Clean up template placeholder text (such as Latin Lorem Ipsum in FAQs and template burger package menus) to align directly with Fryzo's actual frozen potato products.
3. Provide a snappy, modern headless / static or high-performance modern web architecture (e.g. Next.js / Astro / Tailwind CSS / TypeScript).

---

## 2. Technology Stack Discovery & Verification

All findings below distinguish **verified facts** from **inferences**.

| Component | Verified Discovery | Evidence / Notes |
| :--- | :--- | :--- |
| **Server Engine** | LiteSpeed | `Server: LiteSpeed`, `X-LiteSpeed-Cache: hit`, `alt-svc: h3` headers verified |
| **Backend Runtime** | PHP 7.4.33 | Header `X-Powered-By: PHP/7.4.33` verified |
| **CMS** | WordPress | `/wp-content/`, `/wp-json/wp/v2/pages/120` REST endpoints present |
| **Theme** | Astra | CSS references `astra-theme-css-css` (ver: 4.13.5), `--ast-global-color-*` variables |
| **Page Builder** | Elementor & Elementor Pro | `wp-content/plugins/elementor`, `elementor/css/post-*.css` stylesheet links |
| **Slider System** | Slider Revolution | Script tag `rs-initialisation-scripts`, `revapi1.revolutionInit` in DOM |
| **E-Commerce** | WooCommerce | Shop route `/shop/`, CSS classes `woocommerce-loop-product__title`, `woocommerce-Price-amount` |
| **Typography** | Google Fonts | Webfonts loaded: `Chewy`, `Poppins`, `Ubuntu`, `Roboto` |
| **Analytics / Tracking** | Meta (Facebook) Pixel | Pixel ID `1601459447640710` initialized in `<head>` |
| **Caching Plugin** | LiteSpeed Cache | `<!-- Page cached by LiteSpeed Cache 7.9.2 -->` comment in source |

---

## 3. Site Navigation & Information Architecture

The website presents a straightforward 4-core-route structure:

```
Fryzo Web Architecture
├── /fryzo/ (Home)
│   ├── Top Header (Logo, Nav Menu, Order Online CTA)
│   ├── Hero Section (Slider Revolution: "Straight Cut Fries", "Healthy & Tasty Every Bite")
│   ├── Brand Introduction ("Who we are - Fryzo")
│   ├── Process Pipeline ("From Farm To Fryer" 6-step lifecycle)
│   ├── Combo Deals / Meals ("Delicious Package Meals")
│   ├── Promo Banner ("A Truck That Carries Healthy Foods For Your Healthy Moods")
│   ├── FAQ Accordion
│   ├── Store Hours & Locations ("Somerville, Holmdel, Westwood")
│   └── Contact Banner & Footer
├── /fryzo/about-us/ (About Us)
│   ├── Page Hero & Brand Story ("Made With Love And Passion")
│   ├── Vision & Mission Columns
│   ├── Team Showcase ("Daniel Jenkins, Thomas Wilson, Emma Wright, Georgina Wood")
│   ├── Promo Banner ("Discount up to 30% only this month")
│   ├── Client / Partner Logo Cloud
│   ├── Message from CEO ("Mian Nauman Kabir")
│   └── Footer
├── /fryzo/contact-us/ (Contact Us)
│   ├── Contact Channels (Our Store, Call us, Email us)
│   ├── Customer Message ("You Matter")
│   ├── Social Media Links
│   └── Footer
└── /fryzo/shop/ (Shop)
    ├── WooCommerce Grid
    ├── Product Listings (1kg & 2kg Straight Cut, 2kg Crinkle Cut, 2kg Curly Fries)
    └── Footer
```

---

## 4. Section-by-Section Functional Audit

### 4.1 Homepage (`/fryzo/`)
1. **Header & Navigation Bar:**
   - Logo: Fryzo Fries brandmark (`avvvzcx.png`)
   - Links: Home (`/fryzo/`), About Us (`/fryzo/about-us/`), Contact Us (`/fryzo/contact-us/`), Order Online (`/fryzo/shop/`)
   - CTA button: "Order Online" pill button pointing to `/shop/`
2. **Hero Banner:**
   - Powered by Slider Revolution (1240px container, full-width responsive breakpoints).
   - Headline: "Straight Cut Fries" / "Healthy & Tasty Every Bite".
   - Primary CTA: "Discover more".
3. **"From Farm To Fryer" Value Chain:**
   - 6 sequential milestones showcasing the manufacturing process:
     1. Procurement
     2. Cleaning and peeling
     3. Cutting
     4. Blanching of fries
     5. Half-frying
     6. Freezing
   - Tagline: *"We deliver. You enjoy."*
4. **Package Meals / Combo Section:**
   - Cards displaying: "Super Burger" ($40), "Special Burger" ($35), "Premium Burger" ($37). *(Note: Template artifact from food theme demo — should be converted to Fryzo fry packages or customized combos in the rebuild)*.
5. **Interactive FAQ Accordion:**
   - 6 collapsible accordion rows. Currently contains Latin placeholder text (`Nostra aenean sem lacinia convallis?`, etc.).
6. **Operating Hours & Locations:**
   - Split columns: Monday-Friday, Saturday, Sunday.
   - Locations: Somerville, Holmdel, Westwood.
7. **Bottom CTA Banner:**
   - "Don't Hesitate to contact us for more informations."

### 4.2 About Us (`/fryzo/about-us/`)
1. **Brand Story & Narrative:**
   - Subtitle: "Who we are" / Headline: "Made With Love And Passion".
2. **Core Pillars:**
   - Dedicated "Vision" and "Mission" layout blocks.
3. **Leadership & Team:**
   - Team cards: Daniel Jenkins, Thomas Wilson, Emma Wright, Georgina Wood.
4. **Partner Brand Cloud:**
   - Display grid of partner/client logo assets (`aven`, `circle`, `code-lab`, `earth-2.0`, `fox-hub`, `ideaa`, `treva`, `utosia`).
5. **Executive Leadership Statement:**
   - Message from the CEO: **Mian Nauman Kabir**. Accompanied by official executive portrait and signature styling.

### 4.3 Contact Us (`/fryzo/contact-us/`)
1. **Direct Communication Channels:**
   - Official Store Location Address
   - Direct Inquiries Email: `info@fryzo.com.pk`
   - Customer Care Line / Phone
2. **Customer Care Narrative:**
   - "You Matter" headline emphasizing customer service and satisfaction.
3. **Social Channels:**
   - Social link hubs (Facebook, Instagram, WhatsApp).

### 4.4 Shop Catalog (`/fryzo/shop/`)
1. **Product Grid:**
   - 4 live SKUs:
     - **Fryzo Straight Cut Fries 1.0 kg**
     - **Fryzo Straight Cut Fries 2.0 kg**
     - **Fryzo Crinkle Cut Fries 2.0 kg**
     - **Fryzo Curly Fries 2.0 kg**
   - Currency: Pakistani Rupee (`PKR` / `Rs` / `&#8360;`).
   - Card structure: Product thumbnail, category tag, product title, price, add to cart / view product CTA.

---

## 5. Third-Party Integrations & Analytics

1. **Meta (Facebook) Pixel:**
   - Pixel ID: `1601459447640710`
   - Initialized via `connect.facebook.net/en_US/fbevents.js` with `PageView` tracking.
2. **Google Tag Manager / Analytics:**
   - Prefetch link present (`//www.googletagmanager.com`).
3. **Form Handling:**
   - Currently, Contact Us does not have an active `<form>` element configured (it displays direct telephone and email contact information). A modern clean contact form handler (e.g. Nodemailer, Resend, or Formspree) is recommended for the rebuild.
4. **Checkout & Payment Gateway:**
   - Built on WooCommerce baseline. Rebuild will need standard COD (Cash on Delivery) and/or digital payment gateway (e.g. JazzCash, EasyPaisa, Stripe, or PayFast).

---

## 6. Audit Constraints & Verification Notes

- **Unavailable / Hidden Backend Logic:** WooCommerce checkout rules, shipping cost calculators, inventory threshold hooks, and private admin endpoints cannot be inspected from the public front end. In the new build, these must be defined based on the client's business rules.
- **Demo Placeholder Copy:** The reference site contains unreplaced starter-template copy in the FAQ accordion, team section, and combo meal cards. These are cataloged in `PAGE_INVENTORY.md` and flagged for client content replacement.
