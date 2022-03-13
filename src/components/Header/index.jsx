import logo from "../../assets/Logo.jpg";
import { Container } from "./styles";
import { BsCart4 } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const history = useHistory();
  const cart = useSelector((store) => store.cart);

  return (
    <Container>
      <div className="logo">
        <img onClick={() => history.push("/")} src={logo} alt="Kenzie shop" />
      </div>
      <div className="nav">
        <button onClick={() => history.push("/cart")}>
          {cart.length > 0 && <p className="count_cart">{cart.length}</p>}
          <BsCart4 />
        </button>

        <button className="entrar">
          <FiLogIn />
          <p> Entrar</p>
        </button>
      </div>
    </Container>
  );
};
export default Header;
