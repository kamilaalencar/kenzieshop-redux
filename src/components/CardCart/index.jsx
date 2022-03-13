import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import { removeCartThunk } from "../../store/modules/cart/thunk";
import { Container } from "./styles";

const CardCart = () => {
  const dispatch = useDispatch();

  const cart = useSelector((store) => store.cart);

  const removeProduct = (product) => {
    dispatch(removeCartThunk(product));
  };

  const sumPrice = cart
    .map((item) => item.price)
    .reduce((accumulator, currentValue) => accumulator + currentValue);

  return (
    <Container>
      <ul className="card-list">
        {cart.map((item, index) => {
          return (
            <div className="content" key={index}>
              <div className="container-img">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="info">
                <h2>{item.name}</h2>
                <span>R$ {item.price.toFixed(2)}</span>
                <button onClick={() => removeProduct(item)}>
                  Remover Produto
                </button>
              </div>
            </div>
          );
        })}
      </ul>

      <div className="details">
        <div className="higher">
          <h2>Resumo do Pedido</h2>
        </div>
        <div className="bottom">
          {cart.length === 1 ? (
            <p>{cart.length} Produto</p>
          ) : (
            <p>{cart.length} Produtos</p>
          )}
          <span>R$ {sumPrice.toFixed(2)}</span>
          <button>Finalizar o pedido</button>
        </div>
      </div>
    </Container>
  );
};

export default CardCart;
