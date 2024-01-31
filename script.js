let userScore = 0;
let compScore = 0;

let paracomp = document.querySelector("#comp-score");
let parauser = document.querySelector("#user-score");

let msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
const drawGame = (userChoice) => {
    msg.innerText = `Game Draw both Choses ${userChoice}`;
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, compChoice, userChoice) =>{
    if(userWin){
        userScore++;
        parauser.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        paracomp.innerText = compScore;
        msg.innerText = `You Lose !!! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("compu choice = ", compChoice);
    let userWin = true;
    if(userChoice === compChoice){
        drawGame(userChoice);
    } else{
        if(userChoice==="rock"){
           userWin = compChoice === "paper"? false: true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false: true;
        }else{
            userWin = compChoice === "rock" ? false: true;
        }
        showWinner(userWin,compChoice,userChoice);
    }
    
}
choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});