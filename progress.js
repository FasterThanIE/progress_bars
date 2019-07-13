(function($) {

    var progressValue = 100;

    $.fn.setProgressBarValue = function(value) {
        $(".__inner_progress").width(value);
    }

}(jQuery));