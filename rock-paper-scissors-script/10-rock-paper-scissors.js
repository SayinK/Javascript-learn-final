let score = JSON.parse(localStorage.getItem('score')) || {wins:0,losses:0,ties:0};//converts JSON string back to an object (also this is a very quick way to write this code)

/*if (!score){ //this gives a defult score just in case score has null due to the reset score button
    score = {wins:0,losses:0,ties:0};
}*/


updateScoreElement();

function pickComputerMove() {
    let computerMove = '';
    const randomNumber = Math.random()
    if (randomNumber>=0 && randomNumber<(1/3)){
        computerMove = ('rock');
    }
    else if (randomNumber>=(1/3) && randomNumber<(2/3)){
        computerMove = ('paper');
    }
    else if (randomNumber>=(2/3)&&randomNumber<1){
        computerMove = ('scissors');
    }
    return computerMove; ///returning a value from a function; if there is nothing, function will return undefined; after return, the function ends 
}

function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';
    if (playerMove == 'scissors'){
        if(computerMove === 'rock'){
            result = 'You Win'
        }
        else if(computerMove === 'paper'){
            result = 'You Loose'
        }
        else if (computerMove ==='scissors')
        {
            result='Tie'
        }
    }
    else if (playerMove == 'paper'){
        if(computerMove === 'rock'){
            result = 'You Loose'
        }
        else if(computerMove === 'paper'){
            result = 'Tie'
        }
        else if (computerMove ==='scissors')
        {
            result='You Win'
        }
    }
    else if (playerMove =='rock'){
        const computerMove = pickComputerMove();
        if(computerMove === 'rock'){
            result = 'Tie'
        }
        else if(computerMove === 'paper'){
            result = 'You Loose'
        }
        else if (computerMove ==='scissors')
        {
            result='You Win'
        }
    }

    if (result === 'You Win'){
        score.wins = score.wins + 1;
    }
    else if (result === 'You Loose'){
        score.losses = score.losses + 1;
    }
    else if (result === 'Tie'){
        score.ties += 1;
    }

    localStorage.setItem('score',JSON.stringify(score)); //local storage only supports strings

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `you
<img src="rock-paper-scissor-img/${playerMove}-emoji.png" class="move-icon">
<img src="rock-paper-scissor-img/${computerMove}-emoji.png" class="move-icon">
computer`;
}

function updateScoreElement(){
    document.querySelector(".js-score")
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
}