const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
    const handleClick = () => {
      if (bigShoeImg !== imgURL.bigShoe) {
        changeBigShoeImage(imgURL.bigShoe);
      }
    };
  
    return (
      <div
        className={`border-2 rounded-xl ${
          bigShoeImg === imgURL.bigShoe
            ? "outline-[#fb3d3d] outline-dotted outline-offset-2"
            : "outline-none"
        } cursor-pointer max-sm:flex-1`}
        onClick={handleClick}
      >
        <div className='flex justify-center items-center bg-card bg-center bg-cover  sm:w-40 sm:h-40 rounded-xl max-sm:p-4  transition transform hover:scale-110 hover:border-[#ff3a3a] hover:border-2  hover:shadow-xl'>
          <img
            src={imgURL.thumbnail}
            alt='shoe colletion'
            width={127}
            height={103.34}
            className='object-contain'
          />
        </div>
      </div>
    );
  };
  
  export default ShoeCard;