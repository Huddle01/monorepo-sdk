## Huddle01 Architecture

<br />
<img src="/images/docs/huddle01-arch.png" alt="drawing" width="100%"/>
<br />

## **Huddle01 Mediaserver**

The Huddle01 Mediaserver is our in-house SFU implementation written in C++ bridged with Node.js. It is a Cascaded SFU allowing for Horizontal Scaling across multiple server instances. The SFU supports Simulcast and SVC which helps the end user to have a better experience in terms of bandwidth and quality. The SFU also supports the following features:

- **Audio/Video Conferencing**
- **Screen Sharing**
- **File Sharing**
- **Chat**
- **Recording**
- **Streaming to Platforms**
- **Multistreaming Via Livepeer**

## **Huddle01 Recorder / Livestreamer**

A containerised microservice is responsible for recording and livestreaming meetings , written in Golang using Gstreamer.

- It handles streaming to streaming services like Youtube, Twitch, etc
- It handles recording to local storage and cloud storage like AWS S3, IPFS and Filecoin
- It handles multistreaming by forwarding the stream to a Livepeer node , Livepeer allows for streaming to multiple platforms at the same time.
