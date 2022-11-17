import React from "react";
import { useAppContext } from "context/Context";
import { useNavigate } from "react-router-dom";
import "./Home.sass";

export default function Home() {
  const { categories, setCategoryOnView } = useAppContext();
  const navigate = useNavigate();

  function getRandomBanner() {
    const staticBanners = [
      "/imgs/banners/0.jpg",
      "/imgs/banners/1.jpg",
      "/imgs/banners/2.jpg",
      "/imgs/banners/3.jpg",
      "/imgs/banners/4.png",
      "/imgs/banners/5.jpg",
    ];
    return staticBanners[Math.floor(Math.random() * staticBanners.length)];
  }

  return (
    <div className="home">
      {/* TItle */}
      <h1>¡Bienvenido al Micrositio de Laboratorios!</h1>

      {/* Categories */}
      {categories.length > 0 ? (
        <div className="categories">
          {categories.map((c) => (
            <div
              className="item"
              key={c.id}
              onClick={() => {
                setCategoryOnView(c);
                navigate(`/category`);
              }}
            >
              <div className="item_content">
                <p>{c.category || "Sin nombre"}</p>
              </div>
              <img src={c.banner || getRandomBanner()} alt="Banner" />
            </div>
          ))}
        </div>
      ) : (
        <p className="no_data">No categorías disponibles</p>
      )}
    </div>
  );
}
