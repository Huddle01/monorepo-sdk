import React from 'react';

export interface IframeConfig {
  roomUrl: string;
  noBorder?: boolean;
  height?: string;
  width?: string;
}

export interface Props {
  config: IframeConfig;
}

export const HuddleIframe: React.FC<Props> = ({ config }) => {
  const { noBorder, roomUrl, height, width } = config;

  return (
    <iframe
      id="huddle01-iframe"
      src={roomUrl}
      style={{ border: noBorder ? 'none' : '3px #333dde solid' }}
      name="myiFrame"
      scrolling="no"
      height={height || '90%'}
      width={width || '90%'}
      allowFullScreen
      allow="camera; microphone; clipboard-read; clipboard-write; display-capture"
    ></iframe>
  );
};
