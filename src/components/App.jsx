import React from 'react';
import { Toaster } from 'react-hot-toast';
import PageTitle from './pageTitle';
import AppHeader from './appHeader/index';
import AppContent from './appContent/index';
import { AppWrapper } from './styled';

function App() {
  return (
    <>
      <div className="App">
        <PageTitle title="todo list" />
        <AppWrapper>
          <AppHeader />
          <AppContent />
        </AppWrapper>
      </div>
      <Toaster
        toastOptions={{
          position: 'bottom-right',
          style: {
            fontSize: '1.4rem',
          },
        }}
      />
    </>
  );
}

export default App;
