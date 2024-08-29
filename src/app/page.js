import MenuCarousel from "@/components/carousel/MenuCarousel";
import FilterDataViewer from "@/components/properties/filter/FilterDataViewer";
import Properties from "@/components/properties/Properties";
import Spacer from "@/components/Spacer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Spacer />
      <MenuCarousel />
      <Spacer />
      <Properties />
      <Spacer />
    </>
  );
}
