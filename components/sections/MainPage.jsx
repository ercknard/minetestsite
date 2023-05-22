import LandingPage from "@components/sections/LandingPage";
import PepeSpace from "@components/sections/PepeSpace";
import Footer from "@components/sections/Footer";
import CustomLoader from "@components/materials/CustomLoader";
import GateLoader from "@components/materials/GateLoader";
import Spaceship from "@components/sections/Spaceship";
import ShipText from "@components/sections/ShipText";
import Earth from "@components/sections/Earth";
import EarthText from "@components/sections/EarthText";
import BottomWorld from "@components/sections/BottomWorld";
import AdminCover from "@components/materials/admins/AdminCover";
import AdminCard from "@components/materials/admins/cards/AdminCard";
import Modal from "@components/materials/Modal";
import TestCoin from "@components/sections/TestCoin";
import Navigation from "@components/sections/Navigation";
import PepeKeychain from "@components/materials/PepeKeychain";
import Donate from "@components/sections/Donate";
import Fabs from "@components/materials/Fabs";
import GitFeed from "@components/fetch/GitFeed";

const MainPage= () => (

    <>

<PepeKeychain />
    {/* <CustomLoader /> */}
    <Navigation />
      <LandingPage />
        <PepeSpace />
        <div className="sec-2">
          <div className="sec">
          <Spaceship />
          <ShipText />
          <Earth />
          <EarthText />
          <AdminCover />
          <AdminCard />
          <TestCoin />
          <Donate />
          <GitFeed username="ercknard"/>
          <BottomWorld />
            </div>
        </div>
          <Footer />
        <Modal />
      <GateLoader />
      <Fabs />
      
    </>
    
    );
      
    export default MainPage;