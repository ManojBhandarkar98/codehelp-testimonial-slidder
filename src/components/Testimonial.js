import React from 'react'
import Card from './Card';

const Testimonial = (props) => {
    const reviews = props.reviews;

    return (
        <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-xl'>
            <Card  review = {reviews[0]}/>
        </div>
    )
}

export default Testimonial