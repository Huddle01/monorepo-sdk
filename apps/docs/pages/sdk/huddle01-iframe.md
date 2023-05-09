---
title: Huddle01 Iframe
---

# Huddle01 Iframe

Huddle01 IFrame lets you embed Huddle01's Web App in your website with a few lines of code

> **_NOTE:_** Request for access to the Iframe package on Huddle01's [discord](https://discord.com/invite/EYqfS32jYc) or reach out to the team.

## Vanilla

> **_NOTE:_** `src` can be a subdomain of your own instead of `iframe.huddle01.com`

### Markup

```html
  <iframe
      id="huddle01-iframe"
      src="https://iframe.huddle01.com/some-room"
      name="myiFrame"
      scrolling="no"
      height='90%'
      width='90%'
      allowFullScreen
      allow="camera; microphone; clipboard-read; clipboard-write; display-capture"
    ></iframe>
```

### Methods

```jsx
const huddleIframe = document.getElementById('huddle01-iframe');
huddleIframe.contentWindow.postMessage({ type: 'huddle01-iframe', methodType, methodData },'*');
```

**Methods:**

- **`muteMic()` ✅**
- **`unmuteMic()` ✅**
- **`enableShare()` ✅**
- **`disableShare()` ✅**
- **`startRecording()` ✅**
- **`stopRecording()` ✅**
- **`sendReaction(emogi)` ✅**
  **[allowed emogis: 😂, 😢, 😦, 😍, 🤔, 👀, 🙌, 👍, 👎, 🔥, 🍻, 🚀, 🎉, ❤️, 💯]**
- **`toggleHandRaise()` ✅**
- **`connectWallet(address)` ✅**

---

## React

### Quick Start

You must have the latest version of `Nodejs` installed on your machine. You can download the latest version of `Nodejs` from [here](https://nodejs.org/en/download/).

Install the `huddle01-iframe` pkg from **_npm_** or **_yarn_**

```bash
# npm
npm i @huddle01/huddle01-iframe

# yarn
yarn add @huddle01/huddle01-iframe
```

### **Huddle App Setup**

_import_ `<HuddleIframe />` from the **_npm_** package

```jsx
// HuddleIframe to be imported
import { HuddleIframe } from "@huddle01/huddle01-iframe";
```

```jsx
// JavaScript
const iframeConfig = {
  roomUrl: "https://iframe.huddle01.com/123",
  height: "600px",
  width: "80%",
  noBorder: false, // false by default
};
```

```tsx
// TypeScript
// import *IframeConfig* type from pkg too
import { HuddleIframe, IframeConfig } from "@huddle01/huddle01-iframe";

const iframeConfig: IframeConfig = {
  roomUrl: "https://iframe.huddle01.com/123",
  height: "600px",
  width: "80%",
  noBorder: false, // false by default
};
```

Pass the _`configObj`_ as a parameter to the `<HuddleIframeApp />` component

```jsx
// JavaScript | TypeScript
<HuddleIframe config={iframeConfig} />
```

---

### Instance Methods

**Usage:**

```jsx
// JavaScript | TypeScript
import { huddleIframeApp } from "@huddle01/huddle01-iframe";

//format
huddleIframeApp.methods.methodName();

//e.g.
huddleIframeApp.methods.muteMic();
```

**Methods:**

- **`muteMic()` ✅**
- **`unmuteMic()` ✅**
- **`enableShare()` ✅**
- **`disableShare()` ✅**
- **`startRecording()` ✅**
- **`stopRecording()` ✅**
- **`sendReaction(emogi)` ✅**
  **[allowed emogis: 😂, 😢, 😦, 😍, 🤔, 👀, 🙌, 👍, 👎, 🔥, 🍻, 🚀, 🎉, ❤️, 💯]**
- **`toggleHandRaise()` ✅**
- **`connectWallet(address)` ✅**

---

```jsx
// example participant
"EEXTeIr5C6": {
	peerId: "EEXTeIr5C6"
	avatarUrl: "https://bit.ly/3O7wUeR",
	displayName: "axit.eth",
	isCamPaused: false
	isHandRaised: false
	isMicPaused: false
	isSharePaused: false
}
```

- **`getParticipants()` ✅**
  - **`peer {type: Peer}`**
    - _`peerId {type: String}`_
    - _`avatarUrl {type: String}`_
    - _`displayName {type: String}`_
    - _`isHandRaised {type: Boolean}`_
    - _`isCamPaused {type: Boolean}`_
    - _`isMicPaused {type: Boolean}`_
    - _`isSharePaused {type: Boolean}`_

---

**Events**

All Action methods have their own events and can be listened to if they are called using the api.
There are some additional meeting events that you can listen to as well:

- `peer-join` **✅**
- `peer-left` **✅**
- `me-left` **✅**
- `avatar-url-changed` **✅**

```jsx
// JavaScript
import { huddleIframeApp, HuddleAppEvent } from "@huddle01/huddle01-iframe";

huddleIframeApp.on("peer-join", (data) => console.log({ data }));
```

```tsx
// TypeScript
import { huddleIframeApp, HuddleAppEvent } from "@huddle01/huddle01-iframe";

huddleIframeApp.on(HuddleAppEvent.PEER_JOIN, (data) => console.log({ data }));
```

---

💡 For any help reach out to us on
[Discord](https://discord.com/invite/MgR5wqd3J7)
