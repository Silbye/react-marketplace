import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="content-sidebar">
      <div className="content-sidebar__info">
        <h4 className="content-sidebar__info--title">Сервисы и услуги</h4>
        <div className="content-sidebar__info__wrapper">
          <div className="content-sidebar__info__item">
            <img src="/img/delivery.svg" alt="" />
            <h5>Доставка</h5>
            <p>Проверка при получении и возможность бесплатно вернуть товар</p>
          </div>
          <div className="content-sidebar__info__item">
            <img src="/img/sedan.svg" alt="" />
            <h5>Автотека</h5>
            <p>
              Отчёт с историей авто: пробег, владельцы, сведения о залоге, ДТП и
              ремонтах
            </p>
          </div>
          <div className="content-sidebar__info__item">
            <img src="/img/love.svg" alt="" />
            <h5>Онлайн-бронирование жилья</h5>
            <p>
              Посуточная аренда квартир и домов: большой выбор вариантов для
              поездок по России
            </p>
          </div>
        </div>
      </div>
      <div className="content-sidebar__footer">
        <p>© ООО «Абито», 2011–2021</p>
        <a href="#">Политика конфиденциальности</a>
        <a href="#">Обработка персональных данных</a>
      </div>
    </div>
  );
}
