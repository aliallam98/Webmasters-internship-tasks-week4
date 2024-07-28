interface IProps {
  headingText: string;
  children: React.ReactNode;
}
const FooterCol = ({ headingText, children }: IProps) => {
  return (
    <ul className="text-white space-y-3 text-center sm:text-start">
      <h3 className="mb-6 text-xl font-semibold">{headingText}</h3>
      {children}
    </ul>
  );
};

export default FooterCol;
