(function($) {

    var progressBars = [];


    /**
     * @param {Number} value Total value of the progress bar
     * @param {Number} initialValue Value that the progress bar will start with. Automaticly calculated into percentages
     */
    $.fn.createProgressBar = function(value = 100, initialValue = 0) 
    {
        progressBars[$(this).attr('id')] = {
            totalValue : value,
            currentValue : initialValue
        };
        createVisualProgressBar(this);
    }

    /**
     * @param {*} color Color that you wish to register progressBar like. Default color is set as "red"
     */
    $.fn.setProgressBarColor = function(color)
    {
        $(this).find(".__inner_progress").css({"background-color":color});
    }

    /**
     * 
     * @param {HTMLElement} element Class, ID or element itself that we will use to manipulate in HTML.
     */
    function createVisualProgressBar(element)
    {
        let activeBar = progressBars[$(element).attr('id')];
        let percentage = (100 * activeBar['currentValue']) / activeBar['totalValue'];
        $(element).find(".__inner_progress").width(percentage+"%");
    }


}(jQuery));