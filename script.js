'use strict';

/*
//we  read the message from the html element
console.log(document.querySelector('.message').textContent);//Dom manuplation
//here we changed the content and again read the message...thius what dom manipulation ia all about
document.querySelector('.message').textContent='correct number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent='23';

document.querySelector('.guess').value=21;
console.log(document.querySelector('.guess').value);

*/

const displayMessage=function(message){
  document.querySelector('.message').textContent=message; 
}

let scrtnumber= Math.trunc(Math.random()*20)+1;

let score=20;
let highscore=0;

document.querySelector('.check').addEventListener(
    'click',function(){
     const guess= Number(document.querySelector('.guess').value);
     console.log(guess,typeof guess);
    
     //document.querySelector('.message').textContent='correct message';
    //when guess is no input
        if(!guess){
         
          displayMessage('no number');

        }else if(guess===scrtnumber){
       // document.querySelector('.number').textContent=scrtnumber;
        displayMessage('correct message');
        document.querySelector('.number').textContent=scrtnumber;
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
        
          if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
          }
         } else if(guess!==scrtnumber){

            if(score>1){
                displayMessage(guess > scrtnumber  ?'too high':'too low');
                score--;
                document.querySelector('.score').textContent=score;
                }else{
                    displayMessage('you lost the game');
                    document.querySelector('.score').textContent=0;
                }
          
          }
        
              
        //when there
   
        //when guess is too high
    /*  }else if(guess>scrtnumber){
        if(score>1){
        document.querySelector('.message').textContent='too high';
        score--;
        document.querySelector('.score').textContent=score;
        }else{
            document.querySelector('.message').textContent='you lost the game';
            document.querySelector('.score').textContent=0;
        }

        //when guess is too low
    }else if(guess<scrtnumber){

        if(score>1){
            document.querySelector('.message').textContent='too low';
            score--;
            document.querySelector('.score').textContent=score;
            }else{
                document.querySelector('.message').textContent='you lost the game';
                document.querySelector('.score').textContent=0;
            }
    }
    
    */
}
);

  document.querySelector('.again').addEventListener(
    'click',function(){
        score=20;
        scrtnumber= Math.trunc(Math.random()*20)+1;
      
        displayMessage('start gaming...');

        document.querySelector('.score').textContent=score;
        document.querySelector('.number').textContent='?';
        document.querySelector('.guess').value='';
        document.querySelector('body').style.backgroundColor='#222';
        document.querySelector('.number').style.width='15rem';
    }
  );
