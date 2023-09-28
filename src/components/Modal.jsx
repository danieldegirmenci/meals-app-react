import { useGlobalContext } from "../context"



const Modal = () => {

  const {selectedMeal, measurements, ingredients} = useGlobalContext();

  const { strMeal: title, strMealThumb: image, strInstructions
    : recipe, strYoutube:videoSource,strSource:source } = selectedMeal || {};



  return (
    <div className="modal fade" id="staticBackdrop" tabIndex="-1" >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-2" id="staticBackdropLabel">{title}</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>


          <div className="modal-body d-flex ">

           
            <ul className="list-group-flush list-group p-3">

              {ingredients.map((ingredient, index) => (
                <li className="list-group-item" key={index}>
                  {ingredient}: <span class="badge bg-danger rounded-pill">{measurements[index]}</span>
                </li>
              ))}
            </ul>
            <img src={image} className="img-fluid w-50 h-50 rounded" alt={title} />
          </div>
          <div className="modal-content ">
            <div className="modal-title modal-header fs-4">Instructions</div>
            <div className="modal-body fs-6">{recipe}
            </div>
          </div>




          <div className="modal-footer mt-3 d-flex justify-content-center">
            <a className="btn btn-danger"  target="_blank" href={videoSource}> Watch</a>
            <a  className="btn btn-danger " target="_blank" href={source}>Source</a>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Modal