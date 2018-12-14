//TODO: Initialize Variables
    var gameCounter = 0;
    var character;
    var defender;
    //Gamecounter
    //character selected
    //defender selected

//Objects
    //Anakin
    //Obi-Wan
    //Yoda
    //Palpatine
    //Mace Windu
    //Younglings

//Function
    function removeVideo(){
        $("#introVideo").remove();
        $("#skipIntro").remove();
    }

    $("#startButton").click(function(){
        //Create video tag
        var video = $('<video />', {
            id: 'introVideo',
            src: 'assets/videos/instructions.mp4',
            type: 'video/mp4',
            controls: false
        });
        //Add video tag to relevant container
        video.appendTo($('#mainContent'));

        //Adjust video to be full screen
        $("#introVideo").css({
            "min-width":"100%",
            "min-height":"100%",
            "width":"auto",
            "height":"auto",
            "top":"0",
            "bottom":"30"});

        $("#mainContent").css({
            "position":"absolute",
            "top":"0",
            "bottom":"30",
            "width":"100%",
            "height":"100%",
            "overflow":"hidden"});
        //Remove start button
        $("#startButton").remove();
        //Play Video
        $("#introVideo").get(0).play();
        //Add skip button to reduce annoyance
        var skipButton = $('<input />', {
            id: 'skipIntro',
            type: 'button',
            value: 'skip',
        });

        skipButton.appendTo($('body'));
        
        $("#skipIntro").css({
            "background-color":"transparent",
            "color":"yellow",
            "border":"3px solid yellow",
            "text-align":"center",
            "z-index":"2000"
        });

        //Set timeout to close instruction video
        setTimeout(removeVideo,1000*61);

        //Create skip button press functionality
        $("#skipIntro").on("click", function(){
            removeVideo();
            this.remove();
        });
    });

    


    
    //First Time Start
    //Character Select
    //Attack
    //Change Attack Strength
    //screen transition
    //check for triggered conditions
    //check for win/loss
    //restart
    //quit
