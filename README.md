# 📹 WebRTC Camera & Microphone Demo

A simple, modern **WebRTC `getUserMedia()` project** that captures audio and video directly from the user's browser and displays the resulting `MediaStream` in a `<video>` element.

Built as a hands-on learning project to understand the fundamentals of **WebRTC, MediaStream, MediaStreamTrack, and browser media APIs**.

Check Here : https://vivekmahey.github.io/WebRTC-Demo/

<p align="center">

  <a href="#-getting-started">
    <img src="https://img.shields.io/badge/Get%20Started-00C853?style=for-the-badge&logo=rocket&logoColor=white" alt="Get Started">
  </a>

  <a href="#-what-you-will-learn">
    <img src="https://img.shields.io/badge/Study%20Concepts-2962FF?style=for-the-badge&logo=bookstack&logoColor=white" alt="Study Concepts">
  </a>

  <a href="#-how-it-works">
    <img src="https://img.shields.io/badge/How%20It%20Works-7C4DFF?style=for-the-badge&logo=webrtc&logoColor=white" alt="How It Works">
  </a>

  <a href="#-future-learning">
    <img src="https://img.shields.io/badge/Next%20Steps-FF6D00?style=for-the-badge&logo=roadmap&logoColor=white" alt="Next Steps">
  </a>

</p>

---

## ✨ Overview

This project demonstrates one of the first steps in learning WebRTC:

> **Access the user's camera and microphone, obtain a `MediaStream`, and display it directly in the browser.**

The project uses the modern:

```javascript
navigator.mediaDevices.getUserMedia()
```

API instead of the older `navigator.getUserMedia()` API.

The captured stream is connected directly to the HTML video element using:

```javascript
video.srcObject = stream;
```

---

## 🎯 What You Will Learn

By studying this project, you will understand:

* What WebRTC is
* What `MediaStream` means
* What `MediaStreamTrack` means
* How browsers access cameras and microphones
* How `getUserMedia()` works
* How permissions work in the browser
* How to display a `MediaStream`
* What `video.srcObject` does
* Difference between media and data communication
* Basic idea behind `RTCPeerConnection`
* Basic idea behind `RTCDataChannel`

---

## 🧠 Core Concepts

### 1. MediaStream

A `MediaStream` represents a stream of media such as audio and video.

For example:

```text
Camera ────────┐
               ├──→ MediaStream
Microphone ────┘
```

A single stream can contain multiple media tracks.

---

### 2. MediaStreamTrack

A `MediaStream` contains individual tracks.

For example:

```text
MediaStream
│
├── Video Track 🎥
│
└── Audio Track 🎤
```

The video track represents the camera media, while the audio track represents microphone audio.

---

### 3. getUserMedia()

The browser provides:

```javascript
navigator.mediaDevices.getUserMedia({
   video: true,
   audio: true
});
```

This asks the user for permission to access:

* Camera
* Microphone

If permission is granted, the browser returns a `MediaStream`.

---

### 4. video.srcObject

Once we receive the stream:

```javascript
video.srcObject = stream;
```

we connect the stream directly to the `<video>` element.

This allows the browser to display the camera feed.

---

## 🔄 How It Works

```text
User
 │
 │ Grants Permission
 ↓
getUserMedia()
 │
 ↓
MediaStream
 │
 ├───────────────┐
 ↓               ↓
Video Track    Audio Track
 │
 ↓
video.srcObject
 │
 ↓
Browser Video Preview
```

---

## 🧩 Project Structure

```text
webrtc-camera-demo/
│
├── index.html       # Main HTML structure
├── style.css        # Glassmorphism UI & animations
├── client.js        # WebRTC camera/microphone logic
└── README.md        # Project documentation
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/webrtc-camera-demo.git
```

### 2. Enter the project

```bash
cd webrtc-camera-demo
```

### 3. Run the project

You can open the project using a local development server.

For example, with VS Code:

**Live Server → Open with Live Server**

> Camera and microphone access generally require a secure context such as `localhost` or HTTPS.

### 4. Allow permissions

When the browser asks for:

```text
Allow this site to use your camera and microphone?
```

Select **Allow**.

Your camera stream should then appear on the page.

---

## 💻 Core Code

The main WebRTC logic is inside `client.js`.

```javascript
function hasUserMedia() {
   //check if the browser supports the WebRTC
   return !!(
      navigator.mediaDevices &&
      navigator.mediaDevices.getUserMedia
   );
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

      console.log(
         "Error accessing camera and microphone:",
         err
      );

   });

} else {

   alert("WebRTC is not supported");

}
```

---

# 🔬 Understanding the Code

### Browser Support Check

```javascript
navigator.mediaDevices &&
navigator.mediaDevices.getUserMedia
```

This checks whether the browser provides the modern media API.

---

### Requesting Camera & Microphone

```javascript
navigator.mediaDevices.getUserMedia({
   video: true,
   audio: true
})
```

This requests access to both:

```text
Camera → Video
Microphone → Audio
```

---

### Receiving the MediaStream

When permission is granted:

```javascript
.then(function(stream) {
```

the `stream` variable contains the resulting `MediaStream`.

---

### Displaying the Stream

```javascript
video.srcObject = stream;
```

This tells the browser:

> Use this MediaStream as the source of the video element.

---

# 🌐 WebRTC Architecture

This project currently focuses on **local media capture**.

The next stage is peer-to-peer communication.

```text
                 WebRTC
                   │
       ┌───────────┴───────────┐
       │                       │
   Media APIs              Peer APIs
       │                       │
       ↓                       ↓
 MediaStream           RTCPeerConnection
 MediaStreamTrack      RTCDataChannel
       │                       │
       ↓                       ↓
 Camera/Audio            Remote Peer
```

---

# 📡 What's Next?

This project is intentionally the starting point for learning WebRTC.

### Phase 1 — Media Capture

* [x] Camera access
* [x] Microphone access
* [x] `MediaStream`
* [x] `MediaStreamTrack`
* [x] Display stream in `<video>`

### Phase 2 — Peer Connection

* [ ] `RTCPeerConnection`
* [ ] Add media tracks
* [ ] SDP Offer
* [ ] SDP Answer
* [ ] ICE Candidates
* [ ] STUN Servers
* [ ] TURN Servers

### Phase 3 — Data Communication

* [ ] `RTCDataChannel`
* [ ] Send text messages
* [ ] Send JSON data
* [ ] File transfer
* [ ] Real-time application data

### Phase 4 — Build a Real Application

* [ ] One-to-one video calling
* [ ] Audio controls
* [ ] Camera controls
* [ ] Screen sharing
* [ ] Text chat
* [ ] Connection status
* [ ] Call termination

---

# 📚 Study Guide

If you're using this repository to learn WebRTC, follow this order:

### 01 — Browser Media APIs

Learn:

* `navigator.mediaDevices`
* `getUserMedia()`
* Permissions
* `MediaStream`

↓

### 02 — MediaStream

Learn:

* `MediaStream`
* `MediaStreamTrack`
* Audio tracks
* Video tracks
* Channels

↓

### 03 — RTCPeerConnection

Learn:

* Peer-to-peer communication
* SDP
* Offer/Answer
* ICE
* STUN
* TURN

↓

### 04 — RTCDataChannel

Learn:

* Data channels
* `send()`
* `message` events
* JSON communication
* File transfer

↓

### 05 — Signaling

Learn how two peers exchange:

```text
Offer
Answer
ICE Candidates
```

↓

### 06 — Build a Video Calling App

Combine everything into a real WebRTC application.

---

# ⚠️ Common Issues

### Camera doesn't start

Make sure you:

* Allow camera permissions
* Allow microphone permissions
* Use `localhost` or HTTPS
* Check browser permissions
* Check the browser console

### `getUserMedia()` is undefined

Make sure you're using a modern browser and a secure context.

### Camera works locally but not after deployment

Check whether your deployed website is using:

```text
HTTPS
```

rather than:

```text
HTTP
```

---

# 🛠️ Technologies

<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/WebRTC-333333?style=for-the-badge&logo=webrtc&logoColor=white" alt="WebRTC">
</p>

---

# 📖 Important APIs

| API                      | Purpose                                   |
| ------------------------ | ----------------------------------------- |
| `navigator.mediaDevices` | Provides access to media devices          |
| `getUserMedia()`         | Requests camera/microphone access         |
| `MediaStream`            | Represents audio/video stream             |
| `MediaStreamTrack`       | Represents an individual media track      |
| `video.srcObject`        | Connects a MediaStream to a media element |
| `RTCPeerConnection`      | Handles WebRTC peer communication         |
| `RTCDataChannel`         | Sends arbitrary data between peers        |

---

# 🔐 Privacy

This project requests access to the user's:

* Camera
* Microphone

The browser controls these permissions.

The captured media is used by the application according to the browser's permission model.

Always understand and clearly communicate how camera and microphone data are being handled when building production applications.

---

# 🤝 Contributing

Want to experiment with WebRTC?

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/your-feature
```

3. Make your changes
4. Commit your changes

```bash
git commit -m "Add your feature"
```

5. Push your branch

```bash
git push origin feature/your-feature
```

6. Open a Pull Request

---

# ⭐ Learning Goal

This repository is part of my journey toward understanding **WebRTC from the fundamentals to real-time peer-to-peer applications**.

The goal is not just to copy WebRTC code, but to understand what happens behind the APIs:

```text
Camera
   ↓
MediaStream
   ↓
MediaStreamTrack
   ↓
RTCPeerConnection
   ↓
Signaling
   ↓
ICE / STUN / TURN
   ↓
Remote Peer
```

---

<p align="center">

### 🚀 Learn → Build → Experiment → Understand

**Built while learning WebRTC**

</p>
