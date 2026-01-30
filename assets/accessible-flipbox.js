(function($) {
    'use strict';

    $(document).ready(function() {
        initAccessibleFlipboxes();
    });

    // Re-init when Elementor frontend loads (for editor preview)
    $(window).on('elementor/frontend/init', function() {
        setTimeout(initAccessibleFlipboxes, 500);
    });

    function initAccessibleFlipboxes() {
        $('.elementor-widget-flip-box').each(function(index) {
            const $widget = $(this);
            const $flipbox = $widget.find('.elementor-flip-box');
            const $front = $widget.find('.elementor-flip-box__front');
            const $back = $widget.find('.elementor-flip-box__back');

            // Skip if already initialized
            if ($flipbox.attr('data-afe-init') === 'true') return;
            $flipbox.attr('data-afe-init', 'true');
            
            // Track which flipbox this is (for debugging)
            $flipbox.attr('data-afe-index', index);

            // Get title for accessible label
            const title = $front.find('.elementor-flip-box__layer__title').text().trim() || 'Flipbox ' + (index + 1);

            // FIXED: Make the FLIPBOX CONTAINER focusable, not just the front
            // This ensures tab order is never broken regardless of flip state
            $flipbox.attr({
                'tabindex': '0',
                'role': 'button',
                'aria-expanded': 'false',
                'aria-label': title + '. Press Enter or Space to flip.'
            });

            // Set initial ARIA states on layers
            $front.attr('aria-hidden', 'false');
            $back.attr('aria-hidden', 'true');
            
            // Make back content not tabbable initially
            $back.find('a, button, input, [tabindex]').attr('tabindex', '-1');

            // Track flip state for THIS instance only
            let isFlipped = false;

            function flipToBack(shouldFocusBackContent) {
                isFlipped = true;
                $flipbox.addClass('afe-flipped');
                $flipbox.attr('aria-expanded', 'true');
                $front.attr('aria-hidden', 'true');
                $back.attr('aria-hidden', 'false');

                // Make back content tabbable
                $back.find('a, button, input').attr('tabindex', '0');

                // FIXED: Only move focus to back content for keyboard users
                // Mouse users keep their own focus control
                if (shouldFocusBackContent) {
                    const $firstInteractive = $back.find('a, button, input').filter(':visible').first();
                    if ($firstInteractive.length) {
                        setTimeout(function() {
                            $firstInteractive.focus();
                        }, 100);
                    }
                }
            }

            function flipToFront(shouldFocusFlipbox) {
                isFlipped = false;
                $flipbox.removeClass('afe-flipped');
                $flipbox.attr('aria-expanded', 'false');
                $front.attr('aria-hidden', 'false');
                $back.attr('aria-hidden', 'true');

                // Make back content not tabbable
                $back.find('a, button, input').attr('tabindex', '-1');

                // FIXED: Only return focus to flipbox for keyboard navigation
                if (shouldFocusFlipbox) {
                    $flipbox.focus();
                }
            }

            // FIXED: Handle clicks on the flipbox container
            $flipbox.on('click', function(e) {
                const $target = $(e.target);
                
                // Check if clicking on a real link/button on the visible side
                const $clickedInteractive = $target.closest('a[href], button, input[type="submit"]');
                if ($clickedInteractive.length) {
                    // Is it on the currently visible side?
                    const isOnBack = $clickedInteractive.closest('.elementor-flip-box__back').length > 0;
                    const isOnFront = $clickedInteractive.closest('.elementor-flip-box__front').length > 0;
                    
                    // Only let real links/buttons work if on the visible side
                    if ((isFlipped && isOnBack) || (!isFlipped && isOnFront)) {
                        const href = $clickedInteractive.attr('href');
                        const isRealLink = href && href !== '#' &&
                            !href.startsWith('javascript:') &&
                            !href.startsWith('data:') &&
                            !href.startsWith('vbscript:');
                        const isSubmit = $clickedInteractive.is('button[type="submit"], input[type="submit"]');
                        
                        if (isRealLink || isSubmit) {
                            return; // Let the click proceed
                        }
                    }
                }
                
                // Otherwise, toggle the flip (no focus change for mouse clicks)
                if (isFlipped) {
                    flipToFront(false);
                } else {
                    flipToBack(false);
                }
            });

            // Keyboard handler on the flipbox container
            $flipbox.on('keydown', function(e) {
                // Enter or Space to toggle
                if (e.key === 'Enter' || e.key === ' ') {
                    // Don't trigger if focus is on an interactive element inside
                    const $focused = $(document.activeElement);
                    if ($focused.is('a, button, input') && !$focused.is($flipbox)) {
                        return; // Let the element handle its own activation
                    }
                    
                    e.preventDefault();
                    e.stopPropagation();
                    
                    if (isFlipped) {
                        flipToFront(true);
                    } else {
                        flipToBack(true);
                    }
                }
                
                // Escape to flip back to front
                if (e.key === 'Escape' && isFlipped) {
                    e.preventDefault();
                    e.stopPropagation();
                    flipToFront(true);
                }
            });

            // FIXED: Allow Tab to naturally flow out of the flipbox
            // Don't trap focus - let users navigate between flipboxes freely
            $back.on('keydown', 'a, button, input', function(e) {
                if (e.key === 'Tab') {
                    const $tabbableInBack = $back.find('a, button, input').filter(':visible');
                    const $focused = $(document.activeElement);
                    
                    // Tabbing forward from last element
                    if (!e.shiftKey && $focused.is($tabbableInBack.last())) {
                        // Let Tab naturally move to next focusable element (next flipbox)
                        return;
                    }
                    
                    // Tabbing backward from first element
                    if (e.shiftKey && $focused.is($tabbableInBack.first())) {
                        // Move focus back to the flipbox container
                        e.preventDefault();
                        $flipbox.focus();
                    }
                }
                
                // Escape from within back content
                if (e.key === 'Escape') {
                    e.preventDefault();
                    flipToFront(true);
                }
            });
        });
        
        console.log('Accessible Flipbox: Initialized ' + $('.elementor-widget-flip-box').length + ' flipbox(es)');
    }
})(jQuery);
