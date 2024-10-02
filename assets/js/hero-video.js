document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector("#hero-1856 video");
    video.classList.add('video-hidden'); // Hide the video initially

    function playVideo() {
        video.muted = true;
        video.playsInline = true;
        video.autoplay = true;
        video.loop = true;

        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                console.log('Autoplay started');
                video.classList.remove('video-hidden');
                video.classList.add('video-visible');
            }).catch(error => {
                console.error('Autoplay was prevented:', error);
                // Retry after a very short delay
                setTimeout(playVideo, 1);
            });
        }
    }

    // Try to autoplay the video immediately
    playVideo();
});
