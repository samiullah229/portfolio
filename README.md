# Samiullah Bhatti — Web Developer Portfolio (Advanced)

A dark-themed, animated developer portfolio with a real **3D perspective
orbit gallery** for certifications, image placeholders throughout so you
can drop in your own photos/screenshots, and subtle 3D-tilt animations
across every section.

## 📁 Files

```
portfolio/
├── index.html          ← page structure / content
├── style.css            ← all styling (colors, layout, animations)
├── script.js            ← all behavior (cursor, typewriter, 3D orbit, tilt, form, lightbox)
├── assets/
│   ├── img/
│   │   └── profile-placeholder.png   ← hero photo placeholder — replace with your photo
│   ├── projects/         ← 4 project thumbnail placeholders — replace with real screenshots
│   └── certs/            ← your 7 real certificate images
└── README.md            ← this file
```

## ▶️ How to run it

No build step, no dependencies.

1. Unzip this folder — keep `index.html`, `style.css`, `script.js`, and
   the whole `assets/` folder together in the same place. Images won't
   load if you move any of them elsewhere.
2. Double-click `index.html` to open it in your browser.

To publish it for free: upload the whole folder to GitHub Pages,
Netlify, or Vercel — no configuration needed since it's plain
HTML/CSS/JS.

## 🖼️ Replace the placeholder images (do this first)

Every photo on the site is currently a placeholder so the layout looks
right before you add your real images. To swap them in, just overwrite
the file at the same path/filename — no HTML editing needed:

| What | File to replace |
|---|---|
| Hero profile photo (the glowing circle) | `assets/img/profile-placeholder.png` |
| Al Azizia School screenshot | `assets/projects/al-azizia-school.jpg` |
| Future Academy screenshot | `assets/projects/future-academy.jpg` |
| YouthAction Committee screenshot | `assets/projects/youthaction-committee.jpg` |
| E-Commerce Website screenshot | `assets/projects/ecommerce-website.jpg` |

Keep roughly the same aspect ratio for a clean fit: the hero photo is
square (1:1), project thumbnails are widescreen (16:10).

## ✨ What's new in this version

- **Hero photo placeholder** — the glowing orb now shows an actual
  `<img>` (a silhouette placeholder) instead of a letter, ready for
  your real photo.
- **Project thumbnails** — each project card now has a real image
  placeholder at the top instead of an emoji icon, ready for your
  screenshots.
- **True 3D orbit gallery for certifications** — cards are arranged in
  a real 3D ring (`translate3d` + `rotateY`, with CSS `perspective`)
  that continuously rotates, just like a 3D carousel — not a flat 2D
  circle. Hovering a card pauses the rotation, glows the card, shows
  its title as a caption, and displays full info (title/issuer/date)
  in the center hub. Clicking opens the full certificate in a
  lightbox.
- **3D tilt-on-hover** — project cards, stat cards, and skill cards now
  tilt in 3D toward your cursor on hover (a subtle `perspective` +
  `rotateX/rotateY` effect), tying the same 3D feel from the orbit
  gallery into every section.
- **More motion throughout** — pulsing timeline dots, alternating
  left/right slide-in for journey items as they scroll into view, and
  a small icon lift on hover in the contact section.
- **Web-developer focus only** — Skills section is pure web stack:
  HTML5, CSS3, JavaScript, Bootstrap, Responsive Design, E-Commerce
  Development, Git & GitHub, VS Code, UI/UX Design.
- **Real projects**: Al Azizia Islamic Public School Website, Future
  Academy Website, YouthAction Committee Website, E-Commerce Website.
- **Real certificates** identified from your uploads: Web Development
  (Google & Coursera), Use AI as a Creative or Expert Partner
  (Google/Coursera), E-Commerce hands-on training (Sukkur IBA / PITP,
  Govt of Sindh), Diploma in IT (Jamia Latifia), Fiverr Freelancing
  (Learning With Earning), Graphic Designing (Learning With Earning),
  and the Best Teachers Award (AFAQ).

## 🎬 Full animation list

- Custom red dot + trailing glow ring cursor, grows on hover
- Typewriter role text cycling through roles (edit the `roles` array
  in `script.js`)
- Pulsing glow hero photo orb + floating skill-icon chips
- Active nav underline that follows scroll position
- 3D tilt-on-hover for project / stat / skill cards
- Animated skill bars that fill on scroll into view
- Scroll-reveal fade-ups for every section
- **3D orbit gallery** — certificate cards continuously rotate in 3D
  space around a glowing center hub; pause + glow + caption on hover
- Click-to-enlarge lightbox for certificate images (click outside the
  image, the ✕, or press Esc to close)
- Pulsing timeline dots + alternating slide-in on the Journey section
- Icon lift on hover in the Contact section

## 🛠️ How to customize

- **Colors / theme** — edit the CSS variables at the top of
  `style.css` (`--red`, `--bg`, `--card`, etc.)
- **Content/text** — edit directly inside `index.html`, section by
  section (Home, About, Skills, Projects, Certifications, Journey,
  Contact)
- **Certifications (3D orbit gallery)** — the data lives in
  `script.js`, in the `/* Certifications: 3D Orbit Gallery */` section,
  as a JavaScript array called `certs`. Each entry is
  `{ img, title, org, date }`. To add, remove, or edit a certificate:
  edit that array (and drop any new image into `assets/certs/`) — the
  gallery automatically re-spaces every card evenly around the 3D ring,
  no HTML editing needed.
- **Orbit rotation speed** — in `script.js`, find `ringAngle += dt *
  0.012` inside `orbitTick3d` and change `0.012` (higher = faster).
- **Projects** — duplicate a `.project-card` block in `index.html`;
  update the thumbnail image path, title, description, tags, and the
  `href` on the Code/Live links.
- **Skill bars** — in `index.html`, each `.bar-fill` has a
  `data-width="XX"` attribute controlling the fill percentage; the
  animation in `script.js` reads this automatically.
- **Typewriter roles** — edit the `roles` array near the top-middle of
  `script.js`.
- **3D tilt strength** — in `script.js`, the calls
  `apply3dTilt('.project-card', 8)` etc. — the second number is the
  max tilt in degrees; lower it for a more subtle effect.
- **Contact form** — currently shows a "thanks" alert on submit
  (`script.js`, bottom). Hook it up to a real backend, or a service
  like Formspree or EmailJS, to receive actual emails.
- **Social/contact links** — replace the placeholder `#`, email,
  GitHub, and LinkedIn links in the Home and Contact sections of
  `index.html`.

## 📱 Responsive

Fully responsive down to mobile: the nav collapses into a hamburger
menu, the hero stacks vertically, the 3D orbit gallery shrinks its
radius and card size to fit, and grids drop to fewer columns on
smaller screens. The custom cursor auto-disables on touch/mobile
(≤900px width).

---
Built with plain HTML, CSS and JavaScript — no frameworks, no build
tools required.
