console.log('welcome to tic tac toe!');
let ting = new Audio('ting.mp3');
let gameOver = new Audio('gameover.mp3');
let boxText = document.getElementsByClassName('box');
let reset = document.getElementById('reset');
let turn="X"
let isGameOver = false;
console.log(boxText[0].innerHTML)
const makeAllClear = ()=>{
    Array.from(boxText).forEach(element => {
        element.innerHTML=""
    });
}
reset.addEventListener('click',()=>{
    makeAllClear();
    document.getElementById('gif').style.opacity=0;
    turn='X';
    document.getElementById('turn').innerHTML='Turn for X';
    document.getElementsByTagName('img')[0].style.width="0px";
    document.getElementsByClassName('line')[0].style.width="0vw";

})
const changeTurn = ()=>{
   if (turn=="X"){
    turn="O"
   }
   else{
    turn="X"
   }
}
Array.from(boxText).forEach(element=>{
    element.addEventListener('click',()=>{
        if (element.innerHTML==""){
            ting.play();
            element.innerHTML=turn;
            checkWin();
            changeTurn();
            if (isGameOver === false){
            document.getElementById('turn').innerHTML='Turn for '+turn;
            }
        }
    })
})
const checkWin = ()=>{
    let boxText = document.getElementsByClassName('box');
    let wins = [
        [0,1,2,11.2,6.3,0],
        [3,4,5,11.2,14.3,0],
        [6,7,8,11.2,22.3,0],
        [0,3,6,3.2,14.3,90],
        [1,4,7,11.2,14.3,90],
        [2,5,8,19.2,14.3,90],
        [0,4,8,11.2,14.3,45],
        [2,4,6,11.2,14.3,-45]
    ]
    wins.forEach(e=>{
       if((boxText[e[0]].innerHTML === boxText[e[1]].innerHTML)&&(boxText[e[2]].innerHTML === boxText[e[1]].innerHTML)&&(boxText[e[0]].innerHTML !== "")){
           document.getElementById('turn').innerHTML=boxText[e[0]].innerHTML+' Won';
           isGameOver = true;
           gameOver.play();
           document.getElementById('gif').style.opacity=1;
           document.getElementsByTagName('img')[0].style.width="200px";
           document.getElementsByClassName('line')[0].style.width="25vw";
           document.getElementsByClassName('line')[0].style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;

       }
    })
}