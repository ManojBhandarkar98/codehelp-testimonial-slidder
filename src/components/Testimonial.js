import React from 'react'
import Card from './Card';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
const Testimonial = (props) => {
    const reviews = props.reviews;

    function leftShiftHandler() {

    }
    function rightShiftHandler() {

    }
    function surpriseHandler() {

    }
    return (
        <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-xl'>
            <Card review={reviews[0]} />
            <div className='flex text-3xl mt-5 gap-3 text-violet-400 font-bold text-center mx-auto'>
                <button onClick={leftShiftHandler} className='cursor-pointer hover:text-violet-500'>
                    <FiChevronLeft />
                </button>

                <button onClick={rightShiftHandler} className='cursor-pointer hover:text-violet-500'>
                    <FiChevronRight />
                </button>
            </div>

            <div className='mx-auto'>
                <button onClick={surpriseHandler} className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg '>
                    Surprize Me
                </button>
            </div>
        </div>
    )
}

export default Testimonial