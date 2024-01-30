const settings = {
  "name": "onirostudio",
  "state": {
    "frontity": {
      "url": "https://www.onirostudio.com/",
      "title": "Oniro Studio",
      "description": "Daydreaming art pieces for your interior!"
    },
    "analytics": {
      "pageviews": {
        "googleAnalytics": false,
      },
      "events": {
        "googleAnalytics": true,
      }
    },
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
              "View all",
              "/all-paintings"
            ],
            [
              "New Collection",
              "/painting_cat/new-collection/"
            ],
            [
              "3D Texture Art",
              "/painting_cat/3d-texture-art/"
            ],
            [
              "Colourful",
              "/painting_cat/colourful/"
            ],
            [
              "Resin Art",
              "/painting_cat/resin-art/"
            ],
            [
              "Enso Collection",
              "/painting_cat/enso-collection/"
            ],
            [
              "Portraits",
              "/painting_cat/portraits/"
            ],
            [
              "About",
              "/#aboutSection"
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
          "api": "https://oniroadmin.medexpress.al/wp-json/",
          "postTypes": [
            {
              "type": "painting",
              "endpoint": "painting",
              "archive": "/all-paintings",
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
    {
      name: "@frontity/google-tag-manager-analytics",
      state: {
        googleTagManagerAnalytics: {
          containerId: "G-ZDDTDCBQLK",
        },
      },
    },
  ]
};

export default settings;
