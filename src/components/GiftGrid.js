import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GiftGridItem } from "./GiftGridItem";
// import { getGifs } from "../helpers/getGifs";

export const GiftGrid = ({ category }) => {
  // const [images, setImages] = useState([]);

  //con data:images renombramos data y le ponemos images
  const { loading, data: images } = useFetchGifs({ category });

  //se va a ejecutar solamente cuando el componente es renderizado por primera vez
  // useEffect(() => {
  //   getGifs(category).then(setImages);
  // }, [category]);
  //[category] es para eliminar el warning de react y nos sirve para que
  //en caso de que la categoría cambie se vuelva a cargar el componente
  //getGifs();

  return (
    <>
      <h3 className="animate__animated animate__bounce">{category}</h3>

      {/* {loading ? "Cargando..." : "Data Cargada"} */}
      {loading && <p className="animate__animated animate__flash">Loading...</p>}

      {
        <div className="card-grid">
          {/*images.map(({id, title}) => (
          <li key={id}>{title}</li>
        ))*/}
          {images.map((img) => (
            <GiftGridItem key={img.id} {...img} />
          ))}
        </div>
      }
    </>
  );
};
