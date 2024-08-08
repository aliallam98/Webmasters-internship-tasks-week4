const RedSectionHeading = ({ HeadingText }: { HeadingText: string }) => {
  return (
    <div className="flex items-center gap-6">
      <span className="block bg-[#db4444] w-5 h-10 rounded-sm" />
      <h2 className="text-xl font-semibold text-[#db4444]">{HeadingText}</h2>
    </div>
  );
};

export default RedSectionHeading;
