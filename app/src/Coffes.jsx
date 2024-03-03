import {useState, useEffect} from "react"
import "./coffes.css"

const Coffes = () => {

  const [Datos, setDatos] = useState([])

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json")
    .then(response => response.json())
    .then(data => {
       setDatos(data)
 
    })
    .catch(error => {
      console.log(error)
    })
  }, [])


    return ( 
        <div className="coffes">
         {
            Datos.map((item, index) => (
              <div key={index} className="item">
                <img src={item.image} alt="imagenes de cafe" />
                <section className="section">
                <strong>{item.name}</strong>
                <span>{item.price}</span>
                </section>
                <article className="article">
             <strong>{item.rating}</strong>
             <span>({item.votes} Votes)</span>

                </article>

              </div>
            ))
         }
        </div>
     );
}
 
export default Coffes;
