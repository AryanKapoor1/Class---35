class Form{
    constructor(){

    }
    display(){
        var title = createElement('h1')
        title.html('car racing game');
        title.position(250,100);
        var input = createInput('Enter your name')
        input.position(200,200);
        var button = createButton('start');
        button.position(200,250);
        button.mousePressed(function(){
        input.hide();
        button.hide();
        var name = input.value();
        playercount = playercount + 1;
        player.update(name)
        player.updatecount(playercount)
        var greeting = createElement('h2')
        greeting.html('Welcome' + name)
        greeting.position(200,200)
        })
    }
}