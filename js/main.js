class Player{
    constructor(){
        this.positionX = 50;
        this.positionY = 0;
        this.width = 10 ;
        this.height = 5;
        
        this.domElement = null;

        this.createDomElement();
    }
    createDomElement(){
        this.domELement = document.createElement("div");

        this.domELement.id = 'player'
        this.domELement.style.width = this.width + 'vw';
        this.domELement.style.height = this.height + 'vh';
        this.domELement.style.bottom = this.positionY + 'vh' ;
        this.domELement.style.left = this.positionX + 'vw';


        const playerElmId = document.getElementById('board');
        playerElmId.appendChild(this.domELement)
    }
    moveLeft(){
        if(this.positionX === 0){
            return
        }else{
        this.positionX--;
        this.domELement.style.left = this.positionX + 'vw';
        }
    }

    moveRight(){
        if(this.positionX === 90){
            return
        }else {
        this.positionX++;
        this.domELement.style.left = this.positionX + 'vw';
        }
    }   
}


class Ennemi{
    constructor(){
        this.positionX = Math.random() * (100 - 10) + 1; //Create ennemi with randomely PositionX
        this.positionY = 100;
        this.width = 10;
        this.height = 5;

        this.domELement=null;
        this.createDomElement();

    }
    createDomElement(){
        this.domELement = document.createElement("div");
        this.domELement.className = 'ennemi'


        this.domELement.style.width = this.width + 'vw';
        this.domELement.style.height = this.height + 'vh';
        this.domELement.style.bottom = this.positionY + 'vh' ;
        this.domELement.style.left = this.positionX + 'vw';


        const playerElmId = document.getElementById('board');
        playerElmId.appendChild(this.domELement)
    }
    moveDown(){
        this.positionY--;
        this.domELement.style.bottom = this.positionY +'vh';
        // if(this.positionY === -5){         // I delete the Ennemi after -5Vh for keep the memories and fluidity safe. BETTER SOLUTION OF THE ACTUALLY REMOVE()
        //     this.domELement.remove()    
        // } 
    }
}



const player = new Player();
const ennemiArr = [];// here, we will store instances of the class Ennemi

// Create ennemi every 1.5sec
setInterval(() => {

    const newEnnemi = new Ennemi();
    ennemiArr.push(newEnnemi);

}, 1500);


// ennemi down every 0.1 sec
setInterval(() => {
    ennemiArr.forEach((e)=>{
        e.moveDown()
        
        if(
        e.positionX < player.positionX + player.width &&
        e.positionX + e.width > player.positionX &&
        e.positionY < player.positionY + player.height &&
        e.height + e.positionY > player.positionY){

            alert('game Over')
        }

        if(e.positionY < 0 - e.height){
            e.domElement.remove()// Delete l'element si il atteint 0 moins sa hauteur (visuel)
            
            ennemiArr.shift() // we delete the element of the array
        }
    })
}, 100);





// Event listeners
document.addEventListener("keydown", (Event) =>{
    if(Event.code === 'ArrowRight'){
        player.moveRight();
    } else if(Event.code === 'ArrowLeft'){
        player.moveLeft();
    }
});


