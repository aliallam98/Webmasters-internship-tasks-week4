const PicturePart = ({src}:{src:string}) => {
  return (
    <div className="relative hidden md:block">
      <img
        src={src}
        alt="Registration image"
        className="object-cover h-[600px] w-[700px]"
      />
    </div>
  );
};

export default PicturePart;
