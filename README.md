# Accessible Flipbox for Elementor

**Make your Elementor Pro Flipbox widgets accessible to everyone.**

[![Version](https://img.shields.io/badge/version-1.2.0-blue.svg)](https://github.com/SteveKinzey/accessible-flipbox-elementor/releases)
[![License](https://img.shields.io/badge/license-GPL--2.0%2B-green.svg)](https://www.gnu.org/licenses/gpl-2.0.html)
[![WordPress](https://img.shields.io/badge/WordPress-5.0%2B-blue.svg)](https://wordpress.org/)

## The Problem: Elementor Flipboxes Are Not Accessible

Elementor Pro's Flipbox widget is a popular interactive element that reveals content when users hover over it. However, **out of the box, Flipboxes are completely inaccessible** to:

- **Keyboard users** who cannot use a mouse
- **Screen reader users** who rely on assistive technology
- **Users with motor impairments** who use alternative input devices
- **Power users** who prefer keyboard navigation

Without this plugin, Flipbox content is effectively **hidden from millions of users** with disabilities.

### Why This Matters

- **15% of the world's population** lives with some form of disability (WHO)
- **2.2 billion people** have vision impairments globally
- **Web accessibility is a legal requirement** in many jurisdictions (ADA, WCAG, EAA)
- **Accessible websites rank better** in search engines
- **Inclusive design improves UX** for all users, not just those with disabilities

## The Solution: One Plugin, Complete Accessibility

This lightweight plugin automatically enhances all Elementor Flipbox widgets with full keyboard and screen reader support—**no configuration required**.

### Features

- **Full Keyboard Navigation** — Tab to focus, Enter/Space to flip, Escape to close
- **ARIA Attributes** — Proper `role="button"`, `aria-expanded`, and `aria-hidden` states
- **Screen Reader Announcements** — Clear feedback when flipboxes open and close
- **Focus Management** — Intelligent focus handling that doesn't trap users
- **Multiple Flipbox Support** — Works flawlessly with any number of flipboxes on a page
- **High Contrast Mode** — Enhanced visibility for users with low vision
- **Reduced Motion Support** — Respects `prefers-reduced-motion` for users sensitive to animation
- **Visible Focus Indicators** — Clear, WCAG-compliant focus outlines

## Real-World Benefits

### For Users with Disabilities

| User Type                  | Before This Plugin                     | After This Plugin                                  |
| -------------------------- | -------------------------------------- | -------------------------------------------------- |
| **Keyboard-only users**    | Cannot access flipbox content at all   | Full keyboard control with Enter/Space/Escape      |
| **Screen reader users**    | Content is invisible to assistive tech | Announced as interactive button with state changes |
| **Motor impairment users** | Hover-only interaction is impossible   | Click or keyboard activation works equally         |
| **Low vision users**       | No visible focus indicator             | High-contrast focus ring with 3px outline          |
| **Vestibular disorders**   | Animations may cause discomfort        | Reduced motion automatically respected             |

### For Website Owners

- **Legal Compliance** — Meet WCAG 2.1 AA requirements for interactive elements
- **Broader Audience** — Reach users who were previously excluded
- **Better SEO** — Accessible sites are favored by search engines
- **Reduced Liability** — Avoid accessibility lawsuits and complaints
- **Professional Quality** — Demonstrate commitment to inclusive design

### Example: Before vs. After

**Before (Inaccessible):**

```text
User tabs through page → Flipbox is skipped entirely
Screen reader: [silence]
Keyboard user: Cannot reveal back content
```

**After (Accessible):**

```text
User tabs through page → "Learn More. Press Enter or Space to flip."
User presses Enter → Flipbox flips, focus moves to back content
Screen reader: "Learn More, button, expanded"
User presses Escape → Returns to front, ready to continue
```

## Installation

### Method 1: Upload ZIP

1. Download the [latest release](https://github.com/SteveKinzey/accessible-flipbox-elementor/releases)
2. Go to **WordPress Admin → Plugins → Add New → Upload Plugin**
3. Upload the ZIP file and click **Install Now**
4. Click **Activate**

### Method 2: Manual Installation

1. Download and extract the plugin
2. Upload the `accessible-flipbox-elementor` folder to `/wp-content/plugins/`
3. Activate via **WordPress Admin → Plugins**

### Requirements

- WordPress 5.0+
- Elementor Pro (with Flipbox widget)
- PHP 7.0+

## Usage

**No configuration needed.** Once activated, the plugin automatically enhances all Flipbox widgets on your site.

### Keyboard Controls

| Key                | Action                        |
| ------------------ | ----------------------------- |
| `Tab`              | Navigate to/between flipboxes |
| `Enter` or `Space` | Flip the focused flipbox      |
| `Escape`           | Return to front side          |
| `Shift + Tab`      | Navigate backwards            |

### Testing Your Flipboxes

1. **Keyboard Test:** Tab through your page—each flipbox should receive visible focus
2. **Activation Test:** Press Enter or Space—the flipbox should flip to reveal back content
3. **Screen Reader Test:** Use NVDA, JAWS, or VoiceOver—state changes should be announced
4. **Escape Test:** Press Escape while flipped—should return to front and maintain focus

## Technical Details

### How It Works

The plugin injects accessible behaviors into Elementor's Flipbox widget:

1. **Makes containers focusable** with `tabindex="0"`
2. **Adds semantic role** with `role="button"`
3. **Manages expanded state** with `aria-expanded`
4. **Hides inactive content** with `aria-hidden`
5. **Controls tab order** by toggling `tabindex` on back content
6. **Provides visible focus** with CSS focus indicators

### CSS Classes

| Class                    | Purpose                                   |
| ------------------------ | ----------------------------------------- |
| `.afe-flipped`           | Applied when flipbox is showing back side |
| `[data-afe-init="true"]` | Marks initialized flipboxes               |

### Browser Support

- Chrome, Firefox, Safari, Edge (latest 2 versions)
- Works with all major screen readers (NVDA, JAWS, VoiceOver, Narrator)

## Changelog

### v1.2.0

- Fixed multiple flipbox navigation bug
- Flipbox container is now focusable (not just the front)
- Tab order no longer breaks when a flipbox is flipped
- Each flipbox maintains independent state
- Focus management separated for mouse vs keyboard users

### v1.1.0

- Added ARIA attributes and keyboard support

### v1.0.0

- Initial release

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## License

GPL v2 or later — [https://www.gnu.org/licenses/gpl-2.0.html](https://www.gnu.org/licenses/gpl-2.0.html)

## Author

**Stephen Kinzey, PhD**  
[sk-america.com](https://sk-america.com)

---

_Making the web accessible, one widget at a time._
