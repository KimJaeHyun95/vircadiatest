/*
If you click on it, It is a script that can change the art work and the description of the work.
It works when you specify it as a script for each green button.
*/

(function () {
  this.clickDownOnEntity = function (entityID) {
    var properties = Entities.getEntityProperties("79abaade-d5a2-43ad-975d-64b0ca980f3f");
    if (properties.visible) {
      Entities.editEntity('79abaade-d5a2-43ad-975d-64b0ca980f3f', {
        visible: false
      });
      Entities.editEntity('25179d2a-ef85-4ef6-9de7-19639d3f0cb5', {
        visible: true
      });
    }
    else {
      Entities.editEntity('79abaade-d5a2-43ad-975d-64b0ca980f3f', {
        visible: true
      });
      Entities.editEntity('25179d2a-ef85-4ef6-9de7-19639d3f0cb5', {
        visible: false
      });
    }
  };
});

