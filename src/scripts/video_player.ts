const playSelectedFile = (event: Event) => {
  // Preventing default form submission behavior
  event.preventDefault();

  const fileInput = document.getElementById("videoFile") as HTMLInputElement;
  // Accessing the first selected file
  const file = fileInput?.files?.[0];

  // Error checking if file exists that we have just taken from html
  if (file) {
    // if file exists then we are creating a temporary object URL
    const fileURL = URL.createObjectURL(file);
    // Finding the video element - responsible to play the video
    const videoNode = document.querySelector("video");

    if (videoNode) {
      // Setting the video source to the object URL
      videoNode.src = fileURL;
      // If there is a video then starts playing the video
      videoNode?.play();
    }
  } else {
    console.error("No file selected!");
  }
};
// Getting the input element AKA choose video file
const inputNode = document.querySelector("input") as HTMLInputElement;
/**
 * Adding event listener to the input element
 * As soon as we choose a video file through the input tag - it changes
 * and we are calling the playSelectedFile function which is responsible in playing the video*/
inputNode.addEventListener("change", playSelectedFile);
