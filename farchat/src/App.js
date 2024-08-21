import './App.css';
import botao from './img/botao.png';
import aviao from './img/aviao.png';
import mensagem from './img/mensagem.png';
import usuario1 from './img/usuario1.png';
import usuario2 from './img/usuario2.png';

let tela = "salas";
function App() {
    if(tela === "home"){
        return (
            <div className="App">
            <div className="body">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-7 justify-content-center">
                                <h1 className="text-center mt-5 mb-5"><a href="sobre.html" className="a hover2" id="titulo">FARCHAT</a></h1>
                                <div className="w-100 p-5 row bg1 justify-content-center" style={{borderRadius:"25px"}}>
                                    <p className="text-white mb-2 ms-4 text-start">Nome:</p>
                                    <input type="text" className="rounded-pill bg2 border-0 py-3 px-5 fs-6 text-white mb-4" style={{outline: "none"}} placeholder="Nome..."/>
                                    <a href="salas.html" className="a d-inline col-4 my-5" id="entrarSalas"><img src={botao}className="w-100 hover" alt=""/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="imgBg">
                        <img src={aviao} alt="" className="imgFundo" style={{right:"10%", top:"28%"}}/>
                        <img src={aviao} alt="" className="imgFundo" style={{left:"26%", bottom: "12%", transform: "scaleX(-1)"}}/>
                        <img src={mensagem} alt="" className="imgFundo" style={{left:"6.5%", bottom:"35%", transform: "rotate(-55deg)"}}/>
                        <img src={mensagem} alt="" className="imgFundo" style={{right:"11%", bottom:"20%"}}/>
                        <img src={usuario1} alt="" className="imgFundo" style={{left:"8%", top:"24%"}}/>
                        <img src={usuario2} alt="" className="imgFundo" style={{right:"32%", bottom:"10%"}}/>
                    </div>
                </div>
            </div>
        );    
    }
    else if(tela === "salas"){
        return (
            <div className="App">
                <div className="body">
                    <div id="mascara"></div>
                    <div class="container-fluid mt-4" id="porta">
                        <div class="row justify-content-center">
                            <div class="col-7 justify-content-center">
                                <h1 class="text-center mt-5 mb-5" id="titulo">Cimol 631A</h1>
                                <div class="w-100 p-5 row bg1 justify-content-center" style={{borderRadius:"25px"}}>
                                    <p class="text-white mb-2 ms-4">Senha:</p>
                                    <input type="password" class="rounded-pill bg2 border-0 py-3 px-5 fs-6 text-white mb-4" style={{outline: "none"}} placeholder="********"/>
                                    <a href="mensagens.html" class="a d-inline col-4 my-5"><img src="./img/botao.png" class="w-100 hover" alt=""/></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <header class="bg1">
                        <div class="container-fluid">
                            <div class="row">
                                <h1 class="ps-4 col-6"><a href="sobre.html" class="a ms-2 hover2" id="titulo2">FARCHAT</a></h1>
                                <div class="col-6 justify-content-end d-flex align-items-center">
                                    <a href="home.html"><img src="./img/sair.png" style={{width:"1.5rem", height:"1.5rem"}} class="me-4 hover2" alt=""/></a>
                                </div>
                            </div>
                        </div>
                    </header>

                    <main id="salas">
                        <div class="container mt-5">
                            <a class="row bg2 rounded a my-2" id="sala" href="mensagens.html">
                                <div class="col-6">
                                    <h2 class="text-white fs-5 p-3">Grupo do Fut</h2>
                                </div>
                                <div class="col-6 d-flex justify-content-end align-items-center">
                                    <div>
                                        <img src="./img/publica.png" alt="" style={{width:"1.75rem"}} class="me-4"/>
                                    </div>
                                </div>
                            </a>
                            <a class="row bg2 rounded a my-2 privada" id="sala" href="#/entrar">
                                <div class="col-6">
                                    <h2 class="text-white fs-5 p-3">Cimol 631A</h2>
                                </div>
                                <div class="col-6 d-flex justify-content-end align-items-center">
                                    <div>
                                        <img src="./img/privada.png" alt="" style={{width:"1.75rem"}} class="me-4"/>
                                    </div>
                                </div>
                            </a>
                            <a class="row bg2 rounded a my-2" id="sala" href="mensagens.html">
                                <div class="col-6">
                                    <h2 class="text-white fs-5 p-3">Oficina de Jogos</h2>
                                </div>
                                <div class="col-6 d-flex justify-content-end align-items-center">
                                    <div>
                                        <img src="./img/publica.png" alt="" style={{width:"1.75rem"}} class="me-4"/>
                                    </div>
                                </div>
                            </a>
                            <a class="row bg2 rounded a my-2" id="sala" href="mensagens.html">
                                <div class="col-6">
                                    <h2 class="text-white fs-5 p-3">Torneio de RL</h2>
                                </div>
                                <div class="col-6 d-flex justify-content-end align-items-center">
                                    <div>
                                        <img src="./img/publica.png" alt="" style={{width:"1.75rem"}} class="me-4"/>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </main>

                    <footer class="bg1 py-2" style={{borderTopLeftRadius: "15px", borderTopRightRadius: "15px;"}}>
                        <div class="container">
                            <div class="row">
                                <div class="col-12  d-flex justify-content-center">
                                    <button class="botao hover" id="up"><img src="./img/up.png" alt="" style={{width:"2rem"}}/></button>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        )
    }
}

export default App;
