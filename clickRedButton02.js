/*
If you click on it, It is a script that can change the art work and the description of the work.
It works when you specify it as a script for each green button.
*/

(function () {
  this.clickDownOnEntity = function (entityID) {
    var properties = Entities.getEntityProperties("3b1ee21e-5af3-4ad7-9b5f-8b4db6d9dce7");
    if (properties.visible) {
      Entities.editEntity('3b1ee21e-5af3-4ad7-9b5f-8b4db6d9dce7', {
        visible: false
      });
      Entities.editEntity('dfa4dfa7-7165-47c7-acad-3f684d9bb925', {
        visible: true
      });
    }
    else {
      Entities.editEntity('3b1ee21e-5af3-4ad7-9b5f-8b4db6d9dce7', {
        visible: true
      });
      Entities.editEntity('dfa4dfa7-7165-47c7-acad-3f684d9bb925', {
        visible: false
      });
    }
  };
});

