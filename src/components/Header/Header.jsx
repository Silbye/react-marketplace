import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-box">
          <div className="header-logo">
            <img src="img/logo.svg" alt="logo" />
            <span>Abito</span>
          </div>
          <div className="header-controls">
            <a href="#">Вход и регистрация</a>
            <button>Подать объявление</button>
          </div>
          <img src="img/menu.svg" alt="menu" className="header-mobile" />
        </div>
      </div>
    </header>
  );
}
