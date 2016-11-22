import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text, select, boolean } from '@kadira/storybook-addon-knobs';
import Editor from '../';

const themes = {
  default: 'default',
  night: 'night',
  'solarized dark': 'solarized dark',
  'solarized light': 'solarized light',
  'tomorrow-night-bright': 'tomorrow-night-bright'
};

const value = `
var themes = ${JSON.stringify(themes, null, 2)};

function getThemes() {
  return themes;
}
`;

storiesOf('Editor', module)
  .addDecorator(withKnobs)
  .addWithInfo(
    'default',
    '',
    () => (
      <Editor
        value={text('value', value)}
        theme={select('theme', themes, 'default')}
        lineNumbers={boolean('lineNumbers', true)}
        lineWrapping={boolean('lineWrapping', false)}
        readOnly={boolean('readOnly', false)}
      />
    )
  );
