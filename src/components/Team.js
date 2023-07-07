import React from 'react';

const Team = () => {
    return(
        <div className="flex flex-col items-center  h-screen bg-cover bg-center bg-blue-950">
            <section>
            <div className='max-w-sm rounded overflow-hidden bg-red-950 border-4 border-amber-400 shadow-xl mt-8'>
                <img className='w-full border-b-4 border-amber-400' src='https://res.cloudinary.com/dxnwbl21t/image/upload/v1688583797/rickbryant_tz70qx.jpg' alt='Rick Bryant in courtroom'></img>
                <div className='px-8 py-4'>
                    <div className='font-bold text-xl text-white font-cinzel'>Rick Bryant</div>
                    <p className='font-bold text-white text-lg font-cinzel mb-2'>Attorney</p>
                    <p className='text-white font-cinzel text-base'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.       
                    </p>
                </div>
            </div>
            </section>
        </div>
    );
}

export default Team;