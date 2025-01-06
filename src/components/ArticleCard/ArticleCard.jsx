/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import "./ArticleCard.css";

export default function ArticleCard(props) {
  return (
    <Link to={"article/" + props.article.id} className="content-cards__item">
      <div className="content-cards__item--img">
        <img src={props.article.imageSmall} alt="image" />
      </div>
      <h5 className="content-cards__item--title">{props.article.title}</h5>
      <p className="content-cards__item--price">{props.article.price} ₽</p>
      <p className="content-cards__item--description">
        {props.article.address}
      </p>
      <p className="content-cards__item--description">{props.article.date}</p>
    </Link>
  );
}
