"use client";

import { useState } from "react";

export default function SignupBanner() {
	const [email, setEmail] = useState('');
    //const [loading, setLoading] = useState(false);

  const handleSubmit = async(e: React.FormEvent) => {
    //console.log('comeing');
	e.preventDefault();
	//console.log('comeing2');
    // Handle newsletter subscription here
	try {
      const res = await fetch(
        'https://script.google.com/macros/s/AKfycby3Ni2X9goHqY7_HJf59bETQf7EimYlvq2LAyagPMdR53VW_n7MPMYcFay-JSgsdGnHrw/exec',
        {
          method: 'POST',
		  mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, 'ip': 'localhost' }),
        }
      );

      const data = await res.json();
console.log(data);
      if (data.success) {
        alert('Saved successfully!');
        setEmail('');
      } else {
        alert('Failed to save');
      }
    } catch (err) {
      //alert('Something went wrong');
    } finally {
      //setLoading(false);
    }
  
  };
 

  return (
    <div className="w-full bg-[#351A12] px-[30px] md:px-[104px] overflow-x-hidden">
      {/* Mobile Layout - Single Column */}
      <div className="md:hidden h-[155px]">
        <div className="pt-[33px]">
          <h2 className="font-normal text-[15px] font-nats text-[#F7F5ED] mb-[12px] uppercase">
            Sign up for discounts
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="relative w-[300px] mb-0">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email address"
              className="w-[300px] pt-0 pb-[1px] border-0 border-b border-[#D2ADCE] focus:outline-none font-nats text-[12px] bg-transparent text-[#F7F5ED] placeholder-[#F7F5ED] focus:placeholder-transparent"
              required
            />
            <button
              type="submit"
              className="absolute right-0 bottom-0 w-[20px] h-[20px] bg-[#D2ADCE] text-[#351A12] font-nats flex items-center justify-center border-0"
            />
          </div>
        </form>
      </div>
      {/* Desktop Layout - Two Columns */}
      <div className="hidden h-[167px] md:flex justify-between">
        <div className="w-[300px] pt-[53px]">
          <h2 className="font-normal text-[20px] font-nats text-[#F7F5ED] mb-[23px] md:mb-0 uppercase">
            Sign up for discounts
          </h2>
        </div>
        <div className="w-[377px] ml-[632px] pt-[75px]">
          <form onSubmit={handleSubmit}>
            <div className="relative w-[377px] md:mb-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email address"
                className="w-[377px] pl-[11px] pr-[42px] pt-0 pb-[3px] border-0 border-b border-[#D2ADCE] focus:outline-none font-nats text-[16px] bg-transparent text-[#F7F5ED] placeholder-[#F7F5ED] focus:placeholder-transparent"
                required
              />
              <button
                type="submit"
                className="absolute right-0 bottom-[1px] w-[40px] h-[40px] bg-[#D2ADCE] text-[#351A12] font-nats flex items-center justify-center border-0"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
