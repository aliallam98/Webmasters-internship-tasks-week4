const headersTitles = ["product", "Price", "Quantity", "Subtotal"];
const CartHeaders = () => {
  return (
    <ul className="flex  gap-52">
      {headersTitles.map((header, i) => (
        <li key={i}>{header}</li>
      ))}
    </ul>
  );
};

export default CartHeaders;
