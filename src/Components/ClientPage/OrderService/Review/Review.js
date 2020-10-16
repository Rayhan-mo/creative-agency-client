import React from 'react';

const Review = () => {
    return (
        <div className="mt-5 ml-5 pl-5 mb-4">
        <h2 style={{color: 'green'}}>Write a review</h2>
         <h5>Your review is important for us</h5>
            <form action="">
                <input type="text" name="name" placeholder="your name"/><br/><br/>
                <input type="text" name="name" placeholder="your company name"/><br/><br/>
                <textarea name="your message" placeholder="your message" type="text" rows="3"></textarea><br/>
                <button btn btn-dark>submit</button>
            </form>
        </div>
    );
};

export default Review;