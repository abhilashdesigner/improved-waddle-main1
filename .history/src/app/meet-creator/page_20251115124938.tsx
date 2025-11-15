"use client";

import Contact from "@/components/landing/Contact";
import Logos from "@/components/landing/Logos";
import MeetCreator from "@/components/meet-creator/MeetCreator";

export default function MeetCreatorPage() {
  return (
    <main className="pt-0 overflow-x-hidden">
      <MeetCreator />

      {/* INTERNAL CSS */}
      <style jsx>{`
        .main-section {
          width: 100%;
          padding: 40px 0;
          background: #000;
        }

        .m-sectiom {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }

        .m-left-top,
        .m-right-top,
        .m-medium {
          position: relative;
          width: 100%;
        }

        .m-left-top-text,
        .m-right-top-text {
          position: absolute;
          top: 0;
          left: 0;
          padding: 20px;
        }

        .m-left-top-text h3,
        .m-right-top-text h3 {
          margin: 0;
          padding: 0;
        }

        .svg-line {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .svg-line-2,
        .svg-line-r {
          position: absolute;
          top: 0;
        }

        /* Desktop */
        @media (min-width: 1024px) {
          .m-sectiom {
            grid-template-columns: repeat(3, 1fr);
          }

          .m-left-top-text,
          .m-right-top-text {
            padding: 40px;
          }
        }
      `}</style>

      {/* INSERTED YOUR FULL SECTION HERE */}
      <div className="main-section">
        <div className="m-sectiom">
          <div className="m-left-top">
            <img src="2.jpg" width="100%" height="auto" style={{ visibility: "hidden" }} />
            <div className="m-left-top-text">
              <h3 className="font-normal text-[20px] lg:text-[20px] font-nats text-[#F7F5ED] uppercase m-0 p-0">
                Modern School Barakhamba
                <br />
                road, new delhi
              </h3>
              <p className="font-nats text-[12px] md:text-[16px] text-[#F7F5ED] md:text-[#F0E5D6] md:pr-0">
                Recognised for excellence in painting by
                <br />
                Mr. L.K. Advani and awarded for the
                <br />
                recreation of the Sistine Chapel.
              </p>
            </div>
          </div>

          <div className="m-medium">
            <img src="3.png" width="100%" height="auto" style={{ visibility: "hidden" }} />

            <div className="svg-line">
              <svg className="svg-line-2" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="0" x2="50%" y2="90%" style={{ stroke: "#fff", strokeWidth: 1 }} />
              </svg>
              <svg className="svg-line-r" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="0" x2="50%" y2="90%" style={{ stroke: "#fff", strokeWidth: 1 }} />
              </svg>
            </div>
          </div>

          <div className="m-right-top">
            <img src="2.jpg" width="100%" height="auto" style={{ visibility: "hidden" }} />
            <div className="m-right-top-text">
              <h3 className="font-normal text-[20px] lg:text-[20px] font-nats text-[#F7F5ED] uppercase m-0 p-0">
                Srishti manipal institute of art,
                <br />
                design & technology,
                <br />
                bangalore
              </h3>
              <p>
                Majored in Visual Communication and
                <br />
                Strategic Branding along with a minor in
                <br />
                Contemporary Art Practices.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Logos />
      <Contact />
    </main>
  );
}




// "use client";

// import Contact from "@/components/landing/Contact";
// import Logos from "@/components/landing/Logos";
// import MeetCreator from "@/components/meet-creator/MeetCreator";
// import Image from "next/image";


// export default function MeetCreatorPage() {
//   return (
//     <main className="pt-0 overflow-x-hidden">
//       <MeetCreator />
//       <section className="w-full flex justify-center items-center">
//         <Image
//           src="/images/meet-creator.png"
//           alt="Media"
//           width={1200}
//           height={738}
//           className="w-full h-[570px] md:h-[738px] lg:h-full object-cover"
//         />
//       </section>
//       <Logos />
//       <Contact />
//     </main>
//   );
// }
