import React from "react";
import { useNavigate } from "react-router-dom";

import useQueryParams from "../utils/query";
import ModelViewer from "../models/ModelViewer";
import "./detail.css";

const Details = () => {
  const navigate = useNavigate();

  const { name, model, img, modelIos, price, description } = useQueryParams();
  return (
    <div className="modal-container animate__slideInRight">
      <div className="header-detail">
        <div className="icon_close" onClick={() => {}}>
          <button onClick={()=> navigate("/list")}>{`X`}</button>
        </div>
      </div>

      <div className="modal-content">
        <div className="modal_body">
          <h1>{name}</h1>
          <div
            style={{
              width: "90%",
              height: 200,
            }}
          >
            <ModelViewer modelPath={model} poster={img} modelIos={modelIos} />
          </div>
          <div className="description-item">
            <div className="description-name">{name}</div>
            <div className="description-price">{price}</div>
          </div>
          <div className="description-text">{description}</div>
          <div className="btn-container">
            <button className="btn-order">
              <span>Order Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
