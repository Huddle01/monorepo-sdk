# WebSDK Architecture

<font color='red'>Few lines explaining basic arch of Web SDK</font>


## Architecture Overview

<font color='red'>image here</font>

## Store management.

Our React App is wrapped around its own custom zustand store, which handles all the peer data.

<font color='red'>(Link to Store Management)</font>

## HuddleClientContext

HuddleClientContext provides all context required by the client such as room metadata and client methods including sending Messages and Reactions, enabling/disabling audio and video in the room, changing the mic and webcam, joining the room, etc.
Store Management is a part of HuddleClientContext
