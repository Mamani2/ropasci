// 0 - rock
// 1 - paper
// 2 - scissor
function getComputerChoise(){

    let min=0;
    let max=3;

    let x=Math.floor(Math.random()*(max-min)+min);
    return x;
}

function playROPASCI( u,c){

    if(u==0 && c==0){
        console.log("ambos sacaron PIEDRA");
    }else if(u==0 && c==1){
        console.log("Usted saco PIEDRA y la computadora PAPEL...gana la Computadora");
    }else if(u==0 && c==2){
        console.log("Usted saco PIEDRA y la computadora TIJERA...gana usted"); 
    }else if(u==1 && c==0){
        console.log("asted saco PAPEL y la computadora PiEDRA...gana usted");
    }else if(u==1 && c==1){
        console.log("ambos sacaron PAPEL");
    }else if(u==1 && c==2){
        console.log("Usted saco PAPEL y la computadora TIJERA...gana la computadora"); 
    }else if(u==2 && c==0){
        console.log("asted saco TIJERA y la computadora PiEDRA...gana la computadora");
    }else if(u==2 && c==1){
        console.log("aUsted saco TIJERA y la computadora PAPEL...gana usted");
    }else if(u==2 && c==2){
        console.log("ambos sacaron TIJERA"); 
    }
}