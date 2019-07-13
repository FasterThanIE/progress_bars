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
        setProgressBarValue(this, initialValue);
        return this;
    }

    /**
     * @param {*} color Color that you wish to register progressBar like. Default color is set as "red"
     */
    $.fn.setProgressBarColor = function(color)
    {
        $(this).find(".__inner_progress").css({"background-color":color});
        return this;
    }

    /**
     * @param {Number} amount Setting value of the progress bar
     * @param {bool} animated If you want the animation of progress bar filling or not. Default: false
     */
    $.fn.setProgressBarValue = function(amount, animated = false)
    {
        setProgressBarValue(this, amount, animated);
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
        activeBar['currentValue'] = amount;
        let percentage = (100 * amount) / activeBar['totalValue'];
        
        let time = (2500*(percentage/100));

        if(animated)
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