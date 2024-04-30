import Image from "next/image";

const Avatar = () => {
  return (
    <div
      className="hidden xl:flex xl:max-w-none relative h-full ">
      <Image
        src={'/avatar.png'}
        width={737}
        height={678}
        alt=""
        className="bottom-[120px] left-[160px] absolute rounded-b-full object-cover  h-80 w-80"/>
    </div>
  );
};
export default Avatar;
