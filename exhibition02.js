/*
  This is a script that manages the events of Exhibition Hal l02.
*/
Entities.clickDownOnEntity.connect(function (id, event) {

  var button01Id = "{cde974e7-de26-4da8-a646-a5a6c37774e1}";
  var img01Id = "{9533609c-5a7e-4509-a745-1bb6413acccc}";
  var web01Id = "{6db54149-0a04-4789-af63-88d7d7cc35d4}";

  var button02Id = "{be0d0d72-f1d6-440b-a9a6-1efd014766ed}";
  var img02Id = "{c493faa5-c4eb-4c73-9545-935749d305e2}";
  var web02Id = "{ceb4a4c9-4a4f-4ac5-b5e9-423c03f9b983}";

  var button03Id = "{20430d6c-8254-4947-9a45-a55f6e473015}";
  var img03Id = "{6ef4fbc5-bee0-4ac7-926b-325972bcf3a5}";
  var web03Id = "{98833452-9712-424b-b720-7e545b4c9dbc}";

  var button04Id = "{1789382c-3155-41d9-b672-88f7bb07f4f2}";
  var img04Id = "{a3b652e3-f113-4e17-84ec-78d30fea0560}";
  var web04Id = "{f83a3938-d3c3-408b-b6a2-e11c595f76e9}";

  var button05Id = "{e476d27b-a293-4a52-b1de-03e7a754c8d5}";
  var img05Id = "{d21a032d-ef67-4c43-8389-44cac0c054b5}";
  var web05Id = "{97fb66dc-cad3-41ee-853d-4671ae9c895c}";

  if (id == button01Id) {
    var imgProperties = Entities.getEntityProperties(img01Id);
    if (imgProperties.visible) {
      startYoutube(web01Id)
      Entities.editEntity(img01Id, {
        visible: false
      });
      Entities.editEntity(web01Id, {
        visible: true
      });
    }
    else {
      stopYoutube(web01Id)
      Entities.editEntity(img01Id, {
        visible: true
      });
      Entities.editEntity(web01Id, {
        visible: false
      });
    }
  }
  else if (id == button02Id) {
    var imgProperties = Entities.getEntityProperties(img02Id);
    if (imgProperties.visible) {
      startYoutube(web02Id)
      Entities.editEntity(img02Id, {
        visible: false
      });
      Entities.editEntity(web02Id, {
        visible: true
      });
    }
    else {
      stopYoutube(web02Id)
      Entities.editEntity(img02Id, {
        visible: true
      });
      Entities.editEntity(web02Id, {
        visible: false
      });
    }
  }
  else if (id == button03Id) {
    var imgProperties = Entities.getEntityProperties(img03Id);
    if (imgProperties.visible) {
      startYoutube(web03Id)
      Entities.editEntity(img03Id, {
        visible: false
      });
      Entities.editEntity(web03Id, {
        visible: true
      });
    }
    else {
      stopYoutube(web03Id)
      Entities.editEntity(img03Id, {
        visible: true
      });
      Entities.editEntity(web03Id, {
        visible: false
      });
    }
  }
  else if (id == button04Id) {
    var imgProperties = Entities.getEntityProperties(img04Id);
    if (imgProperties.visible) {
      startYoutube(web04Id)
      Entities.editEntity(img04Id, {
        visible: false
      });
      Entities.editEntity(web04Id, {
        visible: true
      });
    }
    else {
      stopYoutube(web04Id)
      Entities.editEntity(img04Id, {
        visible: true
      });
      Entities.editEntity(web04Id, {
        visible: false
      });
    }
  }
  else if (id == button05Id) {
    var imgProperties = Entities.getEntityProperties(img05Id);
    if (imgProperties.visible) {
      startYoutube(web05Id)
      Entities.editEntity(img05Id, {
        visible: false
      });
      Entities.editEntity(web05Id, {
        visible: true
      });
    }
    else {
      stopYoutube(web05Id)
      Entities.editEntity(img05Id, {
        visible: true
      });
      Entities.editEntity(web05Id, {
        visible: false,
      });
    }
  }

  function startYoutube(webId) {
    var webSourceUrl = Entities.getEntityProperties(webId).sourceUrl;
    webSourceUrl = webSourceUrl.replace("?start=9999", '')
    Entities.editEntity(webId, {
      sourceUrl: webSourceUrl
    });
  }

  function stopYoutube(webId) {
    var webSourceUrl = Entities.getEntityProperties(webId).sourceUrl;
    Entities.editEntity(webId, {
      sourceUrl: webSourceUrl + "?start=9999"
    });
  }

})