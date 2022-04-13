/*
If you click on it, It is a script that can change the art work and the description of the work.
It works when you specify it as a script for each green button.
*/

(function () {
  this.clickDownOnEntity = function (entityID) {
    var properties = Entities.getEntityProperties("d0fe7b6a-dadc-446a-a00e-5832cd228a07");
    if (properties.visible) {
      Entities.editEntity('d0fe7b6a-dadc-446a-a00e-5832cd228a07', {
        visible: false
      });
      Entities.editEntity('7bc3afe5-c409-42f9-9907-7d67c89716c0', {
        visible: true
      });
    }
    else {
      Entities.editEntity('d0fe7b6a-dadc-446a-a00e-5832cd228a07', {
        visible: true
      });
      Entities.editEntity('7bc3afe5-c409-42f9-9907-7d67c89716c0', {
        visible: false
      });
    }
  };
});

