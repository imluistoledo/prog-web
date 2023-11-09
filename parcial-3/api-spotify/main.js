const slcGenres = document.querySelector('#genres')
const slcPlaylists = document.querySelector('#playlists')
const elmPlaylist = document.querySelector('#playlist')
const elmTitle = document.querySelector('#title')
const elmSubtitle = document.querySelector('#subtitle')

const clientID = '92f56b04ca124601acd00a35d23962f2'
const clientSecret = 'f91026610b8c4d97a1f5b36e7c7cf76a'
let token = ''

const getToken = async () => {
    const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${btoa(clientID + ':' + clientSecret)}`
        },
        body: 'grant_type=client_credentials'
    })

    const data = await result.json()
    token = data.access_token
}

const getGenres = async (token) => {
    const result = await fetch('https://api.spotify.com/v1/browse/categories?country=MX&locale=es_MX&limit=50&offset=0', {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` }
    })

    const data = await result.json()
    return data.categories.items
}

const getPlaylists = async (token, genre) => {
    const limit = 50
    const result = await fetch(`https://api.spotify.com/v1/browse/categories/${genre}/playlists?limit=${limit}`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` }
    })

    const data = await result.json()
    return data.playlists.items
}

const getTracks = async (token, tracksEndPoint) => {
    const limit = 10
    const result = await fetch(tracksEndPoint, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` }
    })

    const data = await result.json()
    return data
}

getToken().then(() => {
    getGenres(token).then(genres => {
        genres.forEach(genre => {
            // console.log(genre.name)
            let optGenre = document.createElement('option')
            optGenre.value = genre.id
            optGenre.text = genre.name
            slcGenres.appendChild(optGenre)
        })
    })
})

const convertToMinutes = (miliseconds) => {
    let seconds = Math.floor((miliseconds / 1000) % 60)
    let minutes = Math.floor((miliseconds / (1000 * 60)) % 60)

    seconds = (seconds < 10) ? "0" + seconds : seconds
    minutes = (minutes < 10) ? "0" + minutes : minutes

    return minutes + ":" + seconds
}

slcGenres.addEventListener('change', () => {
    let genre = slcGenres.value
    slcPlaylists.innerHTML = ''
    getPlaylists(token, genre).then(playlists => {
        playlists.forEach(playlist => {
            // console.log(playlist)
            let optPlaylist = document.createElement('option')
            optPlaylist.value = playlist.id
            optPlaylist.innerText = playlist.name
            slcPlaylists.appendChild(optPlaylist)
        })
    })
})

slcPlaylists.addEventListener('change', () => {
    let playlistID = slcPlaylists.value
    let tracksEndPoint = `https://api.spotify.com/v1/playlists/${playlistID}`
    let playlistTracks = ''
    elmPlaylist.innerHTML = ''
    elmTitle.innerText = slcPlaylists.options[slcPlaylists.selectedIndex].text
    elmSubtitle.innerText = slcGenres.options[slcGenres.selectedIndex].text
    getTracks(token, tracksEndPoint).then(playlist => {
        playlist.tracks.items.forEach(item => {
            let albumName = item.track.album.name
            let songName = item.track.name
            let songDuration = convertToMinutes(item.track.duration_ms)
            let artistName = item.track.artists[0].name

            playlistTracks += `
            <li class="track">
                <div class="song-info">
                    <div class="song">${songName} - ${artistName}</div>
                    <div class="album">${albumName}</div>
                </div>
                <div class="duration">${songDuration}</div>
            </li>
            `
        })
        elmPlaylist.innerHTML = playlistTracks
    })
})