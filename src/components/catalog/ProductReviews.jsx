import { BsFillStarFill } from 'react-icons/bs';
import { FaRegStar } from 'react-icons/fa';

export const ProductReviews = ({ rate, count }) => {
  return (
    <div className="flex flex-col md:flex-row gap-2 my-2">
      <div className="flex pt-1 text-zinc-700">
        {Array(5)
          .fill('_')
          .map((_, index) => {
            return index < Math.floor(rate) ? (
              <BsFillStarFill></BsFillStarFill>
            ) : (
              <FaRegStar></FaRegStar>
            );
          })}
      </div>

      <div>{`${count} reviews`}</div>
    </div>
  );
};
