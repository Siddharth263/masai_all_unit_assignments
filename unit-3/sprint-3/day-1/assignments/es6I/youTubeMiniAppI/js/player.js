
let playVideo = () => {
    let video = JSON.parse(localStorage.getItem("video"));
    let vId = video.id.videoId;
    if(!vId) vId = video.id;
    console.log(vId);
    let player = document.querySelector("#iframe");
    player.src = `https://www.youtube.com/embed/${vId}`

}
