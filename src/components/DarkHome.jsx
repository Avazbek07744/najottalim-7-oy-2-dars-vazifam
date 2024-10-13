import nav from '../assets/img/navigate.svg'
import arrow from '../assets/img/arrow.svg'
import arrow2 from '../assets/img/arrow2.svg'
import iphone from '../assets/img/iphone.png'
const DarkHome = () => {
    return (
        <div className='navbar container max-w-[1400px] mx-auto bg-[#E4F7FF] mt-6 rounded-[52px] p-32 pb-5 mb-20 dark:bg-[#1A1A1A] dark:text-white'>
            <div className='flex items-center justify-between'>
                <div>
                    <p className='mb-5 text-[#676767]'>A SECURITY SOLUTION</p>
                    <h1 className='text-[#00085E] dark:text-[#A1A9FF] font-bold text-5xl w-[540px] mb-6'>Keep track of your loved ones in real time!</h1>
                    <hr className='mb-4' />
                    <div className='mb-[71px] flex gap-[30px]'>
                        <img src={nav} width={49} alt="" />
                        <p className='w-[330px] text-[#00085E] dark:text-[#878787] font-semibold'>
                            We noticed the high level of insecurity in the world, and we thought of how technology could be used to combat these insecurities.
                        </p>
                    </div>
                    <h1 className='mb-2 text-[40px] dark:text-white font-bold'>Join Our Waitlist!</h1>
                    <p className='mb-8 text-[#00085E] dark:text-[#878787] font-semibold'>
                        Be the first to get notified when the product is ready!
                    </p>
                    <form className='bg-white dark:bg-black w-[527px] p-2 ps-6 rounded-full flex justify-between'>
                        <input className='border-none outline-none dark:bg-black' type="text" placeholder='Your email address' />
                        <button className='bg-[#0B56E8] text-white p-2 px-4 rounded-full'>Join List!</button>
                    </form>
                </div>
                <div className='p-1 rounded-full border-[6px] w-max border-white ms-20 mt-96'></div>
                <div className='flex flex-col'>
                    <img src={iphone} width={452} height={546} alt="" />
                </div>
                <div className='p-1 rounded-full border-[6px] w-max border-white mb-[520px]'></div>
            </div>
            <div className='flex justify-end'>
                <button className='bg-white w-[55px] rounded-full py-4 p-3'>
                    <img src={arrow2} alt="" />
                </button>
            </div>
        </div>
    )
}

export default DarkHome
