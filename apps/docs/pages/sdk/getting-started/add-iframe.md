---
title: Huddle01 Iframe
---

# Add Huddle01 Iframe

Huddle01 IFrame lets you embed Huddle01's Web App in your website with a few lines of code

> **_NOTE:_** Request for access to the Iframe package on Huddle01's [discord](https://discord.com/invite/EYqfS32jYc).

## Quick Start

You must have the latest version of `Nodejs` installed on your machine. You can download the latest version of `Nodejs` from [here](https://nodejs.org/en/download/).

Install the `huddle01-iframe` pkg from **_npm_** or **_yarn_**

```bash
# npm
npm i @huddle01/huddle01-iframe

# yarn
yarn add @huddle01/huddle01-iframe
```

## **Huddle App Setup**

_import_ `<HuddleIframe />` from the **_npm_** pkg

```jsx
// HuddleIframe to be imported
import { HuddleIframe } from "@huddle01/huddle01-iframe";
```

Create a config object as follows:

```jsx
// JavaScript
const iframeConfig = {
  roomUrl: "http://localhost:3000/123",
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
  roomUrl: "http://localhost:3000/123",
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

## Next Steps

Now that you have successfully integrated the Huddle01 Iframe to your project, you can start using the Iframe to build your own features.

Check out [Instance Methods](/sdk/huddle01-iframe#instance-methods) to learn more about how to invoke different `huddleIframeApp` methods to build your own features.
