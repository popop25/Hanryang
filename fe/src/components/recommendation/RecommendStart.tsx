import { Link } from "react-router-dom";

const RecommendStart = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-300 to-indigo-500 text-white">
      <h1 className="text-4xl font-bold mb-6">오늘 뭐하고 놀지?</h1>
      <Link
        to="/recommendation/question"
        className="px-6 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500"
      >
        시작하기
      </Link>
    </div>
  );
};

export default RecommendStart;
