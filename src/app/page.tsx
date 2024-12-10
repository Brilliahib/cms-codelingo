import ContentPanda from "@/components/organism/home/ContentPanda";
import HomeContent from "@/components/organism/home/HomeContent";
import Reason from "@/components/organism/home/Reason";
import Navbar from "@/components/organism/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeContent />
      <ContentPanda />
      <Reason />
    </>
  );
}
