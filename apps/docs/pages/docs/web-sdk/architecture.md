# WebSDK Architecture

## Architecture Overview

image here

## Store management.

Our React App is wrapped around its own custom zustand store, which handles all the peer data.

(Link to Store Management)

## HuddleClientContext.

provides all context required by the client like room metadata and client methods including sending Messages and Reactions, enabling/disabling audio and video in the room, changing the mic and webcam, joining the room, etc.
Store Management is a part of HuddleClientContext
