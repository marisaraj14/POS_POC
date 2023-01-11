import { XMarkIcon } from "@heroicons/react/24/outline";

export const Modal = ({ order, setIsOpen, setOrder }) => {
  return (
    <div className="modalContainer">
      <div className="innerContainer">
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <h2>Bill</h2>
          <XMarkIcon style={{ width: "20px", height: "20px" }} onClick={()=> {
            setOrder([])
            setIsOpen(false)}}/>
        </div>
        <table>
          <thead className="tableRow">
            <tr>
              <th>Item</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {order?.map((item, index) => (
              <tr key={index}>
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
        <p className="paidText">Paid</p>
      </div>
    </div>
  );
};
