(function($) {

    var progressBars = [];


    /**
     * @param {Number} value Total value of the progress bar
     * @param {Number} initialValue Value that the progress bar will start with. Automaticly calculated into percentages
     * @param {Object} options You can pass additional options as an object, such as: ['color', 'animated']
     */
    $.fn.createProgressBar = function(value = 100, initialValue = 0, options = {}) 
    {
        progressBars[$(this).attr('id')] = {
            totalValue : value,
            currentValue : initialValue,
            color: (typeof options['color'] !== 'undefined') ? options['color'] : "red",
            animated: (typeof options['animated'] !== 'animated') ? options['animated'] : false,
        };
        setProgressBarValue(this, initialValue);
        setProgressBarColor(this, options['color']);
        return this;
    }

    /**
     * @param {*} color Color that you wish to register progressBar like. Default color is set as "red"
     */
    $.fn.setProgressBarColor = function(color)
    {
        setProgressBarColor(this, color);
        return this;
    }

    /**
     * @param {Number} amount Setting value of the progress bar
     * @param {Bool} animated If you want the animation of progress bar filling or not. Default: false
     */
    $.fn.setProgressBarValue = function(amount, animated = false)
    {
        setProgressBarValue(this, amount, animated);
        return this;
    }

    /**
     * 
     * @param {HTMLElement} element Element that will be manipulated
     * @param {*} color Color that you want to set
     */
    function setProgressBarColor(element, color)
    {
        let activeBar = progressBars[$(element).attr('id')];
        $(element).find(".__inner_progress").css({"background-color":color});
        activeBar['color'] = color;
    }

    /**
     * 
     * @param {HTMLElement} element HTML emement that you want to manipulate
     * @param {Number} amount New value of the progress bar
     * @param {Bool} animated Set to true if you want animation while setting the progress bar
     */
    function setProgressBarValue(element, amount, animated = false)
    {
        let activeBar = progressBars[$(element).attr('id')];
        let percentage = (100 * amount) / activeBar['totalValue'];
        let time = (2500*(percentage/100));

        activeBar['currentValue'] = amount;

        if(animated || activeBar['animated'])
        {
            $(element).find('.__inner_progress').animate({
                "width": percentage+"%"
            }, time);
        }
        else 
        {
            $(element).find(".__inner_progress").width(percentage+"%");
        }
    }


}(jQuery));