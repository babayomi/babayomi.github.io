
$("#grayButton").on("click",grayScheme);
$("#yellowButton").on("click",yellowScheme);

function grayScheme(){
    $("body").css("background-color","#414143");
    $("body").css("color","white");
    $(".intro-style").css("background-color","#69c5ac");
    $(".logo").attr("src","img/GGI-Logo-10.png");
}

function yellowScheme(){
    $("body").css("background-color","#ffd97a");
    $("body").css("color","#414143");
    $(".intro-style").css("background-color","white");
}
