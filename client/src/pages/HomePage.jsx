import Carousel from "../components/Carousel";
import LevelCard from "../components/LevelCard";
import ListMenu from "../components/ListMenu";
import OutletInfo from "../components/OutletInfo";
import PointCard from "../components/PointCard";
import PrivilegesCard from "../components/PrivilegesCard";
import ReferCard from "../components/ReferCard";
import RewardCard from "../components/RewardCard";

export default function HomePage() {
  // Data Hard Coded Rewards
  const rewards = [
    {
      image:
        "https://www.bakmigm.com/cfind/source/thumb/images/menu/cover_w255_h255_es-teh-manis.jpg",
      name: "Es Teh Manis",
      points: 40,
    },
    {
      image:
        "https://www.bakmigm.com/cfind/source/thumb/images/menu/cover_w255_h255_lemon-es-teh.jpg",
      name: "Lemon Es Teh",
      points: 45,
    },
    {
      image:
        "https://www.bakmigm.com/cfind/source/thumb/images/menu/cover_w255_h255_iced-green-tea-resized.jpg",
      name: "Iced Green Tea",
      points: 50,
    },
    {
      image:
        "https://www.bakmigm.com/cfind/source/thumb/images/menu/cover_w255_h255_107-pangsit-kuah.png",
      name: "Pangsit Kuah",
      points: 100,
    },
    {
      image:
        "https://www.bakmigm.com/cfind/source/thumb/images/cover_w255_h255_yfm-compressed.jpg",
      name: "Yi Fu Mie Ni Frozen",
      points: 200,
    },
    {
      image:
        "https://www.bakmigm.com/cfind/source/thumb/images/menu/cover_w255_h255_96-ayam-goreng-saus-thai.png",
      name: "Ayam Goreng Saus Thai",
      points: 250,
    },
  ];

  // Data Hard Coded Privileges
  const privileges = [
    {
      image:
        "https://media.istockphoto.com/id/1282653445/id/vektor/keanggotaan-vip-platinum-lencana-platinum-kualitas-premium-poster-kartu-undangan-premium.jpg?s=612x612&w=0&k=20&c=0ku_OGXFn1MpSSdmX_fxJWTRkVVlixZRoBoFwkaZN3g=",
      title: "Platinum Member💎",
      expiryDate: "31 Dec 2024",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaor14WyP67U3FW0TLnz-iAozbhHFVbMbyMA&s",
      title: "Gold Member✨",
      expiryDate: "31 Dec 2024",
    },
    {
      image:
        "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2024/3/2/ca89b020-d877-4f84-9f78-88acdf8ccdda.jpg",
      title: "Birthday Reward🥳",
      expiryDate: "31 Dec 2024",
    },
    {
      image:
        "https://katalogpromosi.com/wp-content/uploads/2024/02/promo-bakmi-gm-grabfood-04102024.jpg",
      title: "Redeem Point💰",
      expiryDate: "31 Dec 2024",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH-yZMc79LOAa3cxGfQrxxIHteEzwy8dp32w&s",
      title: "Sign Up Reward💰",
      expiryDate: "31 Dec 2024",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw-t6e93CB43c2Ewdo0uRumHjyrPLvAIG6Uw&s",
      title: "Benefit GMania💰",
      expiryDate: "31 Dec 2024",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2016/10/20/18/36/search-1756278_1280.jpg",
      title: "FAQ MEMBER",
      expiryDate: "31 Dec 2024",
    },
  ];

  // Data Hard Coded Outlets
  const outlets = [
    {
      name: "Citra Garden 6",
      address:
        "Food Junction Citra 6 Blok L2-A Citra Garden City, Jakarta Barat",
      distance: 2.4,
    },
    {
      name: "Emporium Mall",
      address:
        "Emporium Pluit Mall Lt. 2 Jalan Pluit Selatan Raya, Jakarta Utara",
      distance: 6.2,
    },
    {
      name: "Puri Indah Mall",
      address:
        "Bakmi GM Puri Indah Mall, Mall Puri Indah Lt. l Unit 103 Jl. Puri Agung Kembangan, Jakarta Barat",
      distance: 6.4,
    },
  ];

  return (
    <div>
      {/* Carousel */}
      <Carousel />
      {/* Level Card */}
      <div className="mt-2 w-full flex justify-center items-center">
        <LevelCard />
      </div>
      {/* Point Card */}
      <div className="w-full flex justify-center items-center">
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
      {/* Reward Card */}
      <div className="mt-12 px-4">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl font-bold text-gray-800">
            Redeem Your Rewards
          </h2>
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

      {/* Privileges Card */}
      <div className="mt-12 px-4">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl font-bold text-gray-800">Privileges</h2>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {privileges.map((privilege, index) => (
            <PrivilegesCard
              key={index}
              image={privilege.image}
              title={privilege.title}
              expiryDate={privilege.expiryDate}
            />
          ))}
        </div>
      </div>

      {/* Outlet Info */}
      <div className="mt-12 px-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          Outlet Location
        </h2>
        <p className="text-sm text-gray-700 mb-3">Explore your options</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {outlets.map((outlet, index) => (
            <OutletInfo
              key={index}
              name={outlet.name}
              address={outlet.address}
              distance={outlet.distance}
            />
          ))}
        </div>
        <div className="mt-6 text-left">
          <a
            href="/outlets"
            className="text-orange-500 font-bold uppercase hover:underline"
          >
            See All
          </a>
        </div>
      </div>
    </div>
  );
}
