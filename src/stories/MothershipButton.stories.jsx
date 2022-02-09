import { Button } from '@mui/material';
import React from 'react';

/**
 * Notes:
 * - Use MUI's default Button and pass it various arguments.
 * - Storybook's preview is automatically wrapped with the custom theme in ./storybook/preview.js
 */
export default {
  title: 'DesignSystem/Buttons',
  component: Button,
};
const Template = (args) => <Button variant="contained" {...args}>{args.children || 'Default Button' }</Button>

export const Default = Template.bind({});
export const Large = Template.bind({});
Large.args = { size: 'large', children: 'Large Button' }
export const Small = Template.bind({})
Small.args = { size: 'small', children: 'Small Button' }
