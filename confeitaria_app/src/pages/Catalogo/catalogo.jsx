import './catalogoBack.jsx'
import "./catalogo.css";
import { useState } from 'react';
export function Catalogo() {
    const [modal, setmodal] = useState(false);
  return (
    <div className="containerMain">
      <div className="header">
        <div className="modalCart">
          <button id="open-modal">abrir</button>
          <div id="fade"></div>
          <div id="modal">
            <div className="modalHeader">
              <button id="close-modal">fechar</button>
            </div>
            <div className="modal-body"></div>
          </div>
        </div>
      </div>
      <div className="sideBar">
        <div className="categories">
          <p>Arroz</p>
        </div>
      </div>
      <div className="content">
        <div className="cards">
          <div className="menu">
            <img src="" alt="" />
            <h3 className="nameProduct"></h3>
            <p className="description">Descriçao produto</p>
            <button className="putCart"></button>
          </div>
        </div>
      </div>
    </div>
  );
}
