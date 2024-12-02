const video = document.getElementById('autoplay-video');

// Function to check if the video is in the viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle the video play/pause based on visibility
function handleVisibility() {
  if (isElementInViewport(video)) {
    video.play();
  } else {
    video.pause();
  }
}

// Attach the event listener to check visibility on scroll
window.addEventListener('scroll', handleVisibility);

// Initial check on page load
handleVisibility();