
let player = document.querySelector(".player_turn");
let computer = document.querySelector(".computer_turn");
let iconClick = document.querySelectorAll("img");
let playermove="";
let comMove="";
let result=document.querySelector("h5");
console.log(iconClick);
iconClick.forEach(
    (icon) => {
        icon.addEventListener("click",
            () => {
                let user=icon.getAttribute('src');
                if(user === iconClick[0].getAttribute('src')){
                    player.innerHTML='<img  class="icon_js1" src="img/paper.png" alt="">';
                    playermove="paper";
            
                }
                else if(user=== iconClick[1].getAttribute('src')){
                    player.innerHTML='<img class="icon_js1"  src="img/rock.png" alt="">';
                    playermove="rock";

                }
                else if(user===iconClick[2].getAttribute('src')){
                    player.innerHTML='<img  class="icon_js1" src="img/scissor.png" alt="">';
                    playermove="scissor";

                }
                let iconJs1=document.querySelector(".icon_js1");
                iconJs1.classList.add("iconJS");

                check();
                mainCheck();            
            }
        )
    }
)
const check = () => {
    let computerMove = Math.random();
    if (computerMove > 0 && computerMove <= 1 / 3) {
        computer.innerHTML='<img class="icon_js" src="img/rock.png" alt="">';
        comMove="rock";



    }
    else if (computerMove > 1 / 3 && computerMove <= 2 / 3) {
        computer.innerHTML='<img class="icon_js" src="img/paper.png" alt="">';
        comMove="paper";
    }
    else {
        computer.innerHTML='<img class="icon_js" src="img/scissor.png" alt="">';
        comMove="scissor";
    }
    let iconJs=document.querySelector(".icon_js");
    iconJs.classList.add("iconJS");


}


const mainCheck=()=>{
    if(playermove==="paper"){
        if(comMove==="paper"){
            result.innerText="Draw";
        }
        else if(comMove==="rock"){
            result.innerText="Win";
        }
        else if(comMove==="scissor"){
            result.innerText="Lose";
        }

    }
    else if(playermove==="rock"){
        if(comMove==="paper"){
            result.innerText="Lose";
        }
        else if(comMove==="rock"){
            result.innerText="Draw";
        }
        else if(comMove==="scissor"){
            result.innerText="Win";

        }

    }
    else if(playermove==="scissor"){
        if(comMove==="paper"){
            result.innerText="Win";
        }
        else if(comMove==="rock"){
            result.innerText="Lose";

        }
        else if(comMove==="scissor"){
            result.innerText="Draw";
        }

    }

}