import Image from "next/image";

interface SimpleCardProps {
  id: number;
  imageUrl: string;
  date: string;
  title: string;
  description: string;
  iconText: string;
}

const SimpleCard: React.FC<SimpleCardProps> = ({
  imageUrl,
  date,
  title,
  description,
  iconText,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <Image
        src={imageUrl}
        alt={title}
        width={400} 
        height={250}
        className="w-full h-auto object-cover rounded"
      />
      <h3 className="text-xl font-bold mt-2">{title}</h3>
      <p className="text-gray-600">{date}</p>
      <p className="mt-2">{description}</p>
      <p className="mt-2 text-blue-500">{iconText}</p>
    </div>
  );
};

export default SimpleCard;
