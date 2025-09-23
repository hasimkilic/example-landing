import Image from 'next/image';

const awardsData = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/415f97d2-2eba-470d-b750-579779d13c40-respona-com/assets/svgs/BloggerOutreach_BestSupport_QualityOfSupport-1-1.svg?",
    alt: "Best Support",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/415f97d2-2eba-470d-b750-579779d13c40-respona-com/assets/svgs/BloggerOutreach_BestResults_Total-2.svg?",
    alt: "Best Results",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/415f97d2-2eba-470d-b750-579779d13c40-respona-com/assets/svgs/BloggerOutreach_MomentumLeader_Leader-1-3.svg?",
    alt: "Momentum Leader",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/415f97d2-2eba-470d-b750-579779d13c40-respona-com/assets/svgs/BloggerOutreach_UsersMostLikelyToRecommend_Nps-4.svg?",
    alt: "Users most likely to recommend",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/415f97d2-2eba-470d-b750-579779d13c40-respona-com/assets/svgs/BloggerOutreach_EasiestToUse_EaseOfUse-1-5.svg?",
    alt: "Easiest To Use",
  },
];

const AwardsSection = () => {
  return (
    <div className="container mt-[50px] lg:mt-[100px]">
      <div className="flex flex-wrap justify-center lg:justify-between items-center mt-5">
        {awardsData.map((award, index) => (
          <div key={index} className="text-center mb-4 lg:mb-0 px-2 lg:px-4">
            <div>
              <Image
                src={award.src}
                alt={award.alt}
                width={116}
                height={150}
                className="inline-block"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardsSection;