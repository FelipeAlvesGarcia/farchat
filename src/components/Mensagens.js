import fechar from '../img/fechar.png';
import mandar from '../img/mandar.png';

function Mensagens (){

    return(
        <>
            <header className="bg1">
                <div className="container-fluid">
                    <div className="row py-3">
                        <h1 className="ps-4 col-6 fs-5 text-white mt-2">Galera do Fut</h1>
                        <div className="col-6 justify-content-end d-flex align-items-center">
                            <a href="/salas"><img src={fechar} style={{width:"1.5rem", height:"1.5rem"}} className="me-4 hover2" alt=""/></a>
                        </div>
                    </div>
                </div>
            </header>

            <main id="mensagens">
                <div className="container-fluid">

                    <div className="row d-flex justify-content-center">
                        <div className="col-6 col-sm-4 col-md-2" id="dia">
                            <p className="text-center p-2 m-0"><b>26/07/2024</b></p>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-3 col-sm-2 col-lg-1 position-relative">
                            <div className="bg3 ponta"></div>
                            <div className="bg4 suportePonta"></div>
                        </div>
                        <div className="col-9 col-sm-8 col-md-7 col-lg-6 bg3 msg">
                            <p className="p-2 pt-3 m-0"><b>FernadoGV - </b>09:43</p>
                            <p className="p-4 pb-2 pt-0">Opa galera! Vamos jogar futebol hj? A gente poderia jogar de tarde as 18:20 ou 17:20. Daí eu levo bola e os times a gente faz lá</p>
                        </div>
                    </div>

                    <div className="row mt-4 justify-content-end">
                        <div className="col-9 col-sm-8 col-md-7 col-lg-6 bg5 msg2">
                            <p className="p-2 pt-3 m-0 text-end">11:27</p>
                            <p className="p-4 pb-2 pt-0 texto-end">Opa, por mim vamos e pode ser 18:20, porque antes eu vou ter que fazer umas coisas da escola</p>
                        </div>
                        <div className="col-3 col-sm-2 col-lg-1 position-relative">
                            <div className="bg5 ponta2"></div>
                            <div className="bg4 suportePonta2"></div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-3 col-sm-2 col-lg-1 position-relative">
                            <div className="bg3 ponta"></div>
                            <div className="bg4 suportePonta"></div>
                        </div>
                        <div className="col-9 col-sm-8 col-md-7 col-lg-6 bg3 msg">
                            <p className="p-2 pt-3 m-0"><b>PH207 - </b>15:29</p>
                            <p className="p-4 pb-2 pt-0">Opa galera! Vamos jogar futebol hj? A gente poderia jogar de tarde as 18:20 ou 17:20. Daí eu levo bola e os times a gente faz lá</p>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-3 col-sm-2 col-lg-1 position-relative">
                            <div className="bg3 ponta"></div>
                            <div className="bg4 suportePonta"></div>
                        </div>
                        <div className="col-9 col-sm-8 col-md-7 col-lg-6 bg3 msg">
                            <p className="p-2 pt-3 m-0"><b>Joel0_0 - </b>15:56</p>
                            <p className="p-4 pb-2 pt-0">Opa galera! Vamos jogar futebol hj? A gente poderia jogar de tarde as 18:20 ou 17:20. Daí eu levo bola e os times a gente faz lá</p>
                        </div>
                    </div>

                </div>
            </main>

            <section id="texto" className="bg4 pt-3 pt-lg-2">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-9 col-md-8">
                            <input type="text" className="rounded-pill border-0 py-3 px-5 fs-6 mb-3 w-100" style={{outline: "none"}} placeholder="Digite..."/>
                        </div>
                        <div className="col-3 col-sm-2">
                            <div><img src={mandar} alt="" style={{height:"3.5rem"}} className="hover"/></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Mensagens