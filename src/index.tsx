import * as React from 'react';
import { render } from 'react-dom';
import { App } from 'posterpad';

// tslint:disable-next-line: no-submodule-imports
import 'posterpad/dist/style.css';

render(<App />, document.getElementById('app'));
