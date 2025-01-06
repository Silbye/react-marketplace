import "./Search.css";

export default function Search() {
  return (
    <section className="search">
      <div className="container">
        <div className="search-box">
          <input type="text" placeholder="Поиск по объявлениям" />
          <button>
            <img src="img/search.svg" alt="search" />
            <span>найти</span>
          </button>
        </div>
      </div>
    </section>
  );
}
