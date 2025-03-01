import React from "react";

const Signup = () => {
  return (
    <main>
      <div className="login-container">
        <h2 className="login-title">Kayıt Ol</h2>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="username">Kullanıcı Adı</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-posta</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Şifre</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="login-button">Kayıt Ol</button>
        </form>
      </div>
    </main>
  );
};

export default Signup;