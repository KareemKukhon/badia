// NavigateHelper.js
import { useNavigate } from 'react-router-dom';
import React from 'react';

export function withNavigate(Component) {
  return function WrapperComponent(props) {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
}
