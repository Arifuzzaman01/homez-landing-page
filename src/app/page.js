import Apartment from "@/components/Apartment";
import ApartmentType from "@/components/ApartmentType";
import Banner from "@/components/Banner";
import BuyToSell from "@/components/BuyToSell";
import Discover from "@/components/Discover";
import Feature from "@/components/Feature";
import Help from "@/components/Help";
import PeopleRelator from "@/components/PeopleRelator";


export default function Home() {
  return (
    <div className="bg-white max-w[1920px]">
      <Banner />
      <Feature />
      <Apartment />
      <Help />
      <ApartmentType/>
      <BuyToSell/>
      <PeopleRelator/>
      <Discover/>
    </div>
  );
}
