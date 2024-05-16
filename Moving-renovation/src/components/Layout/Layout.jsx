import React from 'react';
import PropTypes from 'prop-types'
import WhatsAppButton from '../WhatsAppButton/WhatsAppButton';

const Layout = ({ children }) => {
  Layout.propTypes = {
    children: PropTypes.node.isRequired
  }
    return (
    <div>
      {children}
      <WhatsAppButton phoneNumber="+1234567890" message="¡Hola! ¿Cómo puedo ayudarte?" />
    </div>
  );
};

export default Layout;
