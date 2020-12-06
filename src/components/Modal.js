import React, { useEffect, useRef } from "react";
import "./Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { putData } from "./helpers/RequestData";

const Modal = ({
  isOpen,
  setIsOpen,
  handleShowModal,
  movieDetail,
  handleCallMovieDetail,
}) => {
  const wrapperRef = useRef(null);

  const handleFavoriteMovie = () => {
    const value = { ...movieDetail };
    value.isFavorite = !value.isFavorite;
    const URL = process.env.REACT_APP_BASE_URL;
    putData(`${URL}/${value.id}`, value);
    handleCallMovieDetail(value);
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setIsOpen(false);
    }
  };

  return (
    <div
      ref={wrapperRef}
      className={`modal-dialog modal-dialog-scrollable style-modal ${
        !isOpen ? "hide-modal" : ""
      }`}
    >
      <div
        className={`modal-content ${
          movieDetail.isFavorite ? "border border-primary" : ""
        }`}
      >
        <div className="modal-header">
          <h5 className="modal-title" id="modalLabel">
            {movieDetail.Film}
          </h5>
          <button type="button" className="close" onClick={handleShowModal}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body ">
          <div className="container">
            <div className="row text-center pt-1">
              <div className="col">
                <img
                  src={movieDetail.ImageURL}
                  className="modal-img rounded"
                  alt={movieDetail.Film}
                />
              </div>
            </div>
            <div className="row border-top">
              <div className="col-sm-4 pt-1">
                <p className="font-weight-bolder text-left">Bond Actor :</p>
              </div>
              <div className="col-sm-8 pt-1">
                <h6 className="text-left">{movieDetail.Bond_Actor}</h6>
              </div>
            </div>
            <div className="row border-top">
              <div className="col-sm-4 pt-1">
                <p className="font-weight-bolder text-left">
                  Uk Release Date :
                </p>
              </div>
              <div className="col-sm-8 pt-1">
                {" "}
                <p className="text-sm-left">{movieDetail.UK_release_date}</p>
              </div>
            </div>
            <div className="row border-top">
              <div className="col-sm-4 pt-1">
                <p className="font-weight-bolder text-left">Description :</p>{" "}
              </div>
              <div className="col-sm-8 pt-1">
                <p className="text-sm-left">{movieDetail.Description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer px-4">
          <span>
            <FontAwesomeIcon
              icon={faHeart}
              onClick={handleFavoriteMovie}
              size="lg"
              className={`icon ${
                movieDetail.isFavorite ? "icon-favorite" : ""
              }`}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
