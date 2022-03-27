import "./Navigation.scss";
// import { NavLink } from 'react-router';

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="logo">
        <h1>SooGood</h1>
      </div>
      <div className="nav-menu-wrapper">
        <ul className="nav-menu">
          <li className="menu-item">Search Recipes</li>
          <li className="menu-item">TO-DO</li>
          <li className="menu-item">TO-DO</li>
        </ul>
        <div className="nav-buttons">
          <button className="login-btn">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
