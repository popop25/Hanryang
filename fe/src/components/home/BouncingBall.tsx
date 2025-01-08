const BouncingBall = () => {
  const handleBounce = () => {
    alert("공이 튕깁니다!");
  };

  return (
    <div className="flex space-x-4">
      <button
        className="w-12 h-12 bg-blue-500 rounded-full animate-bounce"
        onClick={handleBounce}
      >
        P
      </button>
      <button
        className="w-12 h-12 bg-red-500 rounded-full animate-bounce"
        onClick={handleBounce}
      >
        L
      </button>
      <button
        className="w-12 h-12 bg-green-500 rounded-full animate-bounce"
        onClick={handleBounce}
      >
        A
      </button>
    </div>
  );
};

export default BouncingBall;
