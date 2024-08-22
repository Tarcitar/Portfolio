"use client";

import React, { useState, useContext, useRef } from 'react';

import { TemaContext } from '../context/TemaContext';

import style from './index.module.scss';


export default function TelaInicial() {
    const { MudarTema } = useContext(TemaContext);

    const [imgTema, setImgTema] = useState('/img/sol.gif');

    const [imgLogo, setImgLogo] = useState('/img/fox-light.gif');

    const [imgSeta, setImgSeta] = useState('/img/seta.png');
    const [imgSetaFlip, setImgSetaFlip] = useState('/img/seta-flip.png');

    const [imgInst, setImgInst] = useState('/img/instagram.gif');
    const [imgLink, setImgLink] = useState('/img/linkedin.gif');
    const [imgGithub, setImgGithub] = useState('/img/github.gif');

    const [imgYoutube, setImgYoutube] = useState('/img/youtube.gif');
    const [imgSpotify, setImgSpotify] = useState('/img/spotify.gif');

    const [imgTwitch, setImgTwitch] = useState('/img/twitch.gif');
    

    //.current
    const tela = useRef(0);

    function changeTela(modificador) {
        let translate = 400;

        if(screen.width <= 600) {
            translate = 240
        }

        tela.current += modificador;
        
        if(tela.current == -1) {
            tela.current = 2;
        }
        else if (tela.current == 3) {
            tela.current = 0;
        }

        document.getElementById('roulette').style.transform = `translateX(-${translate * tela.current}px)`;
        document.getElementById('roulette-icons').style.transform = `translateX(-${translate * tela.current}px)`;
    }

    return(
        <>
        <div
        className={style.borda1}
        id="borda1"
        />
        <div
        className={style.borda2}
        id="borda2"
        />
        <div
        className={style.borda3}
        id="borda3"
        />
        <div
        className={style.borda4}
        id="borda4"
        />
        <div
        className={style.borda5}
        id="borda5"
        />
        <div
        className={style.borda6}
        id="borda6"
        />
        <div
        className={style.borda7}
        id="borda7"
        />
        <div
        className={style.borda8}
        id="borda8"
        />
        <div
        className={style.borda9}
        id="borda9"
        />
        <div
        className={style.borda10}
        id="borda10"
        />
        <div
        className={style.borda11}
        id="borda11"
        />
        <div
        className={style.borda12}
        id="borda12"
        />
        <div
        className={style.borda13}
        id="borda13"
        />

        <div
        className={style.divTela}
        >
            <header
            className={style.header}
            >
                <input 
                id="inputTema"
                name="inputTema"
                type="button"
                onClick={function() {
                    MudarTema();
                    if(imgTema == '/img/sol.gif') {
                        setImgTema('/img/lua.gif');
                        setImgLogo('/img/fox-dark.gif');
                        setImgLink('/img/linkedin-dark.gif');
                        setImgGithub('/img/github-dark.gif');
                        setImgInst('/img/instagram-dark.gif');
                        setImgYoutube('/img/youtube-dark.gif');
                        setImgSpotify('/img/spotify-dark.gif');
                        setImgTwitch('/img/twitch-dark.gif');
                        setImgSeta('/img/seta-dark.png');
                        setImgSetaFlip('/img/seta-flip-dark.png');
                    }
                    else {
                        setImgTema('/img/sol.gif');
                        setImgLogo('/img/fox-light.gif');
                        setImgLink('/img/linkedin.gif');
                        setImgGithub('/img/github.gif');
                        setImgInst('/img/instagram.gif');
                        setImgYoutube('/img/youtube.gif');
                        setImgSpotify('/img/spotify.gif');
                        setImgTwitch('/img/twitch.gif');
                        setImgSeta('/img/seta.png');
                        setImgSetaFlip('/img/seta-flip.png');
                    }
                }}
                className={style.inputTema}
                />

                <label
                htmlFor="inputTema"
                style={{
                    position: 'relative'
                }}
                >
                    <img
                    id="img-tema"
                    src={imgTema}
                    className={style.imgTema}
                    />
                </label>
            </header>
            
            <div
            className='flex-column h100-border center'
            >
                <div
                className='flex-row m-b-40'
                >
                    <img
                    src={imgSetaFlip}
                    className={style.imgSeta}
                    onClick={() => {
                        changeTela(-1);
                    }}
                    />

                    <div
                    className='w400 h24 overflow-hidden'
                    >
                        <div
                        className='flex-row w1200 h24 animation1s'
                        id="roulette"
                        >
                            <h2
                            className={style.h2Mode}
                            >
                                Dev
                            </h2>

                            <h2
                            className={style.h2Mode}
                            >
                                Musician
                            </h2>

                            <h2
                            className={style.h2Mode}
                            >
                                Content Creator
                            </h2>
                        </div>
                    </div>

                    <img
                    src={imgSeta}
                    className={style.imgSeta}
                    onClick={() => {
                        changeTela(1);
                    }}
                    />
                </div>
                <div
                className='flex-row-responsive'
                >
                    <div
                    className='flex-column'
                    >
                        <h2
                        className={style.h2}
                        >
                            Tarcísio Pereira da Silva
                        </h2>

                        <h5
                        className={style.h5}
                        >
                            Tarcitar
                        </h5>
                    </div>

                    <img
                    src={imgLogo}
                    className={style.imgLogo}
                    />
                </div>

                <div
                className='m-t-20 w400 h64 overflow-hidden'
                >
                    <div
                    className='flex-row w1200 h64 animation1s'
                    id='roulette-icons'
                    >
                        <div
                        className='flex-row w400 h64 center'
                        >
                            <a
                            href='https://www.linkedin.com/in/tarcisio-pereira-860571204'
                            target="_blank"
                            >
                                <img
                                src={imgLink}
                                className={style.imgIcone}
                                />
                            </a>

                            <a
                            href='https://github.com/Tarcitar'
                            target="_blank"
                            >
                                <img
                                src={imgGithub}
                                className={style.imgIcone}
                                />
                            </a>

                            <a
                            href='https://www.instagram.com/_tarcisio_p/'
                            target="_blank"
                            >
                                <img
                                src={imgInst}
                                className={style.imgIcone}
                                />
                            </a>
                        </div>

                        <div
                        className='flex-row w400 h64 center'
                        >
                            
                            <a
                            href='https://www.youtube.com/channel/UC2MfU8lU-awFEcjZwnoEfxg'
                            target="_blank"
                            >
                                <img
                                src={imgYoutube}
                                className={style.imgIcone}
                                />
                            </a>

                            
                            <a
                            href='https://open.spotify.com/intl-pt/artist/3Tub5YPUKwSFM9ZuZVGeDh?si=_S6xy4egSvSJP_5n1H6rAQ'
                            target="_blank"
                            >
                                <img
                                src={imgSpotify}
                                className={style.imgIcone}
                                />
                            </a>

                            <a
                            href='https://www.instagram.com/tarcitar_/'
                            target="_blank"
                            >
                                <img
                                src={imgInst}
                                className={style.imgIcone}
                                />
                            </a>
                        </div>

                        <div
                        className='flex-row w400 h64 center'
                        >
                            <a
                            href='https://www.youtube.com/@Tarcitar_'
                            target="_blank"
                            >
                                <img
                                src={imgYoutube}
                                className={style.imgIcone}
                                />
                            </a>

                            <img
                            src={imgTwitch}
                            className={style.imgIcone}
                            />

                            <img
                            src={imgInst}
                            className={style.imgIcone}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};