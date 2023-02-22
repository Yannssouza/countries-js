const ThumbDetail = ({ title, image_url, population, region, capital }) => {
  return (
    <div className="container rounded-lg bg-white pb-4 shadow-lg dark:bg-neutral-700 dark:text-white">
      <img
        src={image_url}
        alt={title}
        className="h-1/2 w-full rounded-tl-lg rounded-tr-lg"
      />
      <div className="p-4">
        <h3 className="mb-4 font-bold">{title}</h3>
        <p className="text-xs">
          Population:
          <span className="text-neutral-700 dark:text-neutral-300">
            {population}
          </span>
        </p>
        <p className="text-xs">
          Region:
          <span className="text-neutral-700 dark:text-neutral-300">
            {region}
          </span>
        </p>
        <p className="text-xs">
          Capital:
          <span className="text-neutral-700 dark:text-neutral-300">
            {capital}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ThumbDetail;
