$(document).ready(function(){

    $surface=$('.surface');
    $car=$('.car');
    $img=$('.car img');
    let flag=true;
    const cars=['./assets/Img_05.png', './assets/Img_06.png']

    $(document).on('keypress',function(s){
        // console.log(s.which); // Key code for ENTER button - 13
        if(s.which==13){
            $($surface).toggleClass('moveRight');
            $($car).toggleClass('suspension');
        }
    })
// For key codes - https://www.freecodecamp.org/news/javascript-keycode-list-keypress-event-key-codes/

    $(document).on('keypress',function(s){
        // console.log(s.which); // Key code for SPACE button - 32
        if(s.which==32){
            if(flag){
                flag=false;
                $img.attr('src', cars[0]);
            }
            else{
                flag=true;
                $img.attr('src', cars[1]);
            }
        }
    })

});