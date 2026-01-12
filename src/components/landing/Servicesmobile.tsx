"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

export default function servicesmobile() {
  const settings = {
    slidesToShow: 1.2,
	slidesToScroll: 1,
	dots: false,
	infinite: false,
	arrows: false,
	autoplay: false,
	speed: 500
  };
  return (
  <section className="pb-[30px] mt-[0px] pl-[30px] w-[100%] servicesection ">
    <Slider {...settings} className="servicesmobile">
      <div>
	  <h3 className="font-normal text-[18px] font-nats text-[#351A12] uppercase mb-[18px] mt-0">Brand Identity & Strategy</h3>
		<Image
              src="/images/services/brand-identity-strategy.jpg"
              alt="Mili Bajaj"
              width={400}
              height={337}
              className="object-cover w-[100%]"
        />
		<p className="text-[16px] mt-[20px] font-nats text-[#351A12] whitespace-pre-line">Clients across independent & studio projects:<br />Four Points by Sheraton, India Wyn Gaming, Ocularity Analytics, FA Home, FA Home Junior, Kyphie, Assago, Suneja Towers, Plylam Centre, Ping OEM, Toshana and Equity Planners.</p>
	  </div>
      <div>
	  <h3 className="font-normal text-[18px] font-nats text-[#351A12] uppercase mb-[18px] mt-0">Website Design & Development</h3>
		<Image
              src="/images/services/website-design-development.jpg"
              alt="Mili Bajaj"
              width={400}
              height={337}
              className="object-cover w-[100%]"
        />
		<p className="text-[16px] mt-[20px] font-nats text-[#351A12] whitespace-pre-line">Clients across independent & studio projects:<br />Sennheiser, Mercari India, Grazitti Interactive, NCR Corporation, Typsy Beauty, FA Home, Assago, Redbelly Network, Powr of You and Thingify.</p>
	  </div>
	  <div>
	  <h3 className="font-normal text-[18px] font-nats text-[#351A12] uppercase mb-[18px] mt-0">Packaging Design</h3>
		<Image
              src="/images/services/packaging.jpg"
              alt="Mili Bajaj"
              width={400}
              height={337}
              className="object-cover w-[100%]"
        />
		<p className="text-[16px] mt-[20px] font-nats text-[#351A12] whitespace-pre-line">Clients across independent & studio projects:<br />Longbottom Coffee & Tea, Walden, The Brown Box Bakery, YLG Salon, When Miss Flo Is In Town, FA Home, FA Home Junior and Kyphie.</p>
	  </div>
	  <div>
	  <h3 className="font-normal text-[18px] font-nats text-[#351A12] uppercase mb-[18px] mt-0">Illustration & Visual Assets</h3>
		<Image
              src="/images/services/illustrations-visual-assets.jpg"
              alt="Mili Bajaj"
              width={400}
              height={337}
              className="object-cover w-[100%]"
        />
		<p className="text-[16px] mt-[20px] font-nats text-[#351A12] whitespace-pre-line">Clients across independent & studio projects:<br />YLG Salon, Janavi India, Typsy Beauty, The Brown Box Bakery, FA Home Junior, Kyphie, Walden and Aditya Shukla- Album Artwork.</p>
	  </div>
	  <div>
	  <h3 className="font-normal text-[18px] font-nats text-[#351A12] uppercase mb-[18px] mt-0">Editorial Design</h3>
		<Image
              src="/images/services/editorial-design.jpg"
              alt="Mili Bajaj"
              width={400}
              height={337}
              className="object-cover w-[100%]"
        />
		<p className="text-[16px] mt-[20px] font-nats text-[#351A12] whitespace-pre-line">Clients across independent & studio projects:<br />NIMHANS Bangalore, Four Points by Sheraton, Janavi India, FA Home, Dote Gifts, Titliyan and Casa Amber.</p>
	  </div>
	  <div>
	  <h3 className="font-normal text-[18px] font-nats text-[#351A12] uppercase mb-[18px] mt-0">Custom Invitations</h3>
		<Image
              src="/images/services/custom-invitation.jpg"
              alt="Mili Bajaj"
              width={400}
              height={337}
              className="object-cover w-[100%]"
        />
		<p className="text-[16px] mt-[20px] font-nats text-[#351A12] whitespace-pre-line">Clients across independent & studio projects:<br />Wedding Invitations for Devika Reddy & Anirudh Reddy, Wedding Invitations for Rajkirat Singh Chug & Jasmine Kaur Gupta, Janavi India, Ocularity Analytics, Nitika Gujral and AMP Motors.</p>
	  </div>
	  <div>
	  <h3 className="font-normal text-[18px] font-nats text-[#351A12] uppercase mb-[18px] mt-0">Digital Ads & Campaign Assets</h3>
		<Image
              src="/images/services/digital-ads.jpg"
              alt="Mili Bajaj"
              width={400}
              height={337}
              className="object-cover w-[100%]"
        />
		<p className="text-[16px] mt-[20px] font-nats text-[#351A12] whitespace-pre-line">Clients across independent & studio projects:<br />Janavi India, Longbottom Coffee & Tea, AMP Motors, Skin Q, Aayna Skin Clinic, Sancha Tea, FA Home, FA Home Junior, Mauli Cashmere, Casa Amber, Delicut, Dote Gifts, Anata, Décor Remedy, Home Baker, 7 Bazaari and Siddhant Agrawal.</p>
	  </div>
	  <div>
	  <h3 className="font-normal text-[18px] font-nats text-[#351A12] uppercase mb-[18px] mt-0">Social Media Creatives</h3>
		<Image
              src="/images/services/social-media.jpg"
              alt="Mili Bajaj"
              width={400}
              height={337}
              className="object-cover w-[100%]"
        />
		<p className="text-[16px] mt-[20px] font-nats text-[#351A12] whitespace-pre-line">Clients across independent & studio projects:<br />ITC, DLF Emporio, Luxor Nano, Sancha Tea, Skin Q, Punjab Jewellers, Organ India, IVWS, Chanakya, Décor Remedy, Home Baker, FA Home, FA Home Junior, Siddhant Agrawal, Anata, Aayna Skin Clinic, Namaskar Ayurved, Saan Design, Janavi India, Dote Gifts, Ocularity Analytics, Titliyan, Casa Amber, Halwasiya Avenue, Nitika Gujral and AMP Motors.</p>
	  </div>
	  <div>
	  <h3 className="font-normal text-[18px] font-nats text-[#351A12] uppercase mb-[18px] mt-0">Commissioned Paintings</h3>
		<Image
              src="/images/services/comissioned-paintings.jpg"
              alt="Mili Bajaj"
              width={400}
              height={337}
              className="object-cover w-[100%]"
        />
		<p className="text-[16px] mt-[20px] font-nats text-[#351A12] whitespace-pre-line">Clients across independent & studio projects:<br />IHG (InterContinental Hotels Group), Holiday Inn, Four Points by Sheraton and Anant Raj.</p>
	  </div>
	  <div>
	  <h3 className="font-normal text-[18px] font-nats text-[#351A12] uppercase mb-[18px] mt-0">Creative Direction & Consulting</h3>
		<Image
              src="/images/services/creative-direction.jpg"
              alt="Mili Bajaj"
              width={400}
              height={337}
              className="object-cover w-[100%]"
        />
		
		<p className="text-[16px] mt-[20px] font-nats text-[#351A12] whitespace-pre-line">Clients across independent & studio projects:<br />Four Points by Sheraton, Holiday Inn Dhaka City Centre and Marium Niloy Group, Bangkok.</p>
	  </div>
	  
    </Slider>
	</section>
  );
}
