$(function() {
    var current_state;
    var animation_played;
    var state = location.hash.slice(1);
    var timeouts = [];
    var show_content;
    set_state_to(state);

    // Watch for changes
    $(window).on('hashchange', function() {
        var new_state = location.hash.slice(1);
        set_state_to(new_state);
    });

    function set_state_to(new_state) {
        var states = ['work', 'person'];
        state = states.indexOf(new_state) <= -1 ? "introduction" : new_state;

        if (state != current_state) {
            $('body').removeClass().addClass('bg-' + state);
            $('.bg').removeClass('visible');
            $('#bg-' + state).addClass('visible');
            $('.menu ul li').removeClass('active');
            $('.menu ul li[data-menu="' + state + '"]').addClass('active');
            current_state = state;
            play_content({
                reset: animation_played
            });
            animation_played = true;
        }
    }

    function play_content(options) {
        $('.content').removeClass('visible');
        var messages = {
            introduction: "Hi. I'm a 24 year old Nigerian that makes things on the web for a living",
            work: "I'd call myself a full stack designer, but I'm not sure I even know what that means",
            person: "Simple guy. Aspiring eccentric"
        }

        if (options.reset) {
            for (var i = 0; i < timeouts.length; i++) {
                clearTimeout(timeouts[i]);
            }
            clearTimeout(show_content);
            $('.byline').html("");
        }

        var text = messages[state];
        var delay_next;
        var delay_time = 0;

        $.each(text.split(''), function(i, letter) {
            delay_time = delay_next ? delay_time + 500 : delay_time + 50;
            delay_next = letter == '.';
            timeouts.push(setTimeout(function() {
                $('.byline').html($('.byline').html() + letter);
            }, delay_time));
        });

        show_content = setTimeout(function() {
            var container = "#" + state + "-content";
            $(container).addClass('visible');
        }, delay_time);
    }

    // Parallax for sample images
    $(window).scroll(function(event) {
        var height = $('.portfolio').outerHeight();
        var scrollDistance = $(this).scrollTop();
        if (scrollDistance < height) {
            var translateDistance = (scrollDistance / height) * 250;
            var translate = 'translateY(-' + translateDistance + 'px)';
            $('.sample').css('transform', translate);
        }
    })
});
