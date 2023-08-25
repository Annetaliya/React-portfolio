import REACT from 'react';
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi';

function About() {
    return(
        <div className='mt-12 px-44 text-center flex flex-col items-center'>
            <h2 className='text-[20px] font-bold'>
                Hi, my name is Annette a front-end web developer based in Nairobi Kenya</h2>
            <BiSolidQuoteAltLeft className="bg-green-500 text-[44px] rounded-full mt-6"/>
                <h2 className='my-5 text-gray-300'>
                    I am a passionate front end software engineer who likes to make beatiful responsive web designs
                    i have experience working with HTML, Css, Javascriot and React.
                </h2>
            <BiSolidQuoteAltRight className="bg-green-500 text-[44px] rounded-full mt-6"/>
        
        </div>
    )
}

export default About;