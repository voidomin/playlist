// Get all elements containing video links in the playlist
var els = document.getElementsByClassName('yt-simple-endpoint style-scope ytd-playlist-video-renderer');

// Initialize an empty string to store each video URL
var show = "";

// Loop through each video element
for (var i = 0; i < els.length; i++) {
    var el = els[i];
    // Extract video ID and form the full URL, then add it to the show string
    show += ("https://www.youtube.com/watch?v=" + el.href.split('?v=')[1].split('&list')[0] + "\n");
}

// Print all video URLs to the console
console.log(show);
