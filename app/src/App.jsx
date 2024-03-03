import Coffes from "./Coffes";
import "./style.css"

function App() {


  return (
    <>
 <main className="container">
  <header className="header">
  <div className="title">
    <h1>Our Collection</h1>
    <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins,
       expertly roasted in small batches and shipped fresh weekly.</p>
       <div className="btn">
        <a href="#">All Products</a>
        <a href="#">Available Now</a>
       </div>
  </div>
  <Coffes />
  </header>
 </main>
  </>
  );
}

export default App;