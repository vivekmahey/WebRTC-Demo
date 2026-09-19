function hasUserMedia() {
   //check if the browser supports the WebRTC
   return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}

if (hasUserMedia()) {

   //enabling video and audio channels
   navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
   })
   .then(function (stream) {

      var video = document.querySelector('video');

      //inserting our stream to the video tag
      video.srcObject = stream;

   })
   .catch(function (err) {

      console.log("Error accessing camera and microphone:", err);

   });

} else {

   alert("WebRTC is not supported");

}