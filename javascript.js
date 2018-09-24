function Chaser() {
  this.position;
  this.speed = 1;
  };

let p1Chaser1 = new Chaser();
let p2Chaser1 = new Chaser();

p1Chaser1.position = [1, 0];

var currentPlayer;

var currentPositions = [
  ["-3,4", ["", ""]],
  ["-2,4", ["", ""]],
  ["-1,4", ["", ""]],
  ["0,4", ["", ""]],
  ["1,4", ["", ""]],
  ["2,4", ["", ""]],
  ["3,4", ["", ""]],
  ["-4,3", ["", ""]],
  ["-3,3", ["", ""]],
  ["-2,3", ["", ""]],
  ["-1,3", ["", ""]],
  ["0,3", ["", ""]],
  ["1,3", ["", ""]],
  ["2,3", ["", ""]],
  ["3,3", ["", ""]],
  ["4,3", ["", ""]],
  ["-5,2", ["", ""]],
  ["-4,2", ["", ""]],
  ["-3,2", ["", ""]],
  ["-2,2", ["", ""]],
  ["-1,2", ["", ""]],
  ["0,2", ["", ""]],
  ["1,2", ["", ""]],
  ["2,2", ["", ""]],
  ["3,2", ["", ""]],
  ["4,2", ["", ""]],
  ["5,2", ["", ""]],
  ["-6,1", ["", ""]],
  ["-5,1", ["", ""]],
  ["-4,1", ["", ""]],
  ["-3,1", ["", ""]],
  ["-2,1", ["", ""]],
  ["-1,1", ["", ""]],
  ["0,1", ["", ""]],
  ["1,1", ["", ""]],
  ["2,1", ["", ""]],
  ["3,1", ["", ""]],
  ["4,1", ["", ""]],
  ["5,1", ["", ""]],
  ["6,1", ["", ""]],
  ["-6,0", ["", ""]],
  ["-5,0", ["", ""]],
  ["-4,0", ["", ""]],
  ["-3,0", ["", ""]],
  ["-2,0", ["", ""]],
  ["-1,0", ["", ""]],
  ["0,0", ["", ""]],
  ["1,0", ["P1C1", p1Chaser1]],
  ["2,0", ["", ""]],
  ["3,0", ["", ""]],
  ["4,0", ["", ""]],
  ["5,0", ["", ""]],
  ["6,0", ["", ""]],
  ["-6,-1", ["", ""]],
  ["-5,-1", ["", ""]],
  ["-4,-1", ["", ""]],
  ["-3,-1", ["", ""]],
  ["-2,-1", ["", ""]],
  ["-1,-1", ["", ""]],
  ["0,-1", ["", ""]],
  ["1,-1", ["", ""]],
  ["2,-1", ["", ""]],
  ["3,-1", ["", ""]],
  ["4,-1", ["", ""]],
  ["5,-1", ["", ""]],
  ["6,-1", ["", ""]]
];

var possibleRight;
var possibleLeft;
var possibleUp;
var possibleDown;
var possibleMoves = [possibleRight, possibleLeft, possibleUp, possibleDown];

$("td").click(function() {
  // Remove colour code from previous selection.
  $(".field-cell").css("border", "2px solid rgba(0, 0, 0, 0.7)");
  $(".field-cell").css("background-color", "rgba(255, 255, 255, 0.7)");

  /*
  for (var i = 0; i < possibleMoves.length; i++) {
    
  }
  */
  
  if (this.id == possibleRight || this.id == possibleLeft || this.id == possibleUp || this.id == possibleDown) {
    $(this).css("background-color", "rgba(119, 255, 51, 0.7)");
    // Clear previous position.
    document.getElementById(
      currentPlayer[1].position.toString()
    ).innerHTML =
      "";
    
    for (var i = 0; i < currentPositions.length; i++) {
      if (currentPositions[i][0] == currentPlayer[1].position) {
        currentPositions[i][1] = ["", ""];
      }
    }
    
    if (this.id == possibleRight) {
        currentPlayer[1].position = possibleRight;
    } else if (this.id == possibleLeft) {
      currentPlayer[1].position = possibleLeft;
    } else if (this.id == possibleUp) {
      currentPlayer[1].position = possibleUp;
    } else if (this.id == possibleDown) {
      currentPlayer[1].position = possibleDown;
    }
    
    for (var i = 0; i < currentPositions.length; i++) {
      if (currentPositions[i][0] == currentPlayer[1].position) {
        currentPositions[i][1] = currentPlayer;
      }
    }
    
    document.getElementById(currentPlayer[1].position.toString()).innerHTML = currentPlayer[0];
    
    setPossibleRight();
    setPossibleLeft();
    setPossibleUp();
    setPossibleDown();
    
  } else {
    // Check if current cell is occupied.
    for (var i = 0; i < currentPositions.length; i++) {
      if ([this.id] == currentPositions[i][0]) {
        console.log(currentPositions[i])
        if (typeof currentPositions[i][1][1] == "object") {
          console.log('reached');
          currentPlayer = currentPositions[i][1];
                    
          console.log(currentPlayer);
          $(this).css("background-color", "rgba(119, 255, 51, 0.7)");
          // Calculate possible moves.
          console.log(currentPlayer[1].position);
          
          setPossibleRight();
          setPossibleLeft();
          setPossibleUp();
          setPossibleDown();
          
        } else {
          currentPlayer = null;
          possibleRight = null;
          possibleLeft = null;
          possibleUp = null;
          possibleDown = null;
          console.log(currentPlayer);
          console.log(this.id);
          $(this).css("border", "3px solid rgba(255, 51, 51, 1)");
        }
      }
    }
  }
});

function getPlayer(object, value) {
  console.log(Object.keys(object).find(key => object[key] === value));
}

function setPossibleRight() {
  possibleRight = [
            currentPlayer[1].position[0] + currentPlayer[1].speed,
            currentPlayer[1].position[1]
          ];

          console.log("possibleRight -> " + possibleRight);
          $("#" + possibleRight[0] + "\\," + possibleRight[1]).css(
            "border",
            "3px solid rgba(119, 255, 51, 0.7)"
          );
}

function setPossibleLeft() {
 possibleLeft = [
            currentPlayer[1].position[0] - currentPlayer[1].speed,
            currentPlayer[1].position[1]
          ];

          console.log("possibleLeft -> " + possibleLeft);
          $("#" + possibleLeft[0] + "\\," + possibleLeft[1]).css(
            "border",
            "3px solid rgba(119, 255, 51, 0.7)"
          );
}

function setPossibleUp() {
 possibleUp = [
            currentPlayer[1].position[0],
            currentPlayer[1].position[1] + currentPlayer[1].speed
          ];

          console.log("possibleUp -> " + possibleUp);
          $("#" + possibleUp[0] + "\\," + possibleUp[1]).css(
            "border",
            "3px solid rgba(119, 255, 51, 0.7)"
          );
}

function setPossibleDown() {
 possibleDown = [
            currentPlayer[1].position[0],
            currentPlayer[1].position[1] - currentPlayer[1].speed
          ];

          console.log("possibleDown -> " + possibleDown);
          $("#" + possibleDown[0] + "\\," + possibleDown[1]).css(
            "border",
            "3px solid rgba(119, 255, 51, 0.7)"
          );
}

// Set players at starting positions.
function onload() {
  for (var i = 0; i < currentPositions.length; i++) {
    document.getElementById(currentPositions[i][0]).innerHTML =
      currentPositions[i][1][0];
  }
}

function testFunctions() {
  //goRight(1);
  //goLeft(1);
  //goUp(1);
  //goDown(1);
  //p1Chaser1.goRight();
  //p2Chaser1.goLeft();
  //getPlayer(currentPositions, '(1,0)');
}

setTimeout(testFunctions, 2000);
