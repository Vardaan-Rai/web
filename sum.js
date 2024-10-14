let machinesum=1;
let yoursum=1;
/*

rock = 1
scissor=2
paper=3
*/
let rockbox=document.querySelector(".rockbox")
let scissorbox=document.querySelector(".scissorbox")
let paperbox=document.querySelector(".paperbox")

let computerscore=document.querySelector(".computerscore")
let yourscore=document.querySelector(".yourscore")
let condition=document.querySelector(".condition")

function getRandomNumber() {
    return Math.floor(Math.random() * 3) + 1;
}



rockbox.addEventListener("click",()=>{
    let machine=getRandomNumber();

    if(machine===1 && machinesum<10 && yoursum<10){
        condition.innerHTML="Rock.Draw";

    }

    else if(machine===2 && machinesum<10 && yoursum<10){
        condition.innerHTML="Scissor.You gained a point";

        yourscore.innerHTML=`&nbsp &nbsp ${yoursum}`;
        yoursum++;


    }

    else if(machine===3 && machinesum<10 && yoursum<10){
        condition.innerHTML="Paper.Computer gained a point";

        computerscore.innerHTML=machinesum;
        machinesum++;


    }

    else if(machinesum<10 && yoursum===10){
        alert("You won the game !");

    }

    else if(machinesum===10 && yoursum<10){
        alert("Computer won the game !");

    }

    else if(machinesum===10 && yoursum===10){
        alert("Match is draw!");
    }



})

scissorbox.addEventListener("click",()=>{
    let machine=getRandomNumber();

    if(machine===2 && machinesum<10 && yoursum<10){
        condition.innerHTML="Scissor.Draw";

    }

    else if(machine===3 && machinesum<10 && yoursum<10){
        condition.innerHTML="Paper.You gained a point";

        yourscore.innerHTML=`&nbsp &nbsp ${yoursum}`;
        yoursum++;


    }

    else if(machine===1 && machinesum<10 && yoursum<10){
        condition.innerHTML="Rock.Computer gained a point";

        computerscore.innerHTML=machinesum;
        machinesum++;


    }
    else if(machinesum<10 && yoursum===10){
        alert("You won the game !");

    }

    else if(machinesum===10 && yoursum<10){
        alert("Computer won the game !");

    }

    else if(machinesum===10 && yoursum===10){
        alert("Match is draw!");
    }


})


paperbox.addEventListener("click",()=>{
    let machine=getRandomNumber();

    if(machine===3 && machinesum<10 && yoursum<10){
        condition.innerHTML="Paper.Draw";

    }

    else if(machine===1 && machinesum<10 && yoursum<10){
        condition.innerHTML="Rock.You gained a point";

        yourscore.innerHTML=`&nbsp &nbsp ${yoursum}`;
        yoursum++;


    }

    else if(machine===2 && machinesum<10 && yoursum<10){
        condition.innerHTML="Scissor.Computer gained a point";

        computerscore.innerHTML=machinesum;
        machinesum++;


    }

    else if(machinesum<10 && yoursum===10){
        alert("You won the game !");

    }

    else if(machinesum===10 && yoursum<10){
        alert("Computer won the game !");

    }

    else if(machinesum===10 && yoursum===10){
        alert("Match is draw!");
    }

})






