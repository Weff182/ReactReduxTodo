import React from 'react';
import { Toaster } from 'react-hot-toast';
import PageTitle from './components/pageTitle';
import AppHeader from './components/appHeader/index';
import styles from './styles/modules/app.module.scss';
import AppContent from './components/appContent/index';

function App() {
  return (
    <>
      <div className="App">
        <PageTitle title="todo list" />
        <div className={styles.app__wrapper}>
          <AppHeader />
          <AppContent />
        </div>
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
