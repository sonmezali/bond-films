import React, { useState } from "react";
import { handlePushHistory, formatDateToString } from "./helpers/functions";
import { useHistory } from "react-router-dom";
import { postData } from "./helpers/RequestData";

const CreateMovie = () => {
  const [data, setData] = useState({
    Film: "",
    Bond_Actor: "",
    UK_release_date: "",
    ImageURL: "",
    Description: "",
    Box_Office_Millions: "",
    isFavorite: false,
  });

  const history = useHistory();

  const handleOnChangeValue = (e) => {
    e.preventDefault();
    const tempData = { ...data };
    tempData[e.target.id] = e.target.value;
    setData(tempData);
  };

  const handleDatePicker = (e) => {
    e.preventDefault();

    const valueDate = new Date(e.target.value);
    const date = formatDateToString(valueDate);

    const tempData = { ...data };
    tempData[e.target.id] = date;
    setData(tempData);
  };

  const handleSubmitForm = (e) => {
    const URL = process.env.REACT_APP_BASE_URL;
    postData(URL, data);
    handlePushHistory("/", history);
  };

  const handleCancelCreate = () => {
    handlePushHistory("/", history);
  };

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md-6 text-left my-4">
          <div className="text-center">
            <h3> Create Form</h3>
          </div>
          <form onSubmit={handleSubmitForm}>
            <div className="form-group">
              <span className="">Movie Name:</span>

              <input
                type="text"
                className="form-control"
                id="Film"
                onChange={handleOnChangeValue}
              />
            </div>
            <div className="form-group">
              <span className="">Bond Actor : </span>

              <input
                type="text"
                className="form-control"
                id="Bond_Actor"
                onChange={handleOnChangeValue}
              />
            </div>
            <div className="form-group">
              <span className="">Movie The UK Release Date:</span>

              <input
                type="date"
                className="form-control"
                id="UK_release_date"
                max={new Date()}
                onChange={handleDatePicker}
              />
            </div>
            <div className="form-group">
              <span className="">Imag URL:</span>

              <input
                type="text"
                className="form-control"
                id="ImageURL"
                onChange={handleOnChangeValue}
              />
            </div>
            <div className="form-group">
              <span className="">Box Office (Millions):</span>

              <input
                type="text"
                className="form-control"
                id="Box_Office_Millions"
                onChange={handleOnChangeValue}
              />
            </div>
            <div className="form-group">
              <span>Description:</span>
              <input
                type="textarea"
                className="form-control"
                id="Description"
                onChange={handleOnChangeValue}
              />
            </div>

            <button type="submit" className="btn btn-primary ml-3">
              Submit
            </button>
            <button
              type="submit"
              className="btn btn-dark ml-3"
              onClick={handleCancelCreate}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateMovie;
