import Image from "next/image";

export const Card = ({ imageSrc, title }) => {
  return (
    <div className="py-[2%] flex flex-col items-center justify-center">
      <Image
        className="h-[80px] w-[80%]"
        src={imageSrc}
        alt="FamilyGroupImage"
      />
      <span className="text-white text-DM_Serif_Text uppercase">{title}</span>
    </div>
  );
};

export default Card;
