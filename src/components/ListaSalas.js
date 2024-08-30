import sair from '../img/sair.png'
import botao from '../img/botao.png'
import publica from '../img/publica.png'
import privada from '../img/privada.png'
import up from '../img/up.png'

function ListaSalas (){
    
    function sala (){
        const privada = document.querySelector(".privada");
        const mascara = document.querySelector("#mascara");
        const porta = document.querySelector("#porta");

        privada.addEventListener('click', ()=>{
            mascara.style.display = "block";
            porta.style.display = "block";
        });
        mascara.addEventListener('click', ()=>{
            mascara.style.display = "none";
            porta.style.display = "none";
        });
    }

    function topo (){
        //const up = document.querySelector("#up");
        //up.addEventListener('click', ()=>{
        window.scroll({
            top:0,
            behavior:'smooth',
        });
    }

    return (
        <>
            <div id="mascara"></div>
            <div className="container-fluid mt-4" id="porta">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-7 justify-content-center">
                        <h1 className="text-center mt-5 mb-5" id="titulo">Cimol 631A</h1>
                        <div className="w-100 p-5 px-3 px-sm-5 row bg1 justify-content-center m-auto" style={{borderRadius:"25px"}}>
                            <p className="text-white mb-2 ms-4">Senha:</p>
                            <input type="password" className="rounded-pill bg2 border-0 py-3 px-5 fs-6 text-white mb-4" style={{outline: "none"}} placeholder="********"/>
                            <a href="/mensagens" className="a d-inline col-8 col-sm-6 col-md-5 col-lg-4  my-5"><img src={botao} className="w-100 hover" alt=""/></a>
                        </div>
                    </div>
                </div>
            </div>

            <header className="bg1 py-2 py-sm-1">
                <div className="container-fluid">
                    <div className="row">
                        <h1 className="ps-4 col-6 mt-1"><a href="/sobre" className="a ms-2 hover2" id="titulo2">FARCHAT</a></h1>
                        <div className="col-6 justify-content-end d-flex align-items-center">
                            <a href="/"><img src={sair} style={{width:"1.5rem", height:"1.5rem"}} className="me-4 me-sm-5 hover2" alt=""/></a>
                        </div>
                    </div>
                </div>
            </header>

            <main id="salas">
                <div className="container mt-5">
                    <a className="row bg2 rounded a my-2 mx-1" id="sala" href="/mensagens">
                        <div className="col-9">
                            <h2 className="text-white fs-5 p-3 mt-1">Grupo do Fut</h2>
                        </div>
                        <div className="col-3 d-flex justify-content-end align-items-center">
                            <div>
                                <img src={publica} alt="" style={{width:"1.75rem"}} className="me-4"/>
                            </div>
                        </div>
                    </a>
                    <div className="row position-relative bg2 rounded a my-2 privada mx-1" id="sala" onClick={sala}>
                        <div className="col-9">
                            <h2 className="text-white fs-5 p-3 mt-1">Cimol 631A</h2>
                        </div>
                        <div className="col-3 d-flex justify-content-end align-items-center">
                            <div>
                                <img src={privada} alt="" style={{width:"1.75rem"}} className="me-4"/>
                            </div>
                        </div>
                    </div>
                    <a className="row bg2 rounded a my-2  mx-1 mt-1" id="sala" href="/mensagens">
                        <div className="col-9">
                            <h2 className="text-white fs-5 p-3">Oficina de Jogos</h2>
                        </div>
                        <div className="col-3 d-flex justify-content-end align-items-center">
                            <div>
                                <img src={publica} alt="" style={{width:"1.75rem"}} className="me-4"/>
                            </div>
                        </div>
                    </a>
                    <a className="row bg2 rounded a my-2  mx-1 mt-1" id="sala" href="/mensagens">
                        <div className="col-9">
                            <h2 className="text-white fs-5 p-3">Torneio de RL</h2>
                        </div>
                        <div className="col-3 d-flex justify-content-end align-items-center">
                            <div>
                                <img src={publica} alt="" style={{width:"1.75rem"}} className="me-4"/>
                            </div>
                        </div>
                    </a>
                </div>
            </main>

            <footer className="bg1 py-2" style={{borderTopLeftRadius: "15px", borderTopRightRadius: "15px"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12  d-flex justify-content-center">
                            <button className="botao hover" id="up"><img src={up} alt="" style={{width:"2rem"}} onClick={topo}/></button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default ListaSalas;