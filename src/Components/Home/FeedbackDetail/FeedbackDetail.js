import React from 'react';

const FeedbackDetail = ({feedback}) => {
    return (
     <section className="col-md-3 ml-4 border">
            <div className="d-flex justify-content-between">
               <img className="pl-1 mt-3" style={{height: '70px'}} src={feedback.image} alt="" />
               <div>
                  <h4 className="mt-3 mb-3 mr-5 pr-3">{feedback.name}</h4>
                  <h5 className="mt-3 mb-3 mr-5 pr-5"> {feedback.position}</h5>
               </div>
            </div>
        <div>
             <p className="text-secondary pl-1 pr-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem molestias at nemo provident labore incidunt culpa?  debiti</p>
        </div>
     </section>
    );
};

export default FeedbackDetail;