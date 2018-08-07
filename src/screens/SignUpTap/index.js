import React from 'react';

import './styles.css';

function SignUpTab () {
    return(
      <div className="login-tab">
        <label className="login-input">
          Usuario:
          <input className="login-input-field" type="text" name="name" />
        </label>
        <label className="login-input">
          Email:
          <input className="login-input-field" type="text" name="name" />
        </label>
        <label className="login-input">
          Contraseña:
          <input className="login-input-field" type="password" name="name" />
        </label>
        <label className="login-input">
          Confirmar:
          <input className="login-input-field" type="password" name="name" />
        </label>
        <input className="login-button" type="submit" value="Registrar" />
      </div>
    );
}

export default SignUpTab;