import Image from "next/image";
import Link from "next/link";

export type ServicesCardProps = {
  heading: string;
  paragraph: string;
  price: number | string;
  url?: string;
  image: string;
};

export const ServicesCard: React.FC<ServicesCardProps> = ({
  heading,
  paragraph,
  price,
  url,
  image,
}) => {
  return (
    <article
      className="relative min-w-[300px] min-h-[290px] max-w-[300px] max-h-[290px]
      lg:min-w-[350px] lg:min-h-[290px] lg:max-w-[350px] lg:max-h-[290px]
      bg-white rounded-3xl overflow-hidden flex flex-col
      shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      {/* Image with Overlay */}
      <div className="relative flex-1">
        <Image
          alt={`${heading} remodel project by RENOVA Contractors`}
          src={image}
          fill
          quality={50}
          className="object-cover brightness-75"
        />
        {/* Text Overlay */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-5 z-10">
          <div>
            <h3 className="text-white font-bold text-xl mb-2 drop-shadow-md">
              {heading}
            </h3>
            <p className="text-white text-sm font-light drop-shadow-md">
              {paragraph}
            </p>
          </div>
          <div className="mt-auto flex items-center justify-between">
            <p className="text-main-yellow font-bold px-3 py-1 rounded-md shadow-md">
              {typeof price === "number"
                ? `$${price.toLocaleString()}`
                : price}
            </p>

            {url && (
              <Link
                title={`Learn more about ${heading} by Renova Contractors`}
                className="text-black font-bold px-4 py-2 rounded-lg bg-main-yellow hover:bg-yellow-600 transition-all shadow-md"
                href={url}
              >
                Browse
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
