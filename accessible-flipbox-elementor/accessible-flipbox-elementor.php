<?php
/*
Plugin Name: Accessible Flipbox for Elementor
Plugin URI: https://github.com/SteveKinzey/accessible-flipbox-elementor
Description: Adds keyboard accessibility to Elementor Flipbox widgets by ensuring proper ARIA attributes and keyboard focus handling.
Version: 1.0.0
Author: Stephen Kinzey, PhD
Author URI: https://sk-america.com
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Text Domain: accessible-flipbox-elementor
Domain Path: /languages
*/

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

/**
 * Enqueue frontend JavaScript for accessibility.
 */
function afe_enqueue_scripts() {
    wp_enqueue_script(
        'accessible-flipbox-elementor',
        plugin_dir_url(__FILE__) . 'assets/accessible-flipbox.js',
        array('jquery'),
        '1.0.0',
        true
    );
}
add_action('wp_enqueue_scripts', 'afe_enqueue_scripts');
