{
  "host": "127.0.0.1",
  "port": 7777,

  "keyLength": 10,
  "maxLength": 400000,
  "staticMaxAge": 86400,
  "recompressStaticAssets": true,

  "logging": [
    {
      "level": "verbose",
      "type": "Console",
      "colorize": true
    }
  ],

  "keyGenerator": {
    "type": "phonetic"
  },

  "storage": {
    "type": "file",
    "path": "/home/hastebin/data"
  },
  "documents": {
    "about": "./about.md"
  }
}
