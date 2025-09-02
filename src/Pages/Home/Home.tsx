
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import { FileText, School, Users, Gift } from "lucide-react";
import img1 from "../../assets/Home/3.jpg"; // Background image
import img2 from "../../assets/Home/4.jpg"; // Boy image
import img3 from "../../assets/Home/5.jpg"; // Girl image
import img4 from '../../assets/Home/6.jpg'
import img6 from '../../assets/Home/1.jpg';
import img8 from '../../assets/Home/img8.jpeg';
import img0 from '../../assets/Home/img2.webp'
import img5 from '../../assets/Home/img5.webp'
import logo from '../../assets/Home/logo.png'
import img from '../../assets/Home/HOME (4).png'
import home from '../../assets/Home/Group 794562.png'
import P1 from '../../assets/About/pattern-6.webp'
import P2 from '../../assets/About/pattern-7.webp'
import P3 from '../../assets/About/pattern-8.webp'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation, Trans } from "react-i18next";
type Step = {
  title: string
  desc: string
}
type Reason = {
  title: string
  desc: string
}
const HomePage: React.FC = () => {
  const { t } = useTranslation("global");
  const steps = t("steps", { returnObjects: true }) as Step[];
  const reasons = t("whyChooseSection.reasons", { returnObjects: true }) as Reason[];
  const features = [
    { title: t("features.homeLike"), img: img1 },
    { title: t("features.play"), img: img4 },
    { title: t("features.educators"), img: img3 },
    { title: t("features.safety"), img: img2 }
  ];
  const icons = [
    <School className="w-6 h-6 text-blue-600" />,
    <FileText className="w-6 h-6 text-pink-600" />,
    <Users className="w-6 h-6 text-green-600" />,
    <Gift className="w-6 h-6 text-yellow-600" />
  ];
  const programs = [
    {
      id: "I",
      title: "Kindergarten",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      bg: "bg-orange-50",
      border: "border-orange-300",
      circle: "bg-orange-400 text-white",
    },
    {
      id: "II",
      title: "Day Care",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      bg: "bg-blue-50",
      border: "border-blue-300",
      circle: "bg-blue-400 text-white",
    },
    {
      id: "III",
      title: "Baby Sitting",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      bg: "bg-yellow-50",
      border: "border-yellow-300",
      circle: "bg-yellow-400 text-white",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [features.length]);

  const handleSelect = (index: number) => {
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };
  const [direction, setDirection] = useState(0); // -1 = up, 1 = down

  const paginate = (dir: number) => {
    setDirection(dir);
    setCurrentIndex((prev) => (prev + dir + features.length) % features.length);
  };

  const getSlide = (offset: number) => {
    const index = (currentIndex + offset + features.length) % features.length;
    return features[index];
  };
  return (

    //  <section className="relative flex flex-col mt-[80px] md:flex-row h-[500px] md:h-[600px] overflow-hidden">

    //   {/* Left Side Image */}
    //   <div className="flex-1 relative">
    //     <img
    //       src={img1}
    //       alt="Butterfly Garden"
    //       className="w-full h-full object-cover"
    //     />

    //     {/* Yellow circle (top-left) */}
    //     <motion.div
    //       className="absolute top-10 left-5 w-12 h-12 bg-yellow-400 rounded-full"
    //       animate={{ y: [0, -10, 0] }}
    //       transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    //     />

    //     {/* Pink blob (bottom-left) */}
    //     <motion.div
    //       className="absolute bottom-10 left-10 w-16 h-16 bg-pink-300 rounded-full rotate-[30deg]"
    //       animate={{ x: [0, 15, 0] }}
    //       transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    //     />
    //   </div>

    //   {/* Right Side Text */}
    //   <div className="flex-1 bg-[#fdf3f5] flex flex-col items-center justify-center text-center px-8 relative">
    //     <motion.div
    //       className="absolute top-8 right-8 w-8 h-8 bg-blue-900 rounded-full"
    //       animate={{ y: [0, 12, 0] }}
    //       transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    //     />
    //     <motion.div
    //       className="absolute bottom-8 right-6 w-12 h-12 bg-green-200 rounded-full"
    //       animate={{ rotate: [0, 10, -10, 0] }}
    //       transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    //     />

    //     <h2 className="text-2xl md:text-4xl font-bold text-[#2f2f4f] leading-tight mb-4 max-w-xl">
    //       {t("hero.headline")}
    //     </h2>

    //     <div className="flex gap-4 flex-wrap justify-center">
    //       <button className="bg-[#2f2f4f] text-white px-6 py-3 rounded-lg shadow hover:bg-[#45457a] transition">
    //         {t("hero.ctaEnroll")}
    //       </button>
    //       <button className="bg-[#FFD700] text-[#2f2f4f] px-6 py-3 rounded-lg shadow hover:bg-[#f5c400] transition">
    //         {t("hero.ctaTour")}
    //       </button>
    //     </div>
    //   </div>
    // </section>
    <>
      {/* <section className="relative mt-[60px] lg:mt-[80px] h-auto  overflow-hidden bg-gradient-to-r from-pink-100 via-purple-100 to-pink-50 py-16 px-6 overflow-hidden">
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-10 left-10 w-64 h-64 bg-pink-300 rounded-full blur-3xl"></div>
    <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-400 rounded-full blur-3xl"></div>
  </div>
  
  <div className="relative text-center max-w-3xl mx-auto">
     <button className="px-8 mt-9 mb-8 py-3 bg-[#5ea308] text-[#fcdb7c] font-semibold text-xl rounded-full hover:scale-105 transition transform duration-300 font-[YourFontName]">
      {t("hero1.button1")} 
    </button>
  
    <h1 className="text-4xl md:text-5xl font-bold text-gray-500 mt-6">
      {t("hero1.title")}{" "}
      <p className="text-[#1b5ac1] mt-8">{t("hero1.subtitle")}</p>
    </h1>
    <h2 className="text-3xl md:text-4xl font-extrabold text-[#5ea308] mt-3">
      {t("hero1.t5")} 
    </h2>
    <p className="text-lg text-gray-600 mt-8">
      {t("hero1.t6")} 
    </p>
 
  </div>
</section> */}
      <section className="relative h-[600px] overflow-hidden bg-[#5EA308] py-36 px-6 text-center">
        {/* Background effects */}
        {/* <button
          className="px-8 mt-19 ml-[50px] py-3 text-[#FFFBDB] font-bold text-xl uppercase tracking-widest"
          style={{
            fontFamily: "Inter",
            fontWeight: "700",
            fontSize: "18px",
            lineHeight: "22px",
            letterSpacing: "27px",
            textAlign: "center",
          }}
        >
          {t("hero1.button1")}
        </button> */}

        {/* Content Wrapper */}
        <div className="relative px-8 mt-9 flex flex-col md:flex-row items-center max-w-6xl mx-auto">
          {/* Left Side: Text Content */}
          <div className="text-center  md:text-left md:w-1/2 mb-14">
            {/* <p
              className="text-[#FFFF] ml-[-70px] "
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: "400",
                fontSize: "24px",
                lineHeight: "30px",
                letterSpacing: "0.2px",
                marginTop: "-40px",  
                
              }}
            >
              {t("hero1.title")}<br />
              {t("hero1.subtitle")}
            </p> */}

            {/* Main Heading */}
            <h1
              className="text-4xl md:text-5xl ml-[-110px] text-[#020f46]"
              style={{
                fontFamily: "Bau Asem, sans-serif",
                fontSize: "94px",
                lineHeight: "100px",
                background: "linear-gradient(83.84deg, #FDD253 28.63%, #B7FF5E 83.72%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                paddingTop: "5px",
                paddingRight: "40px",
                paddingBottom: "35px",
                paddingLeft: "40px",
                borderRadius: "5px",
              }}
            >
              {t("hero1.t5")} <br />
              {t("hero1.t")}
            </h1>

            {/* Event Details */}
            <p
              className="text-[white] font-bold ml-[-60px] mt-"
              style={{
                fontFamily: "Inter, sans-serif",
                letterSpacing: "8px",
                wordSpacing: "10px",
                fontSize: "20px",
                lineHeight: "10px",
                // letterSpacing: "0.1px",
                // background: "linear-gradient(77.33deg, #FDD253 5.93%, #B7FF5E 103.87%)",
                paddingTop: "5px",
               
                marginRight: "-21px",
                marginLeft:"-60px",
                paddingBottom: "15px",
                // paddingLeft: "30px",
                borderRadius: "5px",
              }}
            >
              {t("hero1.t6")}
            </p>
          </div>
          {/* Right Side: Image */}
          <div className="w-[510px] h-[500px] flex justify-center mt-[-80px] ml-[91px]">
  <img
    src={home}
    alt="Butterfly Garden"
    className="w-full max-w-[500px]"
  />
</div>
      </div>
      </section>

     <section className="relative bg-[#FFFBDB] md:h-[600px] overflow-hidden px-4 sm:px-6 lg:px-16 py-10">

  {/* Centered heading at the top */}
  <h2
    className="text-xl sm:text-2xl md:text-3xl lg:text-2xl text-[#1B5AC1] mr-[950px] mb-6 mt-5 font-bold text-center"
    style={{ fontFamily: "Inter, sans-serif" ,fontSize:"20px",letterSpacing: "7px",
          wordSpacing: "1px",}}
  >
    {t("hero.headline")}
  </h2>

  {/* Two columns below: Left text, Right image */}
  <div className="flex flex-col md:flex-row md:space-x-30">

    {/* Left side content - Text */}
    <motion.div
       initial={{ opacity: 0, x: "-100%" }}   // Animate from left to right
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex-1 flex items-center justify-center min-h-[250px] sm:min-h-[300px] md:min-h-[600px]"
    >
      <img
        src={logo}
        alt="Butterfly Garden"
        className="w-[80%] sm:w-[70%] md:w-[75%] lg:w-[60%] h-auto object-contain mt-[-151px] ml-[-140px]"
      />
     

    </motion.div>

    {/* Right side content - Image */}
    <motion.div
       initial={{ opacity: 0, x: "100%" }}   // Animate from right to left
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="flex-1 flex flex-col items-start justify-center text-left pl-1"
    >
      {/* Add your headings and paragraphs here */}

      {/* <h3
        className="text-lg sm:text-xl md:text-3xl lg:text-5xl font-extrabold text-[#5EA308] mb-4"
        style={{ fontFamily: "Bau Asem", fontWeight: "bold" }}
      >
        {t("hero1.t5")} <br />
        {t("hero1.t")}
      </h3> */}

     <div className="flex flex-col items-start justify-start space-y-6 mr-[-30px] mb-40">

  {/* Heading 1 */}
  <h3
    className="text-sm md:text-base lg:text-5xl font-normal mr-20 text-[#5EA308]"
    style={{ fontFamily: "Bau Asem",fontSize:"70px", fontWeight: "" }}
  >
    {t("hero.title1")}
  </h3>

  {/* Heading 2 */}
  <h4
    className="text-sm md:text-base lg:text-5xl font-normal text-[#5EA308]"
    style={{ fontFamily: "Bau Asem", fontSize:"70px",fontWeight: "" }}
  >
    {t("hero.T")}
  </h4>
 <h4
    className="text-sm md:text-base lg:text-5xl font-normal text-[#5EA308]"
    style={{ fontFamily: "Bau Asem",fontSize:"70px", fontWeight: "" }}
  >
    {t("hero.T1")}
  </h4>
  {/* Styled Paragraph */}
  <p
    className="text-[#FFFBDB]"
    style={{
      fontFamily: "Bau Asem",
      fontStyle: "normal",
      fontSize: "15px",
      lineHeight: "20px",
      letterSpacing: "11px",
      wordSpacing: "10px",
      background: "#1B5AC1",
      padding: "15px 30px",
      borderRadius: "5px",
    }}
  >
    {t("hero.ctaEnroll")}
  </p>

</div>
    </motion.div>
  </div>
</section>



      <section className="relative w-full h-150  bg-[#5EA308] px-6 md:px-10 lg:px-16 py-16 " style={{ fontFamily: "Inter, sans-serif" }}>
        <div className="max-w-7xl mx-auto mt-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* LEFT SIDE — Features List */}
            <img
              src={P1}
              alt="Cloud"
              className="absolute mb-55 right-[930px] w-16 opacity-80"
            />
            <img
              src={P2}
              alt="Bird"
              className="absolute mt-[150px] left-4 w-12 animate-bounce"
            />
            <img
              src={P3}
              alt="Girl"
              className="absolute right-10 mt-[-130px] w-10"
            />

            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-2/5" style={{ fontFamily: "Inter, sans-serif" }}
            >
              <div className="mb-10 text-center lg:text-left">
                <h2 className="text-2xl md:text-5xl font-bold text-[#FFFFFF] mb-4" style={{ fontFamily: "Inter, sans-serif", fontStyle: "italic" }}>
                  {t("features.headingMain")}
                </h2>
              </div>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer transition-all duration-300 flex items-center gap-4 ${currentIndex === index ? "transform scale-105" : ""}`}
                    onClick={() => handleSelect(index)}
                  >
                    <div
                      className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full font-bold text-base md:text-lg ${currentIndex === index
                        ? "bg-transparent bg-gradient-to-r from-[#FDD253] to-[#B7FF5E] text-[#555555] shadow-lg"
                        : "bg-gray-100 text-[#555555]"}`}
                    >
                      {index + 1}
                    </div>
                    <span
                      className={`text-lg md:text-xl ${currentIndex === index
                        ? "font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FDD253] to-[#B7FF5E]"
                        : "text-[#FFFFFF] font-medium"}`}
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {feature.title}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT SIDE — Image with Blob Shape + Animation */}
            <div className="relative w-[500px] h-[500px] mx-auto mt-[-40px] overflow-hidden">
              <div className="relative h-full w-full">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    variants={{
                      enter: (dir: number) => ({
                        y: dir > 0 ? 300 : -300,
                        opacity: 0,
                      }),
                      center: { y: 0, opacity: 1 },
                      exit: (dir: number) => ({
                        y: dir > 0 ? -300 : 300,
                        opacity: 0,
                      }),
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut",
                    }}
                    className="absolute top-0 left-0 w-full h-full flex flex-col items-center"
                  >
                    {/* Previous Image - Smaller */}
                    <div className="h-[15%] w-full opacity-50 scale-90">
                      <img
                        src={getSlide(1).img}
                        alt={getSlide(1).title}
                        className="w-full h-full object-cover rounded-xl blur-[2px]"
                      />
                    </div>

                    {/* Current Image - Larger with Gradient Border */}
                    <div className="h-[70%] w-full z-10 scale-100 px-2">
                      <div className="p-[4px] rounded-2xl bg-gradient-to-r from-[#FDD253] to-[#B7FF5E] h-full">
                        <div className="bg-white rounded-2xl h-full">
                          <img
                            src={getSlide(0).img}
                            alt={getSlide(0).title}
                            className="w-full h-full object-cover rounded-2xl"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Next Image - Smaller */}
                    <div className="h-[15%] w-full opacity-50 scale-90">
                      <img
                        src={getSlide(-1).img}
                        alt={getSlide(-1).title}
                        className="w-full h-full object-cover rounded-xl blur-[2px]"
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={() => paginate(-1)}
                className="absolute top-2 left-1/2 -translate-x-1/2 z-20 bg-gradient-to-r from-[#FDD253] to-[#B7FF5E] 
             text-2xl rounded-full w-10 h-10 flex items-center justify-center shadow"
              >
                ⌃
              </button>

              <button
                onClick={() => paginate(1)}
                className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 bg-gradient-to-r from-[#FDD253] to-[#B7FF5E] 
             text-2xl rounded-full w-10 h-10 flex items-center justify-center shadow"
              >
                ⌄
              </button>

            </div>
          </div>
        </div>
      </section>

      <div className="min-h-[60vh] bg-[#FFFBDB]">
        {/* First Section: Content + Image */}
        <section className="min-h-[60vh] flex items-center justify-center px-3 py-8 ">
          <div className="max-w-7xl max-h-8xl grid md:grid-cols-2 gap-0 items-center mb-32">
            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-1 flex flex-col justify-center h-[700px] bg-[#5EA308] p-8"
              viewport={{ once: true, amount: 0.5 }} // Only triggers when 50% of the section is in view
            >
              <h2
                className="text-4xl font-bold text-white"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontStyle: "italic",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  textAlign: "justify",
                }}
              >
                {t("ourPreschool.title")}
                <br />
                {t("ourPreschool.t1")}
              </h2>
              <p
                className="text-[#FFFFFF] text-xl mt-5 leading-relaxed"
                style={{
                  fontFamily: "Inter, sans-serif",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  textAlign: "justify",
                }}
              >
                {t("ourPreschool.description")}
              </p>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-2 md:order-2 flex justify-center items-center h-full"
              viewport={{ once: true, amount: 0.5 }} // Triggers only when 50% of the section is in view
            >
              <img
                src={img0}
                alt="Preschool"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Second Section: Content + Image */}
        <section className="min-h-[60vh] flex items-center justify-center mt-[-141px] py-1 px-6 ">
          <div className="max-w-7xl max-h-7xl grid grid-cols-1 md:grid-cols-2 gap-0 items-center mb-32">
            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-2 flex flex-col justify-center h-[700px] bg-[#5EA308] p-8"
              viewport={{ once: true, amount: 0.5 }}
            >
              <h2
                className="text-3xl font-bold text-white"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontStyle: "italic",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  textAlign: "justify",
                }}
              >
                {t("ourPreschool.title1")}
                <br />
                {t("ourPreschool.t")}
              </h2>
              <p
                className="text-[#FFFFFF] text-xl mt-5 leading-relaxed"
                style={{
                  fontFamily: "Inter, sans-serif",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  textAlign: "justify",
                }}
              >
                {t("ourPreschool.desc")}
              </p>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 md:order-1 flex justify-center items-center h-full"
              viewport={{ once: true, amount: 0.5 }}
            >
              <img
                src={img6}
                alt="After-School Activity"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Third Section: Content + Image */}
        <section className="min-h-[60vh] flex items-center justify-center px-3 py-8">
          <div className="max-w-7xl max-h-8xl grid md:grid-cols-2 gap-0 items-center mt-[-141px] mb-2">
            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-1 flex flex-col justify-center h-[700px] bg-[#5EA308] p-8"
              viewport={{ once: true, amount: 0.5 }}
            >
              <h2
                className="text-4xl font-bold text-white"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontStyle: "italic",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  textAlign: "justify",
                }}
              >
                {t("ourPreschool.title2")}
              </h2>
              <p
                className="text-[#FFFFFF] text-xl mt-5 leading-relaxed"
                style={{
                  fontFamily: "Inter, sans-serif",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  textAlign: "justify",
                }}
              >
                <span
                  style={{
                    color: "#FFD700", // for example, a gold/yellow highlight color
                    fontWeight: "bold",
                     fontFamily: "Montagu Slab",
                  }}
                >
                  {t("ourPreschool.T")}
                </span>
                {t("ourPreschool.description2")}
              </p>

            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-2 md:order-2 flex justify-center items-center h-full"
              viewport={{ once: true, amount: 0.5 }}
            >
              <img
                src={img8}
                alt="Preschool"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>
      </div>

      <section className="py-26 mt-0 bg-[#5EA308]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16" style={{ fontFamily: "Inter, sans-serif", fontStyle: "italic" }}>
            <Trans
              i18nKey="whyChooseSection.heading"
              ns="global"
              components={{ 1: <span className="text-white-700" /> }}
            />
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {reasons.map((reason, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}

                className={`relative p-[2px] pb-[13px] rounded-3xl bg-gradient-to-r from-[#FDD253] to-[#B7FF5E]`}
              >
                <div
                  className={`rounded-3xl bg-[#FFFBDB] p-8 h-full text-left border-2 border-dashed border-transparent`}
                >
                  {/* Circle with Roman numeral */}
                  <div
                    className="absolute -top-5 left-6 w-10 h-10 flex items-center justify-center rounded-full shadow-md font-bold text-[#555555] bg-gradient-to-r from-[#FDD253] to-[#B7FF5E]"
                  >
                    {["I", "II", "III"][index]}
                  </div>
                  <h3 className="text-2xl font-semibold text-[#555555] mt-5" style={{ fontFamily: "Inter, sans-serif" }}>
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 text-[19px] mt-3" style={{ fontFamily: "Inter, sans-serif" }}>
                    {reason.desc}
                  </p>
                </div>
              </motion.div>

            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default HomePage;
