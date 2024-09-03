export const ItemCart = ({
  id,
  image,
  price,
  name,
  cantidad,
  removeItemCart,
  aumentarElemento,
  disminuirElemento,
}) => {
  return (
    <tbody>
      <tr>
        <td>
          <img
            className="img-fluid"
            src={`img/${image}.jpg`}
            alt="imagen guitarra"
          />
        </td>
        <td>{name}</td>
        <td className="fw-bold">${price}</td>
        <td className="flex align-items-start gap-4">
          <button
            onClick={() => disminuirElemento(id)}
            type="button"
            className="btn btn-dark"
          >
            -
          </button>
          {cantidad}
          <button
            onClick={() => aumentarElemento(id)}
            type="button"
            className="btn btn-dark"
          >
            +
          </button>
        </td>
        <td>
          <button
            onClick={() => removeItemCart(id)}
            className="btn btn-danger"
            type="button"
          >
            X
          </button>
        </td>
      </tr>
    </tbody>
  );
};
