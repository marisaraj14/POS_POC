import beverages from "./data/beverages.json";

export const Items = ({ order, setOrder }) => {
  function AddItem(item) {
    if (!order.some((value) => value.name === item.name)) {
      setOrder([...order, item]);
    }
    else{
      alert("Item already added!")
    }
  }

  return (
    <div className="itemsContainer">
      {beverages?.map((item, index) => (
        <div
          key={index.toString()}
          className="foodContainer"
          onClick={() => AddItem(item)}
        >
          <img src={item?.url} alt={item?.name} className="imgContainer" />
          <div style={{ paddingLeft: "10px" }}>
            <p className="itemName">{item?.name}</p>
            <p className="itemPrice">Rs. {item?.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
