/*
If you click on it, It is a script that can change the art work and the description of the work.
It works when you specify it as a script for each green button.
*/

(function () {
  this.clickDownOnEntity = function (entityID) {
    var properties = Entities.getEntityProperties("84091513-eaec-4161-ade7-d9d1c05dc130");
    if (properties.visible) {
      Entities.editEntity('84091513-eaec-4161-ade7-d9d1c05dc130', {
        visible: false
      });
      Entities.editEntity('23c20243-d892-45e9-822e-168733cdc964', {
        visible: true
      });
    }
    else {
      Entities.editEntity('84091513-eaec-4161-ade7-d9d1c05dc130', {
        visible: true
      });
      Entities.editEntity('23c20243-d892-45e9-822e-168733cdc964', {
        visible: false
      });
    }
  };
});

