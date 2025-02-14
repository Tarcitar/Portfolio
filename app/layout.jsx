import { TemaProvider } from '../context/TemaContext';

import './globals.scss';


export default function RootLayout({ children }) {
    return (
    <TemaProvider>
        <html lang="pt-br">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Jacquarda+Bastarda+9+Charted&family=Press+Start+2P&display=swap" rel="stylesheet" />

                <link rel="canonical" href="https://tarcitar-portfolio.vercel.app" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Acesso às principais redes do Desenvolvedor, Músico e Criador de Conteúdo que atende pelo apelido de Tarcitar" />

                <title>Tarcitar - Portfólio</title>
            </head>
            <body>
                {/* Layout UI */}
                <main>{children}</main>
            </body>
        </html>
    </TemaProvider>
    )
}