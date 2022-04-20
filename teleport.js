/*
  PSJ KJH LHH
  E01 E02 KDH

0.05920099467039108 1.290178656578064
  1.6012327671051025 2.005237340927124

  1.9556013345718384 1.290178656578064
  3.523069143295288 2.005237340927124

  3.8623406887054443 1.290178656578064
  5.414852619171143 2.005237340927124


  0.05920099467039108 0.15975290536880493
  1.6012327671051025 0.9302603602409363

  1.9556013345718384 0.15975290536880493
  3.523069143295288 0.9302603602409363

  3.8623406887054443 0.15975290536880493
  5.414852619171143 0.9302603602409363
*/

(function () {
  this.clickDownOnEntity = function (entityID, event) {
    var x = event.pos2D.x
    var y = event.pos2D.y

    var xCoordinate = 0;
    var yCoordinate = 0;

    var destination = null;

    if (0.05920099467039108 < x && x < 1.6012327671051025) {
      xCoordinate = 1
    }
    if (1.9556013345718384 < x && x < 3.523069143295288) {
      xCoordinate = 2
    }
    if (3.8623406887054443 < x && x < 5.414852619171143) {
      xCoordinate = 3
    }

    if (1.290178656578064 < y && y < 2.005237340927124) {
      yCoordinate = 1
    }
    if (0.15975290536880493 < y && y < 0.9302603602409363) {
      yCoordinate = 2
    }

    if (xCoordinate == 1 && yCoordinate == 1) {
      console.log("exhibition1")
      destination = "hifi://106.255.247.90:40102/41,1001,31/0,0,0,1"
      Window.location = destination;
    }
    if (xCoordinate == 2 && yCoordinate == 1) {
      console.log("exhibition2")
      destination = "hifi://106.255.247.90:40102/1041,1001,31/0,0,0,1"
      Window.location = destination;
    }
    if (xCoordinate == 3 && yCoordinate == 1) {
      console.log("kdh")
      destination = "hifi://106.255.247.90:40102/2000,0,0/0,0,0,1"
      Window.location = destination;
    }
    if (xCoordinate == 1 && yCoordinate == 2) {
      console.log("psj")
      destination = "hifi://106.255.247.90:40102/0,0,1000/0,0,0,1"
      Window.location = destination;
    }
    if (xCoordinate == 2 && yCoordinate == 2) {
      destination = "hifi://106.255.247.90:40102/1000,0,1000/0,0,0,1"
      Window.location = destination;
    }
    if (xCoordinate == 3 && yCoordinate == 2) {
      console.log("lhh")
      destination = "hifi://106.255.247.90:40102/2000,0,1000/0,0,0,1"
      Window.location = destination;
    }
  };
});

