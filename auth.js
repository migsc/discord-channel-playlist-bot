const process = require("process");

module.exports = {
    "discord": {
        "token": process.env.DISCORD_TOKEN
    },
    "spotify": {
        "clientId": process.env.SPOTIFY_CLIENT_ID,
        "clientSecret": process.env.SPOTIFY_CLIENT_SECRET,
        "redirectUri": process.env.SPOTIFY_REDIRECT_URI
    }
}