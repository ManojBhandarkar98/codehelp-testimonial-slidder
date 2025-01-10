import React from 'react'

const Card = (props) => {
    const review = props.review;
    return (
        <div>
            <div>
                <img src={review.image}></img>
            </div>
            <div>
                <p>{review.name}</p>
                <p>{review.job}</p>
            </div>
            <div>
                <p>{review.text}</p>
            </div>
        </div>
    )
}

export default Card