import React from 'react';
import data from './data';
function App() {
  return (
    <div className="grid-container">
         <header className="row"> 
             <div>
                 <a className="brand" href="/">
                     Gualmar
                     </a>
             </div>
             <div>
                <a href="/cart"> Car</a>
                <a href="/signin"> Sign In </a>
             </div>
            </header>
            <main>
               <div>
               <div className="row center">
                      { data.products.map((product) => (
                         <div key={product._id} className="card">
                           <a href={`/product/${product._id}`}>
                           <img clas="medium"
                            src={product.image}
                             alt={product.name}
                             />
                          </a>
                          <div className="card-body">
                          <a href={`/product/${product._id}`}>
                                <h2>{product.name} </h2>
                             </a>
                            <div className="rating">
                                <span>
                                    <i className="fa fa-star"></i> 
                                    </span>
                                <span> 
                                   <i className="fa fa-star"></i> 
                                   </span> 
                                <span> 
                                   <i className="fa fa-star"></i> 
                                   </span> 
                                <span>
                                    <i className="fa fa-star"></i>
                                     </span> 
                                <span>
                                    <i className="fa fa-star"></i>
                                     </span> 
                            </div>
                                <div className="price"> ${product.price}</div>  
                         </div> 
                      </div>
                            
                         ))
                      }
                       
                   </div>
                   </div>
                   </main>
          <footer className="row center"> Derechos reservados</footer>
       </div>
  );
}

export default App;
