import React from 'react';
import { Meta } from '@storybook/react';
import { HuddleIframe } from '../src';

const meta: Meta = {
  title: 'HuddleIframe',
  component: HuddleIframe,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const config = {
  roomUrl: 'http://localhost:3000/dev',
  height: '650px',
  width: '1200px',
};

//👇 We create a “template” of how args map to rendering
const Template = args => <HuddleIframe {...args} />;

// 👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { config };
