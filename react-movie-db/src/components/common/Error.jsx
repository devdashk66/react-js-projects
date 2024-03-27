const Error = ({ error }) => {
  return (
    <div className="w-full h-44 flex items-center justify-center text-red-900">
      <h1>{error}</h1>
    </div>
  );
};

export default Error;
