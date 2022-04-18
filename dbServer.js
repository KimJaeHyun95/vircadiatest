print("loadScript 시작");

var request = Script.require('request').request;
var requestUrl = 'http://localhost:4000/entities/getData';
var entityID = '';
request({
  uri: requestUrl,
  method: 'POST',
  json: true,
  body: {
    'email': 'dkfhd950207@gmail.com',
    'password': 'wogus!23'
  }
}, settingDomain);

function settingDomain(error, response) {
  console.log("error:", error);
  console.log('---------------------');
  console.log(JSON.stringify(response));

  response.forEach(function (value, index) {
    entityID = Entities.findEntitiesByName(value.entityName, MyAvatar.position, 500, false)[0];
    if (value.type == "01") {
      Entities.editEntity(entityID, {
        imageURL: value.imgUrl
      });
    }
    else {
      Entities.editEntity(entityID, {
        text: value.text
      });
    }
  });
  // var entityIDs = Entities.findEntitiesByName("img01", MyAvatar.position, 500, false);
  // console.log(entityIDs)
}