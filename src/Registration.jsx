import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="login-container-custom">
      <h2 className="custom-heading">Register</h2>
      <form>
        <div className="input-container-custom">
          <input type="text" placeholder="Username" className="custom-input" />
        </div>
        <div className="input-container-custom">
          <input
            type="password"
            placeholder="Password"
            className="custom-input"
          />
        </div>
        <button type="button" className="custom-button">
          Done
        </button>
        <Link to="/Login">
          <button type="button" className="custom-button">
            Login
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Registration;
