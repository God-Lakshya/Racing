class Player {
    constructor() {
        this.index = null;
    this.distance = 0;
    this.name = null; 
    this.email = null;
    }
     
    getCount () {
    var playerCountref = database.ref("playerCount")
    playerCountref.on("value", function(data){
        playerCount = data.val()
    })
    }
    
    updateCount(count){
        database.ref('/').update({
    playerCount : count  
        })
    }
    update(email) {
        var playerIndex = "Player" + playerCount ;
        database.ref(playerIndex).set({
            Email : email 
        })
        } 
update(name) {
var playerIndex = "Player" + playerCount ;
database.ref(playerIndex).set({
    Name : name 
})
} 

static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
