import PageTitle from "./components/PageTitle";
import AppHeader from "./components/AppHeader";
import styles from "./styles/modules/app.module.scss";
import AppContent from "./components/AppContent";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <div className="App">
        <PageTitle title={"todo list"} />
        <div className={styles.app__wrapper}>
          <AppHeader />
          <AppContent />
        </div>
      </div>
      <Toaster
        toastOptions={{
          position: "bottom-right",
          style: {
            fontSize: "1.4rem",
          },
        }}
      ></Toaster>
    </>
  );
}

export default App;
