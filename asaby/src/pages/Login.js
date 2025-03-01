import React from "react";

const Login = () => {
  return (
    <main>
      <div className="login-container">
        <h2 className="login-title">Giriş Yap</h2>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="username">Kullanıcı Adı</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Şifre</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="login-button">Giriş Yap</button>
          <a href="/signup">
            <h3>Hesabın yok mu? Kayıt ol!</h3>
          </a>
        </form>
      </div>
    </main>
  );
};

export default Login;