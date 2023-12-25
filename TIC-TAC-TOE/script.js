let boxes = document.querySelectorAll(".box");
let showMsg = document.querySelector("#showMsg");

let newGame = document.querySelector("#new-game");
let mesgContainer = document.querySelector(".win-msg-container");

let resetBtn = document.querySelector('#reset-btn')

let turn = true;
let winPatter = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [3, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("click");
    if (turn) {
      box.innerHTML = "O";
      box.style.color = '#D688D6'
      turn = false;
    } else {
      box.innerHTML = "X";
      box.style.color = '#499EA6'
      turn = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
function checkWinner() {
  winPatter.forEach((posNum) => {

    let pos1 = boxes[posNum[0]].innerText;
    let pos2 = boxes[posNum[1]].innerText;
    let pos3 = boxes[posNum[2]].innerText;
    
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log(pos1,pos2,pos3);
        winNamePrint(pos1);
        disabledBox();
        resetDraw()
      
      }
      
    }
  });
}

function winNamePrint(winName) {
  resetBtn.style.display = "none"
  showMsg.innerText = `Congralutaion ${winName} Win The Game`;
  mesgContainer.classList.toggle("hide");

 

}
let count=0
function drawGame(){
  
 boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
     
        count++;
       if(count === 9){
        showMsg.innerText = `Draw! Start a New Game`;
        mesgContainer.classList.toggle("hide");
        
       }
       else if(count === 10){
        count=0
       }
       console.log(count);

    })
   
 })

   
  }
  
  drawGame()
  function resetDraw(){
    
    count = 0
  }

function disabledBox() {
  for (let box of boxes) {
    box.disabled = true;
  }
}
function enableBox() {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = '';
  }
}

newGame.addEventListener("click", () => {
  resetBtn.style.display = "block"
  resetDraw()
  turn = true;
  enableBox();
 
  mesgContainer.classList.toggle("hide");
});

resetBtn.addEventListener("click",()=>{
  resetDraw()
  turn = true;
  enableBox();
  // mesgContainer.classList.toggle("hide");

});




