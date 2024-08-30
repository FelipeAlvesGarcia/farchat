import voltar from '../img/voltar.png';

function SobreSite (){

    return (
        <>
            <a href="/" id="voltar" className="mt-5 hover">
                <img src={voltar} alt="" className="mt-1"/>
            </a>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-7 justify-content-center">
                        <h1 className="text-center mt-5 mb-5" id="titulo">FARCHAT</h1>
                    </div>
                    <div className="row mt-5">
                        <b><p className="text-white col-12 mb-2">AUTOR: Felipe Alves Garcia</p>
                        <p className="text-white col-12 mb-2">NOME: FARCHAT</p>
                        <p className="text-white col-12 mb-2">VERSÃO: 1.0</p></b>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SobreSite;