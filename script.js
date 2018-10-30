function myFunction(x) {
    x.classList.toggle("change");
};

function doStuff(){
    var mobilenav = document.querySelector(".mobilenav");
    mobilenav.classList.toggle("mobtog");
};

window.onload = function(){
    var floatingimg = document.querySelector(".floatingimg");

    floatingimg.setAttribute(
        "style", "transform: translateX(0vw); opacity: 1;"
    );

    var floatingtext = document.querySelector(".floatingtext");
    floatingtext.setAttribute(
        "style", "transform: translateX(0vw); opacity: 1;" 
    )

};

window.onscroll = function(){
    funFuncti()
};

function funFuncti(){   
        var under = document.querySelector(".under");
        if(document.body.scrollTop > under.scrollTop
            || document.documentElement.scrollTop > under.scrollTop){
            var brownimg = document.querySelector(".brownimg");
            brownimg.setAttribute(
                "style", "transform: translateX(0vw);"
            )
        }
}















// function cardScroll(){
//     var cardSection = document.querySelector(".cardsection");
//     if(document.body.scrollTop + under.scrolltop > cardSection.scrollTop
//         || document.documentElement.scrollTop + under.scrolltop > cardSection.scrollTop){
//         var card = document.querySelector(".card");
//         card.setAttribute(
//             "style", "transform: translateX(0vw);"
//         )
//     }
// }