/*
If you click on it, It is a script that can change the art work and the description of the work.
It works when you specify it as a script for each green button.
*/

(function () {
  this.clickDownOnEntity = function (entityID) {
    var properties = Entities.getEntityProperties("37ded20d-44b4-4772-965a-98b5e9e81366");
    if (properties.visible) {
      Entities.editEntity('37ded20d-44b4-4772-965a-98b5e9e81366', {
        visible: false
      });
      Entities.editEntity('c397d4de-08f8-4c57-b612-2c32e717f421', {
        visible: true
      });
    }
    else {
      Entities.editEntity('37ded20d-44b4-4772-965a-98b5e9e81366', {
        visible: true
      });
      Entities.editEntity('c397d4de-08f8-4c57-b612-2c32e717f421', {
        visible: false
      });
    }
  };
});

