"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

export default function booksmobile() {
  const settings = {
    slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
	infinite: false,
	arrows: false,
	autoplay: false,
	speed: 500
  };
  
  return (
  <section className="pb-[35px] mt-[35px] w-[100%] block lg:hidden">
    <Slider {...settings} className="booksmobile">
      <div>
		<Image
              src="/images/pdp/pdp2/book/2.jpg"
              alt="Mili Bajaj"
              width={400}
              height={337}
              className="object-cover w-[100%]"
        />
	  </div>
	  <div>
		<Image
              src="/images/pdp/pdp2/book/3.jpg"
              alt="Mili Bajaj"
              width={400}
              height={337}
              className="object-cover w-[100%]"
        />
	  </div>
	  <div>
		<Image
              src="/images/pdp/pdp2/book/4.jpg"
              alt="Mili Bajaj"
              width={400}
              height={337}
              className="object-cover w-[100%]"
        />
	  </div>
	  <div>
		<Image
              src="/images/pdp/pdp2/book/5.jpg"
              alt="Mili Bajaj"
              width={400}
              height={337}
              className="object-cover w-[100%]"
        />
	  </div>
	  <div>
		<Image
              src="/images/pdp/pdp2/book/6.jpg"
              alt="Mili Bajaj"
              width={400}
              height={337}
              className="object-cover w-[100%]"
        />
	  </div>
	  <div>
		<Image
              src="/images/pdp/pdp2/book/7.jpg"
              alt="Mili Bajaj"
              width={400}
              height={337}
              className="object-cover w-[100%]"
        />
	  </div>
	  <div>
		<Image
              src="/images/pdp/pdp2/book/8.jpg"
              alt="Mili Bajaj"
              width={400}
              height={337}
              className="object-cover w-[100%]"
        />
	  </div>
	  <div>
		<Image
              src="/images/pdp/pdp2/book/9.jpg"
              alt="Mili Bajaj"
              width={400}
              height={337}
              className="object-cover w-[100%]"
        />
	  </div>
	  <div>
		<Image
              src="/images/pdp/pdp2/book/10.jpg"
              alt="Mili Bajaj"
              width={400}
              height={337}
              className="object-cover w-[100%]"
        />
	  </div>
	  <div>
		<Image
              src="/images/pdp/pdp2/book/11.jpg"
              alt="Mili Bajaj"
              width={400}
              height={337}
              className="object-cover w-[100%]"
        />
	  </div>
	  <div>
		<Image
              src="/images/pdp/pdp2/book/12.jpg"
              alt="Mili Bajaj"
              width={400}
              height={337}
              className="object-cover w-[100%]"
        />
	  </div>
	  <div>
		<Image
              src="/images/pdp/pdp2/book/13.jpg"
              alt="Mili Bajaj"
              width={400}
              height={337}
              className="object-cover w-[100%]"
        />
	  </div>
	  <div>
		<Image
              src="/images/pdp/pdp2/book/14.jpg"
              alt="Mili Bajaj"
              width={400}
              height={337}
              className="object-cover w-[100%]"
        />
	  </div>
    </Slider>
	</section>
  );
}
