/*
If you click on it, it is a script that lets you hear a voice about the work.
It works when you specify it as a script for each green button.
*/

(function () {
  var sound = SoundCache.getSound("https://raw.githubusercontent.com/KimJaeHyun95/vircadiatest/main/mp3/explanation01.mp3");
  var injectorOptions;
  var injector = null;
  var position;

  function playSound() {
    position = MyAvatar.position;
    injectorOptions = {
      position: position,
      volume: 0.5,
      local: false
    };

    injector = Audio.playSound(sound, injectorOptions);
  }


  console.log("start")

  function stopSound() {
    injector.stop()
  }


  this.clickDownOnEntity = function (entityID) {

    if (injector == null) {
      playSound();
      return
    }

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
