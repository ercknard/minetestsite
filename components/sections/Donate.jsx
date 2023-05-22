import CoinsAddress from "@components/materials/CoinAddress";
import Coins from "@components/materials/Coins";

const Donate= () => (

        <section className="container-main-coins">
        <div
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration={3000}
            className="pipe-to-left"
        >
            {" "}
        </div>
        <div className="container-main coins-bg">
            <div
            data-aos="fade-left"
            data-aos-easing="ease-in-out"
            data-aos-duration={1000}
            className="width-class coins-op card"
            >
            <div className="glow" />
            <div className="pipe-padding">
                <h3> Donate: </h3>{" "}
                <p>
                {" "}
                If you enjoy our server, or the plugins we make, and want to help
                contribute financial we happily accept cryptocurrency donations!{" "}
                </p>

                <Coins />

                <CoinsAddress />

            </div>
            </div>
        </div>
        </section>

    
    );
      
    export default Donate;