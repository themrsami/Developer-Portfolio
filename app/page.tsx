import React from 'react';
import Main from '@/components/main';
import { AppProvider } from '@/context/AppContext';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Main />
    </AppProvider>
  );
}

export default App;
