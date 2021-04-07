import React from 'react';
import PropTypes from 'prop-types';
import './OnApiError.css';

export default function OnApiError({ cart }) {
  return (
    <p>
      <b>{cart.errorMessage}</b>
      <br />
      <br />
      <span>
        Você pode verificar se a mensagem abaixo aparecece no console do browser
        (No chrome: [Ctrl + Shift + I] &gt; [Console]):
        <br />
        <br />
        <span className="msg">
          Access to XMLHttpRequest at &apos;https://s3.us-west-2.amazonaws.com/...10-reais.json%22&apos;
          <br />
          from origin &apos;
          {window.location.href}
          &apos; has been
          {' '}
          <b>blocked by CORS policy</b>
          :
          <br />
          <b>No &apos;Access-Control-Allow-Origin&apos; </b>
          header is present on the requested resource.
        </span>
        <br />
        <br />
        Se sim, e você usa o google chrome, existe um plugin para resolver
        esse problema de CORS e pode ser baixado na página de extensões do chrome.
        <br />
        Instruções de ativação e download
        {' '}
        <a href="https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=pt">
          <b>aqui nesse link.</b>
        </a>
      </span>
    </p>
  );
}

OnApiError.propTypes = {
  cart: PropTypes.objectOf(PropTypes.string).isRequired,
};
