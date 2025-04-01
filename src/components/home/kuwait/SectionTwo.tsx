import CountryIcons from "../../CountryIcons";
import Image from "next/image";
import img_one from "@/../../public/images/kuwait/1.png";
import img_two from "@/../../public/images/kuwait/2.png";
import img_four from "@/../../public/images/kuwait/4.png";
import img_five from "@/../../public/images/kuwait/5.png";
import img_six from "@/../../public/images/kuwait/6.png";
import sprinkles from "@/../../public/images/sprinkles.png";

const SectionTwo = ({ country }: { country: string }) => {
  return (
    <>
      <div className="py-16">
        <CountryIcons country={country} />
        <div
          className="rounded-full my-32 px-6 py-2 w-fit text-3xl text-black mx-auto font-bold"
          style={{
            background:
              "linear-gradient(90.88deg, #F7E57E 0.13%, #CEAB55 18.08%, #E6CD6D 24.07%, #F5EBA8 39.03%, #FFFFD0 50%, #FAF1A6 61.97%, #F8E888 72.94%, #F7E57E 78.92%, #F3DF78 81.92%, #E9CF69 86.9%, #D8B450 91.89%, #C08E2C 97.87%)",
          }}
        >
          Top Employer Brand Winners
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {/* element */}
          <div className="group transition-all duration-200 hover:scale-125 hover:translate-x-[12.5%] hover:z-20">
            <div className="relative overflow-hidden group-hover:rounded-xl border-2 border-[#F7E57E]">
              <Image
                src={sprinkles}
                alt="Image not found!"
                className="absolute top-0 left-0 translate-x-[-30%] translate-y-[-30%] w-[50%] z-10 opacity-0 group-hover:opacity-100 transition-all duration-200"
              />
              <Image
                src={sprinkles}
                alt="Image not found!"
                className="absolute bottom-0 right-0 translate-x-[30%] translate-y-[30%] w-[50%] z-10 opacity-0 group-hover:opacity-100 transition-all duration-200"
              />
              <div className="p-8 h-[255px] flex justify-center items-center w-full bg-black text-black relative transition-all duration-200 rounded-none group-hover:rounded-xl">
                <div className="relative w-full h-full">
                  <Image
                    src={img_one}
                    alt="Image not found!"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="py-4 text-xl text-center font-bold text-[#EEDB86]">
              Gender Diversity Advocate
            </div>
          </div>
          {/* element */}
          {/* element */}
          <div className="group transition-all duration-200 hover:scale-125 hover:z-20">
            <div className="relative overflow-hidden group-hover:rounded-xl border-2 border-[#F7E57E]">
              <Image
                src={sprinkles}
                alt="Image not found!"
                className="absolute top-0 left-0 translate-x-[-30%] translate-y-[-30%] w-[50%] z-10 opacity-0 group-hover:opacity-100 transition-all duration-200"
              />
              <Image
                src={sprinkles}
                alt="Image not found!"
                className="absolute bottom-0 right-0 translate-x-[30%] translate-y-[30%] w-[50%] z-10 opacity-0 group-hover:opacity-100 transition-all duration-200"
              />
              <div className="p-8 h-[255px] flex justify-center items-center w-full bg-black text-black relative transition-all duration-200 rounded-none group-hover:rounded-xl">
                <div className="relative w-full h-full">
                  <Image
                    src={img_two}
                    alt="Image not found!"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="py-4 text-xl text-center font-bold text-[#EEDB86]">
              Diversity Hiring
              <br />
              Advocate
            </div>
          </div>
          {/* element */}
          {/* element */}
          <div className="group transition-all duration-200 hover:scale-125 hover:z-20">
            <div className="relative overflow-hidden group-hover:rounded-xl border-2 border-[#F7E57E]">
              <Image
                src={sprinkles}
                alt="Image not found!"
                className="absolute top-0 left-0 translate-x-[-30%] translate-y-[-30%] w-[50%] z-10 opacity-0 group-hover:opacity-100 transition-all duration-200"
              />
              <Image
                src={sprinkles}
                alt="Image not found!"
                className="absolute bottom-0 right-0 translate-x-[30%] translate-y-[30%] w-[50%] z-10 opacity-0 group-hover:opacity-100 transition-all duration-200"
              />
              <div className="p-8 h-[255px] flex justify-center items-center w-full bg-black text-black relative transition-all duration-200 rounded-none group-hover:rounded-xl">
                <div className="relative w-full h-full">
                  {/* <Image
                    src={img_three}
                    alt="Image not found!"
                    fill
                    className="object-contain"
                  /> */}
                </div>
              </div>
            </div>
            <div className="py-4 text-xl text-center font-bold text-[#EEDB86]">
              Nationalization
              <br />
              Advocate
            </div>
          </div>
          {/* element */}
          {/* element */}
          <div className="group transition-all duration-200 hover:scale-125 hover:z-20">
            <div className="relative overflow-hidden group-hover:rounded-xl border-2 border-[#F7E57E]">
              <Image
                src={sprinkles}
                alt="Image not found!"
                className="absolute top-0 left-0 translate-x-[-30%] translate-y-[-30%] w-[50%] z-10 opacity-0 group-hover:opacity-100 transition-all duration-200"
              />
              <Image
                src={sprinkles}
                alt="Image not found!"
                className="absolute bottom-0 right-0 translate-x-[30%] translate-y-[30%] w-[50%] z-10 opacity-0 group-hover:opacity-100 transition-all duration-200"
              />
              <div className="p-8 h-[255px] flex justify-center items-center w-full bg-black text-black relative transition-all duration-200 rounded-none group-hover:rounded-xl">
                <div className="relative w-full h-full">
                  <Image
                    src={img_four}
                    alt="Image not found!"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="py-4 text-xl text-center font-bold text-[#EEDB86]">
              Engagement
              <br />
              Excellence
            </div>
          </div>
          {/* element */}
          {/* element */}
          <div className="group transition-all duration-200 hover:scale-125 hover:z-20">
            <div className="relative overflow-hidden group-hover:rounded-xl border-2 border-[#F7E57E]">
              <Image
                src={sprinkles}
                alt="Image not found!"
                className="absolute top-0 left-0 translate-x-[-30%] translate-y-[-30%] w-[50%] z-10 opacity-0 group-hover:opacity-100 transition-all duration-200"
              />
              <Image
                src={sprinkles}
                alt="Image not found!"
                className="absolute bottom-0 right-0 translate-x-[30%] translate-y-[30%] w-[50%] z-10 opacity-0 group-hover:opacity-100 transition-all duration-200"
              />
              <div className="p-8 h-[255px] flex justify-center items-center w-full bg-black text-black relative transition-all duration-200 rounded-none group-hover:rounded-xl">
                <div className="relative w-full h-full">
                  <Image
                    src={img_five}
                    alt="Image not found!"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="py-4 text-xl text-center font-bold text-[#EEDB86]">
              Top Job
              <br />
              Creator
            </div>
          </div>
          {/* element */}
          {/* element */}
          <div className="group transition-all duration-200 hover:scale-125 hover:translate-x-[-12.5%] hover:z-20">
            <div className="relative overflow-hidden group-hover:rounded-xl border-2 border-[#F7E57E]">
              <Image
                src={sprinkles}
                alt="Image not found!"
                className="absolute top-0 left-0 translate-x-[-30%] translate-y-[-30%] w-[50%] z-10 opacity-0 group-hover:opacity-100 transition-all duration-200"
              />
              <Image
                src={sprinkles}
                alt="Image not found!"
                className="absolute bottom-0 right-0 translate-x-[30%] translate-y-[30%] w-[50%] z-10 opacity-0 group-hover:opacity-100 transition-all duration-200"
              />
              <div className="p-8 h-[255px] flex justify-center items-center w-full bg-black text-black relative transition-all duration-200 rounded-none group-hover:rounded-xl">
                <div className="relative w-full h-full">
                  <Image
                    src={img_six}
                    alt="Image not found!"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="py-4 text-xl text-center font-bold text-[#EEDB86]">
              Talent
              <br />
              Magnet
            </div>
          </div>
          {/* element */}
        </div>
      </div>
    </>
  );
};

export default SectionTwo;
