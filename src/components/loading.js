import React from 'react';
import styled from 'styled-components';

export const Loading = () => {
  return (
    <Load className='lds-css ng-scope'>
      <div className='lds-cube'>
        <div />
        <div />
        <div />
        <div />
      </div>
    </Load>
  );
};

const Load = styled.div`
  @keyframes lds-cube {
    0% {
      -webkit-transform: scale(1.5);
      transform: scale(1.5);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @-webkit-keyframes lds-cube {
    0% {
      -webkit-transform: scale(1.5);
      transform: scale(1.5);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  .lds-cube {
    position: relative;
  }
  .lds-cube div {
    position: absolute;
    width: 80px;
    height: 80px;
    top: 10px;
    left: 10px;
    background: #ffffff;
    -webkit-animation: lds-cube 1s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    animation: lds-cube 1s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    -webkit-animation-delay: -0.18s;
    animation-delay: -0.18s;
  }
  .lds-cube div:nth-child(2) {
    top: 10px;
    left: 110px;
    background: #ff003a;
    -webkit-animation-delay: -0.12s;
    animation-delay: -0.12s;
  }
  .lds-cube div:nth-child(3) {
    top: 110px;
    left: 110px;
    background: #ffffff;
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
  }
  .lds-cube div:nth-child(4) {
    top: 110px;
    left: 10px;
    background: #ff003a;
    -webkit-animation-delay: -0.06s;
    animation-delay: -0.06s;
  }
  .lds-cube {
    width: 84px !important;
    height: 84px !important;
    -webkit-transform: translate(-42px, -42px) scale(0.42) translate(42px, 42px);
    transform: translate(-42px, -42px) scale(0.42) translate(42px, 42px);
  }
`;
