"use client";
import React, { useState } from 'react';
import Modal from './Modal';
import EmailModal from './EmailModal';
import MobileModal from './MobileModal';
import OtpModal from './OtpModal';
import SignupModal from './SignupModal';

export default function ModalManager({ isLoginModalOpen, onCloseLoginModal }) {
  const [internalLoginModalOpen, setInternalLoginModalOpen] = useState(false);
  const [isEmailModalOpen, setEmailModalOpen] = useState(false);
  const [isMobileModalOpen, setMobileModalOpen] = useState(false);
  const [isOTPModalOpen, setOTPModalOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
  });

  const openLoginModal = () => { setInternalLoginModalOpen(true); setSignupModalOpen(false); setEmailModalOpen(false); };
  const closeLoginModal = () => setInternalLoginModalOpen(false);

  const openEmailModal = () => { setInternalLoginModalOpen(false); setEmailModalOpen(true); };
  const closeEmailModal = () => setEmailModalOpen(false);

  const openMobileModal = () => { setEmailModalOpen(false); setInternalLoginModalOpen(false); setMobileModalOpen(true); onCloseLoginModal() };
  const closeMobileModal = () => setMobileModalOpen(false);

  const openOTPModal = () => { setEmailModalOpen(false); setOTPModalOpen(true); };
  const closeOTPModal = () => setOTPModalOpen(false);

  const openSignupModal = () => { setInternalLoginModalOpen(false); setSignupModalOpen(true); };
  const closeSignupModal = () => setSignupModalOpen(false);

  return (
    <>
      <Modal
        isOpen={isLoginModalOpen || internalLoginModalOpen}
        onClose={onCloseLoginModal || closeLoginModal}
        onUseOTP={openEmailModal}
        onUseMobile={openMobileModal}
        onOpenSignup={openSignupModal}
        formData={formData}
        setFormData={setFormData}
      />
      <EmailModal
        isOpen={isEmailModalOpen}
        onClose={closeEmailModal}
        onUseMobile={openMobileModal}
        onOpenOTP={openOTPModal}
        formData={formData}
        setFormData={setFormData}
        onOpenLogin={openLoginModal}
      />
      <MobileModal
        isOpen={isMobileModalOpen}
        onClose={closeMobileModal}
        onOpenOTP={openOTPModal}
        formData={formData}
        setFormData={setFormData}
      />
      <OtpModal
        isOpen={isOTPModalOpen}
        onClose={closeOTPModal}
        formData={formData}
      />
      <SignupModal
        isOpen={isSignupModalOpen}
        onClose={closeSignupModal}
        onOpenOTP={openOTPModal}
        onOpenLogin={openLoginModal}
        formData={formData}
        setFormData={setFormData}
      />
    </>
  );
}
