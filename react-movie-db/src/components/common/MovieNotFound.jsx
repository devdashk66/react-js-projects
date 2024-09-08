const MovieNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center my-64">
      <h1 className="text-4xl font-bold mb-4">Not Found</h1>
      <p className="text-gray-400 text-2xl text-center">
        Sorry, the movie you&#39;re looking for doesn&#39;t exist.
      </p>
    </div>
  );
};

export default MovieNotFound;
