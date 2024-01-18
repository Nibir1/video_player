// ------ Youtube Video Play System Starts Here ------
const playYoutubeVideo = (event: Event) => {
  event.preventDefault();

  const videoLinkInput = document.getElementById(
    "videoLink"
  ) as HTMLInputElement;

  // Accessing the video link pasted in the box
  const videoLink = videoLinkInput?.value;

  // Here we are extracting the video ID from youtube video link
  let videoID: string = videoLink.substring(32);
  let newLink = `https://www.youtube.com/embed/${videoID}`;
  console.log(newLink);

  // Getting the iframe here
  const iframePlayer = document.getElementById(
    "pastedVideoPlayer"
  ) as HTMLInputElement;
  iframePlayer.src = newLink;
};
// Getting the Play Video Button
const playButton = document.getElementById("playButton") as HTMLInputElement;
/**
 * Adding event listener to the Play Video Button
 * When clicked Play Video Button
 * we are calling the playYoutubeVideo function which is responsible in playing the video
 * */
playButton.addEventListener("click", playYoutubeVideo);

// ------ Youtube Video Play System Ends Here ------
