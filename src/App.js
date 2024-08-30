import {BrowserRouter, Route, Routes} from 'react-router-dom';

import './App.css';

import ListaSalas from './components/ListaSalas';
import Home from './components/Home';
import SobreSite from './components/SobreSite';
import Mensagens from './components/Mensagens';


function App() {
    return (
        <div className="App">
            <div className="body">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/sobre" element={<SobreSite />} />
                        <Route path="/salas" element={<ListaSalas />} />
                        <Route path="/mensagens" element={<Mensagens />} />
                        <Route path="*" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );    
}

export default App;
