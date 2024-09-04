"use client";

import React, { useState } from 'react';
import Header from './Header';
import ModalManager from './ModalManger';

export default function ModalStateManager({ children }) {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const openLoginModal = () => setLoginModalOpen(true);
  const closeLoginModal = () => setLoginModalOpen(false);

  return (
    <>
      <Header onOpenLoginModal={openLoginModal} />
      <ModalManager
        isLoginModalOpen={isLoginModalOpen}
        onCloseLoginModal={closeLoginModal}
      />
      {children}
    </>
  );
}
