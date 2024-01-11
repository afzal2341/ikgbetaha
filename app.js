let userScore= 0;
let compScore= 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara= document.querySelector("#user-score"); 
const compScorePara= document.querySelector("#comp-score");
//generate computer choice
const getCompChoice = ()=>{
    options=["rock", "paper", "scissors"];
    const randomIdx= Math.floor(Math.random()*3);
    // console.log(randomIdx);
    return options[randomIdx];
    
};

const drawGame= ()=>{
    console.log("Game was draw.");
    msg.innerText="Game was Draw. Play Again.";
    msg.style.backgroundColor= "#081b31";

}
const showWinner= (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        console.log("You win!");
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green"; 
        userScorePara.innerText=userScore;
    }
    else{
        compScore++;
        console.log("You lose");
        msg.innerText=`You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        compScorePara.innerText=compScore;
    }
}

const playGame= (userChoice)=>{
    console.log("user choice = ",userChoice);
    //Generate computer choice
    const compChoice = getCompChoice(); 
    console.log("Comp choice= ",compChoice);

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





    // if(userChoice===compChoice){
    //     console.log("Game draw");
    //     //Draw

    //     let msg=document.querySelector("#msg");
    //     msg.innerText="Match Draw";
    // }
    // else{
    //     if(userChoice==="rock"){
    //         if(compChoice==="paper"){
    //             console.log("You loss");
    //             let msg=document.querySelector("#msg");
    //             msg.innerText="You Loss";
    //             //loss
    //         }
    //         else{
    //             console.log("You win");
    //             let msg=document.querySelector("#msg");
    //             msg.innerText="You win";
    //             //win
    //         }
    //     }
    //     if(userChoice==="paper"){
    //         if(compChoice==="scissors"){
    //             console.log("You loss");
    //             let msg=document.querySelector("#msg");
    //             msg.innerText="You Loss";
    //             //loss
    //         }
    //         else{
    //             console.log("You win");
    //             let msg=document.querySelector("#msg");
    //             msg.innerText="You Win";
                
    //             //win
    //         }
    //     }
    //     if(userChoice==="scissors"){
    //         if(compChoice=="rock"){
    //             console.log("You loss");
    //             let msg=document.querySelector("#msg");
    //             msg.innerText="You Loss";
    //             //loss
    //         }
    //         else{
    //             console.log("You win");
    //             let msg=document.querySelector("#msg");
    //             msg.innerText="You Win";
                
    //             //win
    //         }
    //     }
    // }
};

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("choices are clicked", userChoice);
        playGame(userChoice);
    });
}); 