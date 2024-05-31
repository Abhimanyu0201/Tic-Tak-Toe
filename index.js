let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame = () =>{
    trunO = true;
    abledBoxes();
    msgContainer.classList.add("hide");

}

boxes.forEach((box) => {
    box.addEventListener("click", function(){
        console.log("Clicked");
        if(turnO)
            {   //player O
                box.innerText = "O";
                turnO = false;
            }
        else{
            //Player X
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
})


const disabledBoxes = () =>
    {
        for(let box of boxes)
            {
                box.disabled = true;
                box.innerText = "";

            }
    }


const abledBoxes = () =>
        {
            for(let box of boxes)
                {
                    box.disabled = false;
                }
        }

const showWinner = (Winner) => {
    msg.innerText = `Congratulation, Winner is ${Winner}`; 
    msgContainer.classList.remove("hide");
    disabledBoxes();

}

const checkWinner = () => {
    for(let patterns of winPatterns)
        {
            let pos1val = boxes[patterns[0]].innerText;
            let pos2val = boxes[patterns[1]].innerText;
            let pos3val = boxes[patterns[2]].innerText;

            if(pos1val != "" && pos2val != "" && pos3val != "")
                {
                    if(pos1val === pos2val && pos2val === pos3val)
                        {
                            console.log("winner", pos1val);
                            showWinner(pos1val);
                        }
                }
        }
};

resetBtn.addEventListener("click" , resetGame);
newBtn.addEventListener("click" , resetGame);