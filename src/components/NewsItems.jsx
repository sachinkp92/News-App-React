import React from "react";

const NewsItems = ({ newsDetails }) => {
  const { title, description, urlToImage, url } = newsDetails;
  const newsImg = urlToImage === null ? "./news.jpg" : urlToImage;
  const newDesc =
    description === null
      ? "News Description is not available"
      : description.slice(0, 100);

  return (
    <div className="col-md-4 col-lg-3">
      <div className="card mb-3">
        <img
          src={newsImg}
          className="card-img-top"
          alt="img"
          style={{ maxHeight: "240px" }}
        />
        <div className="card-body">
          <h5 className="card-title fs-5 fw-bold">{title.slice(0, 30)}</h5>
          <p className="card-text fs-6">{newDesc}</p>
          <a href={url} className="btn btn-primary" target="_blank">
            Detail View
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
