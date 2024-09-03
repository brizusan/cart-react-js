import { ItemCart } from "./ItemCart";

export const Header = ({
  cart,
  isNotEmpty,
  aumentarElemento,
  disminuirElemento,
  totalPagar,
  cleanCart,
  removeItemCart
}) => {
  return (
    <header className="py-5 header">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-8 col-md-3">
            <a href="index.html">
              <img
                className="img-fluid"
                src="/img/logo.svg"
                alt="imagen logo"
              />
            </a>
          </div>
          <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
            <div className="carrito">
              <img
                className="img-fluid"
                src="img/carrito.png"
                alt="imagen carrito"
              />

              <div id="carrito" className="bg-white p-3">
                <p className="text-center">
                  {!isNotEmpty && "No hay elementos en el carrito"}{" "}
                </p>

                {isNotEmpty && (
                  <>
                    <table className="w-100 table">
                      <thead>
                        <tr>
                          <th>Imagen</th>
                          <th>Nombre</th>
                          <th>Precio</th>
                          <th>Cantidad</th>
                          <th></th>
                        </tr>
                      </thead>

                      {cart.map((guitarra) => (
                        <ItemCart
                          aumentarElemento={aumentarElemento}
                          disminuirElemento={disminuirElemento}
                          removeItemCart={removeItemCart}
                          cart={cart}
                          key={guitarra.id}
                          {...guitarra}
                        />
                      ))}
                    </table>
                    <p className="text-end">
                      Total pagar: <span className="fw-bold">${totalPagar}</span>
                    </p>
                    <button 
                      onClick={cleanCart} 
                      className="btn btn-dark w-100 mt-3 p-2">
                      Vaciar Carrito
                    </button>
                  </>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
