let userScore= 0;
let compScore= 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara= document.querySelector("#user-score"); 
const compScorePara= document.querySelector("#comp-score");
const yourPick= document.querySelector(".your-pick");
const compPick= document.querySelector(".comp-pick");

const displayBothChoices= (userChoice,compChoice)=>{
    if(userChoice==="rock"){
        yourPick.innerHTML=
        `<div id="rock">
            <img src="rock.jpg" alt="">
        </div>`
    }
    else if(userChoice==="paper"){
        yourPick.innerHTML=
        `<div id="paper">
            <img src="paper.jpg" alt="">
        </div>`
    }
    else{
        yourPick.innerHTML=
        `<div id="scissors">
            <img src="scissors.jpg" alt="">
        </div>`
    }

    if(compChoice==="rock"){
        compPick.innerHTML=
        `<div id="rock">
            <img src="rock.jpg" alt="">
        </div>`
    }
    else if(compChoice==="paper"){
        compPick.innerHTML=
        `<div id="paper">
            <img src="paper.jpg" alt="">
        </div>`
    }
    else{
        compPick.innerHTML=
        `<div id="scissors">
            <img src="scissors.jpg" alt="">
        </div>`
    }
}
        
//generate computer choice
const getCompChoice = ()=>{
    options=["rock", "paper", "scissors"];
    const randomIdx= Math.floor(Math.random()*3);
    // console.log(randomIdx);
    return options[randomIdx];
};

const drawGame= ()=>{
    console.log("Game was draw.");
    msg.innerText="Game was Draw.";
    msg.style.backgroundColor= "#081b31";
}

const showWinner= (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        console.log("You win!");
        msg.innerText=`You Win!`;
        msg.style.backgroundColor="green"; 
        userScorePara.innerText=userScore;
    }
    else{
        compScore++;
        console.log("You loss");
        msg.innerText=`You loss.`;
        msg.style.backgroundColor="red";
        compScorePara.innerText=compScore;
    }
}

const playGame= (userChoice)=>{
    console.log("user choice = ",userChoice);
    //Generate computer choice
    const compChoice = getCompChoice(); 
    console.log("Comp choice= ",compChoice);
    displayBothChoices(userChoice,compChoice);
    
    if(userChoice=== compChoice){
        //Draw Game
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //paper, scissors
            userWin= compChoice=== "paper" ?false:true;
        }else if(userChoice==="paper"){
            //rock,scissors
            userWin= compChoice=== "scissors"?false:true;
        }else{
            //rock,paper
            userWin= compChoice=== "rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("choices are clicked", userChoice);
        playGame(userChoice);
    });
}); 
