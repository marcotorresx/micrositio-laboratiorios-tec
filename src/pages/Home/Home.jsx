import React from "react";
import { useAppContext } from "context/Context";
import { useNavigate } from "react-router-dom";
import "./Home.sass";

export default function Home() {
  const {
    categories: allCategories,
    setCategoryOnView,
    isStudent,
    isAdmin,
  } = useAppContext();
  const [categories, setCategories] = React.useState([]);
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

  // Filter categories
  React.useEffect(() => {
    // If user is student or admin show all
    if (isStudent || isAdmin) {
      setCategories(allCategories);
    } else {
      // Show only public
      setCategories(allCategories.filter((c) => c.userAccess === "public"));
    }
  }, [allCategories, isAdmin, isStudent]);

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
