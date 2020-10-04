import React from "react";
import PropTypes from "prop-types";
import Time from "./GithubFileExampleExercise2/Time";


const NewsList = ({ news }) => {
  return (
    <div class="news-list">
      <h2 className="news-list__head">Hacker News</h2>
      <ol>
        {news.map((news1) => (
          <li>
            <NewsItem key={news1.id} news1={news1} />
          </li>
        ))}
      </ol>
    </div>
  );
};

NewsList.propTypes = {
  news: PropTypes.array,
};

const NewsItem = ({ news1 }) => {
  return (
    <div className="news-item">
      <h4 className="news-head">{news1.heading}</h4>
      <span className="news-web">{news1.website}</span>
      <div className="news_description">
        <NewsDescription description={news1.description} />
      </div>
    </div>
  );
};

NewsItem.propTypes = {
  news1: PropTypes.object.isRequired,
};

const NewsDescription = ({description}) => {
  return (
    <div>
      <span>{description.points} points </span>
      <span>by {description.user} </span>
      <span>
        <Time time={description.updated_at} />
      </span>
      <span>| flag |</span>
      <span> hide |</span>
      <span>{description.comments} |</span>
      <span> instapaper |</span>
      <span> save to pocket </span>
    </div>
  );
};

NewsDescription.propTypes = {
  description: PropTypes.object.isRequired,
};

export default NewsList;
