import styles from "../style";
import { article, discount, robot } from "../assets";
import GetStarted from "./GetStarted"; // Import the missing component

const Hero = () => (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div
            className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        >
            <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                <img src={discount} alt="discount" className="w-[32px] h-[32px]" />

                <p className={`${styles.paragraph} ml-2`}>
                    <span className="text-white">20%</span> discount for{" "}
                    <span className="text-white">1 Month</span> Subscription
                </p>
            </div>

            <div className="flex flex-row justify-between items-center w-full">
                <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[90px] leading-[75px]">
                    Writing Technical Content <br className="sm:block hidden" />{" "}
                    <span className="text-gradient">For You.</span>{" "}
                </h1>

                <div className="ss:flex hidden md:mr-4 mr-0">
                    <GetStarted />
                </div>
            </div>

            <button className="font-poppins font-semibold ss:text-[28px] text-[52px] text-white ss:leading-[50px] leading-[75px] bg-blue-700 hover:bg-blue-800 py-1 px-4 rounded mt-5 mb-5">
                Get Started
            </button>

            <p className={`${styles.paragraph} max-w-[470px] mt-5}`}>
                At Whyphy Teh, we specialize in breaking down intricate technical
                concepts into simple, easy to understand, and relatable content.
            </p>
        </div>

        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
            <img
                src={article}
                alt="billing"
                className="w-[100%] h-[100%] relative z-[5]"
            />
            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
            {/* changed to blue from white  */}
            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 blue__gradient" />
            {/* changed to black from blue   */}
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 black__gradient" />
        </div>

        <div className={`ss:hidden ${styles.flexCenter}`}>
            <GetStarted />
        </div>
    </section>
);

export default Hero;
