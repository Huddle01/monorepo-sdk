## Huddle01 Architecture

Huddle01 uses WebRTC protocol for real-time communication. Since WebRTC is not optimized and requires a media server to scale, we built our own customized SFU solution to tackle the scalability issue.

Huddle01 uses a microservice based architecture assisted with serverless functions. We have load balancer, simulcast, LastN, codecs, multithreading, and SFU cascading to handle users at scale. Live-streaming, Recording, Storage over IPFS/Filecoin, Authentication and Authorization, Databases are each maintained by a dedicated microservice.

<br />
<img src="/docs/images/docs/huddle01-arch.png" alt="drawing" width="100%"/>
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

A containerised microservice is responsible for recording and livestreaming meetings, written in Golang using Gstreamer.

- It handles streaming to streaming services such as Youtube, Twitch, etc
- It handles recording to local storage and cloud storage such as AWS S3, IPFS and Filecoin
- It handles multistreaming by forwarding the stream to a Livepeer node. Livepeer allows for streaming to multiple platforms at the same time.
