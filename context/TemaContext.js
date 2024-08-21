"use client";

import React, { createContext, useState, useEffect } from 'react';


export const TemaContext = createContext({});

let contagem = 1;

export function TemaProvider({ children }) {
    const [temaEscuro, setEscuroTema] = useState(false);

    function MudarTema() {
        setEscuroTema(!temaEscuro);
        document.documentElement.classList.toggle('escuro');
        document.getElementById('inputTema').disabled = true;

        function esperarAnimacao() {
            document.getElementById('inputTema').disabled = false;
        }

        setTimeout(esperarAnimacao, 700);
        
        if(contagem == 1) {
            function mudarImg() {
                if(contagem < 13) {
                    document.getElementById(`borda${contagem+1}`).style.visibility = 'visible';
                    document.getElementById(`borda${contagem}`).style.visibility = 'hidden';
                    contagem++;

                    setTimeout(mudarImg, 50);
                }
            }

            setTimeout(mudarImg, 50);
        }
        else if(contagem == 13) {
            function mudarImg() {
                if(contagem > 1) {
                    document.getElementById(`borda${contagem-1}`).style.visibility = 'visible';
                    document.getElementById(`borda${contagem}`).style.visibility = 'hidden';
                    contagem--;

                    setTimeout(mudarImg, 50);
                }
            }

            setTimeout(mudarImg, 50);
        }
    }

    return (
        <TemaContext.Provider value={{ MudarTema }}>
            { children }
        </TemaContext.Provider>
    )
};