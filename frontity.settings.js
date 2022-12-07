const settings = {
  "name": "onirostudio",
  "state": {
    "frontity": {
      "url": "https://admin.onirostudio.com",
      "title": "Oniro Studio",
      "description": "Give your interior another look"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Paintings",
              "/painting"
            ],
            [
              "Paintings Categories",
              "/painting_cat"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://admin.onirostudio.com/wp-json",
          "postTypes": [
            {
              "type": "painting",
              "endpoint": "painting",
              "archive": "/painting_cat",
            }
          ],  
          "taxonomies": [
            {
              "taxonomy": "painting_cat",
              "endpoint": "painting_cat",
              "postTypeEndpoint": "painting",
            },
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@aamodtgroup/frontity-contact-form-7",
  ]
};

export default settings;
