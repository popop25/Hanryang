// src/pages/Home.tsx
import BouncingBall from "../components/home/BouncingBall";
import HumanCharacter from "../components/home/HumanCharacter";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <BouncingBall />
      <HumanCharacter />
    </div>
  );
};

export default Home;
