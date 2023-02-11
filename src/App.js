import AppRouter from "./router/AppRouter";
import "./scss/App.scss";
import ProductContextProvider from "./context/ProductContextProvider";


function App() {
  return (
    <ProductContextProvider>
      <AppRouter />
    </ProductContextProvider>
  );
}

export default App;
