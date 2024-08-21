import './App.css';

import ListaSalas from './components/ListaSalas';
import Home from './components/Home';
import SobreSite from './components/SobreSite';
import Mensagens from './components/Mensagens';


function App() {
    return (
        <div className="App">
            <div className="body">
                <ListaSalas/>
            </div>
        </div>
    );    
}

export default App;
