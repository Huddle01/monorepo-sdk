# WebSDK Architecture

The basic layout of the SDK is simple, it has React app at its Core which is wrapped around with its own custom store management. For now we use Zustand due to its Hooks based paradigm as it is more scalable and having one big store keeps things simple. It also comes with features like having custom functions to handle the re-rendering of the components. To know more about zustand check their [docs](https://github.com/pmndrs/zustand#selecting-multiple-state-slices)

You can leverage the `useHuddleStore` hook to access the store. Read more about [Store States](/sdk/web-sdk/store-states/room-states)

Your Application must be wrapped with the HuddleClient Provider, which plugs in the Huddle01 SDK in your application. <br />

Provider is necessary to initialise the `HuddleClient` Class which exposes all the [Client Methods](/sdk/web-sdk/methods) which is invoked for different use case.

## Architecture Overview

<img src="/docs/images/docs/client-sdk-arch.png" alt="drawing" width="100%"/>
