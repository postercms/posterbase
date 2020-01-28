import * as React from 'react';
import { render } from 'react-dom';
import { App } from 'posterpad';
// import firebase from './firebase.config';

// tslint:disable-next-line: no-submodule-imports
import 'posterpad/dist/style.css';

// const db = firebase.firestore();
// db.collection('posters').add({
//   name: 'First Poster',
// });
render(<App />, document.getElementById('app'));
