import HomeHero from "@/components/HomeHero/HomeHero";
import OwnBlogSection from "@/components/OwnBlogSection/OwnBlogSection";
import SecThree from "@/components/SecThree/SecThree";

export default function Home() {
  return (
    <main>
      <HomeHero/>
      <OwnBlogSection/>
      <SecThree/>
      {/* <FooterBanner/> */}
    </main>
  );
}
