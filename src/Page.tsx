import GrainBackground from "./components/GrainyBackground";
import Navbar from "./components/Navbar";

const Page = () => {
  return (
    <>
      <div className="min-h-screen bg-background">
        <GrainBackground />
        <Navbar />
      </div>
    </>
  );
};

export default Page;
