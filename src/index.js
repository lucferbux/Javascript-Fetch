import { requestVideo } from './utils'
import './styles/main.scss'


const btn = document.getElementById("btn-download");

btn.addEventListener("click", () => {
    const videoUrl = 'http://localhost:5000/static/la_caja.mp4';

    requestVideo(videoUrl, () => {
        var videoPlayer = document.getElementById("videoPlayer");
        videoPlayer.style.display = "block";
        videoPlayer.src = videoUrl;

    });
});



