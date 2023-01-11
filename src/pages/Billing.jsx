export const Billing = ({ order, setIsOpen }) => {
  return (
    <div className="billingContainer">
      <div style={{ display: "grid" }}>
        <p className="billTitle">Order Listing</p>
        <table>
          <thead className="tableRow">
            <tr>
              <th>Item</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {order?.map((item, index) => (
              <tr key={index.toString()}>
                <td>{item?.name}</td>
                <td>Rs. {item?.price}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr style={{ fontWeight: "bold" }}>
              <td>Total Price</td>
              <td>
                Rs.{" "}
                {order?.reduce(function (prev, current) {
                  return prev + +current.price;
                }, 0)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <button
        className="payButton"
        onClick={() => (order.length===0 ? alert('No item selected!'):setIsOpen(true))}
      >
        Pay Now
      </button>
    </div>
  );
};
