---
sidebar_position: 1
---

# Quick Start

> **_NOTE:_** Request for access to the huddle01-client pkg on Huddle01's discord or reach out to the team.

Install the `huddle01-client` pkg from **_npm_** or **_yarn_**

## Installation

```bash
# npm
npm i @huddle01/huddle01-client

# yarn
yarn add @huddle01/huddle01-client
```

## Import

`import` `HuddleClientProvider` and `getHuddleClient` from the **_npm_** pkg

```jsx
// HuddleIframe to be imported
import { HuddleClientProvider, getHuddleClient } from "huddle01-client";
```

## Configure

Configure `huddleClient`

```jsx
const huddleClient = getHuddleClient();
```

## Wrap providers

Wrap your application with `HuddleClientProvider`

```jsx
// JavaScript | TypeScript
const App = () => {
  return (
    <HuddleClientProvider value={huddleClient}>
      <YourApp />
    </HuddleClientProvider>
  );
};
```

## Usage

```jsx
// JavaScript | TypeScript
import { useHuddleClientContext } from "huddle01-client/hooks";

const huddleClient = useHuddleClientContext();

// Example
huddleClient.muteMic();
```

---

💡 For any help reach out to us on
[Discord](https://discord.com/invite/EYqfS32jYc)
