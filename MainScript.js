//Test clone
//still Studying

window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})



const SeaAnswers = ["a0" , "a1" , "at" , "a3"]


function AnswerChecker(){
    let x = event.target ;
    console.log(x.id);
    for(i = 0 ; i < SeaAnswers.length ; i++){
        if(x.id === "at"){
            document.getElementById("at").style.backgroundColor = "green"
        }
    }
}