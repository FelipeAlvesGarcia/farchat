import botao from '../img/botao.png';
import aviao from '../img/aviao.png';
import mensagem from '../img/mensagem.png';
import usuario1 from '../img/usuario1.png';
import usuario2 from '../img/usuario2.png';

function Home (){

    function entrarSalas (){
        console.log("Entrar!")
    }

    return(
        <>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-7 justify-content-center">
                        <h1 className="text-center mt-5 mb-5"><a href="/sobre" className="a hover2" id="titulo">FARCHAT</a></h1>
                        <div className="w-100 p-5 px-3 px-sm-5 row bg1 justify-content-center m-auto" style={{borderRadius:"25px"}}>
                            <p className="text-white mb-2 ms-4 text-start">Nome:</p>
                            <input type="text" className="rounded-pill bg2 border-0 py-3 px-5 fs-6 text-white mb-4" style={{outline: "none"}} placeholder="Nome..."/>
                            <a href="/salas" className="a d-inline col-8 col-sm-6 col-md-5 col-lg-4  my-5" id="entrarSalas"><img src={botao}className="w-100 hover" alt=""/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="imgBg" className="d-none d-sm-block">
                <img src={aviao} alt="" className="imgFundo" style={{right:"10%", top:"28%"}}/>
                <img src={aviao} alt="" className="imgFundo" style={{left:"26%", bottom: "12%", transform: "scaleX(-1)"}}/>
                <img src={mensagem} alt="" className="imgFundo" style={{left:"6.5%", bottom:"35%", transform: "rotate(-55deg)"}}/>
                <img src={mensagem} alt="" className="imgFundo" style={{right:"11%", bottom:"20%"}}/>
                <img src={usuario1} alt="" className="imgFundo" style={{left:"8%", top:"24%"}}/>
                <img src={usuario2} alt="" className="imgFundo" style={{right:"32%", bottom:"10%"}}/>
            </div>
        </>
    )
}
export default Home;