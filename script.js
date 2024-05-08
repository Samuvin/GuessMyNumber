'use strict';

const secret_number = Math.trunc(Math.random()*20)+1;
let score=20;
document.querySelector('.number').textContent=secret_number;

document.querySelector('.check').addEventListener('click', ()=>
{
    const guess=Number(document.querySelector('.guess').value);
    if(!guess)
    {
        document.querySelector('.message').textContent='🚫No Secret_number!🚫'; 
    }
    else if(guess===secret_number)
    {
        document.querySelector('.message').textContent='🎉🎊Correct Number🎊🎉'
    }
    else if(guess>secret_number)
    {
        score--;
        document.querySelector('.message').textContent='📈Too High!!!'
    }
    else if(guess<secret_number)
    {
        score--;
        document.querySelector('.message').textContent='📉Too Low!!!'
    }
    if(score<=0)
    {
        document.querySelector('.message').textContent='💔You Lost The Game💔'
    }
    document.querySelector('.score').textContent=score;
})