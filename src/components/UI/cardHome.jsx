import Link from 'next/link';

const Card = ({ imageUrl, text, linkUrl }) => {
  return (
    <li className="h-96 w-80 relative hover:scale-95 transition-transform ease-in-out duration-300">
      <Link href={linkUrl}>
        <div
          className="w-full h-full absolute top-0 left-0 bg-cover bg-center flex items-end justify-center rounded-2xl"
          style={{ backgroundImage: `url("${imageUrl}")` }}
        >
          <span className="text-white pb-8">{text}</span>
        </div>
      </Link>
    </li>
  );
};

export default Card;