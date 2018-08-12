import React from 'react';

import './styles.css';

function LogInTab () {
    return(
      <div className="login-tab">
        <label className="login-input">
          Usuario:
          <input className="login-input-field" type="text" name="name" />
        </label>
        <label className="login-input">
          Contraseña:
          <input className="login-input-field" type="password" name="name" />
        </label>
        <input className="login-button" type="submit" value="Ingresar" />
        <a className="login-href" href="www.google.com">¿Olvido su contraseña?</a>
      </div>
    );
}

export default LogInTab;