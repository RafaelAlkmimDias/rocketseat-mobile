import { StatusBar } from 'react-native';
import React from 'react';

import Home from './src/pages/Home';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
      <Home />
    </>
  );
}
