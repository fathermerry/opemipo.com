$(function() {
    var current_state;
    var animation_played;
    var state = location.hash.slice(1);
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
            introduction: ["Hello. ^500 I'm a 23 year old Nigerian living in Lagos. ^500 I make things on the web for a living"],
            work: ["I'd call myself a full stack designer. ^500 But I'm not sure I even know what that means"],
            person: ["Sometimes, I write about the interesting things I deal with. ^500 And sometimes, people read"]
        }

        if (options.reset) {
            $(".byline .text").data('typed').pauseTyping();
            $(".byline .text").removeData('typed');
        }

        $(".byline .text").typed({
            strings: messages[state],
            callback: function() {
                $('.byline .typed-cursor').remove();
                var container = "#" + state + "-content";
                $(container).addClass('visible');
            }
        });
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
