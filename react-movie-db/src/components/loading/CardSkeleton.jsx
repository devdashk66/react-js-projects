/* eslint-disable react/prop-types */
import Skeleton from "react-loading-skeleton";
const CardSkeleton = ({ item }) => {
  return (
    <div className="flex items-center justify-evenly gap-3 flex-wrap">
      {Array(Number(item) || 1)
        .fill({})
        .map((_, i) => (
          <div
            key={i}
            className="flex flex-col flex-1 min-w-28 max-w-60 md:min-w-48 shadow-sm shadow-gray-400 rounded"
          >
            <div className="w-full min-h-44 lg:min-h-80 lg:max-h-80 overflow-hidden bg-cover bg-blue-300 relative animate-pulse rounded-tr">
              <span className="text-[10px] absolute bottom-1 right-0  px-1">
                <Skeleton width={50} />
              </span>
            </div>
            <div className="w-full mt-1 pb-1 px-1">
              <h3 className="text-white pb-1 text-lg font-bold lg:text-xl truncate">
                <Skeleton />
              </h3>
              <span className="text-blue-500">
                <Skeleton />
              </span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CardSkeleton;
