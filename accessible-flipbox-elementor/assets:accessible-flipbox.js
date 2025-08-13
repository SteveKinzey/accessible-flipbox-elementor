(function($) {
    $(document).ready(function() {
        $('.elementor-widget-flip-box').each(function(index) {
            const flipbox = $(this);
            const front = flipbox.find('.elementor-flip-box__front');
            const back = flipbox.find('.elementor-flip-box__back');

            // Assign unique IDs if missing
            const frontId = front.attr('id') || `flipbox-${index}-front`;
            const backId = back.attr('id') || `flipbox-${index}-back`;
            front.attr('id', frontId);
            back.attr('id', backId);

            // Set ARIA attributes
            front.attr({
                role: 'button',
                tabindex: '0',
                'aria-expanded': 'false',
                'aria-controls': backId
            });
            back.attr('aria-hidden', 'true');

            // Toggle function
            const toggleFlip = function() {
                const expanded = front.attr('aria-expanded') === 'true';
                front.attr('aria-expanded', !expanded);
                back.attr('aria-hidden', expanded);
                flipbox.toggleClass('is-flipped');
            };

            // Click and keyboard events
            front.on('click', toggleFlip);
            front.on('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleFlip();
                }
            });
        });
    });
})(jQuery);
