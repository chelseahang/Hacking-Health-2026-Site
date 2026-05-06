# Two-Day Event Website

A simple, beginner-friendly website for a two-day event. No coding experience needed — everything is in plain HTML, CSS, and JavaScript with clear comments showing where to edit.

---

## What's in this folder


| File          | What it is                                              | Do you edit it?                     |
| ------------- | ------------------------------------------------------- | ----------------------------------- |
| `index.html`  | All your event content (text, schedule, speakers, etc.) | **Yes — this is the main one**      |
| `styles.css`  | Colors, fonts, layout                                   | Only if you want to change the look |
| `script.js`   | Tiny script for the mobile menu                         | Usually no                          |
| `assets/`     | Images and icons                                        | Drop your own images here           |
| `vercel.json` | Tells Vercel how to serve the site                      | No                                  |
| `.gitignore`  | Tells Git which files to ignore                         | No                                  |


---

## 1. Preview the site on your computer

Just **double-click `index.html`**. It opens in your web browser. That's it — no installation, no setup.

When you change `index.html` and save, refresh the browser tab to see your changes.

---

## 2. Edit the content

Open `index.html` in any text editor (Notepad, VS Code, Cursor, etc.). Look for blocks that start with comments like:

```html
<!-- ============ EDIT: HOME / HERO SECTION ============ -->
```

Anywhere you see `[SOMETHING IN BRACKETS]` (like `[EVENT NAME]` or `[MONTH DD, YYYY]`), replace it with your actual text.

### Common edits

**Change the event name** — search (Ctrl+F) for `[EVENT NAME]` and replace every match.

**Add another schedule session** — copy this whole block and change the text:

```html
<div class="session">
  <span class="time">14:00 - 15:30</span>
  <h4>[SESSION TITLE]</h4>
  <p>Short description.</p>
</div>
```

**Add another speaker** — copy a `<div class="speaker-card">...</div>` block and change the text.

**Add another FAQ** — copy a `<details class="faq-item">...</details>` block.

**Change the venue map** — go to [maps.google.com](https://maps.google.com), search your venue, click **Share → Embed a map**, copy the `src="..."` URL, and paste it inside the existing `<iframe src="...">` in the Venue section.

### Change the colors

Open `styles.css` and look at the very top:

```css
:root {
  --brand-color: #4f46e5;
  ...
}
```

Change `#4f46e5` to any color hex code (try [coolors.co](https://coolors.co) for ideas). Save and refresh.

---

## 3. Put it on GitHub (no command line needed)

1. Create a free account at [github.com](https://github.com).
2. Click the **+** in the top-right → **New repository**.
3. Give it a name (e.g. `my-event-site`), choose **Public**, and click **Create repository**.
4. On the next page, click **uploading an existing file**.
5. Drag this entire folder's contents into the upload area.
6. Scroll down and click **Commit changes**.

Done. Your code is on GitHub.

---

## 4. Deploy to Vercel (free, ~30 seconds)

1. Go to [vercecan i l.com](https://vercel.com) and sign in with your GitHub account.
2. Click **Add New → Project**.
3. Find your repository in the list and click **Import**.
4. Leave all settings as default and click **Deploy**.
5. Wait ~30 seconds. Vercel gives you a live URL like `https://my-event-site.vercel.app`.

That URL is your website. Share it with your participants.

---

## 5. Update the site later

Two easy ways:

**Option A — Edit on GitHub (easiest):**

1. Open your repo on github.com.
2. Click `index.html`.
3. Click the **pencil icon** (top right) to edit.
4. Make your changes, scroll down, click **Commit changes**.
5. Vercel automatically rebuilds and deploys within ~30 seconds.

**Option B — Edit locally and re-upload:**

1. Edit the file on your computer.
2. On GitHub, open the file → click the pencil → paste your new version → commit.

---

## Tips

- **Test on your phone**: open the Vercel URL on your phone — the site is already mobile-friendly.
- **Custom domain**: in Vercel, go to your project → **Settings → Domains** to add a custom domain like `myevent.com`.
- **Need help?** Vercel's docs are great: [vercel.com/docs](https://vercel.com/docs).

Have a great event!