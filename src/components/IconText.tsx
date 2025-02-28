import Image, { StaticImageData } from "next/image";

export const IconText = ({ icon, text }: IconTextProps) => {
  return (
    <div className="py-[2%] flex flex-col items-center justify-center space-y-2">
      <Image className="h-[70px] w-[80%]" src={icon} alt={text} />
      <span className="text-white text-dmSerifText uppercase">{text}</span>
    </div>
  );
};

interface IconTextProps {
  icon: string | StaticImageData;
  text: string;
}

export default IconText;
