(function () {
  var sound = SoundCache.getSound("https://raw.githubusercontent.com/KimJaeHyun95/vircadiatest/main/mp3/explanation01.mp3");
  var injectorOptions;
  var injector = null;
  var position;

  function playSound() {
    position = MyAvatar.position;
    injectorOptions = {
      position: position,
      volume: 0.5
    };

    injector = Audio.playSound(sound, injectorOptions);
  }



  function stopSound() {
    injector.stop()
  }


  this.clickDownOnEntity = function (entityID) {

    if (!injector.isPlaying()) {
      console.log("start")
      playSound();
    }
    else {
      console.log("stop")
      stopSound();
    }
  };
});
