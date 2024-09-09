 const Text = ({ text }) => {
  return (
    <div className="flex">
      <div className=" flex justify-center items-center py-[10px] px-[16px] rounded-md bg-[#4B6BFB] text-[14px] font-medium leading-5 not-italic font-sans">
        {text}
      </div>
    </div>
  );
};
export default Text;
