import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import { formatDate, handleOnChangeDate } from "./helpers/functions";
import axios from 'axios'

const Favorites = () => {
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState("1962-10-04");
  const initialEndDate = formatDate(new Date());
  const [endDate, setEndDate] = useState(initialEndDate);
  const [isOpen, setIsOpen] = useState(false);
  const [movieDetail, setMovieDetail] = useState({});

  const [inputValue, setInputValue] = useState("");




  useEffect(() => {
    const URL = process.env.REACT_APP_BASE_URL;
  
    axios.get(URL).then((res) => {
      setData(res.data);
    });
  }, [movieDetail]);


  const handleCallMovieDetail = (item) => {
    setMovieDetail(item);
  };

  const handleShowModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleShowModal={handleShowModal}
        movieDetail={movieDetail}
        handleCallMovieDetail={handleCallMovieDetail}
      />

      <div className="row justify-content-start py-3 row-cols-1 row-cols-md-4">
        <div className="col ">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="">
                From :
              </span>
            </div>
            <input
              type="date"
              id="start-date"
              className="form-control"
              value={startDate}
              min="1962-01-01"
              max={endDate}
              onChange={(date) =>
                handleOnChangeDate(date, formatDate, setStartDate)
              }
            />
          </div>
        </div>
        <div className="col">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="">
                To :
              </span>
            </div>

            <input
              type="date"
              id="end-date"
              className="form-control"
              value={endDate}
              min={startDate}
              max={new Date()}
              onChange={(date) =>
                handleOnChangeDate(date, formatDate, setEndDate)
              }
            />
          </div>
        </div>
        <div className="col py-1">
          <input
            type="text"
            placeholder="Search Film By Actor Name"
           
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
        </div>
     
      </div>
      <div className="row row-cols-1 row-cols-md-4">
        {data
          ?.filter((movie) => movie.isFavorite === true)
          .filter((item) =>
            inputValue.length > 0
              ? item.Bond_Actor.toLowerCase().includes(inputValue)
              : item
          )
          .filter((a) => {
            return (
              new Date(a.UK_release_date) >= new Date(startDate) &&
              new Date(a.UK_release_date) <= new Date(endDate)
            );
          })
          .map((item, index) => {
            return (
              <div
                className={`col md-4  `}
                key={index}
                onClick={() => {
                  handleShowModal();
                  handleCallMovieDetail(item);
                }}
              >
                <div
                  className={`card ${
                    item.isFavorite ? "border border-primary" : ""
                  }`}
                  style={{ margin: "1rem 0" }}
                >
                  <img src={item.ImageURL} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.Film}</h5>
                    <p className="card-text">{item.Bond_Actor}</p>
                    <p className="card-text">{item.UK_release_date}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Favorites;
