## Core Primitives

Huddle01 has only the following core constructs.

## Room

A `Room` represents a Huddle01 meeting session. It is a container for all the participants and the media streams.

`Room` is responsible for:

- pushing updates regarding changes to other `Peer`s in the `Room` , like when a `Peer` may mute/unmute their microphone, send messages , etc.
- synchronizing `Peer` states with each other and the mediaserver

## Peer

A `Peer` represents a participant in a Huddle01 Room. It is a container for all the media streams of a participant. They are represented by the `displayname` that is provided by the client and the server generated unique id we call `peerId`.
Every `Peer` is associated with a `Room`

> **Note:**
>
> `displayname` is not the same as `peerId`, which is the unique id of the user for the server. `displayname` is the name that the user chooses to be called by other users in the room hence more than one user can have the same `displayname` in a room.

## MediaStream

The `MediaStream` interface represents a stream of media content. A stream consists of several `tracks`, such as video or audio tracks. `MediaStreams` are associated with their respective `Peer`. Each `Peer` can have three types of `MediaStreams` associated with them.

- `cam` - `peer` video stream
- `mic` - `peer` audio stream
- `screen` - `peer` screen sharing stream

MDN Docs: [MediaStream](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream)

## MediaStreamTrack

The `MediaStreamTrack` interface represents a single media track within a `MediaStream`, these are audio or video tracks in our case .

MDN Docs: [MediaStreamTrack](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack)
