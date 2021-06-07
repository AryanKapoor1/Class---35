var database, form, player, game;
var gamestate = 0;
var playercount  
function setup(){
    createCanvas(500,500);
   databse = firebase.database();
   game = new Game();
   game.getState();
   game.start();
   
}

function draw(){
    background("white");
   

}
