<?php
/*
Plugin Name: Accessible Flipbox for Elementor
Plugin URI: https://github.com/SteveKinzey/accessible-flipbox-elementor
Description: Adds keyboard accessibility to Elementor Flipbox widgets with proper ARIA attributes and keyboard focus handling. Supports multiple flipboxes in containers.
Version: 1.2.1
Author: Stephen Kinzey, PhD
Author URI: https://sk-america.com
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Text Domain: accessible-flipbox-elementor
Domain Path: /languages

Changelog:
v1.2.1 - Enhanced documentation, added license file, reorganized structure
v1.2.0 - Fixed multiple flipbox navigation bug
       - Flipbox container is now focusable (not just the front)
       - Tab order no longer breaks when a flipbox is flipped
       - Each flipbox maintains independent state
       - Focus management separated for mouse vs keyboard users
v1.1.0 - Added ARIA attributes and keyboard support
v1.0.0 - Initial release
*/

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

define( 'AFE_VERSION', '1.2.1' );

function afe_enqueue_scripts() {
    // Only load if Elementor is active
    if ( ! did_action( 'elementor/loaded' ) ) {
        return;
    }

    wp_enqueue_style(
        'accessible-flipbox-elementor',
        plugin_dir_url(__FILE__) . 'assets/accessible-flipbox.css',
        array(),
        AFE_VERSION
    );

    wp_enqueue_script(
        'accessible-flipbox-elementor',
        plugin_dir_url(__FILE__) . 'assets/accessible-flipbox.js',
        array('jquery'),
        AFE_VERSION,
        true
    );
}
add_action('wp_enqueue_scripts', 'afe_enqueue_scripts');
