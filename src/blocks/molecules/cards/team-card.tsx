import Image from "next/image";
import Link from "next/link";
interface Props {
  slug: string;
  image: string;
  name: string;
  role: string;
}

const TeamCard: React.FC<Props> = ({ slug, image, name, role }) => {
  const url = `/about-us/team/${slug}`;
  return (
    <Link href={url}>
      <div className="grid group w-[300px] cursor-pointer">
        <div className="aspect-w-4 aspect-h-5 overflow-hidden rounded-lg">
          <Image src={image} className="object-cover" fill alt={name} />
        </div>

        <div className="p-2">
          <h3 className="capitalize text-xl group-hover:underline">{name}</h3>
          <p className="capitalize text-sm">{role}</p>
        </div>
      </div>
    </Link>
  );
};
export default TeamCard;
