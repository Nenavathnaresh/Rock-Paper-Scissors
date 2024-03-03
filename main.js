let userScore = 0
let compScore = 0 

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector('#msg')
const userScorePara = document.querySelector('#user-score')
const compScorePara = document.querySelector('#com-score')

const genCompChoice = ()=>{
    var options = ['rock', 'paper', 'scissors']
    const randInd = Math.floor(Math.random() * 3)
    return options[randInd]
}

const drawGame = ()=>{
    console.log('game was draw');
    msg.innerText = 'game was draw Play again'
    msg.style.backgroundColor = " #081b31"
}

const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        console.log('You win!');
        userScore++
        userScorePara.innerText = userScore
        msg.innerText = `You win! Yous ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = 'green'
    }
    else{
        console.log("You lose");
        compScore++
        compScorePara.innerText = compScore
        msg.innerText = `You lose ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = 'red'
    }

}

const playGame = (userChoice)=>{
    console.log('userchoice',userChoice);

    // genarate comp choice 
    const compChoice = genCompChoice()
    console.log('compChoice', compChoice);

    if(userChoice === compChoice){
        drawGame()
    }
    else{
        let userWin = true;
        if(userChoice === 'rock'){
            // scissors, paper
            userWin = compChoice === 'paper' ? false : true;
        }
        else if (userChoice === 'paper'){
            // rock scissors
            userWin = compChoice === 'scissors' ? false : true;
        }
        else{
            //paper rock 
            userWin = compChoice === 'rock' ? false : true ;
        }
        showWinner(userWin, userChoice, compChoice)
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute('id')
        // console.log('choice was clicked ', userChoice);
        playGame(userChoice)
    })
})