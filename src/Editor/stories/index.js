import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text, select, boolean } from '@kadira/storybook-addon-knobs';
import Editor from '../';
import themes from '../themes';
import WithTabs from './WithTabs';

const value = `
var themes = [];

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
        theme={select('theme', themes, 'default')}
        value={text('value', value)}
        lineNumbers={boolean('lineNumbers', true)}
        lineWrapping={boolean('lineWrapping', false)}
        foldGutter={boolean('foldGutter', true)}
        readOnly={boolean('readOnly', false)}
        autofocus
      />
    )
  )
  .addWithInfo(
    'with tabs',
    '',
    () => (
      <WithTabs
        value={text('value', value)}
        lineNumbers={boolean('lineNumbers', true)}
      />
    )
  );
