/*
If you click on it, It is a script that can change the art work and the description of the work.
It works when you specify it as a script for each green button.
{2f9dc6e3-93a9-4b83-a61d-c37c39cc6584}
{ee33eeea-7c46-4db9-af4e-9d9f4b3f0a29}
*/

(function () {
  this.clickDownOnEntity = function (entityID) {
    var properties = Entities.getEntityProperties("2f9dc6e3-93a9-4b83-a61d-c37c39cc6584");
    if (properties.visible) {
      Entities.editEntity('2f9dc6e3-93a9-4b83-a61d-c37c39cc6584', {
        visible: false
      });
      Entities.editEntity('ee33eeea-7c46-4db9-af4e-9d9f4b3f0a29', {
        visible: true
      });
    }
    else {
      Entities.editEntity('2f9dc6e3-93a9-4b83-a61d-c37c39cc6584', {
        visible: true
      });
      Entities.editEntity('ee33eeea-7c46-4db9-af4e-9d9f4b3f0a29', {
        visible: false
      });
    }
  };
});

