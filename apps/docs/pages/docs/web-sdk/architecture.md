# WebSDK Architecture

The basic layout of the SDK is simple, it has React app at its Core which is wrapped around with its own custom store management for now we use Zustand due to its Hooks based paradigm which is more scalable and having one big store also keeps the things simple. With additional features to have custom functions to handle re-rendering of components.

You dont need to worry about how to handle the data for multiple peers. All of this is already handled for you just need to worry about how to utilise different features to make your usecase possible.

To access to Store, we have exposed the Hook `useHuddleStore` with all the types and other things you might need.

Get to know more about the [Store States](/docs/web-sdk/store-states/room-states)

The Application is supposed to be wapped with the HuddleClient Provider which plugs in the Huddle01 SDK in your application. <br />

Provider is necessary to initalise the `HuddleClient` Class which exposes all the [Client Methods](/docs/web-sdk/methods) which is invoked for different use case.

## Architecture Overview

<img src="/images/docs/client-sdk-arch.png" alt="drawing" width="100%"/>
