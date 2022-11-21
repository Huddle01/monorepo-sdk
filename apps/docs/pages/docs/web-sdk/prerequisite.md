# Pre-requisites to WebSDK

## Installing Node.js

To use the client sdk you must have Node.js installed on your machine.

- Install Node.js [with NVM](https://github.com/nvm-sh/nvm)
- Install Node.js [with FNM](https://github.com/Schniz/fnm)

or Download Node.js from their official [website](https://nodejs.org)

Pro Tip: Use NVM or FVM to install Node.js as they help in version management and easy updation

 **Verify Node.js is installed**

    ```bash
    > node --version
    ```

## Install Yarn

```bash
#npm
> npm install --global yarn
```

**Verify Yarn is installed**

    ```bash
    #yarn
    > yarn --version
    ```

## Sample application

To initialise a `huddle01-client` example app, run the following command

> **_NOTE:_** Add `-ts` or `--typescript` flag to init a typescript app

```bash
# npm
npx create-huddle01 --name my-app -tool client -ts
```
