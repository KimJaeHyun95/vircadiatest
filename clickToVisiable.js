(function () {
	var oe = 1;
	this.clickDownOnEntity = function (entityID) {
		oe = -1 * oe;
		if (oe < 0) {
			Entities.editEntity(entityID, {
				visible: true
			});
		}
		else {
			Entities.editEntity(entityID, {

				visible: false
			});
		}
	};
});