module.exports = {
  "pluginOptions": {
    "s3Deploy": {
      "awsProfile": "default",
      "region": "us-east-1",
      "bucket": "vue-project-usr-mgmt",
      "createBucket": true,
      "staticHosting": true,
      "staticIndexPage": "index.html",
      "staticErrorPage": "index.html",
      "assetPath": "dist",
      "assetMatch": "**",
      "deployPath": "/",
      "acl": "public-read",
      "pwa": false,
      "enableCloudfront": false,
      "uploadConcurrency": 5,
      "pluginVersion": "3.0.0"
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}