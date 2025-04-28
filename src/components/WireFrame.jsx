import img from "../assets/image/wireframe.png";
const WireFrame = () => {
  const imageUrl = img; // এখানে আপনার ইমেজ লিংক দিন

  return (
    <div className="flex flex-col items-center">
      <img src={imageUrl} className="h-full w-full" alt="" />
    </div>
  );
};

export default WireFrame;
