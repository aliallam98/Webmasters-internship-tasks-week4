const headersTitles = ["product", "Price", "Quantity", "Subtotal"];
const CartHeaders = () => {
  return (
    <ul className="flex items-center">
      {headersTitles.map((header, i) => (
        <li className="w-[150px] lg:w-[300px]" key={i}>{header}</li>
      ))}
    </ul>
  );
};

export default CartHeaders;
