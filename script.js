//Make a function that randomly return either Rock,paper,or scissors.         
function getComputerChoice(){ 
    const choice = ["rock","paper","scissors"]
    let randomSelection = choice[Math.floor(Math.random()*3)]
    return randomSelection
    
}
function playRound(playerSelection,computerSelection){
    if(playerSelection == "rock" && computerSelection =="paper"){
        console.log('You lose!,Paper beats Rock')
    }
    else if(playerSelection == "paper" && computerSelection =="rock"){
        console.log('You win!,Paper beats Rock')
    }
    else if(playerSelection == "scissors" && computerSelection == "paper"){
        console.log('You Win!,Scissors beats Paper')
    }
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        console.log('You Lose!,Scissors beats Paper')
    }
    else if(playerSelection == "rock" && computerSelection == "scissors"){
        console.log('You Win!,Rock beats Scissors')
    }
    else if(playerSelection == "scissors" && computerSelection == "rock"){
        console.log('You Lose!,Rock beats Scissors')
    }
    else if(playerSelection == "rock" && computerSelection == "rock" || 
    playerSelection == "scissors" && computerSelection == "scissors" ||
    playerSelection == "paper" && computerSelection == "paper"){
        console.log("It's a tie!")
    }
   
}
const playerSelection = prompt('Rock,Paper,Scissors ?','').toLowerCase();
const computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection))