import {apple, google, bill} from '../assets';
import styles, {layout} from '../style';

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
 
    <div className={`${layout.sectionImgReverse} ml-10`}>
      <img src={bill} alt="billing" className='h-[100%] w-[100%] relative z-[5]' />

      <div className='h-[50%] w-[50%] absolute z-[3] top-0 -left-1/2 rounded-full white__gradient' />
      <div className='h-[50%] w-[50%] absolute z-[0] bottom-0 -left-1/2 rounded-full pink__gradient' />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Easily control your <br className='sm:block hidden' /> billing & invoicing.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>

      <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
        <a href="https://www.apple.com/br/app-store/" target="_blank"><img src={apple} alt="app store" className='h-[27.54px] w-[108.75px] object-cover mr-5 cursor-pointer' /></a>
        <a href="https://play.google.com/store/games?hl=pt_BR&gl=US&pli=1" target="_blank"><img src={google} alt="google play" className='h-[27.54px] w-[108.75px] object-cover cursor-pointer' /></a>
      </div>
    </div>
  </section>
);

export default Billing;