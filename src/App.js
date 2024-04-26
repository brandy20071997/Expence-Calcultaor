import logo from './logo.svg';
import './App.css';
import Header from './components/Header.tsx';
import Balance from './components/Balance.jsx';
import Incomeexpence from './components/Incomeexpence.jsx';
import TransactionList from './components/TransactionList.js';
import Addtranstion from './components/Addtranstion.jsx';
import { GlobalProvider } from './Context/Globalstate.js';


function App() {
  return (
    <GlobalProvider>
     <Header/>
     <div className="container">
      <Balance/>
      <Incomeexpence/>
      <TransactionList/>
      <Addtranstion/>
     </div>
    </GlobalProvider>
  );
}

export default App;
