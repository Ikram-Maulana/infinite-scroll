import { FC } from "react";

const Homepage: FC = () => {
  return (
    <div className="container">
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold text-[#00d87f] text-center">
            Mastering Freelancer Tools
          </p>
          <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight transition-colors text-center">
            Artikel Menarik dengan Berbagai Topik
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
