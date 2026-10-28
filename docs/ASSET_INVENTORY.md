# Asset Inventory & Media Registry — Fryzo

This inventory compiles all static media, icons, photography, and brand graphics extracted from the reference site at `https://fryzo.com.pk/fryzo/`.

---

## 1. Brand & Identity Assets

| Asset Name | Target Context | Live Source URL | Status / Notes |
| :--- | :--- | :--- | :--- |
| **Primary Logo** | Main Header & Mobile Nav | `https://fryzo.com.pk/fryzo/wp-content/uploads/2024/02/avvvzcx.png` | Clean PNG cutout with Fryzo wordmark & fry splash |
| **Favicon / Site Icon** | Browser tab & mobile bookmark | `https://fryzo.com.pk/fryzo/wp-content/uploads/2024/02/1-100x100.png` | 100x100 brand icon |
| **Hero Cutout** | Slider Revolution Hero | `https://fryzo.com.pk/fryzo/wp-content/uploads/2026/07/fryzoooo.png` | Transparent PNG hero product display |

---

## 2. Product Catalog Imagery

| Product | Weights / Variations | High-Res Source URL | Thumbnail Variants |
| :--- | :--- | :--- | :--- |
| **Fryzo Straight Cut Fries** | 1.0 kg Pack | `https://fryzo.com.pk/fryzo/wp-content/uploads/2026/05/image-700x700.png` | `100x100`, `150x150`, `300x300`, `700x700` |
| **Fryzo Straight Cut Fries** | 2.0 kg Pack | `https://fryzo.com.pk/fryzo/wp-content/uploads/2026/05/2kg-fries-700x700.png` | `100x100`, `150x150`, `300x300`, `700x700` |
| **Fryzo Crinkle Cut Fries** | 2.0 kg Pack | `https://fryzo.com.pk/fryzo/wp-content/uploads/2026/07/image12-700x700.png` | `100x100`, `150x150`, `300x300`, `700x700` |
| **Fryzo Curly Fries** | 2.0 kg Pack | `https://fryzo.com.pk/fryzo/wp-content/uploads/2026/07/curly-700x700.png` | `100x100`, `150x150`, `300x300`, `700x700` |

---

## 3. Section Illustration & Storytelling Graphics

| Usage | Source URL | Purpose |
| :--- | :--- | :--- |
| **Courier / Delivery Truck** | `https://fryzo.com.pk/fryzo/wp-content/uploads/2024/02/Courier_.png` | Illustrates nationwide delivery & cold-chain distribution |
| **From Farm To Fryer Icon 1** | `https://fryzo.com.pk/fryzo/wp-content/uploads/2024/02/4-4-1.png` | Step 1 (Procurement icon) |
| **From Farm To Fryer Icon 2** | `https://fryzo.com.pk/fryzo/wp-content/uploads/2024/02/5-5-1.png` | Step 2 (Cleaning and peeling icon) |
| **From Farm To Fryer Icon 3** | `https://fryzo.com.pk/fryzo/wp-content/uploads/2024/02/6-6-3.png` | Step 3 (Cutting icon) |
| **From Farm To Fryer Icon 4** | `https://fryzo.com.pk/fryzo/wp-content/uploads/2024/02/7-1.png` | Step 4 (Blanching & frying icon) |
| **Combo Graphic 1** | `https://fryzo.com.pk/fryzo/wp-content/uploads/2024/02/Hamburger_2.png` | Combo meal card visual |
| **Combo Graphic 2** | `https://fryzo.com.pk/fryzo/wp-content/uploads/2024/02/Hamburger_3.png` | Combo meal card visual |
| **About Us Story Graphic** | `https://fryzo.com.pk/fryzo/wp-content/uploads/2024/02/vdS.png` | Feature banner graphic |
| **About Us Decorative** | `https://fryzo.com.pk/fryzo/wp-content/uploads/2024/02/sdvc.png` | Accent background shape |
| **CEO / Executive Portrait** | `https://fryzo.com.pk/fryzo/wp-content/uploads/2024/02/332852774_759428878879166_7323543335270712305_n-1-e1708759956526.jpg` | Mian Nauman Kabir portrait |

---

## 4. Partner Brand Badges

All located under `wp-content/uploads/elementor/thumbs/`:
- `aven-qk9qdafg0dawgavn7fy609dypnv9acn711kfyn6rk0.png`
- `circle-qk9qd7lxfv71hgzqnwqaas3kxi95n9c00nlzitay2o.png`
- `code-lab-qk9qd5q9274gu92gyvx15sknqqif7v4jceb0k9dqf4.png`
- `earth-2.0-qk9qcz5dqcvgkzc11b2n6c8fl1eupzeezhqm7bnhmo.png`
- `fox-hub-scaled-rnqgm79xt25q3yv1cbxi7h1vfvh9t6pqs7uzqpcjr4.png`
- `ideaa-qk9qd4sevd36in3u4dielat75cn2060t09nj2zf4lc.png`
- `treva-qk9qd2wqhp0lvf6kfcp5gba9ykwbkrtcc0ck4fhwxs.png`
- `utosia-2-qk9qd11240y1879aqbvwbbrcrt5l5dlvnr1l5vkpa8.png`

---

## 5. Web Fonts & CDN Resources

- **Google Fonts Links:**
  - Chewy: `family=Chewy`
  - Poppins: `family=Poppins:100..900`
  - Ubuntu: `family=Ubuntu:100..900`
  - Roboto: `family=Roboto:400`
- **Icon Set:** FontAwesome / Elementor SVG Icons (recommend switching to lightweight `lucide-react` or modern SVG sprite).

---

## 6. Asset Optimization Strategy for New Build

1. **Format Conversion:** Convert all PNG/JPG raster assets to modern `.webp` and `.avif` with fallback.
2. **Next-Gen Compression:** Run lossless compression on high-res cutouts (`fryzoooo.png`, product photos) to decrease image payloads from ~4MB to <350KB.
3. **Local Bundling:** Move all images to the local public directory (`/public/images/...`) instead of relying on remote WordPress uploads.
