import React from 'react';

import WebFont from 'webfontloader';
import Routes from './routes';
import GlobalStyles from './styles/global';

WebFont.load({
  google: {
    families: ['Roboto:400', 'sans-serif'],
  },
});

function App() {
  return (
    <>
      <Routes />
      <GlobalStyles />
    </>
  );
}

export default App;
