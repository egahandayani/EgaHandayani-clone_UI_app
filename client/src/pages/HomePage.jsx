import Carousel from "../components/Carousel";
import LevelCard from "../components/LevelCard";
import ListMenu from "../components/ListMenu";
import PointCard from "../components/PointCard";
import ReferCard from "../components/ReferCard";
import RewardCard from "../components/RewardCard";

export default function HomePage() {
  const rewards = [
    { image: "https://www.bakmigm.com/cfind/source/thumb/images/menu/cover_w255_h255_es-teh-manis.jpg", name: "Es Teh Manis", points: 40 },
    { image: "https://www.bakmigm.com/cfind/source/thumb/images/menu/cover_w255_h255_lemon-es-teh.jpg", name: "Lemon Es Teh", points: 45 },
    { image: "https://www.bakmigm.com/cfind/source/thumb/images/menu/cover_w255_h255_iced-green-tea-resized.jpg", name: "Iced Green Tea", points: 50 },
    { image: "https://www.bakmigm.com/cfind/source/thumb/images/menu/cover_w255_h255_107-pangsit-kuah.png", name: "Pangsit Kuah", points: 100 },
    { image: "https://www.bakmigm.com/cfind/source/thumb/images/cover_w255_h255_yfm-compressed.jpg", name: "Yi Fu Mie Ni Frozen", points: 200 },
    { image: "https://www.bakmigm.com/cfind/source/thumb/images/menu/cover_w255_h255_96-ayam-goreng-saus-thai.png", name: "Ayam Goreng Saus Thai", points: 250 },
  ];

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
      {/* Reward Cards */}
      <div className="mt-12 px-4">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl font-bold text-gray-800">Redeem Your Rewards</h2>
          <a
            href="/rewards"
            className="text-orange-500 text-sm font-bold hover:underline"
          >
            See All
          </a>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {rewards.map((reward, index) => (
            <RewardCard
              key={index}
              image={reward.image}
              name={reward.name}
              points={reward.points}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
