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
            </head>
            <body>
                {/* Layout UI */}
                <main>{children}</main>
            </body>
        </html>
    </TemaProvider>
    )
}