import Sidebar from "../../components/Sidebar/Sidebar";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import Search from "../../components/Search/Search";

import "./Home.css";

import { articles } from "../../data/articles";

export default function Home() {
  return (
    <main>
      <Search />
      <section className="content">
        <div className="container">
          <div className="content-box">
            <div className="content-main">
              <h2 className="content-main__title">Рекомендации для вас</h2>
              <div className="content-cards">
                {articles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </div>
            <Sidebar />
          </div>
        </div>
      </section>
    </main>
  );
}
