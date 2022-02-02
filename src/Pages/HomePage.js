import { Link } from "react-router-dom";
import cover from "../images/cover3.png"
import "./HomePage.css"

const HomePage = () => {
  return( <>
      <div className="container-fluid">
          <div className="row">
              <div className="cover col-12">
                <img src={cover} className="img-fluid mx-auto d-block" alt="Responsive image" alt="cover"></img>
                <div className="info">
                    <h1>Welcome to Note App</h1>
                    <p>Manage your Notes With Us</p>
                    <br></br>
                    <Link  to="/add">
                        <button type="button" className="btn btn-success">Add Your Note</button>
                    </Link>                    
                   
                </div>
              </div>
          </div>
          
      </div>
  </>);
};

export default HomePage;
