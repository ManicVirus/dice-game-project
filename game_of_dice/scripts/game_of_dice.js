document.addEventListener("DOMContentLoaded", function() {
    const playerDice1 = document.getElementById('playerDice1');
    const playerDice2 = document.getElementById('playerDice2');
    const computerDice1 = document.getElementById('computerDice1');
    const computerDice2 = document.getElementById('computerDice2');
    const playerScoreDisplay = document.getElementById('playerScore');
    const playerTotalDisplay = document.getElementById('playerTotal');
    const computerScoreDisplay = document.getElementById('computerScore');
    const computerTotalDisplay = document.getElementById('computerTotal');
    const rollButton = document.getElementById('rollButton');
    const resetButton = document.getElementById('resetButton');
    const winnerMessage = document.getElementById('winnerMessage');
    const helpButton = document.getElementById('helpButton');
    const popup = document.querySelector('.popup');
    const closeButton = document.querySelector('.close');
  
    let playerTotal = 0;
    let computerTotal = 0;
    let rolls = 0;
  
    rollButton.addEventListener('click', function() {
      rolls++;
      const playerDice1Value = Math.floor(Math.random() * 6) + 1;
      const playerDice2Value = Math.floor(Math.random() * 6) + 1;
      const computerDice1Value = Math.floor(Math.random() * 6) + 1;
      const computerDice2Value = Math.floor(Math.random() * 6) + 1;
  
      playerDice1.style.backgroundImage = `url('images/dice-six-faces-${playerDice1Value}.svg')`;
      playerDice2.style.backgroundImage = `url('images/dice-six-faces-${playerDice2Value}.svg')`;
      computerDice1.style.backgroundImage = `url('images/dice-six-faces-${computerDice1Value}.svg')`;
      computerDice2.style.backgroundImage = `url('images/dice-six-faces-${computerDice2Value}.svg')`;

      
  
      const playerScore = calculateScore(playerDice1Value, playerDice2Value);
      const computerScore = calculateScore(computerDice1Value, computerDice2Value);
  
      playerScoreDisplay.textContent = playerScore;
      computerScoreDisplay.textContent = computerScore;
  
      playerTotal += playerScore;
      computerTotal += computerScore;
  
      playerTotalDisplay.textContent = playerTotal;
      computerTotalDisplay.textContent = computerTotal;
  
      if (rolls === 3) {
        rollButton.disabled = true;
        resetButton.disabled = false;
        determineWinner();
      }
    });
  
    resetButton.addEventListener('click', function() {
      playerTotal = 0;
      computerTotal = 0;
      rolls = 0;
  
      playerScoreDisplay.textContent = '0';
      computerScoreDisplay.textContent = '0';
      playerTotalDisplay.textContent = '0';
      computerTotalDisplay.textContent = '0';
  
      playerDice1.style.backgroundImage = `url('images/dice-six-faces-1.svg')`;
      playerDice2.style.backgroundImage = `url('images/dice-six-faces-1.svg')`;
      computerDice1.style.backgroundImage = `url('images/dice-six-faces-1.svg')`;
      computerDice2.style.backgroundImage = `url('images/dice-six-faces-1.svg')`;
  
      rollButton.disabled = false;
      resetButton.disabled = true;
      winnerMessage.textContent = '';
    });
    helpButton.addEventListener('click', () => {
        popup.style.display = 'block';
    });
  
    closeButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });
  
    window.addEventListener('click', (e) => {
        if (e.target === popup) {
        popup.style.display = 'none';
        }
    });
  
    function calculateScore(die1, die2) {
      if (die1 === 1 || die2 === 1) {
        return 0;
      } else if (die1 === die2) {
        return (die1 + die2) * 2;
      } else {
        return die1 + die2;
      }
    }
  
    function determineWinner() {
      let winner = '';
      if (playerTotal > computerTotal) {
        winner = 'Player';
      } else if (playerTotal < computerTotal) {
        winner = 'Computer';
      } else {
        winner = 'It\'s a tie!';
      }
      winnerMessage.textContent = `The winner is: ${winner}`;
    }


  
  });




