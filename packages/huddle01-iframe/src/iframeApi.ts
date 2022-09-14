type IframeEventCallback = (data: any) => void;

export enum HuddleAppEvent {
  AVATAR_URL_CHANGED = 'avatar-url-changed',
  PEER_JOIN = 'peer-join',
  PEER_LEFT = 'peer-left',
  ME_LEFT = 'me-left',
}

export type HuddleClientMethodName =
  | 'muteMic'
  | 'unmuteMic'
  | 'enableWebcam'
  | 'disableWebcam'
  | 'enableShare'
  | 'disableShare'
  | 'startRecording'
  | 'stopRecording'
  | 'sendReaction'
  | 'connectWallet'
  | 'toggleRaiseHand';

export type HuddleClientInfoMethodName = 'getParticipants';

export type Reaction =
  | ''
  | '😂'
  | '😢'
  | '😦'
  | '😍'
  | '🤔'
  | '👀'
  | '🙌'
  | '👍'
  | '👎'
  | '🔥'
  | '🍻'
  | '🚀'
  | '🎉'
  | '❤️'
  | '💯';

export type HuddleClientMethods = {
  [key in HuddleClientMethodName]: (data?: any) => void;
};

export const triggerIframeEvent = (event: string, data: any) => {
  window.parent.postMessage(
    { type: 'room-event', eventData: { event, ...data } },
    '*'
  );
};

const on = (eventName: HuddleAppEvent, callback: IframeEventCallback) =>
  window.addEventListener(
    'message',
    event => {
      if (event.data.type !== 'room-event') return;

      if (event.data.eventData.event === eventName) {
        callback(event.data.eventData);
      }

      // Do we trust the sender of this message?  (might be
      // different from what we originally opened, for example).
      if (event.origin !== 'http://example.com') return;
    },
    false
  );

const callMethod = (
  methodType: HuddleClientMethodName | HuddleClientInfoMethodName,
  methodData?: any
) => {
  const huddleIframe: HTMLIFrameElement = document.getElementById(
    'huddle01-iframe'
  ) as HTMLIFrameElement;
  if (huddleIframe?.contentWindow)
    huddleIframe.contentWindow.postMessage(
      { type: 'huddle01-iframe', methodType, methodData },
      '*'
    );
  else console.log('huddleIframe is null');
};

const methods: HuddleClientMethods = {
  muteMic: () => {
    callMethod('muteMic');
  },
  unmuteMic: () => {
    callMethod('unmuteMic');
  },
  enableWebcam: () => {
    callMethod('enableWebcam');
  },
  disableWebcam: () => {
    callMethod('disableWebcam');
  },
  enableShare: () => {
    callMethod('enableShare');
  },
  disableShare: () => {
    callMethod('disableShare');
  },
  startRecording: () => {
    callMethod('startRecording');
  },
  stopRecording: () => {
    callMethod('stopRecording');
  },
  sendReaction: (reaction: Reaction) => {
    callMethod('sendReaction', reaction);
  },
  connectWallet: address => {
    callMethod('connectWallet', address);
  },
  toggleRaiseHand: () => {
    callMethod('toggleRaiseHand');
  },
};

export type HuddleClientInfoMethods = {
  [key in HuddleClientInfoMethodName]: (data?: any) => void;
};

const infoMethods: HuddleClientInfoMethods = {
  getParticipants: () => {
    callMethod('getParticipants');
  },
};

export const huddleIframeApp = {
  on,
  methods,
  infoMethods,
};
