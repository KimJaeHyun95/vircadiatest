/*
If you click on it, It is a script that can change the art work and the description of the work.
It works when you specify it as a script for each green button.
*/

(function () {
  this.clickDownOnEntity = function (entityID) {
    var imgID = Entities.getEntityProperties(entityID, ["parentID"]).parentID
    var textID = Entities.getEntityProperties(imgID, ["parentID"]).parentID
    var imgProperties = Entities.getEntityProperties(imgID);
    if (imgProperties.visible) {
      Entities.editEntity(imgID, {
        visible: false
      });
      Entities.editEntity(textID, {
        visible: true
      });
    }
    else {
      Entities.editEntity(imgID, {
        visible: true
      });
      Entities.editEntity(textID, {
        visible: false
      });
    }
  };
});

