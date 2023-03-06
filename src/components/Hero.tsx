import styles from '../style';
import {discount, robot} from '../assets';
import GetStarted from './GetStarted';

const Hero = () => (
    <section
        id="home"
        className={`flex md:flex-row flex-col ${styles.paddingY} sm:mt-10 sm:${styles.marginY} max-sm:mt-20`}
    >
        <div
            className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        >
            <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                <img
                    src={discount}
                    alt="discount"
                    className="h-[32px] w-[32px]"
                />
                <p className={`${styles.paragraph} ml-2 uppercase`}>
                    <span className="text-white">25%</span> discount for{" "}
                    <span className="text-white">3 months</span> account
                </p>
            </div>
            <div className="flex flex-row justify-between items-center w-full">
                <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
                    The Next
                    <br className="sm:block hidden" />{" "}
                    <span className="text-gradient">Generation</span>{" "}
                </h1>

                <div className="ss:flex hidden md:mr-4 mr-0">
                    <GetStarted />
                </div>
            </div>

            <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
                Payment method
            </h1>

            <p className={`${styles.paragraph} max-w-[470px], mt-5`}>
                Despite the name "imSafeBank" potentially suggesting otherwise,
                this bank is actually highly secure and reliable. The financial
                institution is committed to its clients' security and uses
                cutting-edge technology to keep all information protected.
            </p>
        </div>

        <div className={`flex-1 flex ${styles.flexCenter}`}>
            <img
                src={robot}
                alt="billing"
                className="h-[100%] w-[100%] relative z-[5]"
            />

            <div className="absolute z-[0] w-[20%] h-[35%] top-0 pink__gradient" />
            <div className="absolute z-[1] w-[15%] h-[80%] rounded-full bottom-40 white__gradient" />
            <div className="absolute z-[0] w-[20%] h-[50%] right-20 bottom-20 green__gradient" />
        </div>
        <div className={`ss:hidden ${styles.flexCenter}`}>
            <GetStarted />
        </div>
    </section>
)


export default Hero;