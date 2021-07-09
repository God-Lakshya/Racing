class Form {
    costructor() {

    }
    display(){
        var title = createElement('h2')
        title.html("Car Racing Game")
        title.position(130,0);
        var input1 = createInput("")
        var input2 = createInput("");
        var input3 = createElement('h0')
        var input4 = createElement('h0')
        var button = createButton("Play")
var greeting = createElement("h3")
title.position(400,100)
input3.html("Name :")
input4.html("Email :")
input3.position(440,280)
input4.position(440,305)
input1.position(500,280);
input2.position(500,305);
button.position(680,340);

button.mousePressed(function (){
    input1.hide();
    input2.hide();
    input3.hide();
    input4.hide();
    button.hide();
    var name = input1.value();
    var email = input2.value();
    playerCount = playerCount+1 ; 
    player.update(name)
    player.update(email)
    player.updateCount(playerCount)
    greeting.html("Hello " + name) 
    greeting.position(400,150);
    

})
    }
}