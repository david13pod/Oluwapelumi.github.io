var player1=prompt("Player 1 enter your name: ");
var player2=prompt("Player 2 enter your name: ");
var playersinfo= $("#playerinfo");
var playersturn= $("#playerturn");
var winner=$("#announcewin")
var oneCSS = {
    "color":"white",
    "background":"blue"
  }
var twoCSS = {
    "color":"white",
    "background":"red"
  }
playersinfo.text(player1+" you have Blue Chip, "+player2+" you have Red Chip")
playersturn.text(player1+" your turn")
var tiles = $("button")
var play = 1;
var j;
var oneTiles=[]
var twoTiles=[]
var count=0;
var key1;
var key2
var ky1
var ky2
var gg

var playobj={
    col1:[0,7,14,21,28,35],
    col2:[1,8,15,22,29,36],
    col3:[2,9,16,23,30,37],
    col4:[3,10,17,24,31,38],
    col5:[4,11,18,25,32,39],
    col6:[5,12,19,26,33,40],
    col7:[6,13,20,27,34,41]
}
var playobj2={
    col1:[0,7,14,21,28,35],
    col2:[1,8,15,22,29,36],
    col3:[2,9,16,23,30,37],
    col4:[3,10,17,24,31,38],
    col5:[4,11,18,25,32,39],
    col6:[5,12,19,26,33,40],
    col7:[6,13,20,27,34,41]
}

var cols=["col1","col2","col3","col4","col5","col6","col7"]
// Winner check for 4 connects  
function twoWinCheck() {
    if (twoTiles.length>3) {
        //check Horizontal win
        // var count =0
        for (let k = 0; k < twoTiles.length-1; k++) {
            count =0
            ky1=twoTiles[k]%7
            key1=cols[ky1]
            for (let l = k+1; l < twoTiles.length; l++) {
                ky2=twoTiles[l]%7
                key2=cols[ky2]
                if ((playobj2[key1].indexOf(twoTiles[k]) === playobj2[key2].indexOf(twoTiles[l])) && (Math.abs(twoTiles[k]-twoTiles[l])==1 || Math.abs(twoTiles[k]-twoTiles[l])==2 || Math.abs(twoTiles[k]-twoTiles[l])==3)) {
                    count++;
                    if (count>=3) {
                        winner.text(player2+" has won! Reload Game")
                        gg = 3
                    }
                }
                
            }    
        }
        
        ////check Vertical win
        
        for (let k = 0; k < twoTiles.length-1; k++) {
            count =0
            ky1=twoTiles[k]%7
            key1=cols[ky1]
            for (let l = k+1; l < twoTiles.length; l++) {
                ky2=twoTiles[l]%7
                key2=cols[ky2]
                if ( key1==key2 && (Math.abs(twoTiles[k]-twoTiles[l])==7 || Math.abs(twoTiles[k]-twoTiles[l])==14 || Math.abs(twoTiles[k]-twoTiles[l])==21) ) {
                    count++
                    if (count>=3) {
                        winner.text(player2+" has won! Reload Game")
                        gg =3
                    }
                }
                
            }    
        }
       
    
        //check Diagonal R win
        for (let k = 0; k < twoTiles.length-1; k++) {
            count =0
            ky1=twoTiles[k]%7
            key1=cols[ky1]
            for (let l = k+1; l < twoTiles.length; l++) {
                ky2=twoTiles[l]%7
                key2=cols[ky2]
                if ( (key1 != key2) && ( cols.indexOf(key1) > cols.indexOf(key2) ) &&( Math.abs(twoTiles[k]-twoTiles[l])==6 || Math.abs(twoTiles[k]-twoTiles[l])==12 || Math.abs(twoTiles[k]-twoTiles[l])==18) ) {
                    count++
                    if (count>=3) {
                        winner.text(player2+" has won! Reload Game")
                        gg = 3
                    }
                }
                
            }    
        }
        //check Diagonal L win
        for (let k = 0; k < twoTiles.length-1; k++) {
            count =0
            ky1=twoTiles[k]%7
            key1=cols[ky1]
            for (let l = k+1; l < twoTiles.length; l++) {
                ky2=twoTiles[l]%7
                key2=cols[ky2]
                if ( (key1 != key2) && ( cols.indexOf(key1) < cols.indexOf(key2) ) &&( Math.abs(twoTiles[k]-twoTiles[l])==8 || Math.abs(twoTiles[k]-twoTiles[l])==16 || Math.abs(twoTiles[k]-twoTiles[l])==24) ) {
                    count++
                    if (count>=3) {
                        winner.text(player2+" has won! Reload Game")
                        gg = 3
                    }
                }
                
            }    
        }
        
    
    }
        
}
// Winner check for 4 connects
function oneWinCheck() {
    if (oneTiles.length>3) {
        //check Horizontal win
        
        for (let k = 0; k < oneTiles.length-1; k++) {
            count =0
            ky1=oneTiles[k]%7
            key1=cols[ky1]
            for (let l = k+1; l < oneTiles.length; l++) {
                ky2=oneTiles[l]%7
                key2=cols[ky2]
                if ((playobj2[key1].indexOf(oneTiles[k]) === playobj2[key2].indexOf(oneTiles[l])) &&(Math.abs(oneTiles[k]-oneTiles[l])==1 || Math.abs(oneTiles[k]-oneTiles[l])==2 || Math.abs(oneTiles[k]-oneTiles[l])==3)) {
                    count++
                    if (count>=3) {
                        winner.text(player1+" has won! Reload Game")
                        gg = 3
                    }
                }
                
            }    
        }
        
        ////check Vertical win
        
        for (let k = 0; k < oneTiles.length-1; k++) {
            count =0
            ky1=oneTiles[k]%7
            key1=cols[ky1]
            for (let l = k+1; l < oneTiles.length; l++) {
                ky2=oneTiles[l]%7
                key2=cols[ky2]
                if ( key1==key2 && ( Math.abs(oneTiles[k]-oneTiles[l])==7 || Math.abs(oneTiles[k]-oneTiles[l])==14 || Math.abs(oneTiles[k]-oneTiles[l])==21 )  ){
                    count++
                    if (count>=3) {
                        winner.text(player1+" has won! Reload Game")
                        gg = 3
                    }
                }
                
            }    
        }
    
        //check Diagonal R win
        
        for (let k = 0; k < oneTiles.length-1; k++) {
            count =0
            ky1=oneTiles[k]%7
            key1=cols[ky1]
            for (let l = k+1; l < oneTiles.length; l++) {
                ky2=oneTiles[l]%7
                key2=cols[ky2]
                if ( (key1 != key2) && ( cols.indexOf(key1) > cols.indexOf(key2) ) &&  (Math.abs(oneTiles[k]-oneTiles[l])==6 || Math.abs(oneTiles[k]-oneTiles[l])==12 || Math.abs(oneTiles[k]-oneTiles[l])==18) ) {
                    count++
                    if (count>=3) {
                        winner.text(player1+" has won! Reload Game")
                        gg = 3
                    }
                }
                
            }    
        }
        //check Diagonal L win
        
        for (let k = 0; k < oneTiles.length-1; k++) {
            count =0
            ky1=oneTiles[k]%7
            key1=cols[ky1]
            for (let l = k+1; l < oneTiles.length; l++) {
                ky2=oneTiles[l]%7
                key2=cols[ky2]
                if ( (key1 != key2) && ( cols.indexOf(key1) < cols.indexOf(key2) ) &&  (Math.abs(oneTiles[k]-oneTiles[l])==8 || Math.abs(oneTiles[k]-oneTiles[l])==16 || Math.abs(oneTiles[k]-oneTiles[l])==24) ) {
                    count++
                    if (count>=3) {
                        winner.text(player1+" has won! Reload Game")
                        gg = 3
                    }
                }
                
            }    
        }
    
    }
        
}

//Turn Selector
function turns() {
    if (play==1) {
        tiles.eq(j).css(oneCSS)
        oneTiles.push(j)
        oneTiles.sort(function(a, b){return a-b});
        oneWinCheck()
        play=2
        if(gg==3){
            play=3
        }
        playersturn.text(player2+" your turn")
    } else if(play==2){
        tiles.eq(j).css(twoCSS)
        twoTiles.push(j)
        twoTiles.sort(function(a, b){return a-b});
        twoWinCheck()
        play=1
        if(gg==3){
            play=3
        }
        playersturn.text(player1+" your turn")
    }else{
        alert("Game Over, Reload browser!")
    }
}
//Game Play
for (let i = 0; i < tiles.length; i++) {
    
    tiles.eq(i).click(function() {
        if (i%7==0) {
            if (playobj["col1"].length>0) {
                j= playobj["col1"].pop()
                turns()
            } else {
                alert("Column is full select a free column")
            }
        }else if (i%7==1) {
            if (playobj["col2"].length>0) {
                j= playobj["col2"].pop()
                turns()
            } else {
                alert("Column is full select a free column")
            }
        }else if (i%7==2) {
            if (playobj["col3"].length>0)  {
                j= playobj["col3"].pop()
                turns()
            } else {
                alert("Column is full select a free column")
            }
        }else if (i%7==3) {
            if (playobj["col4"].length>0) {
                j= playobj["col4"].pop()
                turns()
            } else {
                alert("Column is full select a free column")
            }
        }else if (i%7==4) {
            if (playobj["col5"].length>0) {
                j= playobj["col5"].pop()
                turns()
            } else {
                alert("Column is full select a free column")
            }
        }else if (i%7==5) {
            if (playobj["col6"].length>0) {
                j= playobj["col6"].pop()
                turns()
            } else {
                alert("Column is full select a free column") 
            }
        }else if (i%7==6) {
            if (playobj["col7"].length>0) {
                j= playobj["col7"].pop()
                turns()
            } else {
                alert("Column is full select a free column") 
            }
        }
    })
    
}