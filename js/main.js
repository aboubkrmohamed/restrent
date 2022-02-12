$("#for-all").click(function(){ 
    $(".for-all").css({ opacity:"1"});
    $(".for-Salad").css({ opacity:"0"});
    $(".for-Starters").css({ opacity:"0"});
    $(".for-specialty").css({ opacity:"0"});
})

$("#Starters").click(function(){ 
    $(".for-all").css({ opacity:"0"});
    $(".for-Salad").css({ opacity:"0"});
    $(".for-Starters").css({ opacity:"1"});
    $(".for-specialty").css({ opacity:"0"});
})

$("#salad").click(function(){
    $(".for-all").css({ opacity:"0"});
    $(".for-Salad").css({ opacity:"1"});
    $(".for-Starters").css({ opacity:"0"});
    $(".for-specialty").css({ opacity:"0"});
})

$("#Specialty").click(function(){
    $(".for-all").css({ opacity:"0"});
    $(".for-Salad").css({ opacity:"0"});
    $(".for-Starters").css({ opacity:"0"});
    $(".for-specialty").css({ opacity:"1"});
})


$("#modi").click(function(){
    $("..for-undo").css({ opacity:"0"});
    $(".for-pariature").css({ opacity:"0"});
    $(".for-nosturm").css({ opacity:"0"});
    $(".for-iusto").css({ opacity:"0"});
    $(".for-modi").css({ opacity:"1"});
})


$("#Unde").click(function(){
    $(".for-undo").css({ opacity:"1"});
    $(".for-pariature").css({ opacity:"0"});
    $(".for-nosturm").css({ opacity:"0"});
    $(".for-iusto").css({ opacity:"0"});
    $(".for-modi").css({ opacity:"0"});
})

$("#pariatur").click(function(){
    $(".for-undo").css({ opacity:"0"});
    $(".for-pariature").css({ opacity:"1"});
    $(".for-nosturm").css({ opacity:"0"});
    $(".for-iusto").css({ opacity:"0"});
    $(".for-modi").css({ opacity:"0"});
})


$("#Nosturm").click(function(){
    $(".for-undo").css({ opacity:"0"});
    $(".for-pariature").css({ opacity:"0"});
    $(".for-nosturm").css({ opacity:"1"});
    $(".for-iusto").css({ opacity:"0"});
    $(".for-modi").css({ opacity:"0"});
})



$("#iusto").click(function(){
    $(".for-undo").css({ opacity:"0"});
    $(".for-pariature").css({ opacity:"0"});
    $(".for-nosturm").css({ opacity:"0"});
    $(".for-iusto").css({ opacity:"1"});
    $(".for-modi").css({ opacity:"0"});
})

  


 /* start section  gallery*/
var forphoto=Array.from(document.querySelectorAll("#photos"));
var forlowimges=document.getElementById("forlowimges");
var nextslide=document.getElementById("next");
var prevslide=document.getElementById("prev");
var closeslide=document.getElementById("closes");
var currnetindex=0;

for(var i=0;i<forphoto.length;i++)
{
    forphoto[i].addEventListener("click",function(eventInfo){
        currnetindex=forphoto.indexOf(eventInfo.target)
          var imgssrc=eventInfo.target.getAttribute("src"); 
          forlowimges.style.backgroundImage="url("+imgssrc+")";
          lowphoto.style.display="flex";

    })
        }

function nextslides ()
{
    currnetindex++;
    if(currnetindex==forphoto.length)
    {
currnetindex=0
    }
    var imgssrc=forphoto[currnetindex].getAttribute("src");
    forlowimges.style.backgroundImage="url("+imgssrc+")";
}
function prevslides () {

    currnetindex--;
    if (currnetindex<0)
    {
        currnetindex=forphoto.length-1;
    }
    var imgssrc=forphoto[currnetindex].getAttribute("src");
    forlowimges.style.backgroundImage="url("+imgssrc+")";
}
function closeslides () 
{
    lowphoto.style.display="none";
}
next.addEventListener("click",nextslides );
prev.addEventListener("click",prevslides );
closes.addEventListener("click",closeslides);
document.addEventListener("keydown",function(eventInfo)
{
if(eventInfo.keyCode==39)
{
    nextslides();
}
});


document.addEventListener("keyup",function(eventInfo)
{
if(eventInfo.keyCode==37)
{
prevslides();
}
else if(eventInfo.keyCode==27)
{
closeslides();   
}
});



/* end gallery*/

 new WOW().init();


    $("#loding").fadeOut(2000, function () {

        $("body").css("overflow", "auto")
    });


    $('.slider').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,


    });

    $('.multiple-items').slick({
        autoplay: true,

        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: false,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });

    let aboutOffsetTop = $("#about").offset().top;
    $(window).scroll(function () {


        let wScroll = $(window).scrollTop();
        if (wScroll > aboutOffsetTop - 450) {


            $("#topbar").css("display", "none");
            $(".navbar").css("top", "0");
            $(".navbar").css("backgroundColor", "rgba(0, 0, 0, 0.85)");
            $(".navbar").css("borderBottom", "1px solid #37332a");
            $(".back-to-top").fadeIn(500)




        }
        else {


            $("#topbar").css("display", "flex");
            $(".navbar").css("top", "40px");
            $(".navbar").css("backgroundColor", "rgba(12, 11, 9, 0.6)");
            $(".navbar").css("borderBottom", " 1px solid rgba(12, 11, 9, 0.6)");
            $(".back-to-top").fadeOut(500)


        }
    })

    $(".back-to-top").click(function () {

        $("html , body").animate({ scrollTop: 0 }, 2500)
    })

    $(".navbar-nav  a[href^='#']").click(function () {
        let aHref = $(this).attr("href");
        let sectionOffset = $(aHref).offset().top;
        $("html , body").animate({ scrollTop: sectionOffset }, 2000)


    })


