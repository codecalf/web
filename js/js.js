function Smoothscroll(){
    $(".nav_element").click(function(event){
    event.preventDefault();
    $('html, body').animate({
    scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});
};
function Smoothscrollphp(href) {
    $('html, body').animate({
        scrollTop: $( $("#"+href) ).offset().top
    }, 500);
};
function ScrollFX(){
    var lrf_scrolltop = $(window).scrollTop();
    var lrf_height = $(window).height();
    if(1300 <= lrf_scrolltop){
        $(".lrf_nav").removeClass("lrf_nav_black");
    }else{
        $(".lrf_nav").addClass("lrf_nav_black");
    };
    if(700 <= lrf_scrolltop){
        if(1300 <= lrf_scrolltop){
            $(".lrf_nav").removeClass("lrf_nav_black");
            $(document).attr("title", "perclf.de | Portfolio");
        }else{
            $(".lrf_nav").addClass("lrf_nav_black");
            $(document).attr("title", "perclf.de | About");
        };
    }else{
        $(".lrf_nav").removeClass("lrf_nav_black");
        $(document).attr("title", "perclf.de | Start");
    };
    if(300 <= lrf_scrolltop){
        $(".about_logo").addClass("about_logo_active")
        $(".lrf_content_about_container").addClass("lrf_content_about_container_active")
    }else{
        $(".lrf_content_about_container").removeClass("lrf_content_about_container_active")
        $(".about_logo").removeClass("about_logo_active")
    };
};

$(document).ready(function(){
    Smoothscroll();
    ScrollFX();
    $(window).resize(function() {
    });
    $(window).scroll(function() {
        ScrollFX();
    });
});
