import React from 'react';
import './secondpage.css';


import user from '../assets/user.svg';


export default function Second() {
    return(
        <div className="s-container">
            <nav>
                <div className="header-container">
                    <div className="header">
                        <div className="logo">
                            <img src={user} alt="logo"/>
                            <p>Beaulty SPA</p>
                        </div>

                        <div className="user">
                            <img src={user} alt="user"/>
                            <span>
                                <p>Beatriz Almeida</p>
                                <a href="/">Sair</a>
                            </span>
                        </div>
                    </div>    
                </div>
            </nav>

            <div className="cont-container">

                <p className="ag">Últimos Agendamentos</p>

                <div className="content">

                    <div className="info-client">
                        <p className="title">Agendamento <span className="bolder">#1</span> - Luanna Teixeira</p>
                        <p>Feito em 06/09 as 20:37</p>
                        <hr/>
                        <div className="ag-user-content">
                            <div className="ag-user">
                                <img src={user} alt="user"/>
                                <span>
                                    <p className="serv">Maquiagem</p>
                                </span>
                            </div>
                            <div className="ag-user">
                                <img src={user} alt="user"/>
                                <span>
                                    <p className="serv">Massagem relaxante</p>
                                </span>
                            </div>
                            <div className="ag-user">
                                <img src={user} alt="user"/>
                                <span>
                                    <p className="serv">Massagem seilaoq</p>
                                </span>
                            </div>
                            <div className="ag-user">
                                <img src={user} alt="user"/>
                                <span>
                                    <p className="serv">Aparelho 1</p>
                                </span>
                            </div>
                            <div className="ag-user">
                                <img src={user} alt="user"/>
                                <span>
                                    <p className="serv">Procedimento</p>
                                </span>
                            </div>
                            <div className="ag-user">
                                <img src={user} alt="user"/>
                                <span>
                                    <p className="serv">Depilação</p>
                                </span>
                            </div>
                            <div className="ag-user">
                                <img src={user} alt="user"/>
                                <span>
                                    <p className="serv">seilaoq</p>
                                </span>
                            </div>
                        </div>
                        <hr/>
                        <p className="alert-ag">Agendado para <span className="bolder">07/09</span> as <span className="bolder">09:30</span></p>
                    </div>

                </div>

                <div className="content">

                    <div className="info-client">
                        <p className="title">Agendamento <span className="bolder">#2</span> - Helloisa Oliveira</p>
                        <p>Feito em 06/09 as 20:37</p>
                        <hr/>
                        <div className="ag-user-content">
                            <div className="ag-user">
                                <img src={user} alt="user"/>
                                <span>
                                    <p className="serv">Maquiagem</p>
                                </span>
                            </div>
                            <div className="ag-user">
                                <img src={user} alt="user"/>
                                <span>
                                    <p className="serv">Massagem relaxante</p>
                                </span>
                            </div>
                
                        </div>
                        <hr/>
                        <p className="alert-ag">Agendado para <span className="bolder">07/09</span> as <span className="bolder">06:30</span></p>
                    </div>

                </div>

                <div className="content">

                    <div className="info-client">
                        <p className="title">Agendamento <span className="bolder">#3</span> - Geovana Silva</p>
                        <p>Feito em 06/09 as 20:37</p>
                        <hr/>
                        <div className="ag-user-content">
                            <div className="ag-user">
                                <img src={user} alt="user"/>
                                <span>
                                    <p className="serv">Maquiagem</p>
                                </span>
                            </div>
                        </div>
                        <hr/>
                        <p className="alert-ag">Agendado para <span className="bolder">07/09</span> as <span className="bolder">07:30</span></p>
                    </div>

                </div>

                <div className="content">

                    <div className="info-client">
                        <p className="title">Agendamento <span className="bolder">#4</span> - Chloe Decker</p>
                        <p>Feito em 06/09 as 20:37</p>
                        <hr/>
                        <div className="ag-user-content">
                            <div className="ag-user">
                                <img src={user} alt="user"/>
                                <span>
                                    <p className="serv">Maquiagem</p>
                                </span>
                            </div>
                            <div className="ag-user">
                                <img src={user} alt="user"/>
                                <span>
                                    <p className="serv">Massagem relaxante</p>
                                </span>
                            </div>
                            <div className="ag-user">
                                <img src={user} alt="user"/>
                                <span>
                                    <p className="serv">Massagem seilaoq</p>
                                </span>
                            </div>
                            <div className="ag-user">
                                <img src={user} alt="user"/>
                                <span>
                                    <p className="serv">Aparelho 1</p>
                                </span>
                            </div>
                        </div>
                        <hr/>
                        <p className="alert-ag">Agendado para <span className="bolder">07/09</span> as <span className="bolder">12:30</span></p>
                    </div>

                </div>

            </div>

        </div>
    );
}