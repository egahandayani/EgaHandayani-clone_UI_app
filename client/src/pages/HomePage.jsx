import Carousel from "../components/Carousel";
import LevelCard from "../components/LevelCard";
import PointCard from "../components/PointCard";

export default function HomePage() {
  return (
    <div className="bg-gray-100">
      {/* Carousel */}
      <Carousel />
      {/* Level Card */}
      <div className="mt-12 w-full flex justify-center items-center">
        <LevelCard />
      </div>
      <div className="mt-12 w-full flex justify-center items-center">
        <PointCard />
      </div>
    </div>
  );
}
