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



let Result = 0 ;

function AnswerCheckerQ1(){

    let ChAnswer = event.target ;
    console.log(ChAnswer.id);
        if(ChAnswer.id === "Ta"){
            document.getElementById("Ta").style.backgroundColor = "green";
            Result = Result + 10
            transitionToPage('SeasQ2.html');
        }

        else{
            transitionToPage('SeasQ2.html');

        }
    
}


