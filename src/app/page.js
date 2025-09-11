import Apartment from "@/components/Apartment";
import ApartmentType from "@/components/ApartmentType";
import Banner from "@/components/Banner";
import Button from "@/components/Button";
import BuyToSell from "@/components/BuyToSell";
import Feature from "@/components/Feature";
import Help from "@/components/Help";


export default function Home() {
  return (
    <div className="bg-white max-w[1920px]">
      <Banner />
      <Feature />
      <Apartment />
      <Help />
      <ApartmentType/>
      <BuyToSell/>
      <Button />
    </div>
  );
}
