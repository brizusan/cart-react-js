import { Footer } from "./components/Footer";
import { Guitarra } from "./components/Guitarra";
import { Header } from "./components/Header";
import { useCart } from "./hooks/useCart";

function App() {
  const {
    agregarCarrito,
    aumentarElemento,
    disminuirElemento,
    cleanCart,
    removeItemCart,
    cart,
    guitarras,
    isNotEmpty,
    totalPagar,
  } = useCart();

  return (
    <>
      <Header
        cart={cart}
        isNotEmpty={isNotEmpty}
        aumentarElemento={aumentarElemento}
        disminuirElemento={disminuirElemento}
        totalPagar={totalPagar}
        cleanCart={cleanCart}
        removeItemCart={removeItemCart}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {guitarras.map((guitarra) => (
            <Guitarra
              key={guitarra.id}
              guitarra={guitarra}
              agregarCarrito={agregarCarrito}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
