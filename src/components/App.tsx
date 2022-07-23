import React, { useEffect } from 'react';
import styled from 'styled-components';
import { QuotePrompt } from './QuotePrompt';
import { TextInput } from './TextInput';

function App() {
  return (
    <div>
      <QuotePrompt></QuotePrompt>
      <TextInput></TextInput>
    </div>
  );
}

export default App;
