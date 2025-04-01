const About = () => {
  return (
    <div className="relative z-10 mt-20 
      sm:mt-40 
      lg:mt-0 
      -mb-20 
      sm:mb-5
      md:-mb-60 
      lg:-mb-0
      xl:mb-0
      2xl:mb-0
      ">
      <div className="px-6 sm:px-[10vw] md:px-[15vw] lg:px-[20vw] pt-20 sm:pt-40 min-h-screen">
        <div className="flex items-center justify-center">
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-b from-[#F7E57E] via-[#B28238] via-[#E6CD6D] via-[#FFFFD0] via-[#F7E57E] to-[#C08E2C] bg-clip-text text-transparent text-center">
            About Us
          </div>
        </div>
        <div
          className="w-[150px] sm:w-[214px] h-0.5 my-6 sm:my-8 mx-auto"
          style={{
            background:
              "linear-gradient(90deg, #F7E57E 0%, #B28238 14%, #E6CD6D 29.5%, #FFFFD0 50%, #F7E57E 77%, #C08E2C 100%)",
          }}
        ></div>
        <div className="pt-8 sm:pt-12 text-[#EEDB86] text-base sm:text-lg md:text-xl">
          For 19 years, Naukrigulf has been a trusted name for recruitment in
          the Gulf region, connecting employers with top talent across the
          region.
          <br />
          <br />
          In the inaugural edition of the Naukrigulf Awards, we celebrate
          industry leaders who have set new benchmarks in hiring and talent
          strategy by partnering with Naukrigulf.
          <br />
          <br />
          This year, we honor organizations excelling in key recruitment areas
          such as diversity, nationalization, job creation, candidate
          engagement, among others.
          <br />
          <br />
          We also recognize individuals who have played a pivotal role in
          shaping the hiring landscape across industries in the Gulf.
        </div>
      </div>
    </div>
  );
};

export default About;