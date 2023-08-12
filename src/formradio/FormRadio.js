import React, { useState } from 'react';

const FormRadio = () => {
  const [input, setInput] = useState('')
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e) => {
    // console.log(e.target.value);
    setInput(e.target.value)
  }
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
    <h1 className='text-center bg-secondary text-white p-4'>Form By Using Radio Option</h1>
    <div className='container w-350px py-4 '>
      <form className='shadow py-5 bg-white rounded'>
        <div className='row mb-3'>
          <div className='col-sm-2'></div>
          <div className='col-sm-4'>
            <label className='form-group'>First Name :
              <input className='form-control' type='text' name='firstName' value={input.firstName} onChange={handleChange} />
            </label>
          </div>
          <div className='col-sm-4'>
            <label className='form-group'>Last Name :
              <input className='form-control' type='text' name='lastName' value={input.lastName} onChange={handleChange} />
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-2'></div>
          <div className='col-sm-4 mt-2'>
              How should we contact you?
              <label>
                <input
                  type="radio"
                  name="option"
                  value="phone"
                  checked={selectedOption === 'phone'}
                  onChange={handleOptionChange}
                />
                Phone
              </label>

              <label>
                <input
                  type="radio"
                  name="option"
                  value="email"
                  checked={selectedOption === 'email'}
                  onChange={handleOptionChange}
                />
                Email
              </label>
          </div>
          <div className='col-sm-4'>
            {selectedOption === 'phone' && (
              <label className='form-group'>
                Phone Number:
                <input className='form-control' type="text" name="phone" />
              </label>
            )}

            {selectedOption === 'email' && (
              <label className='form-group'>
                Email Address:
                <input className='form-control' type="email" name="email" />
              </label>
            )}
          </div>
        </div>
      </form>
    </div>
    </>
  );
};
export default FormRadio;
