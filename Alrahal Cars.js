window.addEventListener('scroll',reveal);
function reveal(){
    var reveals=document.querySelectorAll('section');
    for(var i=0;i<reveals.length;i++){
        var windowheight=window.innerHeight;
        var revealtop=reveals[i].getBoundingClientRect().top;
        var revealpoint=100;
        if(revealtop<windowheight-revealpoint){
            reveals[i].classList.add('active');
        }
        /*else{
            reveals[i].classList.remove('active');
        }*/
    }
}
$(document).ready(function()
{
    $(".gallery").hover(function(){

        $(this).find("h5").css("color","yellow");
    },
    function(){
        $(this).find("h5").css("color","white");
    }

    );
});