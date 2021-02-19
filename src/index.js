import { requestVideo } from './utils'
import './styles/main.scss'


const btn = document.getElementById("btn-download");

btn.addEventListener("click", () => {
    const videoUrl = 'https://run.mocky.io/v3/2393a2af-b036-4bab-babd-b01691c78568';

    requestVideo(videoUrl, () => {

        console.log("is working");

        var videoPlayer = document.getElementById("videoPlayer");

        videoPlayer.style.display = "block";

    });
});



