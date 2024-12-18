"use client";

import React, { useState, useContext, useRef } from 'react';

import { TemaContext } from '../context/TemaContext';

import style from './index.module.scss';


export default function TelaInicial() {
    const { MudarTema } = useContext(TemaContext);

    const [imgTema, setImgTema] = useState('/img/sol.gif');
    const [descImgTema, setDescImgTema] = useState('/img/sol.gif');

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
                        setDescImgTema('Lua simbolizando o tema escuro');
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
                        setDescImgTema('Sol simbolizando o tema claro');
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
                aria-label="Mudar tema"
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
                    alt={descImgTema}
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
                    alt="Seta para a esquerda"
                    aria-label="Alternar entre as profissões"
                    />

                    <div
                    className='w400 h24 overflow-hidden'
                    >
                        <div
                        className='flex-row w1200 h24 animation1s'
                        id="roulette"
                        >
                            <h1
                            className={style.h1Mode}
                            >
                                Dev
                            </h1>

                            <h1
                            className={style.h1Mode}
                            >
                                Musician
                            </h1>

                            <h1
                            className={style.h1Mode}
                            >
                                Content Creator
                            </h1>
                        </div>
                    </div>

                    <img
                    src={imgSeta}
                    className={style.imgSeta}
                    onClick={() => {
                        changeTela(1);
                    }}
                    alt="Seta para a direita"
                    aria-label="Alternar entre as profissões"
                    />
                </div>
                <div
                className='flex-row-responsive'
                >
                    <div
                    className='flex-column'
                    >
                        <h1
                        className={style.h1}
                        >
                            Tarcísio Pereira da Silva
                        </h1>

                        <h2
                        className={style.h2}
                        >
                            Tarcitar
                        </h2>
                    </div>

                    <img
                    src={imgLogo}
                    className={style.imgLogo}
                    alt="Logo Tarcitar"
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
                        className='flex-row w400 h64 center gap20'
                        >
                            <a
                            href='https://www.linkedin.com/in/tarcisio-pereira-860571204'
                            target="_blank"
                            aria-label="Visite meu perfil no linkedin"
                            >
                                <img
                                src={imgLink}
                                className={style.imgIcone}
                                alt="Logo do Linkedin"
                                />
                            </a>

                            <a
                            href='https://github.com/Tarcitar'
                            target="_blank"
                            aria-label="Visite meu perfil no github"
                            >
                                <img
                                src={imgGithub}
                                className={style.imgIcone}
                                alt="Logo do Github"
                                />
                            </a>

                            <a
                            href='https://www.instagram.com/_tarcisio_p/'
                            target="_blank"
                            aria-label="Visite meu perfil no instagram"
                            >
                                <img
                                src={imgInst}
                                className={style.imgIcone}
                                alt="Logo do Instagram"
                                />
                            </a>
                        </div>

                        <div
                        className='flex-row w400 h64 center gap20'
                        >
                            
                            <a
                            href='https://www.youtube.com/channel/UC2MfU8lU-awFEcjZwnoEfxg'
                            target="_blank"
                            aria-label="Visite meu canal de músicas no youtube"
                            >
                                <img
                                src={imgYoutube}
                                className={style.imgIcone}
                                alt="Logo do Youtube"
                                />
                            </a>

                            
                            <a
                            href='https://open.spotify.com/intl-pt/artist/3Tub5YPUKwSFM9ZuZVGeDh?si=_S6xy4egSvSJP_5n1H6rAQ'
                            target="_blank"
                            aria-label="Visite meu perfil de músico no spotify"
                            >
                                <img
                                src={imgSpotify}
                                className={style.imgIcone}
                                alt="Logo do Spotify"
                                />
                            </a>

                            <a
                            href='https://www.instagram.com/tarcitar_/'
                            target="_blank"
                            aria-label="Visite meu perfil de músico no instagram"
                            >
                                <img
                                src={imgInst}
                                className={style.imgIcone}
                                alt="Logo do Instagram"
                                />
                            </a>
                        </div>

                        <div
                        className='flex-row w400 h64 center gap20'
                        >
                            <a
                            href='https://www.youtube.com/@Tarcitar_'
                            target="_blank"
                            aria-label="Visite meu canal de entretenimento no youtube"
                            >
                                <img
                                src={imgYoutube}
                                className={style.imgIcone}
                                alt="Logo do Youtube"
                                />
                            </a>

                            <a
                            href='https://www.twitch.tv/tarcitar'
                            target="_blank"
                            aria-label="Visite meu canal de entretenimento na Twitch"
                            >
                                <img
                                src={imgTwitch}
                                className={style.imgIcone}
                                alt="Logo da Twitch"
                                />
                            </a>
                                
                            <img
                            src={imgInst}
                            className={style.imgIcone}
                            alt="Logo do Instagram"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};
