const readlineSync = require('readline-sync');
const colors = require('colors');

function main() {
  console.log('\n***** Welcome to math games, Paul! *****\n'.rainbow.inverse);
  let response = readlineSync.question('Are you ready to play? (y/n) ');
  if (response === 'y') {
    let gameOn = true;
    while (gameOn) {
      console.log('\nGreat!  Here we go...');

      let probCount = 1;
      let correctCount = 0;
      let wrongCount = 0;
    
      while(probCount <= 20) {
        let x = Math.floor(Math.random() * 13);
        let y = Math.floor(Math.random() * 13);
        let rightAnswer = x * y;
    
        let answer = readlineSync.question(`\n${x} x ${y} = `);
        if (answer == rightAnswer) {
          console.log('That is correct!'.green.bold);
          correctCount++;
        } else {
          console.log(`Sorry, the correct answer was ${rightAnswer}`.red.bold);
          wrongCount++;
        }
        probCount++;
      }
    
      console.log('\nGreat job, Paul! You answered '.blue.bold + colors.green.bold.inverse('%s') + ' correctly and missed '.blue.bold + colors.red.bold.inverse('%s'), correctCount, wrongCount);
      
      let again = readlineSync.question('\nWould you like to play again? (y/n) '.bold.inverse);
      console.clear();
      if (again !== 'y'){
        gameOn = false;
        console.log('\nNice work on your multiplication facts today, Paul.  Please come back soon!\n');
      }
    }
    
  }
  else console.log('\nPlease come back soon. I love to play!\n');
}

console.clear(); 
main();