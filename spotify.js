const axios = require('axios');

module.exports = {
    getPlaylist: async (playlistId) => {
        const res = await axios.default.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, { headers: { 'Authorization': `Bearer ${process.env.SPOTIFY_TOKEN}` } })
        const data = res.data;

        return data;
    },
}