import Image from "next/image";

const Loading: React.FC = () => {
  return (
    <div>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Logo_loading.png"
        alt="loading..!"
      />
      Loding.........!
    </div>
  );
};

export default Loading;
