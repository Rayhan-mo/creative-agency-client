import React from 'react';

const OrderService = () => {
    return (
        <div>
             <div className="col-md-4 ml-4" style={{padding:'50px'}}>
            <form className="form-container">
                <div class="form-group">
                  <h3 style={{color:"green"}}>Order your desireable Services</h3>
                    <h5>Service Title</h5>
                    <input placeholder="Enter title" type="text" class="form-control" id="exampleFormControlInput1" />
                </div>
                <div class="form-group">
                    <h5>Description</h5>
                    <textarea placeholder=" Enter Designation" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="button" class="btn btn-primary">Submit</button>
            </form>
            </div>
        </div>
    );
};

export default OrderService;