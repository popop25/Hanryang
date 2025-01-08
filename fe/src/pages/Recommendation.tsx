import RecommendStart from "../components/recommendation/RecommendStart";
// import RecommendQuestion from "../components/recommendation/RecommendQuestion";
// import RecommendResult from "../components/recommendation/RecommendResult";

const Recommendation = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <RecommendStart />
      {/* RecommendQuestion와 RecommendResult는 상태에 따라 렌더링 */}
    </div>
  );
};

export default Recommendation;
