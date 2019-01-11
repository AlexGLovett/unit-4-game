var gameCounter = 0;
var character = {};
var defender = {};
    //Gamecounter
    //character selected
    //defender selected

//Objects

var jediAnakin = {
    name: "Anakin Skywalker",
    health: 125,
    attackIncrement : 17,
    attack : 17,
    counterAttack: 20,
    avatar: "assets/imgs/characters/anakin/attack.JPG",
    tagLine: '"I dont think the system works..."' 
    };

var obiWan = {
    name : "Master Kenobi",
    health : 175,
    attack : 15,
    attackIncrement : 15,
    counterAttack : 26,
    avatar : "assets/imgs/characters/obiwan/attack.jpg",
    tagLine : '"If you strike me down now, I will become more powerful than you can know."'
    };

var yoda = {
    name : "Master Yoda",
    health : 200,
    attack : 10,
    attackIncrement : 10,
    counterAttack : 40,
    avatar : "assets/imgs/characters/yoda/attack.jpeg",
    tagLine : '"Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering."'
    };

var palpatine = {
    name:  "Sheev Palpatine",
    health : 220,
    attack : 20,
    attackIncrement : 20,
    counterAttack : 10,
    avatar : "assets/imgs/characters/sheev/attack.png",
    tagLine : '"Did you ever hear the tragedy of Darth Plagueis the Wise?"'
    };

var maceWindu = {
    name : "Mace Windu",
    health : 80,
    attack : 50,
    attackIncrement : 50,
    counterAttack : 20,
    avatar : "assets/imgs/characters/mace/defense.jpg"
    };

var younglings = {
    name : "Younglings",
    health : 300,
    attack : 1,
    counterAttack : 1,
    avatar : "assets/imgs/characters/youngling/jedi.png"
    };
var choices = [];
console.log(choices);
    //Anakin
    //Obi-Wan
    //Yoda
    //Palpatine
    //Mace Windu
    //Younglings

//Function
    function removeVideoFast(){
        characterSelect();
        $("#introVideo").remove();
        $("#skipIntro").remove();
    }

    function removeVideoSlow(){
        if ($("#r2select").length > 0 || $("#introVideo").length > 0){
            $("#introVideo").fadeOut(1000);
            $("#skipIntro").remove();
            characterSelect();
        }
    }

    function buttonFadeIn(){
        $("#startButton").fadeIn(1000);
    }

    setTimeout(buttonFadeIn, 1000);

    $("#startButton").mouseenter(function(){
        this["value"] = "Wars";
    });
    
    $("#startButton").mouseleave(function(){
        this["value"] = "Start";
    });

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
        $("#introVideo").get(0).load();
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
            "font-family":"Star Jedi",
            "font-size":"36px",
            "text-align":"center",
            "z-index":"2000",
            "position":"relative",
            "top": "300",
            "left":"400",
            "border":"none"
        });

        //Set timeout to close instruction video
        setTimeout(removeVideoSlow,1000);
        

        //Create skip button press functionality
        $("#skipIntro").on("click", function(){
            removeVideoFast();
        });
    });

    function characterButtonMaker(chr,box, btnID){
        if (box=="#characterBox"){
            var charButton = $('<input/>').attr({ 
                type: 'button', 
                name: chr.name,
                class: "charSelMain"
            });
        }
        else if (box=="#enemyBox"){
            var charButton = $('<input/>').attr({ 
                type: 'button', 
                name: chr.name,
                class: "defenderBtns"
            });
        }
        else if (btnID=="userChar"){
            var charButton = $('<input/>').attr({ 
                type: 'button', 
                name: chr.name,
                class: "attacker",
                disabled: true
            });
        }
        charButton.css({
            "height": "400px",
            "width":"250px",
            "background":"url(" + chr.avatar + ")",
            "background-size":"100%"
        });
        $(box).append(charButton);
    }

    function populateCharacters(){
        characterButtonMaker(yoda,"#characterBox","yodaButton");
        characterButtonMaker(jediAnakin,"#characterBox", "anakinButton");
        characterButtonMaker(obiWan,"#characterBox", "obiButton");
        characterButtonMaker(palpatine, "#characterBox", "palpatineButton");
    }

    function characterSelect(){
        $(".content").empty();
        $('head').append('<link rel="stylesheet" href="assets/css/r2bg.css">');
        $(".content").append("<div id='r2Select'></div>");
        var r2bg = '<div id="wrapper"><div id="outline" class="centering" ><div class="base"><div id="tridiv"><div class="body-part anim-base body-anim"><div id="sp" class="sphere"><svg><defs><polygon id="tri" points="0,60 16,-1 32,60"></polygon><polygon id="tpz1" points="13,-1 0,60 59,60 45,-1"></polygon><polygon id="tpz2" points="16,-1 7,60 83.5,60 74.5,-1"></polygon><polygon id="tpz3" points="12.2,-1 8.5,60 91,60 88.5,-1"></polygon></defs></svg><div><div class="hemi head"><div class="phase-1"><div class="opposite1"><svg class="tr1a" width="32px" height="60px"><use xlink:href="#tri"></use></svg><svg class="tr1b" width="32px" height="60px"><use xlink:href="#tri"></use></svg></div><div class="opposite2"><svg class="tr1a" width="32px" height="60px"><use xlink:href="#tri"></use></svg><svg class="tr1b" width="32px" height="60px"><use xlink:href="#tri"></use></svg></div><div class="opposite3"><svg class="tr1a" width="32px" height="60px"><use xlink:href="#tri"></use></svg><svg class="tr1b" width="32px" height="60px"><use xlink:href="#tri"></use></svg></div><div class="opposite4"><svg class="tr1a" width="32px" height="60px"><use xlink:href="#tri"></use></svg><svg class="tr1b" width="32px" height="60px"><use xlink:href="#tri"></use></svg></div><div class="opposite5"><svg class="tr1a" width="32px" height="60px"><use xlink:href="#tri"></use></svg><svg class="tr1b" width="32px" height="60px"><use xlink:href="#tri"></use></svg></div><div class="opposite6"><svg class="tr1a" width="32px" height="60px"><use xlink:href="#tri"></use></svg><svg class="tr1b" width="32px" height="60px"><use xlink:href="#tri"></use></svg></div></div><div class="phase-2"><div class="opposite1"><svg class="tpz1a" width="59px" height="60px"><use xlink:href="#tpz1"></use></svg><svg class="tpz1b" width="59px" height="60px"><use xlink:href="#tpz1"></use></svg></div><div class="opposite2"><svg class="tpz1a" width="59px" height="60px"><use xlink:href="#tpz1"></use></svg><svg class="tpz1b" width="59px" height="60px"><use xlink:href="#tpz1"></use></svg></div><div class="opposite3"><svg class="tpz1a" width="59px" height="60px"><use xlink:href="#tpz1"></use></svg><svg class="tpz1b" width="59px" height="60px"><use xlink:href="#tpz1"></use></svg></div><div class="opposite4"><svg class="tpz1a" width="59px" height="60px"><use xlink:href="#tpz1"></use></svg><svg class="tpz1b" width="59px" height="60px"><use xlink:href="#tpz1"></use></svg></div><div class="opposite5"><svg class="tpz1a" width="59px" height="60px"><use xlink:href="#tpz1"></use></svg><svg class="tpz1b" width="59px" height="60px"><use xlink:href="#tpz1"></use></svg></div><div class="opposite6"><svg class="tpz1a" width="59px" height="60px"><use xlink:href="#tpz1"></use></svg><svg class="tpz1b" width="59px" height="60px"><use xlink:href="#tpz1"></use></svg></div></div><div class="phase-3"><div class="opposite1"><svg class="tpz2a" width="90px" height="60px"><use xlink:href="#tpz2"></use><!-- Generator: Adobe Illustrator 17.0.0, SVG Export Plug-In  --><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="10px" y="10px" width="71.008px" height="51.629px" viewBox="0 0 71.008 51.629" enable-background="new 0 0 71.008 51.629" xml:space="preserve"><defs></defs><polygon fill="#364872" points="16.734,0 0,51.629 71.008,51.629 60,0 "></polygon><circle cx="32.508" cy="20.75" r="16.75"></circle></svg></svg><svg class="tpz2b" width="90px" height="60px"><use xlink:href="#tpz2"></use></svg></div><div class="opposite2"><svg class="tpz2a" width="90px" height="60px"><use xlink:href="#tpz2"></use></svg><svg class="tpz2b" width="90px" height="60px"><use xlink:href="#tpz2"></use></svg></div><div class="opposite3"><svg class="tpz2a" width="90px" height="60px"><use xlink:href="#tpz2"></use></svg><svg class="tpz2b" width="90px" height="60px"><use xlink:href="#tpz2"></use></svg></div><div class="opposite4"><svg class="tpz2a" width="90px" height="60px"><use xlink:href="#tpz2"></use></svg><svg class="tpz2b" width="90px" height="60px"><use xlink:href="#tpz2"></use></svg></div><div class="opposite5"><svg class="tpz2a" width="90px" height="60px"><use xlink:href="#tpz2"></use></svg><svg class="tpz2b" width="90px" height="60px"><use xlink:href="#tpz2"></use></svg></div><div class="opposite6"><svg class="tpz2a" width="90px" height="60px"><use xlink:href="#tpz2"></use></svg><svg class="tpz2b" width="90px" height="60px"><use xlink:href="#tpz2"></use></svg></div></div><div class="phase-4"><div class="opposite1"><svg class="tpz3a" width="100px" height="60px"><use xlink:href="#tpz3"></use><!-- Generator: Adobe Illustrator 17.0.0, SVG Export Plug-In  --><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="15px" y="10px" width="73.25px" height="46px" viewBox="0 0 73.25 46" enable-background="new 0 0 73.25 46" xml:space="preserve"><defs></defs><rect x="0.5" y="0.5" fill="none" stroke="#364872" stroke-miterlimit="10" width="72.25" height="45"></rect><rect x="17.5" y="7.5" fill="#364872" width="49.75" height="38"></rect><rect x="1.25" y="7.5" fill="#364872" width="11.25" height="38"></rect><circle fill="#999999" cx="49.5" cy="24.75" r="12.25"></circle></svg></svg><svg class="tpz3b" width="100px" height="60px"><use xlink:href="#tpz3"></use></svg></div><div class="opposite2"><svg class="tpz3a" width="100px" height="60px"><use xlink:href="#tpz3"></use><!-- Generator: Adobe Illustrator 17.0.0, SVG Export Plug-In  --><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="10px" y="10px" width="73.25px" height="46px" viewBox="0 0 73.25 46" enable-background="new 0 0 73.25 46" xml:space="preserve"><defs></defs><rect x="0.5" y="0.5" fill="none" stroke="#364872" stroke-miterlimit="10" width="72.25" height="45"></rect><g><path fill="#364872" d="M53.25,43.5c0,1.1,0.9,2,2,2h13.5c1.1,0,2-0.9,2-2v-41c0-1.1-0.9-2-2-2h-13.5c-1.1,0-2,0.9-2,2V43.5z"></path></g><g><path fill="#364872" d="M37.75,43.5c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2v-41c0-1.1-0.9-2-2-2h-8c-1.1,0-2,0.9-2,2V43.5z"></path></g><g><path fill="#364872" d="M3.75,43.5c0,1.1,0.9,2,2,2h22c1.1,0,2-0.9,2-2v-41c0-1.1-0.9-2-2-2h-22c-1.1,0-2,0.9-2,2V43.5z"></path></g></svg></svg><svg class="tpz3b" width="100px" height="60px"><use xlink:href="#tpz3"></use></svg></div><div class="opposite3"><svg class="tpz3a" width="100px" height="60px"><use xlink:href="#tpz3"></use><!-- Generator: Adobe Illustrator 17.0.0, SVG Export Plug-In  --><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="10px" y="10px" width="73.25px" height="46px" viewBox="0 0 73.25 46" enable-background="new 0 0 73.25 46" xml:space="preserve"><defs></defs><rect x="0.5" y="0.5" fill="none" stroke="#364872" stroke-miterlimit="10" width="72.25" height="45"></rect><g><path fill="#364872" d="M53.25,43.5c0,1.1,0.9,2,2,2h13.5c1.1,0,2-0.9,2-2v-41c0-1.1-0.9-2-2-2h-13.5c-1.1,0-2,0.9-2,2V43.5z"></path></g><g><path fill="#364872" d="M37.75,43.5c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2v-41c0-1.1-0.9-2-2-2h-8c-1.1,0-2,0.9-2,2V43.5z"></path></g><g><path fill="#364872" d="M3.75,43.5c0,1.1,0.9,2,2,2h22c1.1,0,2-0.9,2-2v-41c0-1.1-0.9-2-2-2h-22c-1.1,0-2,0.9-2,2V43.5z"></path></g></svg></svg><svg class="tpz3b" width="100px" height="60px"><use xlink:href="#tpz3"></use></svg></div><div class="opposite4"><svg class="tpz3a" width="100px" height="60px"><use xlink:href="#tpz3"></use></svg><svg class="tpz3b" width="100px" height="60px"><use xlink:href="#tpz3"></use></svg></div><div class="opposite5"><svg class="tpz3a" width="100px" height="60px"><use xlink:href="#tpz3"></use></svg><svg class="tpz3b" width="100px" height="60px"><use xlink:href="#tpz3"></use><!-- Generator: Adobe Illustrator 17.0.0, SVG Export Plug-In  --><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="10px" y="10px" width="73.25px" height="46px" viewBox="0 0 73.25 46" enable-background="new 0 0 73.25 46" xml:space="preserve"><defs></defs><rect x="0.5" y="0.5" fill="none" stroke="#364872" stroke-miterlimit="10" width="72.25" height="45"></rect><g><path fill="#364872" d="M4.75,43.5c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v-41c0-1.1-0.9-2-2-2h-14c-1.1,0-2,0.9-2,2V43.5z"></path></g><g><path fill="#364872" d="M26.75,43.5c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v-41c0-1.1-0.9-2-2-2h-14c-1.1,0-2,0.9-2,2V43.5z"></path></g><g><path fill="#364872" d="M50.75,43.5c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v-41c0-1.1-0.9-2-2-2h-14c-1.1,0-2,0.9-2,2V43.5z"></path></g></svg></svg></div><div class="opposite6"><svg class="tpz3a" width="100px" height="60px"><use xlink:href="#tpz3"></use></svg><svg class="tpz3b" width="100px" height="60px"><use xlink:href="#tpz3"></use><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="10px" y="10px" width="73.25px" height="46px" viewBox="0 0 73.25 46" enable-background="new 0 0 73.25 46" xml:space="preserve"><defs></defs><rect x="0.5" y="0.5" fill="none" stroke="#364872" stroke-miterlimit="10" width="72.25" height="45"></rect><g><path fill="#364872" d="M50.75,43.5c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v-41c0-1.1-0.9-2-2-2h-14c-1.1,0-2,0.9-2,2V43.5z"></path></g></svg></svg><div class="shape cylinder-2 cyl-2 eye"><div class="face bm"></div><div class="face tp"></div><div class="face side s0"></div><div class="face side s1"></div><div class="face side s2"></div><div class="face side s3"></div><div class="face side s4"></div><div class="face side s5"></div><div class="face side s6"></div><div class="face side s7"></div><div class="face side s8"></div><div class="face side s9"></div><div class="face side s10"></div><div class="face side s11"></div><div class="face side s12"></div><div class="face side s13"></div><div class="face side s14"></div><div class="face side s15"></div><div class="face side s16"></div><div class="face side s17"></div><div class="face side s18"></div><div class="face side s19"></div></div><div class="shape cylinder-2 cyl-2 eye2"><div class="face side s0"></div><div class="face side s1"></div><div class="face side s2"></div><div class="face side s3"></div><div class="face side s4"></div><div class="face side s5"></div><div class="face side s6"></div><div class="face side s7"></div><div class="face side s8"></div><div class="face side s9"></div><div class="face side s10"></div><div class="face side s11"></div><div class="face side s12"></div><div class="face side s13"></div><div class="face side s14"></div><div class="face side s15"></div><div class="face side s16"></div><div class="face side s17"></div><div class="face side s18"></div><div class="face side s19"></div><div class="face tp"></div></div></div></div></div><div class="hemi2"><div class="phase-3"><div class="opposite1"><svg class="tpz2a" width="90px" height="60px"><use xlink:href="#tpz2"></use></svg><svg class="tpz2b" width="90px" height="60px"><use xlink:href="#tpz2"></use></svg></div><div class="opposite2"><svg class="tpz2a" width="90px" height="60px"><use xlink:href="#tpz2"></use></svg><svg class="tpz2b" width="90px" height="60px"><use xlink:href="#tpz2"></use></svg></div><div class="opposite3"><svg class="tpz2a" width="90px" height="60px"><use xlink:href="#tpz2"></use></svg><svg class="tpz2b" width="90px" height="60px"><use xlink:href="#tpz2"></use></svg></div><div class="opposite4"><svg class="tpz2a" width="90px" height="60px"><use xlink:href="#tpz2"></use></svg><svg class="tpz2b" width="90px" height="60px"><use xlink:href="#tpz2"></use></svg></div><div class="opposite5"><svg class="tpz2a" width="90px" height="60px"><use xlink:href="#tpz2"></use></svg><svg class="tpz2b" width="90px" height="60px"><use xlink:href="#tpz2"></use></svg></div><div class="opposite6"><svg class="tpz2a" width="90px" height="60px"><use xlink:href="#tpz2"></use></svg><svg class="tpz2b" width="90px" height="60px"><use xlink:href="#tpz2"></use></svg></div></div></div></div></div><div class="shape cylinder-1 cyl-1"><div class="face side s0"><!-- Generator: Adobe Illustrator 17.0.0, SVG Export Plug-In  --><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" width="67.546px" height="275.634px" viewBox="0 0 67 275" enable-background="new 0 0 67 275" xml:space="preserve"><defs></defs><path fill="#FFFFFF" d="M67.046,70.806H18.21c-1.366,0-2.483-1.117-2.483-2.483V20.402c0-1.366,1.117-2.483,2.483-2.483h48.836v-7.827h-56.7c-1.366,0-2.483,1.117-2.483,2.483v262.354c0,0.246,0.047,0.48,0.115,0.705h59.068V70.806z M57.529,255.562H20.694c-1.366,0-2.483-1.117-2.483-2.483v-20.985c0-1.366,1.117-2.483,2.483-2.483h36.833c1.366,0,2.483,1.117,2.483,2.483v20.985h0.002C60.012,254.445,58.895,255.562,57.529,255.562z M57.529,220.644H20.694c-1.366,0-2.483-1.117-2.483-2.483v-12.292c0-1.366,1.117-2.483,2.483-2.483h36.833c1.366,0,2.483,1.117,2.483,2.483v12.292h0.002C60.012,219.526,58.895,220.644,57.529,220.644z M60.114,190.756c0,1.366-1.117,2.483-2.483,2.483H20.798c-1.366,0-2.483-1.117-2.483-2.483V81.911c0-1.366,1.117-2.483,2.483-2.483h36.833c1.366,0,2.483,1.117,2.483,2.483V190.756z"></path><path fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" d="M20.694,67.582c-1.366,0-2.483-1.117-2.483-2.483V22.885c0-1.366,1.117-2.483,2.483-2.483h46.352v-2.483H18.21c-1.366,0-2.483,1.117-2.483,2.483v47.921c0,1.366,1.117,2.483,2.483,2.483h48.836v-3.223H20.694z"></path><path fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" d="M18.21,22.885v42.214c0,1.366,1.117,2.483,2.483,2.483h46.352V20.402H20.694C19.328,20.402,18.21,21.519,18.21,22.885z"></path><path fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" d="M57.631,79.428H20.798c-1.366,0-2.483,1.117-2.483,2.483v108.846c0,1.366,1.117,2.483,2.483,2.483h36.833c1.366,0,2.483-1.117,2.483-2.483V81.911C60.114,80.545,58.997,79.428,57.631,79.428z M57.84,188.238c0,1.366-1.117,2.483-2.483,2.483H23.075c-1.366,0-2.483-1.117-2.483-2.483V83.944c0-1.366,1.117-2.483,2.483-2.483h32.281c1.366,0,2.483,1.117,2.483,2.483V188.238z"></path><path fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" d="M60.01,205.869c0-1.366-1.117-2.483-2.483-2.483H20.694c-1.366,0-2.483,1.117-2.483,2.483v12.292c0,1.366,1.117,2.483,2.483,2.483h36.836c1.366,0,2.483-1.117,2.483-2.483H60.01V205.869z"></path><path fill="#818989" stroke="#000000" stroke-miterlimit="10" d="M60.01,232.094c0-1.366-1.117-2.483-2.483-2.483H20.694c-1.366,0-2.483,1.117-2.483,2.483v20.985c0,1.366,1.117,2.483,2.483,2.483h36.836c1.366,0,2.483-1.117,2.483-2.483H60.01V232.094z M55.873,246.911c0,1.366-1.117,2.483-2.483,2.483H36.422c-1.366,0-2.483-1.117-2.483-2.483v-8.651c0-1.366,1.117-2.483,2.483-2.483H53.39c1.366,0,2.483,1.117,2.483,2.483V246.911z"></path><path fill="#4E595A" stroke="#000000" stroke-miterlimit="10" d="M53.39,235.776H36.422c-1.366,0-2.483,1.117-2.483,2.483v8.651c0,1.366,1.117,2.483,2.483,2.483H53.39c1.366,0,2.483-1.117,2.483-2.483v-8.651C55.873,236.894,54.756,235.776,53.39,235.776z"></path><path fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" d="M55.356,81.461H23.075c-1.366,0-2.483,1.117-2.483,2.483v104.294c0,1.366,1.117,2.483,2.483,2.483h32.281c1.366,0,2.483-1.117,2.483-2.483V83.944C57.84,82.579,56.722,81.461,55.356,81.461z"></path></svg></div><div class="face side s1"></div><div class="face side s2"></div><div class="face side s3"><!-- Generator: Adobe Illustrator 17.0.0, SVG Export Plug-In  --><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" width="67.046px" height="275.634px" viewBox="0 0 67.046 275.634" enable-background="new 0 0 67.046 275.634" xml:space="preserve"><defs></defs><g><path fill="#FFFFFF" d="M57.113,217.021c0,1.366-1.117,2.483-2.483,2.483H7.45c-1.366,0-2.483-1.117-2.483-2.483v-11.353c0-1.366,1.117-2.483,2.483-2.483H54.63c1.366,0,2.483,1.117,2.483,2.483V217.021z"></path><path fill="none" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" d="M57.113,217.021c0,1.366-1.117,2.483-2.483,2.483H7.45c-1.366,0-2.483-1.117-2.483-2.483v-11.353c0-1.366,1.117-2.483,2.483-2.483H54.63c1.366,0,2.483,1.117,2.483,2.483V217.021z"></path></g><g><path fill="#FFFFFF" d="M44.72,193.331c0,1.366-1.117,2.483-2.483,2.483H7.45c-1.366,0-2.483-1.117-2.483-2.483V17.025c0-1.366,1.117-2.483,2.483-2.483h34.787c1.366,0,2.483,1.117,2.483,2.483L44.72,193.331z"></path><path fill="none" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" d="M44.72,193.331c0,1.366-1.117,2.483-2.483,2.483H7.45c-1.366,0-2.483-1.117-2.483-2.483V17.025c0-1.366,1.117-2.483,2.483-2.483h34.787c1.366,0,2.483,1.117,2.483,2.483L44.72,193.331z"></path></g><g><path fill="#FFFFFF" d="M39.731,186.676c0,1.366-1.117,2.483-2.483,2.483H12.416c-1.366,0-2.483-1.117-2.483-2.483V22.686c0-1.366,1.117-2.483,2.483-2.483h24.832c1.366,0,2.483,1.117,2.483,2.483V186.676z"></path><path fill="none" stroke="#C4D4E3" stroke-width="0.25" stroke-miterlimit="10" d="M39.731,186.676c0,1.366-1.117,2.483-2.483,2.483H12.416c-1.366,0-2.483-1.117-2.483-2.483V22.686c0-1.366,1.117-2.483,2.483-2.483h24.832c1.366,0,2.483,1.117,2.483,2.483V186.676z"></path></g><polygon fill="#778089" points="25.326,261.092 14.964,250.727 14.964,236.072 25.326,225.709 39.982,225.709 50.344,236.072 50.344,250.727 39.982,261.092 "></polygon><circle fill="#AEBCC9" stroke="#40454A" stroke-width="0.5" stroke-miterlimit="10" cx="32.654" cy="243.4" r="10.67"></circle></svg></div><div class="face side s4"><!-- Generator: Adobe Illustrator 17.0.0, SVG Export Plug-In  --><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" width="68.092px" height="276.134px" viewBox="0 0 68.092 276.134" enable-background="new 0 0 68.092 276.134" xml:space="preserve"><defs></defs><path fill="#B5B5B5" d="M8.026,90.641c0-1.366,1.117-2.483,2.483-2.483h42.234c1.366,0,2.483,1.117,2.483,2.483V200.87h0.003c0,1.366-1.117,2.483-2.483,2.483H10.509c-1.366,0-2.483-1.117-2.483-2.483V90.641z M20.462,265.455c0,1.366-1.117,2.483-2.483,2.483h-7.469v-0.002c-1.366,0-2.483-1.117-2.483-2.483v-27.335c0-1.366,1.117-2.483,2.483-2.483h7.469c1.366,0,2.483,1.117,2.483,2.483V265.455z M22.925,224.559v-11.353c0-1.366,1.117-2.483,2.483-2.483h27.337c1.366,0,2.483,1.117,2.483,2.483v11.353c0,1.366-1.117,2.483-2.483,2.483H25.408C24.042,227.042,22.925,225.925,22.925,224.559z M37.844,265.455c0,1.366-1.117,2.483-2.483,2.483h-7.469v-0.002c-1.366,0-2.483-1.117-2.483-2.483v-27.335c0-1.366,1.117-2.483,2.483-2.483h7.469c1.366,0,2.483,1.117,2.483,2.483V265.455z M57.709,265.455c0,1.366-1.117,2.483-2.483,2.483h-7.469v-0.002c-1.366,0-2.483-1.117-2.483-2.483v-27.335c0-1.366,1.117-2.483,2.483-2.483h7.469c1.366,0,2.483,1.117,2.483,2.483V265.455z"></path><path fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" d="M10.509,203.353h42.237c1.366,0,2.483-1.117,2.483-2.483h-0.003V90.641c0-1.366-1.117-2.483-2.483-2.483H10.509c-1.366,0-2.483,1.117-2.483,2.483V200.87C8.026,202.235,9.143,203.353,10.509,203.353z"></path><path fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" d="M52.746,227.042c1.366,0,2.483-1.117,2.483-2.483v-11.353c0-1.366-1.117-2.483-2.483-2.483H25.408c-1.366,0-2.483,1.117-2.483,2.483v11.353c0,1.366,1.117,2.483,2.483,2.483H52.746z"></path><path fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" d="M55.226,235.634h-7.469c-1.366,0-2.483,1.117-2.483,2.483v27.335c0,1.366,1.117,2.483,2.483,2.483v0.002h7.469c1.366,0,2.483-1.117,2.483-2.483v-27.337C57.709,236.752,56.592,235.634,55.226,235.634z"></path><path fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" d="M35.361,235.634h-7.469c-1.366,0-2.483,1.117-2.483,2.483v27.335c0,1.366,1.117,2.483,2.483,2.483v0.002h7.469c1.366,0,2.483-1.117,2.483-2.483v-27.337C37.844,236.752,36.727,235.634,35.361,235.634z"></path><path fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" d="M17.978,235.634h-7.469c-1.366,0-2.483,1.117-2.483,2.483v27.335c0,1.366,1.117,2.483,2.483,2.483v0.002h7.469c1.366,0,2.483-1.117,2.483-2.483v-27.337C20.462,236.752,19.344,235.634,17.978,235.634z"></path><g><path d="M52.229,47.473H1v-1h51.229c1.378,0,2.5-1.122,2.5-2.5V3.5c0-1.378-1.122-2.5-2.5-2.5H1V0h51.229c1.93,0,3.5,1.57,3.5,3.5v40.473C55.729,45.902,54.158,47.473,52.229,47.473z"></path></g><g><path d="M52.229,79.473H0v-1h52.229c1.378,0,2.5-1.122,2.5-2.5v-26c0-1.378-1.122-2.5-2.5-2.5H0v-1h52.229c1.93,0,3.5,1.57,3.5,3.5v26C55.729,77.902,54.158,79.473,52.229,79.473z"></path></g><path fill="#0E172E" d="M47.377,14.253c1.366,0,2.483-1.117,2.483-2.483V6.878c0-1.366-1.117-2.483-2.483-2.483H1v9.858H47.377z"></path><polygon fill="#2D3C5C" points="11.035,71.242 21.758,74.967 48.75,71.242 48.75,57.272 21.758,53.393 11.035,57.272 1,58.325 1,70.436 "></polygon><polygon fill="#2D3C5C" points="25.455,40.202 35.068,36.167 48.75,36.167 48.75,23.284 35.068,23.284 25.455,18.628 1,18.628 1,40.202 "></polygon></svg></div><div class="face side s5"><!-- Generator: Adobe Illustrator 17.0.0, SVG Export Plug-In  --><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" width="67.39px" height="276.134px" viewBox="0 0 67 276" enable-background="new 0 0 67 276" xml:space="preserve"><defs></defs><path fill="#B5B5B5" d="M51.985,264.402c0,1.366-1.117,2.483-2.483,2.483H17.22c-1.366,0-2.483-1.117-2.483-2.483v-32.281c0-1.366,1.117-2.483,2.483-2.483h32.281c1.366,0,2.483,1.117,2.483,2.483V264.402z M8.529,89.05c0-1.366,1.117-2.483,2.483-2.483h44.697c1.366,0,2.483,1.117,2.483,2.483v110.229c0,1.366-1.117,2.483-2.483,2.483H11.012c-1.366,0-2.483-1.117-2.483-2.483V89.05z M11.012,209.132h44.697c1.366,0,2.483,1.117,2.483,2.483v11.353c0,1.366-1.117,2.483-2.483,2.483H11.012c-1.366,0-2.483-1.117-2.483-2.483v-11.353C8.529,210.249,9.646,209.132,11.012,209.132z"></path><rect x="0" y="4.395" fill="#0E172E" width="67.39" height="9.858"></rect><polygon fill="#2D3C5C" points="52.54,59.911 50.484,57.272 50.484,53.393 0.045,53.393 0.045,74.967 50.484,74.967 50.484,71.242 52.54,69.223 67.39,70.403 67.39,58.369 "></polygon><polygon fill="#2D3C5C" points="15.92,18.628 15.92,22.353 13.864,24.372 0.045,23.274 0.045,35.118 13.864,33.684 15.92,36.321 15.92,40.202 67.39,40.202 67.39,18.628 "></polygon><path fill="#212C4C" d="M11.012,201.762h44.697c1.366,0,2.483-1.117,2.483-2.483V89.05c0-1.366-1.117-2.483-2.483-2.483H11.012c-1.366,0-2.483,1.117-2.483,2.483v110.229C8.529,200.644,9.646,201.762,11.012,201.762z M14.737,106.504c0-6.829,5.587-12.416,12.416-12.416h12.416c6.829,0,12.416,5.587,12.416,12.416v21.557c0,6.829-5.587,12.416-12.416,12.416H27.153c-6.829,0-12.416-5.587-12.416-12.416V106.504z M14.737,161.134c0-6.829,5.587-12.416,12.416-12.416h12.416c6.829,0,12.416,5.587,12.416,12.416v21.557c0,6.829-5.587,12.416-12.416,12.416H27.153c-6.829,0-12.416-5.587-12.416-12.416V161.134z"></path><path fill="#202D4F" d="M49.501,229.638H17.22c-1.366,0-2.483,1.117-2.483,2.483v32.281c0,1.366,1.117,2.483,2.483,2.483h32.281c1.366,0,2.483-1.117,2.483-2.483v-32.281C51.985,230.755,50.867,229.638,49.501,229.638z"></path><path fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" d="M11.012,225.451h44.697c1.366,0,2.483-1.117,2.483-2.483v-11.353c0-1.366-1.117-2.483-2.483-2.483H11.012c-1.366,0-2.483,1.117-2.483,2.483v11.353C8.529,224.334,9.646,225.451,11.012,225.451z"></path><path fill="#B2BBCA" d="M27.153,140.477h12.416c6.829,0,12.416-5.587,12.416-12.416v-21.557c0-6.829-5.587-12.416-12.416-12.416H27.153c-6.829,0-12.416,5.587-12.416,12.416v21.557C14.737,134.889,20.324,140.477,27.153,140.477z"></path><path fill="#B2BBCA" d="M27.153,195.107h12.416c6.829,0,12.416-5.587,12.416-12.416v-21.557c0-6.829-5.587-12.416-12.416-12.416H27.153c-6.829,0-12.416,5.587-12.416,12.416v21.557C14.737,189.519,20.324,195.107,27.153,195.107z"></path><rect x="0.344" width="66.906" height="1"></rect><rect x="0.414" y="46.473" width="66.906" height="1"></rect><rect x="0.088" y="78.403" width="66.906" height="1"></rect></svg></div><div class="face side s6"><!-- Generator: Adobe Illustrator 17.0.0, SVG Export Plug-In  --><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" width="67.046px" height="276.134px" viewBox="0 0 67.046 276.134" enable-background="new 0 0 67.046 276.134" xml:space="preserve"><path fill="#B5B5B5" d="M53.272,265.928H9.795V236.13h43.477V265.928z M22.211,145.566H9.795v-6.008h12.416V145.566z M45.822,211.217v16.321h-27.81v-16.321H45.822z M22.211,150.773v6.008H9.795v-6.008H22.211z M22.211,161.987v6.008H9.795v-6.008H22.211z M22.211,173.202v6.008H9.795v-6.008H22.211z M22.211,184.416v6.008H9.795v-6.008H22.211z M22.211,195.63v6.008H9.795v-6.008H22.211z M53.272,203.848H31.533v-65.531h21.739V203.848z M53.272,131.836H6.701V88.653h46.57V131.836z"></path><g><path fill="#FFFFFF" d="M31.533,202.848c0,0.55,0.45,1,1,1h19.739c0.55,0,1-0.45,1-1v-63.531c0-0.55-0.45-1-1-1H32.533c-0.55,0-1,0.45-1,1V202.848z"></path><path fill="none" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" d="M31.533,202.848c0,0.55,0.45,1,1,1h19.739c0.55,0,1-0.45,1-1v-63.531c0-0.55-0.45-1-1-1H32.533c-0.55,0-1,0.45-1,1V202.848z"></path></g><g><path fill="#FFFFFF" d="M6.701,130.836c0,0.55,0.45,1,1,1h44.57c0.55,0,1-0.45,1-1V89.653c0-0.55-0.45-1-1-1H7.701c-0.55,0-1,0.45-1,1V130.836z"></path><path fill="none" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" d="M6.701,130.836c0,0.55,0.45,1,1,1h44.57c0.55,0,1-0.45,1-1V89.653c0-0.55-0.45-1-1-1H7.701c-0.55,0-1,0.45-1,1V130.836z"></path></g><g><path fill="#CFD9E0" d="M9.795,264.928c0,0.55,0.45,1,1,1h41.477c0.55,0,1-0.45,1-1V237.13c0-0.55-0.45-1-1-1H10.795c-0.55,0-1,0.45-1,1V264.928z"></path><path fill="none" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" d="M9.795,264.928c0,0.55,0.45,1,1,1h41.477c0.55,0,1-0.45,1-1V237.13c0-0.55-0.45-1-1-1H10.795c-0.55,0-1,0.45-1,1V264.928z"></path></g><g><path fill="#FFFFFF" d="M18.012,226.538c0,0.55,0.45,1,1,1h25.81c0.55,0,1-0.45,1-1v-14.321c0-0.55-0.45-1-1-1h-25.81c-0.55,0-1,0.45-1,1V226.538z"></path><path fill="none" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" d="M18.012,226.538c0,0.55,0.45,1,1,1h25.81c0.55,0,1-0.45,1-1v-14.321c0-0.55-0.45-1-1-1h-25.81c-0.55,0-1,0.45-1,1V226.538z"></path></g><g><path fill="#C7D1DA" d="M9.795,155.781c0,0.55,0.45,1,1,1h10.416c0.55,0,1-0.45,1-1v-4.008c0-0.55-0.45-1-1-1H10.795c-0.55,0-1,0.45-1,1V155.781z"></path></g><g><path fill="#C7D1DA" d="M9.795,166.995c0,0.55,0.45,1,1,1h10.416c0.55,0,1-0.45,1-1v-4.008c0-0.55-0.45-1-1-1H10.795c-0.55,0-1,0.45-1,1V166.995z"></path></g><g><path fill="#C7D1DA" d="M9.795,178.209c0,0.55,0.45,1,1,1h10.416c0.55,0,1-0.45,1-1v-4.008c0-0.55-0.45-1-1-1H10.795c-0.55,0-1,0.45-1,1V178.209z"></path></g><g><path fill="#C7D1DA" d="M9.795,189.424c0,0.55,0.45,1,1,1h10.416c0.55,0,1-0.45,1-1v-4.008c0-0.55-0.45-1-1-1H10.795c-0.55,0-1,0.45-1,1V189.424z"></path></g><g><path fill="#C7D1DA" d="M9.795,200.638c0,0.55,0.45,1,1,1h10.416c0.55,0,1-0.45,1-1v-4.008c0-0.55-0.45-1-1-1H10.795c-0.55,0-1,0.45-1,1V200.638z"></path></g><g><path fill="#C7D1DA" d="M9.795,144.566c0,0.55,0.45,1,1,1h10.416c0.55,0,1-0.45,1-1v-4.008c0-0.55-0.45-1-1-1H10.795c-0.55,0-1,0.45-1,1V144.566z"></path></g><g><path d="M67.046,47.473h-57c-1.93,0-3.5-1.57-3.5-3.5V3.5c0-1.93,1.57-3.5,3.5-3.5h57v1h-57c-1.378,0-2.5,1.122-2.5,2.5v40.473c0,1.378,1.122,2.5,2.5,2.5h57V47.473z"></path></g><path fill="#0E172E" d="M17.206,4.395c-1.37,0-2.491,1.117-2.491,2.483v4.892c0,1.366,1.121,2.483,2.491,2.483h49.451V4.395H17.206z"></path><g><path d="M66.701,79.473h-57c-1.93,0-3.5-1.57-3.5-3.5v-26c0-1.93,1.57-3.5,3.5-3.5h57v1h-57c-1.378,0-2.5,1.122-2.5,2.5v26c0,1.378,1.122,2.5,2.5,2.5h57V79.473z"></path></g><polygon fill="#2D3C5C" points="31.465,57.428 17.727,57.428 17.727,70.308 31.465,70.308 41.118,74.967 66.701,74.967 66.701,53.393 41.118,53.393 "></polygon><polygon fill="#2D3C5C" points="55.599,22.353 44.831,18.628 17.727,22.353 17.727,36.321 44.831,40.202 55.599,36.321 66.701,35.162 66.701,23.241 "></polygon></svg></div><div class="face side s7"><!-- Generator: Adobe Illustrator 17.0.0, SVG Export Plug-In  --><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" width="67.046px" height="275.634px" viewBox="0 0 67.046 275.634" enable-background="new 0 0 67.046 275.634" xml:space="preserve"><defs></defs><g><path fill="#FFFFFF" d="M53.41,202.348c0,0.55-0.45,1-1,1H14.658c-0.55,0-1-0.45-1-1V23.076c0-0.55,0.45-1,1-1H52.41c0.55,0,1,0.45,1,1V202.348z"></path><path fill="none" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" d="M53.41,202.348c0,0.55-0.45,1-1,1H14.658c-0.55,0-1-0.45-1-1V23.076c0-0.55,0.45-1,1-1H52.41c0.55,0,1,0.45,1,1V202.348z"></path></g><g><path fill="#CFD9E0" d="M59.41,264.428c0,0.55-0.45,1-1,1H5.758c-0.55,0-1-0.45-1-1v-47.664c0-0.55,0.45-1,1-1H58.41c0.55,0,1,0.45,1,1V264.428z"></path><path fill="none" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" d="M59.41,264.428c0,0.55-0.45,1-1,1H5.758c-0.55,0-1-0.45-1-1v-47.664c0-0.55,0.45-1,1-1H58.41c0.55,0,1,0.45,1,1V264.428z"></path></g></svg></div><div class="face side s8"></div><div class="face side s9"></div><div class="face side s10"><!-- Generator: Adobe Illustrator 17.0.0, SVG Export Plug-In  --><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" width="67px" height="275px" viewBox="0 0 67 275" enable-background="new 0 0 67 275" xml:space="preserve"><defs></defs><path fill="#FFFFFF" d="M59.683,12.575c0-1.366-1.117-2.483-2.483-2.483H0.5v7.827h48.423c1.366,0,2.483,1.117,2.483,2.483v47.921h-0.003c0,1.366-1.117,2.483-2.483,2.483H0.5v204.828h59.068c0.068-0.225,0.115-0.459,0.115-0.705V12.575z M45.613,255.562H8.778c-1.366,0-2.483-1.117-2.483-2.483v-20.985c0-1.366,1.117-2.483,2.483-2.483h36.833c1.366,0,2.483,1.117,2.483,2.483v20.985h0.003C48.096,254.445,46.979,255.562,45.613,255.562z M45.613,220.644H8.778c-1.366,0-2.483-1.117-2.483-2.483v-12.292c0-1.366,1.117-2.483,2.483-2.483h36.833c1.366,0,2.483,1.117,2.483,2.483v12.292h0.003C48.096,219.526,46.979,220.644,45.613,220.644z M48.198,190.756c0,1.366-1.117,2.483-2.483,2.483H8.882c-1.366,0-2.483-1.117-2.483-2.483V81.911c0-1.366,1.117-2.483,2.483-2.483h36.833c1.366,0,2.483,1.117,2.483,2.483V190.756z"></path><path fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" d="M46.026,20.402c1.366,0,2.483,1.117,2.483,2.483v42.214c0,1.366-1.117,2.483-2.483,2.483H0.5v3.223h48.421c1.366,0,2.483-1.117,2.483-2.483h0.003V20.402c0-1.366-1.117-2.483-2.483-2.483H0.5v2.483H46.026z"></path><path fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" d="M46.026,67.582c1.366,0,2.483-1.117,2.483-2.483V22.885c0-1.366-1.117-2.483-2.483-2.483H0.5v47.181H46.026z"></path><path fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" d="M45.715,79.428H8.882c-1.366,0-2.483,1.117-2.483,2.483v108.846c0,1.366,1.117,2.483,2.483,2.483h36.833c1.366,0,2.483-1.117,2.483-2.483V81.911C48.198,80.545,47.081,79.428,45.715,79.428z M45.924,188.238c0,1.366-1.117,2.483-2.483,2.483H11.159c-1.366,0-2.483-1.117-2.483-2.483V83.944c0-1.366,1.117-2.483,2.483-2.483h32.281c1.366,0,2.483,1.117,2.483,2.483V188.238z"></path><path fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" d="M48.094,205.869c0-1.366-1.117-2.483-2.483-2.483H8.778c-1.366,0-2.483,1.117-2.483,2.483v12.292c0,1.366,1.117,2.483,2.483,2.483h36.836c1.366,0,2.483-1.117,2.483-2.483h-0.003V205.869z"></path><path fill="#818989" stroke="#000000" stroke-miterlimit="10" d="M48.094,232.094c0-1.366-1.117-2.483-2.483-2.483H8.778c-1.366,0-2.483,1.117-2.483,2.483v20.985c0,1.366,1.117,2.483,2.483,2.483h36.836c1.366,0,2.483-1.117,2.483-2.483h-0.003V232.094z M34.024,246.911c0,1.366-1.117,2.483-2.483,2.483H14.573c-1.366,0-2.483-1.117-2.483-2.483v-8.651c0-1.366,1.117-2.483,2.483-2.483h16.968c1.366,0,2.483,1.117,2.483,2.483V246.911z"></path><path fill="#4E595A" stroke="#000000" stroke-miterlimit="10" d="M31.541,235.776H14.573c-1.366,0-2.483,1.117-2.483,2.483v8.651c0,1.366,1.117,2.483,2.483,2.483h16.968c1.366,0,2.483-1.117,2.483-2.483v-8.651C34.024,236.894,32.907,235.776,31.541,235.776z"></path><path fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" d="M43.441,81.461H11.159c-1.366,0-2.483,1.117-2.483,2.483v104.294c0,1.366,1.117,2.483,2.483,2.483h32.281c1.366,0,2.483-1.117,2.483-2.483V83.944C45.924,82.579,44.806,81.461,43.441,81.461z"></path></svg></div><div class="face side s11"><!-- Generator: Adobe Illustrator 17.0.0, SVG Export Plug-In  --><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" width="68px" height="275.634px" viewBox="0 0 68 275" enable-background="new 0 0 68 275" xml:space="preserve"><defs></defs><polyline fill="#FFFFFF" points="0.5,10.092 0.5,17.919 67.546,17.919 67.546,10.092 "></polyline><path fill="#FFFFFF" d="M0.5,275.634h67.046V70.806H0.5V275.634z M53.199,261.832c0,1.366-1.117,2.483-2.483,2.483H18.435c-1.366,0-2.483-1.117-2.483-2.483v-32.281c0-1.366,1.117-2.483,2.483-2.483h32.281c1.366,0,2.483,1.117,2.483,2.483V261.832z M8.845,79.996c0-1.366,1.117-2.483,2.483-2.483h46.766c1.366,0,2.483,1.117,2.483,2.483v108.846h0.003c0,1.366-1.117,2.483-2.483,2.483H11.328c-1.366,0-2.483-1.117-2.483-2.483V79.996z M11.191,201.471h46.766c1.366,0,2.483,1.117,2.483,2.483v12.292c0,1.366-1.117,2.483-2.483,2.483H11.191c-1.366,0-2.483-1.117-2.483-2.483v-12.292C8.708,202.588,9.826,201.471,11.191,201.471z"></path><rect x="0.5" y="67.582" fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" width="67.046" height="3.223"></rect><rect x="0.5" y="17.919" fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" width="67.046" height="2.483"></rect><rect x="0.5" y="20.402" fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" width="67.046" height="47.181"></rect><path fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" d="M11.328,191.325h46.768c1.366,0,2.483-1.117,2.483-2.483h-0.003V79.996c0-1.366-1.117-2.483-2.483-2.483H11.328c-1.366,0-2.483,1.117-2.483,2.483v108.846C8.845,190.207,9.962,191.325,11.328,191.325z M11.122,83.03c0-1.366,1.117-2.483,2.483-2.483h42.214c1.366,0,2.483,1.117,2.483,2.483v102.779c0,1.366-1.117,2.483-2.483,2.483H13.605c-1.366,0-2.483-1.117-2.483-2.483V83.03z"></path><path fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" d="M11.191,218.729h46.766c1.366,0,2.483-1.117,2.483-2.483v-12.292c0-1.366-1.117-2.483-2.483-2.483H11.191c-1.366,0-2.483,1.117-2.483,2.483v12.292C8.708,217.612,9.826,218.729,11.191,218.729z"></path><path fill="#202D4F" stroke="#000000" stroke-miterlimit="10" d="M50.716,227.068H18.435c-1.366,0-2.483,1.117-2.483,2.483v32.281c0,1.366,1.117,2.483,2.483,2.483h32.281c1.366,0,2.483-1.117,2.483-2.483v-32.281C53.199,228.185,52.082,227.068,50.716,227.068z"></path><path fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" d="M13.605,188.293h42.214c1.366,0,2.483-1.117,2.483-2.483V83.03c0-1.366-1.117-2.483-2.483-2.483H13.605c-1.366,0-2.483,1.117-2.483,2.483v102.779C11.122,187.175,12.239,188.293,13.605,188.293z"></path></svg></div></div><div class="center-ancle"><div class="shape cylinder-2 cyl-2 cyl-2-indirect"><div class="face bm"></div><div class="face tp"></div><div class="face side s0"></div><div class="face side s1"></div><div class="face side s2"></div><div class="face side s3"></div><div class="face side s4"></div><div class="face side s5"></div><div class="face side s6"></div><div class="face side s7"></div><div class="face side s8"></div><div class="face side s9"></div><div class="face side s10"></div><div class="face side s11"></div><div class="face side s12"></div><div class="face side s13"></div><div class="face side s14"></div><div class="face side s15"></div><div class="face side s16"></div><div class="face side s17"></div><div class="face side s18"></div><div class="face side s19"></div></div><div class="shape cuboid-1 cub-1 ankle"><div class="face ft"></div><div class="face bk"></div><div class="face rt"></div><div class="face bm"></div><div class="face tp"></div></div></div></div><div class="foot-left"><div class="foot"><div class="foot-top"><div class="shape prism-1 pri-1"><div class="face ft"></div><div class="face bk"></div><div class="face-wrapper rt"><div class="face"></div></div><div class="face-wrapper lt"><div class="face"></div></div><div class="face bm"></div></div><div class="shape cuboid-1 cub-1"><div class="face ft"></div><div class="face bk"></div><div class="face bm"></div><div class="face tp"></div></div><div class="shape prism-2 pri-2"><div class="face ft"></div><div class="face bk"></div><div class="face-wrapper rt"><div class="face"></div></div><div class="face-wrapper lt"><div class="face"></div></div><div class="face bm"></div></div></div><div class="foot-top2"><div class="shape prism-1 pri-1"><div class="face ft"></div><div class="face bk"></div><div class="face-wrapper rt"><div class="face"></div></div><div class="face-wrapper lt"><div class="face"></div></div><div class="face bm"></div></div><div class="shape cuboid-1 cub-1"><div class="face ft"></div><div class="face bk"></div><div class="face bm"></div><div class="face tp"></div></div><div class="shape prism-2 pri-2"><div class="face ft"></div><div class="face bk"></div><div class="face-wrapper rt"><div class="face"></div></div><div class="face-wrapper lt"><div class="face"></div></div><div class="face bm"></div></div></div><div class="foot-top3"><div class="shape prism-1 pri-1"><div class="face ft"></div><div class="face bk"></div><div class="face-wrapper rt"><div class="face"></div></div><div class="face-wrapper lt"><div class="face"></div></div><div class="face bm"></div></div><div class="shape cuboid-1 cub-1"><div class="face ft"></div><div class="face bk"></div><div class="face bm"></div><div class="face tp"></div></div><div class="shape prism-2 pri-2"><div class="face ft"></div><div class="face bk"></div><div class="face-wrapper rt"><div class="face"></div></div><div class="face-wrapper lt"><div class="face"></div></div><div class="face bm"></div></div></div><div class="foot-bottom"><div class="shape prism-1 pri-1"><div class="face ft"></div><div class="face bk"></div><div class="face-wrapper rt"><div class="face"></div></div><div class="face-wrapper lt"><div class="face"></div></div><div class="face bm"></div></div><div class="shape cuboid-1 cub-1"><div class="face ft"></div><div class="face bk"></div><div class="face bm"></div><div class="face tp"></div></div><div class="shape prism-2 pri-2"><div class="face ft"></div><div class="face bk"></div><div class="face-wrapper rt"><div class="face"></div></div><div class="face-wrapper lt"><div class="face"></div></div><div class="face bm"></div></div></div><div class="foot-part-1"><div class="shape cylinder-2 cyl-2"><div class="face bm"></div><div class="face tp"></div><div class="face side s0"></div><div class="face side s1"></div><div class="face side s2"></div><div class="face side s3"></div><div class="face side s4"></div><div class="face side s5"></div><div class="face side s6"></div><div class="face side s7"></div><div class="face side s8"></div><div class="face side s9"></div></div><div class="shape cylinder-2 cyl-2 cyl-2-bottom"><div class="face bm"></div><div class="face tp"></div><div class="face side s0"></div><div class="face side s1"></div><div class="face side s2"></div><div class="face side s3"></div><div class="face side s4"></div><div class="face side s5"></div><div class="face side s6"></div><div class="face side s7"></div><div class="face side s8"></div><div class="face side s9"></div></div><div class="shape cuboid-1 cub-1 cub-2"><div class="face ft"></div><div class="face bk"></div><div class="face rt"></div><div class="face lt"></div><div class="face bm"></div><div class="face tp"></div></div></div></div><div class="arm"><div class="shape cylinder-2 cyl-2 cyl-2-indirect"><div class="face bm"></div><div class="face tp"></div><div class="face side s0"></div><div class="face side s1"></div><div class="face side s2"></div><div class="face side s3"></div><div class="face side s4"></div><div class="face side s5"></div><div class="face side s6"></div><div class="face side s7"></div><div class="face side s8"></div><div class="face side s9"></div><div class="face side s10"></div><div class="face side s11"></div><div class="face side s12"></div><div class="face side s13"></div><div class="face side s14"></div><div class="face side s15"></div><div class="face side s16"></div><div class="face side s17"></div><div class="face side s18"></div><div class="face side s19"></div></div><div class="shape cuboid-1 cub-1 ankle"><div class="face ft"></div><div class="face bk"></div><div class="face rt"></div><div class="face bm"></div><div class="face tp"></div></div><div class="shape cuboid-1 cub-1 reservoir-box"><div class="face ft"></div><div class="face bk"></div><div class="face rt"></div><div class="face lt"></div><div class="face bm"></div><div class="face tp"></div></div><div class="inburicant-filter"><div class="shape cylinder-2 cyl-2 reservoir"><div class="face bm"></div><div class="face tp"></div><div class="face side s0"></div><div class="face side s1"></div><div class="face side s2"></div><div class="face side s3"></div><div class="face side s4"></div><div class="face side s5"></div><div class="face side s6"></div><div class="face side s7"></div><div class="face side s8"></div><div class="face side s9"></div><div class="face side s10"></div><div class="face side s11"></div><div class="face side s12"></div><div class="face side s13"></div><div class="face side s14"></div><div class="face side s15"></div><div class="face side s16"></div><div class="face side s17"></div><div class="face side s18"></div><div class="face side s19"></div></div><div class="shape cylinder-2 cyl-2 reservoir-back"><div class="face bm"></div><div class="face tp"></div><div class="face side s0"></div><div class="face side s1"></div><div class="face side s2"></div><div class="face side s3"></div><div class="face side s4"></div><div class="face side s5"></div><div class="face side s6"></div><div class="face side s7"></div><div class="face side s8"></div><div class="face side s9"></div><div class="face side s10"></div><div class="face side s11"></div><div class="face side s12"></div><div class="face side s13"></div><div class="face side s14"></div><div class="face side s15"></div><div class="face side s16"></div><div class="face side s17"></div><div class="face side s18"></div><div class="face side s19"></div></div><div class="shape prism-1 pri-1 reservoir-pr1"><div class="face ft"></div><div class="face bk"></div><div class="face-wrapper rt"><div class="face"></div></div><div class="face-wrapper lt"><div class="face"></div></div><div class="face bm"></div></div><div class="shape prism-1 pri-1 reservoir-pr2"><div class="face ft"></div><div class="face bk"></div><div class="face-wrapper rt"><div class="face"></div></div><div class="face-wrapper lt"><div class="face"></div></div><div class="face bm"></div></div></div><div class="shape cuboid-1 cub-1 arm-bottom"><div class="face ft"></div><div class="face bk"></div><div class="face rt"></div><div class="face lt"></div><div class="face bm"></div><div class="face tp"></div></div><div class="shape cuboid-1 cub-1 arm-bottom-2"><div class="face ft"></div><div class="face bk"></div><div class="face rt"></div><div class="face lt"></div><div class="face bm"></div><div class="face tp"></div></div><div class="shape prism-1 pri-1 arm-pri-1"><div class="face ft"></div><div class="face bk"></div><div class="face-wrapper rt"><div class="face"></div></div><div class="face-wrapper lt"><div class="face"></div></div><div class="face bm"></div></div><div class="shape prism-1 pri-1 arm-pri-2"><div class="face ft"></div><div class="face bk"></div><div class="face-wrapper rt"><div class="face"></div></div><div class="face-wrapper lt"><div class="face"></div></div><div class="face bm"></div></div><div class="shape cuboid-1 cub-1 sholder-1"><div class="face bk"></div><div class="face tp"></div></div><div class="shape cuboid-1 cub-1 sholder-2"><div class="face bk"></div><div class="face bm"></div><div class="guard1"></div><div class="guard2"></div></div><div class="shape cylinder-2 cyl-2 sholder-3"><div class="face tp"><!-- Generator: Adobe Illustrator 17.0.0, SVG Export Plug-In  --><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" width="96px" height="84.314px" viewBox="0 0 96 84.314" enable-background="new 0 0 96 84.314" xml:space="preserve"><defs></defs><path fill="#eeeeee" d="M96,48C96,21.49,74.51,0,48,0C21.49,0,0,21.49,0,48c0,14.514,6.451,27.513,16.631,36.314l1.839-0.016l0.161-0.265l11.043-23.338c-2.353-3.497-3.733-7.704-3.749-12.232h-0.002c0-0.013,0.001-0.026,0.001-0.039s-0.001-0.026-0.001-0.039h0.002c0.042-12.157,9.908-22,22.075-22s22.033,9.843,22.075,22h0.002c0,0.013-0.001,0.026-0.001,0.039s0.001,0.026,0.001,0.039h-0.002c-0.016,4.656-1.477,8.969-3.952,12.523l11.895,22.485l0.178,0.298l1.822-0.016C89.825,74.964,96,62.205,96,48z"></path></svg></div><div class="face side s0"></div><div class="face side s1"></div><div class="face side s2"></div><div class="face side s3"></div><div class="face side s4"></div><div class="face side s5"></div><div class="face side s6"></div><div class="face side s7"></div><div class="face side s8"></div><div class="face side s9"></div></div><div class="shape cylinder-2 cyl-2 sholder-4"><div class="face side s0"></div><div class="face side s1"></div><div class="face side s2"></div><div class="face side s3"></div><div class="face side s4"></div><div class="face side s5"></div><div class="face side s6"></div><div class="face side s7"></div><div class="face side s8"></div><div class="face side s9"></div><div class="face side s10"></div><div class="face side s11"></div><div class="face side s18"></div><div class="face side s19"></div></div><div class="shape cylinder-2 cyl-2 cyl-2-indirect-top"><div class="face bm"></div><div class="face tp"></div><div class="face side s0"></div><div class="face side s1"></div><div class="face side s2"></div><div class="face side s3"></div><div class="face side s4"></div><div class="face side s5"></div><div class="face side s6"></div><div class="face side s7"></div><div class="face side s8"></div><div class="face side s9"></div><div class="face side s10"></div><div class="face side s11"></div><div class="face side s12"></div><div class="face side s13"></div><div class="face side s14"></div><div class="face side s15"></div><div class="face side s16"></div><div class="face side s17"></div><div class="face side s18"></div><div class="face side s19"></div></div></div></div><div class="foot-right"><div class="foot"><div class="foot-top"><div class="shape prism-1 pri-1"><div class="face ft"></div><div class="face bk"></div><div class="face-wrapper rt"><div class="face"></div></div><div class="face-wrapper lt"><div class="face"></div></div><div class="face bm"></div></div><div class="shape cuboid-1 cub-1"><div class="face ft"></div><div class="face bk"></div><div class="face bm"></div><div class="face tp"></div></div><div class="shape prism-2 pri-2"><div class="face ft"></div><div class="face bk"></div><div class="face-wrapper rt"><div class="face"></div></div><div class="face-wrapper lt"><div class="face"></div></div><div class="face bm"></div></div></div><div class="foot-top2"><div class="shape prism-1 pri-1"><div class="face ft"></div><div class="face bk"></div><div class="face-wrapper rt"><div class="face"></div></div><div class="face-wrapper lt"><div class="face"></div></div><div class="face bm"></div></div><div class="shape cuboid-1 cub-1"><div class="face ft"></div><div class="face bk"></div><div class="face bm"></div><div class="face tp"></div></div><div class="shape prism-2 pri-2"><div class="face ft"></div><div class="face bk"></div><div class="face-wrapper rt"><div class="face"></div></div><div class="face-wrapper lt"><div class="face"></div></div><div class="face bm"></div></div></div><div class="foot-top3"><div class="shape prism-1 pri-1"><div class="face ft"></div><div class="face bk"></div><div class="face-wrapper rt"><div class="face"></div></div><div class="face-wrapper lt"><div class="face"></div></div><div class="face bm"></div></div><div class="shape cuboid-1 cub-1"><div class="face ft"></div><div class="face bk"></div><div class="face bm"></div><div class="face tp"></div></div><div class="shape prism-2 pri-2"><div class="face ft"></div><div class="face bk"></div><div class="face-wrapper rt"><div class="face"></div></div><div class="face-wrapper lt"><div class="face"></div></div><div class="face bm"></div></div></div><div class="foot-bottom"><div class="shape prism-1 pri-1"><div class="face ft"></div><div class="face bk"></div><div class="face-wrapper rt"><div class="face"></div></div><div class="face-wrapper lt"><div class="face"></div></div><div class="face bm"></div></div><div class="shape cuboid-1 cub-1"><div class="face ft"></div><div class="face bk"></div><div class="face bm"></div><div class="face tp"></div></div><div class="shape prism-2 pri-2"><div class="face ft"></div><div class="face bk"></div><div class="face-wrapper rt"><div class="face"></div></div><div class="face-wrapper lt"><div class="face"></div></div><div class="face bm"></div></div></div><div class="foot-part-1"><div class="shape cylinder-2 cyl-2"><div class="face bm"></div><div class="face tp"></div><div class="face side s0"></div><div class="face side s1"></div><div class="face side s2"></div><div class="face side s3"></div><div class="face side s4"></div><div class="face side s5"></div><div class="face side s6"></div><div class="face side s7"></div><div class="face side s8"></div><div class="face side s9"></div></div><div class="shape cylinder-2 cyl-2 cyl-2-bottom"><div class="face bm"></div><div class="face tp"></div><div class="face side s0"></div><div class="face side s1"></div><div class="face side s2"></div><div class="face side s3"></div><div class="face side s4"></div><div class="face side s5"></div><div class="face side s6"></div><div class="face side s7"></div><div class="face side s8"></div><div class="face side s9"></div></div><div class="shape cuboid-1 cub-1 cub-2"><div class="face ft"></div><div class="face bk"></div><div class="face rt"></div><div class="face lt"></div><div class="face bm"></div><div class="face tp"></div></div></div></div><div class="arm"><div class="shape cylinder-2 cyl-2 cyl-2-indirect"><div class="face bm"></div><div class="face tp"></div><div class="face side s0"></div><div class="face side s1"></div><div class="face side s2"></div><div class="face side s3"></div><div class="face side s4"></div><div class="face side s5"></div><div class="face side s6"></div><div class="face side s7"></div><div class="face side s8"></div><div class="face side s9"></div><div class="face side s10"></div><div class="face side s11"></div><div class="face side s12"></div><div class="face side s13"></div><div class="face side s14"></div><div class="face side s15"></div><div class="face side s16"></div><div class="face side s17"></div><div class="face side s18"></div><div class="face side s19"></div></div><div class="shape cuboid-1 cub-1 ankle"><div class="face ft"></div><div class="face bk"></div><div class="face rt"></div><div class="face bm"></div><div class="face tp"></div></div><div class="shape cuboid-1 cub-1 reservoir-box"><div class="face ft"></div><div class="face bk"></div><div class="face rt"></div><div class="face lt"></div><div class="face bm"></div><div class="face tp"></div></div><div class="inburicant-filter"><div class="shape cylinder-2 cyl-2 reservoir"><div class="face bm"></div><div class="face tp"></div><div class="face side s0"></div><div class="face side s1"></div><div class="face side s2"></div><div class="face side s3"></div><div class="face side s4"></div><div class="face side s5"></div><div class="face side s6"></div><div class="face side s7"></div><div class="face side s8"></div><div class="face side s9"></div><div class="face side s10"></div><div class="face side s11"></div><div class="face side s12"></div><div class="face side s13"></div><div class="face side s14"></div><div class="face side s15"></div><div class="face side s16"></div><div class="face side s17"></div><div class="face side s18"></div><div class="face side s19"></div></div><div class="shape cylinder-2 cyl-2 reservoir-back"><div class="face bm"></div><div class="face tp"></div><div class="face side s0"></div><div class="face side s1"></div><div class="face side s2"></div><div class="face side s3"></div><div class="face side s4"></div><div class="face side s5"></div><div class="face side s6"></div><div class="face side s7"></div><div class="face side s8"></div><div class="face side s9"></div><div class="face side s10"></div><div class="face side s11"></div><div class="face side s12"></div><div class="face side s13"></div><div class="face side s14"></div><div class="face side s15"></div><div class="face side s16"></div><div class="face side s17"></div><div class="face side s18"></div><div class="face side s19"></div></div><div class="shape prism-1 pri-1 reservoir-pr1"><div class="face ft"></div><div class="face bk"></div><div class="face-wrapper rt"><div class="face"></div></div><div class="face-wrapper lt"><div class="face"></div></div><div class="face bm"></div></div><div class="shape prism-1 pri-1 reservoir-pr2"><div class="face ft"></div><div class="face bk"></div><div class="face-wrapper rt"><div class="face"></div></div><div class="face-wrapper lt"><div class="face"></div></div><div class="face bm"></div></div></div><div class="shape cuboid-1 cub-1 arm-bottom"><div class="face ft"></div><div class="face bk"></div><div class="face rt"></div><div class="face lt"></div><div class="face bm"></div><div class="face tp"></div></div><div class="shape cuboid-1 cub-1 arm-bottom-2"><div class="face ft"></div><div class="face bk"></div><div class="face rt"></div><div class="face lt"></div><div class="face bm"></div><div class="face tp"></div></div><div class="shape prism-1 pri-1 arm-pri-1"><div class="face ft"></div><div class="face bk"></div><div class="face-wrapper rt"><div class="face"></div></div><div class="face-wrapper lt"><div class="face"></div></div><div class="face bm"></div></div><div class="shape prism-1 pri-1 arm-pri-2"><div class="face ft"></div><div class="face bk"></div><div class="face-wrapper rt"><div class="face"></div></div><div class="face-wrapper lt"><div class="face"></div></div><div class="face bm"></div></div><div class="shape cuboid-1 cub-1 sholder-1"><div class="face bk"></div><div class="face tp"></div></div><div class="shape cuboid-1 cub-1 sholder-2"><div class="face bk"></div><div class="face bm"></div><div class="guard1"></div><div class="guard2"></div></div><div class="shape cylinder-2 cyl-2 sholder-3"><div class="face tp"><!-- Generator: Adobe Illustrator 17.0.0, SVG Export Plug-In  --><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" width="96px" height="84.314px" viewBox="0 0 96 84.314" enable-background="new 0 0 96 84.314" xml:space="preserve"><defs></defs><path fill="#eeeeee" d="M96,48C96,21.49,74.51,0,48,0C21.49,0,0,21.49,0,48c0,14.514,6.451,27.513,16.631,36.314l1.839-0.016l0.161-0.265l11.043-23.338c-2.353-3.497-3.733-7.704-3.749-12.232h-0.002c0-0.013,0.001-0.026,0.001-0.039s-0.001-0.026-0.001-0.039h0.002c0.042-12.157,9.908-22,22.075-22s22.033,9.843,22.075,22h0.002c0,0.013-0.001,0.026-0.001,0.039s0.001,0.026,0.001,0.039h-0.002c-0.016,4.656-1.477,8.969-3.952,12.523l11.895,22.485l0.178,0.298l1.822-0.016C89.825,74.964,96,62.205,96,48z"></path></svg></div><div class="face side s0"></div><div class="face side s1"></div><div class="face side s2"></div><div class="face side s3"></div><div class="face side s4"></div><div class="face side s5"></div><div class="face side s6"></div><div class="face side s7"></div><div class="face side s8"></div><div class="face side s9"></div></div><div class="shape cylinder-2 cyl-2 sholder-4"><div class="face side s0"></div><div class="face side s1"></div><div class="face side s2"></div><div class="face side s3"></div><div class="face side s4"></div><div class="face side s5"></div><div class="face side s6"></div><div class="face side s7"></div><div class="face side s8"></div><div class="face side s9"></div><div class="face side s10"></div><div class="face side s11"></div><div class="face side s18"></div><div class="face side s19"></div></div><div class="shape cylinder-2 cyl-2 cyl-2-indirect-top"><div class="face bm"></div><div class="face tp"></div><div class="face side s0"></div><div class="face side s1"></div><div class="face side s2"></div><div class="face side s3"></div><div class="face side s4"></div><div class="face side s5"></div><div class="face side s6"></div><div class="face side s7"></div><div class="face side s8"></div><div class="face side s9"></div><div class="face side s10"></div><div class="face side s11"></div><div class="face side s12"></div><div class="face side s13"></div><div class="face side s14"></div><div class="face side s15"></div><div class="face side s16"></div><div class="face side s17"></div><div class="face side s18"></div><div class="face side s19"></div></div></div></div><div class="foot-center anim-base foot-anim"><div class="foot-top"><div class="shape prism-1 pri-1"><div class="face ft"></div><div class="face bk"></div><div class="face-wrapper rt"><div class="face"></div></div><div class="face-wrapper lt"><div class="face"></div></div><div class="face bm"></div></div><div class="shape cuboid-1 cub-1"><div class="face ft"></div><div class="face bk"></div><div class="face bm"></div><div class="face tp"></div></div><div class="shape prism-2 pri-2"><div class="face ft"></div><div class="face bk"></div><div class="face-wrapper rt"><div class="face"></div></div><div class="face-wrapper lt"><div class="face"></div></div><div class="face bm"></div></div></div><div class="foot-top2"><div class="shape prism-1 pri-1"><div class="face ft"></div><div class="face bk"></div><div class="face-wrapper rt"><div class="face"></div></div><div class="face-wrapper lt"><div class="face"></div></div><div class="face bm"></div></div><div class="shape cuboid-1 cub-1"><div class="face ft"></div><div class="face bk"></div><div class="face bm"></div><div class="face tp"></div></div><div class="shape prism-2 pri-2"><div class="face ft"></div><div class="face bk"></div><div class="face-wrapper rt"><div class="face"></div></div><div class="face-wrapper lt"><div class="face"></div></div><div class="face bm"></div></div></div><div class="foot-top3"><div class="shape prism-1 pri-1"><div class="face ft"></div><div class="face bk"></div><div class="face-wrapper rt"><div class="face"></div></div><div class="face-wrapper lt"><div class="face"></div></div><div class="face bm"></div></div><div class="shape cuboid-1 cub-1"><div class="face ft"></div><div class="face bk"></div><div class="face bm"></div><div class="face tp"></div></div><div class="shape prism-2 pri-2"><div class="face ft"></div><div class="face bk"></div><div class="face-wrapper rt"><div class="face"></div></div><div class="face-wrapper lt"><div class="face"></div></div><div class="face bm"></div></div></div><div class="foot-bottom cub-center"><div class="shape prism-1 pri-1"><div class="face ft"></div><div class="face bk"></div><div class="face-wrapper rt"><div class="face"></div></div><div class="face-wrapper lt"><div class="face"></div></div><div class="face bm"></div></div><div class="shape cuboid-1 cub-1"><div class="face ft"></div><div class="face bk"></div><div class="face bm"></div><div class="face tp"></div></div><div class="shape prism-2 pri-2"><div class="face ft"></div><div class="face bk"></div><div class="face-wrapper rt"><div class="face"></div></div><div class="face-wrapper lt"><div class="face"></div></div><div class="face bm"></div></div></div></div></div></div></div></div>';
        $("#r2Select").append(r2bg);
        var characterSelectTitle = $("<h4>",{
            id: "characterSelectTitle", 
            text: "Select Your Character"
        });
        $("#r2Select").append(characterSelectTitle);
        $("#characterSelectTitle").css({
            "font-family":"Star Jedi",
            "font-size":"48px",
            "position":"absolute",
            "top":"50px",
            "color":"yellow",
            "left":"100px"

        });

        var characterBox = $("<div>",{
            id: "characterBox"
        });

        var banner = $("<div>",{
            id: "charBanner"
        });

        $("#r2Select").append(characterBox);
        $(".content").append(banner);

        $("#characterBox").css({
            "right":"100px",
            "bottom":"300px",
            "position":"absolute",
            "z-index":"2000",
            "height":"400px",
            "width":"1000px",
            "flex":"1",

        });

        banner.css({
            "height":"200px",
            "width":"100%",
            "background-color":"white",
            "position":"absolute",
            "bottom":"75px",
            "z-index":"2005",
            "opacity":"0.5",
            "display":"none"
        });

        populateCharacters();

        var gifdiv = $('<div id="gifDiv">');
        $(".content").append(gifdiv);
    }

    // $("").click(function(){
        
    //     $("#charBanner").css("display","initial");
    //     console.log("hovered");
    // });

    $(document).on('mouseover', '.charSelMain', function() {
        $("#charBanner").fadeIn();
        statsDisplay(this['name']);
    });
    $(document).on('mouseleave', '.charSelMain', function() {
        $("#charBanner").css({"display":"none"});
        $("#charBanner").empty();
    });

    $(document).on('click', '.charSelMain', function() {
        $(".charSelMain").css("border-color","grey");
        $(this).css("border","1px solid red");
        var gif = '<iframe src="https://giphy.com/embed/3se2U9ZAJr7DW" width="600" height="400" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/fun-perfect-star-wars-3se2U9ZAJr7DW"></a></p>';
        $("#gifDiv").append(gif);
        choices = [];
        choices.push(jediAnakin, yoda, palpatine, obiWan);
        console.log(choices);
        switch (this['name']){
            case(jediAnakin.name):
                Object.assign(character,jediAnakin);
                choices.splice(choices.indexOf(jediAnakin),1);
                break;              
            case(yoda.name):
                Object.assign(character,yoda);
                choices.splice(choices.indexOf(yoda),1);
                break;
            case(palpatine.name):
                Object.assign(character,palpatine);
                choices.splice(choices.indexOf(palpatine),1);
                break;
            case(obiWan.name):
                Object.assign(character,obiWan);
                choices.splice(choices.indexOf(obiWan),1);
                break;
        }
        var startFightButton = $('<input/>').attr({
            type: 'button',
            id: 'startFightButton',
            value: 'Start',
            name: 'Start Fight'
        });
        $(".content").append(startFightButton);
        setTimeout(clearGif,2000);
    });

    $(document).on("click",'#startFightButton', function(){
        $(".content").empty();
        $("body").css({ 
            "background-image":'url("assets/imgs/bg/csbg.png")',
            "background-size":"cover"
        });
        Fight();
    });

    function clearGif(){
        $("#gifDiv").empty();
    }
    //<iframe src="https://giphy.com/embed/3se2U9ZAJr7DW" width="480" height="230" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/fun-perfect-star-wars-3se2U9ZAJr7DW">via GIPHY</a></p>

    function statsDisplay(name){
        switch (name){
            case "Master Yoda":
            var charName = $('<h1>').text(name);
            var charHealth = $('<h3>').text("Life Force: " + window['yoda'].health);
            var charAttack = $('<h3>').text("Attack Power: " + window['yoda'].attack);
            var charCounter = $('<h3>').text("Counter-Attack Power: " + window['yoda'].counterAttack);
            var charQuote = $('<h4>').text(window['yoda'].tagLine);
            $("#charBanner").append(charName);
            $("#charBanner").append(charHealth);
            $("#charBanner").append(charAttack);
            $("#charBanner").append(charCounter);
            $("#charBanner").append(charQuote);
            break;

            case "Master Kenobi":
            var charName = $('<h1>').text(name);
            var charHealth = $('<h3>').text("Life Force: " + window['obiWan'].health);
            var charAttack = $('<h3>').text("Attack Power: " + window['obiWan'].attack);
            var charCounter = $('<h3>').text("Counter-Attack Power: " + window['obiWan'].counterAttack);
            var charQuote = $('<h3>').text(window['obiWan'].tagLine);
            $("#charBanner").append(charName);
            $("#charBanner").append(charHealth);
            $("#charBanner").append(charAttack);
            $("#charBanner").append(charCounter);
            $("#charBanner").append(charQuote);
            break;

            case "Sheev Palpatine":
            var charName = $('<h1>').text(name);
            var charHealth = $('<h3>').text("Life Force: " + window['palpatine'].health);
            var charAttack = $('<h3>').text("Attack Power: " + window['palpatine'].attack);
            var charCounter = $('<h3>').text("Counter-Attack Power: " + window['palpatine'].counterAttack);
            var charQuote = $('<h4>').text(window['palpatine'].tagLine);
            $("#charBanner").append(charName);
            $("#charBanner").append(charHealth);
            $("#charBanner").append(charAttack);
            $("#charBanner").append(charCounter);
            $("#charBanner").append(charQuote);
            break;

            case "Anakin Skywalker":
            var charName = $('<h1>').text(name);
            var charHealth = $('<h3>').text("Life Force: " + window['jediAnakin'].health);
            var charAttack = $('<h3>').text("Attack Power: " + window['jediAnakin'].attack);
            var charCounter = $('<h3>').text("Counter-Attack Power: " + window['jediAnakin'].counterAttack);
            var charQuote = $('<h4>').text(window['jediAnakin'].tagLine);
            $("#charBanner").append(charName);
            $("#charBanner").append(charHealth);
            $("#charBanner").append(charAttack);
            $("#charBanner").append(charCounter);
            $("#charBanner").append(charQuote);
            break;
        }
    }

    function Fight(){

        var characterBox = $("<div>",{
            id: "userBox"
        });
        var charInfo = $("<div>",{
            id: "charInfo"
        });
       
        

        $(".content").append(characterBox);
        $(".content").append(charInfo);

        $('<p>', {
            text: character.name,
            id: "chrName"
        }).appendTo(charInfo);
        $('<p>', {
            text: "Life Force: " + character.health,
            id: "chrHealth"
        }).appendTo(charInfo);
        $('<p>', {
            text: "Attack Power: " + character.attack,
            id: "chrAttack"
        }).appendTo(charInfo);
        $('<p>', {
            text: "CounterAttack: " + character.counterAttack,
            id: "chrCounterAttack"
        }).appendTo(charInfo);
        

        $("#userBox").css({
            "left":"20%",
            "bottom":"33%",
            "position":"absolute",
            "z-index":"1",
            "height":"400px",
            "width":"250px",
            "flex":"1",

        });
        $("p").css({
            "text-align":"center",
            "font-family":'Star Jedi',
            "color":"yellow"
        });
        $("#charInfo").css({
            "left":"20%",
            "bottom":"10%",
            "position":"absolute",
            "z-index":"1",
            "height":"200px",
            "width":"250px",
            "flex":"1",
        });
        characterButtonMaker(character, "#userBox", "userChar");
        ChooseOpponent();
        $(document).on("click",".defenderBtns",function(){
            var choice = this;
            $("#enemyBox").empty();
            $("#enemy1Info").empty();
            $("#enemy2Info").empty();
            $("#enemy3Info").empty();
            $("#enemySelectInstructions").remove();
            $(".content").append(choice);
            $(choice).css({
                "right":"20%",
                "bottom":"33%",
                "position":"absolute",
                "z-index":"1",
                "height":"400px"
            });
            switch (choice.name){
                case(jediAnakin.name):
                    popEnemyStats("enemy1Info",jediAnakin);
                    Object.assign(defender,jediAnakin);
                    break;
                case(yoda.name):
                    popEnemyStats("enemy1Info",yoda);
                    Object.assign(defender,yoda);
                    break;
                case(obiWan.name):
                    popEnemyStats("enemy1Info",obiWan);
                    Object.assign(defender,obiWan);
                    break;
                case(palpatine.name):
                    popEnemyStats("enemy1Info",palpatine);
                    Object.assign(defender,palpatine);
                    break;
            }
            var attackBtn = $('<input/>').attr({
                type: 'button',
                class: 'attackBtn',
                value: 'Attack',
                name: 'Attack Button'
            });
            var escapeBtn = $('<input/>').attr({
                type: 'button',
                class: 'escapeBtn',
                value: 'Escape',
                name: 'Escape Button'
            });
            $(".content").append(attackBtn);
            $(".content").append(escapeBtn);
            $(".attackBtn").css({
                "font-family":'Star Jedi',
                "color":"yellow",
                "background":"transparent",
                "border":"2px yellow solid",
                "right":"50%",
                "bottom":"55%",
                "position":"absolute",
                "z-index":"1",
                "height":"100px",
                "width":"auto",
                "font-size":"24px"
            });
            $(".escapeBtn").css({
                "font-family":'Star Jedi',
                "color":"yellow",
                "background":"transparent",
                "border":"2px yellow solid",
                "right":"50%",
                "bottom":"40%",
                "position":"absolute",
                "z-index":"1",
                "height":"100px",
                "width":"auto",
                "font-size":"24px"
            });
        });

        $(document).on("click",".attackBtn", function(){
            defender.health -= character.attack;
            character.attack += character.attackIncrement;
            if (defender.health <= 0){
                $("#chrAttack").text("Attack Power: " + character.attack);
                defender.health = 0;
                $("#eneHealth").text("Life Force: " + defender.health);
                switch (defender.name){
                    case ("Anakin Skywalker"):
                    choices.splice(choices.indexOf(jediAnakin),1);
                    break;
                    case ("Master Yoda"):
                    choices.splice(choices.indexOf(yoda),1);
                    break;
                    case ("Master Kenobi"):
                    choices.splice(choices.indexOf(obiWan),1);
                    break;
                    case ("Sheev Palpatine"):
                    choices.splice(choices.indexOf(palpatine),1);
                    break;
                }
                if (choices.length == 0){
                    Win();
                }
                else{
                    ChooseOpponent(); 
                }  
            }
            else{
                character.health -= defender.counterAttack;
                if (character.health <= 0){
                    Lose();
                }
                $("#chrAttack").text("Attack Power: " + character.attack);
                $("#chrHealth").text("Life Force: " + character.health);
                $("#eneHealth").text("Life Force: " + defender.health);
            }
        });

        $(document).on("click",".escapeBtn", function(){
            ChooseOpponent();
        });
    }

    function ChooseOpponent(){
        $(".attackBtn").remove();
        $(".escapeBtn").remove();
        $(".defenderBtns").remove();
        $("#enemy1Info").remove();
        $("#enemyBox").remove();
        if (choices.length == 3){
            var enemy1Info = $("<div>",{
                id: "enemy1Info"
            });
            var enemy2Info = $("<div>",{
                id: "enemy2Info"
            });
            var enemy3Info = $("<div>",{
                id: "enemy3Info"
            });
            $(".content").append(enemy1Info);
            $(".content").append(enemy2Info);
            $(".content").append(enemy3Info);
        }
        else if (choices.length == 2){
            var enemy1Info = $("<div>",{
                id: "enemy1Info"
            });
            var enemy2Info = $("<div>",{
                id: "enemy2Info"
            });
            $(".content").append(enemy1Info);
            $(".content").append(enemy2Info);
        }
        else {
            var enemy1Info = $("<div>",{
                id: "enemy1Info"
            });
            $(".content").append(enemy1Info);
        }
        $("#enemy1Info").css({
            "right":"20%",
            "bottom":"10%",
            "position":"absolute",
            "z-index":"1",
            "height":"200px",
            "width":"250px",
            "flex":"1",
        });
        $("#enemy2Info").css({
            "right":"634px",
            "bottom":"10%",
            "position":"absolute",
            "z-index":"1",
            "height":"200px",
            "width":"250px",
            "flex":"1",
        });
        $("#enemy3Info").css({
            "right":"884px",
            "bottom":"10%",
            "position":"absolute",
            "z-index":"1",
            "height":"200px",
            "width":"250px",
            "flex":"1",
        });
        var enemyBox = $("<div>",{
            id: "enemyBox"
        });

        $(".content").append(enemyBox);

        $("#enemyBox").css({
            "right":"20%",
            "bottom":"33%",
            "position":"absolute",
            "z-index":"1",
            "height":"400px",
            "width":"750px",
            "display":"flex",
            "justify-content":"flex-end"
        });
        var i = choices.length;
        choices.forEach(function(c){
            characterButtonMaker(c, "#enemyBox", "Enemy");
            popEnemyStats("enemy" + i + "Info",c);
            i--;
        });
        $("p").css({
            "text-align":"center",
            "font-family":'Star Jedi',
            "color":"yellow",
            "font-size":"20px"
        });
        $('<h1>', {
            text:"Click An Enemy to Begin",
            id:"enemySelectInstructions"
        }).appendTo(".content");
        $("#enemySelectInstructions").css({
            "font-family":'Star Jedi',
            "color":"yellow"
        });
    }

    function popEnemyStats(box, enemy){
        $('<p>', {
            text: enemy.name,
            id: "eneName"
        }).appendTo("#"+box);
        $('<p>', {
            text: "Life Force: " + enemy.health,
            id: "eneHealth"
        }).appendTo("#"+box);
        $('<p>', {
            text: "Attack Power: " + enemy.attack,
            id: "eneAttack"
        }).appendTo("#"+box);
        $('<p>', {
            text: "CounterAttack: " + enemy.counterAttack,
            id: "eneCounterAttack"
        }).appendTo("#"+box);
        $("p").css({
            "text-align":"center",
            "font-family":'Star Jedi',
            "color":"yellow",
            "font-size":"20px"
        });
    }

    function Win(){
        $(".content").empty();
        $("<h1>").attr({
            id: "winText"
        }).text("You Won!").appendTo(".content");
        $("#winText").css({
            "right":"43%",
            "top":"40%",
            "font-family":'Star Jedi',
            "color":"yellow",
            "position":"absolute"
        });
        var playAgain = $('<input/>').attr({
            type: 'button',
            id: 'playAgain',
            value: 'Play Again',
            name: 'Play Again Button'
        });
        $(".content").append(playAgain);
        $("#playAgain").css({
            "background":"transparent",
            "border":"2px solid yellow",
            "font-family":"Star Jedi",
            "top":"50%",
            "right":"45%",
            "position":"absolute",
            "color":"yellow"
        });
        $(document).on("click","#playAgain",function(){
            characterSelect();
        });
    }

    function Lose(){
        $(".content").empty();
        $("<h1>").attr({
            id: "lossText"
        }).text("You Lost...").appendTo(".content");
        $("#lossText").css({
            "right":"43%",
            "top":"40%",
            "font-family":'Star Jedi',
            "color":"yellow",
            "position":"absolute"
        });
        var playAgain = $('<input/>').attr({
            type: 'button',
            id: 'playAgain',
            value: 'Play Again',
            name: 'Play Again Button'
        });
        $(".content").append(playAgain);
        $("#playAgain").css({
            "background":"transparent",
            "border":"2px solid yellow",
            "font-family":"Star Jedi",
            "top":"50%",
            "right":"47%",
            "position":"absolute",
            "color":"yellow"
        });
        $(document).on("click","#playAgain",function(){
            characterSelect();
        });
    }
    //Attack
    //Change Attack Strength
    //screen transition
    //check for win/loss
    //restart
    //quit
