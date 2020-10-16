import React from 'react';

const Admin = () => {
    return (
        <div className="col-md-4 mt-5 ml-5" >
                 <form className="form-container">
                <div class="form-group">
                    <h6>Email</h6>
                    <input placeholder="abc@gmail.com" type="email" class="form-control" id="exampleFormControlInput1" />
                </div>
                <button type="button" class="btn btn-primary">Submit</button>
            </form>
  
        </div>
    );
};

export default Admin;