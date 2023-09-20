import Image from "next/image";
import person from "../../../public/images/home.png";

export default function Body() {
  return (
    <>
      <div className="h-screen overflow-hidden flex items-center justify-between bg-slate-100">
        <div className="grid grid-cols-2 max-w-6xl mx-auto">
          <div className="flex flex-col items-start justify-center">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Summer Sale</p>
            <h1>70% OFF</h1>
            <p>
              STARTING AT <span>$99.99</span> <button>SHOP NOW!</button>
            </p>
          </div>
          <div>
            <Image src={person} className="w-[500px] pt-24" />
          </div>
        </div>
      </div>
      {/* <div></div> */}
    </>
  );
}
