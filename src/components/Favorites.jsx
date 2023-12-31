import { useGlobalContext } from "../context";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Favorites = () => {

  const { favorites, removeFromFavorites, selectMeal } = useGlobalContext();




  return (
    <div className="bg-danger text-light" >
      <h3 className=" text-center p-2">
        <button
          type="button"
          className="btn btn-link text-decoration-none text-light fs-5 card-hover"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Favorites
        </button></h3>
      <div className="collapse " id="collapseExample" >
        <ul
          className="list-group list-group-horizontal bg-danger p-3 container d-flex justify-content-center align-items-end"

          style={{ "flexWrap": "wrap" }}>
          {
            favorites.map((meal) => {
              const { idMeal, strMealThumb: image, strMeal: title } = meal
              return <li key={idMeal} className="d-flex flex-column list-group-item col-3  col-md-2 col-sm-3 bg-danger border border-0 align-items-center" style={{"overflow":"hidden"}} >
                <span className="text-light text-center text-wrap p-1">{title}</span>

                <img src={image} className="img-fluid rounded border border-0 card-hover" alt="image" onClick={() => { selectMeal(idMeal, true) }} data-bs-toggle="modal" data-bs-target="#modal" />
                <RxCross2 style={{ "color": "white" }} className="align-self-center my-2 icon m-2" size={25} onClick={() => { removeFromFavorites(idMeal) }} />

              </li>
            })
          }
        </ul>
      </div>
    </div>
  )
}
export default Favorites