import Header from './components/Header';
import NotificationButton from './components/NotificationButton';
import Salescard from './components/SalesCard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <Salescard />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
