import { useState } from "react";
import { Modal } from "./pages/Bill";
import { Billing } from "./pages/Billing";
import { Items } from "./pages/Items";
import "./styles.css";

function App() {
  const [order, setOrder] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <Modal order={order} setIsOpen={setIsOpen} setOrder={setOrder} />
      )}
      <div className="posContainer">
        <h1 className="title">POS</h1>
        <div className="mainContainer">
          <Billing order={order} setIsOpen={setIsOpen} />
          <Items order={order} setOrder={setOrder} />
        </div>
      </div>
    </>
  );
}

export default App;
