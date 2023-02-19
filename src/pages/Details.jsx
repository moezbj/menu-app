import React from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import useQueryParams from "../utils/query";
import ModelViewer from "../models/ModelViewer";
import arrow from "../assets/img/arrow.svg";
import "./detail.css";
import 'react-toastify/dist/ReactToastify.css';

const Details = () => {
  const navigate = useNavigate();
  const notify = () => toast.success("Your order have been received!");

  const { name, model, img, modelIos, price, description } = useQueryParams();
  return (
    <div className="modal-container animate__slideInRight">
      <div className="header-detail">
        <div className="icon_close" onClick={() => navigate("/list")}>
          <img
            src={arrow}
            alt="arrow"
            width={22}
            height={22}
            style={{ marginRight: 3 }}
          />
        </div>
      </div>

      <div className="modal-content">
        <div className="modal_body">
          <h1>{name}</h1>
          <div
            style={{
              width: "100%",
              height: 250,
            }}
          >
            <ModelViewer modelPath={model} poster={img} modelIos={modelIos} />
          </div>
          <div className="description-item">
            <div className="description-name">{name}</div>
            <div className="description-price">{price}</div>
          </div>
          <div className="description-text">{description}</div>
        </div>
        <div className="btn-container">
          <button className="btn-order" onClick={notify}>
            <span>Order Now</span>
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Details;
