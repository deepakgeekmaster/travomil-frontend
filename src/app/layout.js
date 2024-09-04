import React from 'react';
import "./globals.css";
import ModalStateManager from './Components/modalStatemanager';
export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body>
      <ModalStateManager>
          {children}
        </ModalStateManager>
      </body>
    </html>
  );
}