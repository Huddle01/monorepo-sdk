---
title: Huddle01 Iframe
---

# Add Huddle01 Iframe

> **_NOTE:_** Request for access to the Iframe pkg on Huddle01's discord or reach out to the team.

## Quick Start

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

