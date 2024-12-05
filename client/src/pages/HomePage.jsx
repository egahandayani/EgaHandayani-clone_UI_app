import Carousel from "../components/Carousel";
import LevelCard from "../components/LevelCard";
import ListMenu from "../components/ListMenu";
import PointCard from "../components/PointCard";
import ReferCard from "../components/ReferCard";

export default function HomePage() {
  return (
    <div>
      {/* Carousel */}
      <Carousel />
      {/* Level Card */}
      <div className="mt-12 w-full flex justify-center items-center">
        <LevelCard />
      </div>
      {/* Point Card */}
      <div className="mt-12 w-full flex justify-center items-center">
        <PointCard />
      </div>
      {/* List Menu */}
      <div className="mt-12 w-full flex justify-center items-center">
        <ListMenu />
      </div>
        {/* Refer Card */}
        <div className="mt-12 w-full flex justify-center items-center">
        <ReferCard />
      </div>
    </div>
  );
}
