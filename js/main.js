class Game {
    constructor(){
        this.ennemiArr = [];// here, we will store instances of the class Ennemi
        this.player = null
        
    }
    start(){
        this.player = new Player();
        
        this.attachEventListeners()


        // Create ennemi every 1.5sec
    setInterval(() => {
        const newEnnemi = new Ennemi();
        this.ennemiArr.push(newEnnemi);
        }, 1500);
    
        
    // donne l'ordre a chaque ennemi creer de descendre toute les 0.1 sec et si ils touchent le player
    // il donne egalement la suppression de l'ennemi dans l'array et du visuel des qu'il est en dessous de l'ecran.

    setInterval(() => {
        this.ennemiArr.forEach((e)=>{

            //Move ennemi
            e.moveDown()

            //Detect collision
            this.detectCollision(e)

            //Detected if ennemi need to be removed
            //this.removeObstacleOutside(e)

            });
        }, 100);    
    }
    attachEventListeners(){
        // Event listeners
        document.addEventListener("keydown", (Event) =>{
            if(Event.code === 'ArrowRight'){
                this.player.moveRight();
            } else if(Event.code === 'ArrowLeft'){
                this.player.moveLeft();
            }
        })
    }
    detectCollision(obstacleInstance){ 
        // il creer une collision et alert(GAme Over)
         if(
            obstacleInstance.positionX < this.player.positionX + this.player.width &&
            obstacleInstance.positionX + obstacleInstance.width > this.player.positionX &&
            obstacleInstance.positionY < this.player.positionY + this.player.height &&
            obstacleInstance.height + obstacleInstance.positionY > this.player.positionY
            ){

                alert('game Over')
            }
    }
    /*removeObstacleOutside(obstacleInstance){
        if(obstacleInstance.positionY < 0 - e.height){
            
            obstacleInstance.domElement.remove()// Delete l'element si il atteint 0 moins sa hauteur (visuel)
                
                this.ennemiArr.shift() // we delete the element of the array
            }
    }*/

}
    
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
        if(this.positionY === -5){         // I delete the Ennemi after -5Vh for keep the memories and fluidity safe. BETTER SOLUTION OF THE ACTUALLY REMOVE()
             this.domELement.remove()    
        } 
    }
}

const game = new Game();
game.start();






