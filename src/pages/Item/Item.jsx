import { useParams } from "react-router-dom";
import Search from "../../components/Search/Search";
import { articles } from "../../data/articles";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./Item.css";

export default function Item() {
  const { id } = useParams();
  const findArticle = articles.find((p) => p.id === Number(id));

  return (
    <main>
      <Search />
      <section className="content">
        <div className="container">
          <div className="content-box">
            <div className="content-main">
              <div className="content-item">
                <div className="content-item--left">
                  <h2 className="content-item__title">{findArticle.title}</h2>
                  <img
                    src={findArticle.imageSmall}
                    alt=""
                    className="content-item__image"
                  />
                  <p className="content-item__description">
                    {findArticle.desc}
                  </p>
                </div>
                <div className="content-item--right">
                  <h2 className="content-item__title">{findArticle.price} ₽</h2>
                  <button>Показать телефон</button>
                </div>
              </div>
            </div>
            <Sidebar />
          </div>
        </div>
      </section>
    </main>
  );
}
