import { useDispatch, useSelector } from "react-redux";
import { addCartThunk } from "../../store/modules/cart/thunk";
import { Container } from "./styles";

const Showcase = () => {
  const dispatch = useDispatch();

  const products = useSelector((store) => store.product);

  const handleClick = (product) => {
    dispatch(addCartThunk(product));
  };

  return (
    <Container>
      <ul className="card-list">
        {products.map((item, index) => (
          <div className="card">
            <li key={index}>
              <div className="container-img">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="info">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <span>{item.price.toFixed(2)} R$</span>
                <button onClick={() => handleClick(item)}>
                  Adicionar ao carrinho
                </button>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </Container>
  );
};

export default Showcase;
