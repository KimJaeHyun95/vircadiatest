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
  for (var item in response) {
    entityID = Entities.findEntitiesByName(response[item].entityName, MyAvatar.position, 500, false)[0];
    if (response[item].type == "01") {
      Entities.editEntity(entityID, {
        imageURL: response[item].imgUrl
      });
    }
    else {
      console.log("@#44423423")
      Entities.editEntity(entityID, {
        text: response[item].text
      });

    }
  }
  // var entityIDs = Entities.findEntitiesByName("img01", MyAvatar.position, 500, false);
  // console.log(entityIDs)
}