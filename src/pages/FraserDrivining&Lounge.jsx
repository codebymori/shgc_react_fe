import FacilitiesDetails from "../components/FacilitiesDetails";
import eagle1 from "../assets/img/eagle1.webp";
import msp1 from "../assets/img/msp1.webp";
import msp2 from "../assets/img/msp2.webp";
import msp3 from "../assets/img/msp3.webp";
import hole4 from "../assets/img/hole4.webp";
import hole5 from "../assets/img/hole5.webp";
import hole6 from "../assets/img/hole6.webp";
import highlanders2 from "../assets/img/highlanders2.webp";
import alba2 from "../assets/img/alba2.webp";
import building3 from "../assets/img/building3.webp";
import shop from "../assets/img/shop.webp";
import islay1 from "../assets/img/islay1.webp";

const FraserDrivingLounge = () => {
  // Gallery Images
  const galleryImages = [msp1, msp2, msp3, hole4, hole5, hole6];

  // Description text
  const description = "Fraser Driving & Lounge at Sentul Highlands Golf Club offers one of the most comfortable and scenic driving range experiences in Sentul. With a spacious practice area designed for golfers who want to refine their swing, it provides the perfect environment for both warm-ups and focused training sessions. After practicing, golfers can relax in a cozy lounge overlooking the natural landscape of Sentul. It's an ideal spot to unwind, enjoy light refreshments, or connect with fellow players before continuing your round. Combining a well-maintained driving range with an inviting lounge atmosphere, Fraser Driving & Lounge delivers a complete golf practice experience making it one of the best golf facilities near Jakarta for both casual and serious golfers.";

  // Custom data untuk Fraser Driving & Lounge explore section
  const fraserExploreData = [
    {
      id: 1,
      title: 'Fraser Driving & Lounge',
      excerpt: 'Experience the premium driving range with stunning mountain views and comfortable lounge area.',
      image: msp1,
      createdAt: '2025-12-02',
    },
    {
      id: 2,
      title: 'Larassa Resto',
      excerpt: 'Fine dining experience with authentic Indonesian and international cuisine.',
      image: highlanders2,
      createdAt: '2025-11-28',
    },
    {
      id: 3,
      title: 'Locker',
      excerpt: 'Premium locker facilities with modern amenities for our valued members.',
      image: alba2,
      createdAt: '2025-11-15',
    },
    {
      id: 4,
      title: 'Bale Gede',
      excerpt: 'Traditional Balinese architecture with modern comfort for exclusive gatherings.',
      image: building3,
      createdAt: '2025-11-10',
    },
    {
      id: 5,
      title: 'Pro Shop',
      excerpt: 'Complete golf equipment and merchandise from premium brands.',
      image: shop,
      createdAt: '2025-11-05',
    },
    {
      id: 6,
      title: 'VIP Room',
      excerpt: 'Exclusive private rooms for business meetings and special occasions.',
      image: islay1,
      createdAt: '2025-11-01',
    },
  ];

  return (
    <FacilitiesDetails
      heroImage={eagle1}
      title="Fraser Driving & Lounge"
      description={description}
      galleryImages={galleryImages}
      exploreData={fraserExploreData}
      buttonText="Check Availability"
      backgroundColor="#E4E9D4"
    />
  );
};

export default FraserDrivingLounge;