import { useHistory } from "react-router-dom";
import "./styles.css";

function Header() {
  const history = useHistory();
  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <div className="container--header">
      <div>
        <button>🚪</button>
        <h2>HurrDhurrHerp</h2>
      </div>
      <div className="container--buttons">
        <button onClick={() => handleNavigation("/cart")}>🛒</button>
        <button onClick={() => handleNavigation("/")}>🏠</button>
      </div>
    </div>
  );
}

export default Header;
