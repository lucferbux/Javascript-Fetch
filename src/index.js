import { requestVideo } from './utils'
import './styles/main.scss'


const btn = document.getElementById("btn-download");

btn.addEventListener("click", () => {
    const videoUrl = 'https://firebasestorage.googleapis.com/v0/b/lucferbux-web-page.appspot.com/o/la_caja.mp4?alt=media&token=6c90cca9-a1d3-45ab-8205-16982ccc8c7c';
    const checkUrlImage = '2ocykBzWDiM';

    requestVideo(checkUrlImage, () => {
        var videoPlayer = document.getElementById("videoPlayer");
        videoPlayer.style.display = "block";
        videoPlayer.src = videoUrl;

    });
});



