(function () {
  this.clickDownOnEntity = function (entityID, event) {
    console.log(Entities.getEntityProperties(entityID)["shape"])
    console.log(Entities.getEntityProperties(entityID, ["parentID"]).parentID)
  };
});

