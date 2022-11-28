# WebSDK Architecture

The basic layout of the SDK is simple, it has React app at its Core which is wrapped around with its own custom store management. For now we use Zustand due to its Hooks based paradigm as it is more scalable and having one big store keeps things simple. With additional features to have custom functions to handle re-rendering of components.

You can leverage the `useHuddleStore` hook to access the store. Read more about [Store States](/docs/web-sdk/store-states/room-states)

Your Application must be wrapped with the HuddleClient Provider, which plugs in the Huddle01 SDK in your application. <br />

Provider is necessary to initalise the `HuddleClient` Class which exposes all the [Client Methods](/docs/web-sdk/methods) which is invoked for different use case.

## Architecture Overview

<img src="/docs/images/docs/client-sdk-arch.png" alt="drawing" width="100%"/>
