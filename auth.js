const process = require("process");

module.exports = {
    "discord": {
        "token": process.env.DISCORD_TOKEN // "ODA4MTIwMzAwOTgxMDU5NTg0.YCB6rQ.-zcwMkpvJyVsSAGolZh8nQiE7nk"
    },
    "spotify": {
        "clientId": process.env.SPOTIFY_CLIENT_ID, // "56746f9cdfa54776b2f0e0307ad9ef4a",
        "clientSecret": process.env.SPOTIFY_CLIENT_SECRET, // "c455b2f8b620416f9dd0f24b614341e5",
        "redirectUri": process.env.SPOTIFY_REDIRECT_URI  // "https://ur9ox.csb.app/"
    }
}