import React from 'react';

function Introduction() {
    return(
        <div className='flex justify-center flex-col items-center'>
            <div className='h-[120px] border-r-[1px] mt-[20px]'>
            </div>
            <div className='w-[5px] h-[5px] bg-green-500 rounded-full'></div>
            <h2 className='mt-5 font-medium text-[13px]'>HELLO! MY NAME IS</h2>
            <h2 className='text-[70px] font-bold tracking-widest mt-5'>ANNETTE <br></br>ADHIAMBO</h2>
            <img src="/profile.jpg" 
            className='w-[160px] h-[160px] bg-gray-200 p-7 rounded-full mt-7'/>
        </div>
    )
}

export default Introduction;