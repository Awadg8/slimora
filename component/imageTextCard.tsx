import Image from "next/image";

interface ImageTextCardProps {
    image: string;
    title: string;
    description: string;
    imagePosition: "left" | "right";
}

export default function ImageTextCard({ image, title, description, imagePosition }: ImageTextCardProps) {
    return (
        <div className={`flex flex-col ${imagePosition === "right" ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-[30px] md:gap-[60px]`}>
            <div className="relative w-full md:w-[400px] h-[200px] md:h-[250px] rounded-[20px] overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex-1 space-y-[10px] md:space-y-[15px]">
                <h3 className="text-[#FFFFFF] text-[20px] md:text-[24px] font-medium">{title}</h3>
                <p className="text-[#B5B5B5] text-[14px] md:text-[18px] leading-[20px] md:leading-[26px]">{description}</p>
            </div>
        </div>
    );
}
