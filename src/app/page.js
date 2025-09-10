import Apartment from "@/components/Apartment";
import ApartmentType from "@/components/ApartmentType";
import Banner from "@/components/Banner";
import Feature from "@/components/Feature";
import Help from "@/components/Help";

export default function Home() {
  return (
    <div className="bg-white">
      <Banner />
      <Feature />
      <Apartment />
      <Help />
      <ApartmentType/>
    </div>
  );
}
