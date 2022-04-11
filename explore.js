(function () {
  console.log("start music");
  var sound = SoundCache.getSound("http://192.168.0.102:3000/music.mp3");
  var injectorOptions;
  var injector = null;
  var position;

  this.enterEntity = function (entityID) {
    console.log("enter")
    var bellPosition = Entities.getEntityProperties(entityID).position;
    position = bellPosition;

    injectorOptions = {
      position: position,
      volume: 1,
      loop: true,
      localOnly: true,

    };

    injector = Audio.playSound(sound, injectorOptions);
  };
  this.leaveEntity = function (entityID) {

    console.log("leave")
    injector.stop()
  };
});