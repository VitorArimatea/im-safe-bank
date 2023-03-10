import React from 'react';

const Button = ({styles}:any) => (
    <button type='button' className={`py-4 px-6 bg-green-gradient font-poppins font-medium text-[18px] rounded-[10px] text-primary outline-none ${styles}`}>
      Get Started
    </button>
  );

export default Button;