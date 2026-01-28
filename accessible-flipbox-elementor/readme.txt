=== Accessible Flipbox for Elementor ===
Contributors: stephenkinzey
Donate link: https://sk-america.com
Tags: elementor, flipbox, accessibility, aria, keyboard navigation
Requires at least: 5.0
Tested up to: 6.6
Requires PHP: 7.4
Stable tag: 1.2.1
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Adds keyboard accessibility and ARIA attributes to Elementor Flipbox widgets, improving navigation and screen reader support.

== Description ==

**Accessible Flipbox for Elementor** improves Elementor's Flipbox widget by:
* Adding proper ARIA attributes for screen readers.
* Making the flipbox front face focusable with the keyboard.
* Allowing users to flip the box using the `Enter` or `Space` keys.
* Preserving normal click/touch behavior.

Works whether or not the Flipbox contains a button.

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/accessible-flipbox-elementor` directory, or install the ZIP via the WordPress dashboard.
2. Activate the plugin through the **Plugins** screen in WordPress.
3. Open a page with an Elementor Flipbox widget.
4. Test navigation:
   * Tab to the Flipbox.
   * Press `Enter` or `Space` to flip.
   * Screen readers will announce the expanded/collapsed state.

== Frequently Asked Questions ==

= Will this work with all Elementor Flipbox designs? =
Yes. It hooks into all `.elementor-widget-flip-box` widgets on the page.

= What if my Flipbox already has a button? =
The accessibility script will still function. The Flipbox itself will be focusable and toggleable, but the button inside will also work as normal.

= Does this require Elementor Pro? =
No — works with free Elementor as long as the Flipbox widget is available.

== Changelog ==

= 1.2.1 =
* Enhanced README documentation with accessibility benefits
* Added GPL-2.0 license file
* Reorganized plugin file structure

= 1.2.0 =
* Fixed multiple flipbox navigation bug
* Flipbox container is now focusable (not just the front)
* Tab order no longer breaks when a flipbox is flipped
* Each flipbox maintains independent state
* Focus management separated for mouse vs keyboard users

= 1.1.0 =
* Added ARIA attributes and keyboard support

= 1.0.0 =
* Initial release with keyboard and ARIA enhancements.

== Upgrade Notice ==

= 1.2.1 =
Documentation and structure improvements.

= 1.2.0 =
Critical fix for multiple flipbox navigation.

= 1.0.0 =
First public release.

== Screenshots ==

1. Example of a Flipbox front face with ARIA attributes.
2. Example of a Flipbox back face after keyboard activation.

== License ==

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License version 2, as published by the Free Software Foundation.
