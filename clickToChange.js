(function () {
	var oe = 1;
	this.clickDownOnEntity = function (entityID) {
		oe = -1 * oe;
		if (oe < 0) {
			console.log(entityID);
			console.log("changImg");
			Entities.editEntity('a52b7c88-ca65-4061-a0fd-38d8c8683eb9', {
				visible: true
			});
			Entities.editEntity('3a933a98-c575-4235-aba5-e4cc9f4c31a4', {
				visible: false
			});
		}
		else {
			console.log(entityID);
			console.log("changImg");
			Entities.editEntity('a52b7c88-ca65-4061-a0fd-38d8c8683eb9', {
				visible: false
			});
			Entities.editEntity('3a933a98-c575-4235-aba5-e4cc9f4c31a4', {
				visible: true
			});
		}
	};
});