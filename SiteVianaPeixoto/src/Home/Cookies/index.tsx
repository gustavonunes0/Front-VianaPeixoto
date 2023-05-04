import React, { useState, useEffect } from 'react';
import * as S from "./styles";

function CookieConsent() {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem('cookieConsentAccepted');
    if (hasAccepted === 'true') {
      setAccepted(true);
    }
  }, []);

  function handleAccept() {
    setAccepted(true);
    localStorage.setItem('cookieConsentAccepted', 'true');
  }

  if (accepted) {
    return null; // usuário já aceitou os cookies, não exibe mensagem
  }

  return (
    <S.Container>
      <p>Este site usa cookies para melhorar sua experiência. Ao continuar a navegar no site, você concorda com o uso de cookies.</p>
      <S.Botao onClick={handleAccept}>Aceitar</S.Botao>
    </S.Container>
  );
}

export default CookieConsent;
