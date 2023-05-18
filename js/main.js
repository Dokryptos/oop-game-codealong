class Player{
    constructor(){
        this.positionX = 45;
        this.positionY = 0;
        this.width = 10;
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
        this.positionX--;
        this.domELement.style.left = this.positionX + 'vw';
    }

    moveRight(){
        this.positionX++;
        this.domELement.style.left = this.positionX + 'vw';
    }
}





const player = new Player();


// Event listeners
document.addEventListener("keydown", (Event) =>{
    if(Event.code === 'ArrowRight'){
        player.moveRight();
    } else if(Event.code === 'ArrowLeft'){
        player.moveLeft();
    }
})