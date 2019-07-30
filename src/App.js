import React from 'react';
import { ConversionContainer } from './components/currency/conversion/container';
import { HeaderWidget } from './components/landing/header/widget';
import { FooterWidget } from './components/landing/footer/widget';
import Style from 'styled-components';

const AppContainer = Style.div`
  text-align: center;
`

function App() {
  return (
    <AppContainer>
      <HeaderWidget/>
      <ConversionContainer />
      <FooterWidget />
    </AppContainer>
  );
}

export default App;
