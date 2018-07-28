import * as React from 'react';
import * as ReactDOM from 'react-dom';

// FontAwesome Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faChevronCircleUp,
  faChevronCircleDown,
  faDownload,
  faLink,
  faQuoteLeft,
  faEnvelope,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(
  fab,
  faChevronCircleDown,
  faChevronCircleUp,
  faDownload,
  faLink,
  faQuoteLeft,
  faEnvelope,
  faCheckCircle,
);

import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
