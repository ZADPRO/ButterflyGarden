import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { Sparkles } from "lucide-react";
// import { FileText, School, Users, Gift } from "lucide-react";
import img1 from "../../assets/Home/3.jpg"; // Background image
import img2 from "../../assets/Home/4.jpg"; // Boy image
import img3 from "../../assets/Home/5.jpg"; // Girl image
import img4 from '../../assets/Home/6.jpg'
import img6 from '../../assets/Home/1.jpg';
import img8 from '../../assets/Home/img8.jpeg';
import img0 from '../../assets/Home/img2.webp'
// import img5 from '../../assets/Home/img5.webp'
import logo from '../../assets/Home/logo.png'
// import img from '../../assets/Home/HOME (4).png'
import home from '../../assets/Home/Group 794562.png'
import P1 from '../../assets/About/pattern-6.webp'
import P2 from '../../assets/About/pattern-7.webp'
import P3 from '../../assets/About/pattern-8.webp'
// import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation, Trans } from "react-i18next";
// type Step = {
//   title: string
//   desc: string
// }
type Reason = {
  title: string
  desc: string
}
const HomePage: React.FC = () => {
  const { t } = useTranslation("global");
  // const steps = t("steps", { returnObjects: true }) as Step[];
  const reasons = t("whyChooseSection.reasons", { returnObjects: true }) as Reason[];
  const features = [
    { title: t("features.homeLike"), img: img1 },
    { title: t("features.play"), img: img4 },
    { title: t("features.educators"), img: img3 },
    { title: t("features.safety"), img: img2 }
  ];
  // const icons = [
  //   <School className="w-6 h-6 text-blue-600" />,
  //   <FileText className="w-6 h-6 text-pink-600" />,
  //   <Users className="w-6 h-6 text-green-600" />,
  //   <Gift className="w-6 h-6 text-yellow-600" />
  // ];
  // const programs = [
  //   {
  //     id: "I",
  //     title: "Kindergarten",
  //     desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  //     bg: "bg-orange-50",
  //     border: "border-orange-300",
  //     circle: "bg-orange-400 text-white",
  //   },
  //   {
  //     id: "II",
  //     title: "Day Care",
  //     desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  //     bg: "bg-blue-50",
  //     border: "border-blue-300",
  //     circle: "bg-blue-400 text-white",
  //   },
  //   {
  //     id: "III",
  //     title: "Baby Sitting",
  //     desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  //     bg: "bg-yellow-50",
  //     border: "border-yellow-300",
  //     circle: "bg-yellow-400 text-white",
  //   },
  // ];
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

  // const prevSlide = () => {
  //   setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  // };

  // const nextSlide = () => {
  //   setCurrentIndex((prev) => (prev + 1) % features.length);
  // };
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
    <>

      {/* ///////////////////////////////////////////////////////////////////////////////// */}
      <section className="relative h-auto md:h-[600px] overflow-hidden bg-[#5EA308] lg:mt-10 py-20 px-4 sm:px-6 text-center">
        {/* ✅ Fix: Use flex-col for mobile, md:flex-row for desktop */}
        <div className="relative flex flex-col md:flex-row items-center max-w-6xl mx-auto mt-4 mb-[-79px]">
          {/* Left Side: Text Content */}
          <div className="text-center md:text-left md:w-1/2 mb-10 md:mb-14">
            <h1
              className="
                text-5xl text-[54px] sm:text-4xl md:text-5xl 
                px-5 pt-[5px] pb-[35px] 
                font-['Bau Asem'] 
                text-transparent 
                bg-gradient-to-r from-[#FDD253] to-[#B7FF5E] 
                bg-clip-text 
                rounded-[5px] mt-9
                lg:text-[94px] lg:leading-[100px] 
                lg:px-[40px] lg:ml-[-110px]
              "
            >
              {t("hero1.t5")} <br />
              {t("hero1.t")}
            </h1>
            <p
              className="
                text-white font-bold 
                text-sm sm:text-base md:text-lg 
                pt-[1px] pb-[5px] [letter-spacing:10px] [word-spacing:10px] [line-spacing:19px] 
                font-['Inter',sans-serif]
                lg:text-[20px] 
                lg:leading-[10px] 
                lg:tracking-[0.2em] 
                lg:[word-spacing:10px]
                lg:[letter-spacing:10px]  
                lg:ml-[-60px] 
                lg:mr-[-21px] 
                lg:rounded-[5px]
              "
            >
              {t("hero1.t6")}
            </p>
          </div>
          {/* Right Side: Image */}
          <div className="w-full lg:w-[700px] lg:h-[550px] flex justify-center mb-10 mt-[-75px] md:mb-0 lg:mt-[-45px] lg:ml-[91px]">
            <img
              src={home}
              alt="Butterfly Garden"
              className=" w-[115%] md:w-[80%] mb-[-40px] mt-[40px] lg:w-[98%] max-w-[800px]"
            />
          </div>
        </div>
      </section>

      <section className="relative bg-[#FFFBDB] md:h-[600px] overflow-hidden px-4 sm:px-6 lg:px-16 py-10">
        {/* Centered heading at the top */}
        <h2
          className="
    text-xl sm:text-2xl md:text-3xl lg:text-2xl 
    text-[#1B5AC1] font-bold 
    text-center lg:text-left 
    mb-6 mt-5 
    lg:pl-[100px]
    tracking-[0.3em]
  "
          style={{
            fontFamily: "Inter, sans-serif",
            wordSpacing: "1px",
          }}
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
              className="w-[80%] sm:w-[70%] md:w-[75%] lg:w-[60%] h-auto object-contain lg:mt-[-151px] lg:ml-[-140px]"
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

            <div className="flex flex-col items-start justify-start space-y-6 lg:mr-[-30px]  lg:mb-50 mt-8 ml-7 mb-3">
              {/* Heading 1 */}
              <h3
                className="text-3xl md:text-base lg:text-5xl font-normal text-[40px] lg:text-[70px] mr-20 text-[#5EA308]"
                style={{ fontFamily: "Bau Asem", fontWeight: "" }}
              >
                {t("hero.title1")}
              </h3>

              {/* Heading 2 */}
              <h4
                className="text-3xl md:text-base mt-[-20px] lg:text-5xl text-[40px] lg:text-[70px] font-normal text-[#5EA308]"
                style={{ fontFamily: "Bau Asem", fontWeight: "" }}
              >
                {t("hero.T")}
              </h4>
              <h4
                className="text-3xl md:text-base mt-[-20px] lg:text-5xl font-normal text-[40px] lg:text-[70px]  text-[#5EA308]"
                style={{ fontFamily: "Bau Asem", fontWeight: "" }}
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

      <section
        className="relative w-full bg-[#5EA308] px-4 sm:px-6 md:px-10 lg:px-16 py-16 overflow-hidden"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative">
            {/* Floating Decorative Elements */}
            <img
              src={P1}
              alt="Cloud"
              className="absolute opacity-80 
               top-6 left-6 w-8   /* mobile */
               sm:top-10 sm:left-20 sm:w-12 
               lg:top-26 lg:left-120 lg:w-14" /* desktop */
            />
            <img
              src={P2}
              alt="Bird"
              className="absolute animate-bounce
               top-16 right-6 w-6   /* mobile */
               sm:top-28 sm:right-24 sm:w-10 
               lg:top-68 lg:right-346 lg:w-12" /* desktop */
            />
            <img
              src={P3}
              alt="Girl"
              className="absolute
               bottom-2 right-2 w-8   /* mobile */
               sm:bottom-4 sm:right-20 sm:w-10 
               lg:bottom-6 lg:right-[-140px] lg:w-10" /* desktop */
            />
            {/* LEFT SIDE — Features List */}
            <motion.div
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="w-full lg:w-2/5 text-center lg:text-left"
            >
              <h2
                className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white italic mb-8"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {t("features.headingMain")}
              </h2>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer transition-all duration-300 flex items-center gap-4 justify-center lg:justify-start ${currentIndex === index ? "transform scale-105" : ""
                      }`}
                    onClick={() => handleSelect(index)}
                  >
                    <div
                      className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full font-bold text-base md:text-lg ${currentIndex === index
                        ? "bg-transparent bg-gradient-to-r from-[#FDD253] to-[#B7FF5E] text-[#555555] shadow-lg"
                        : "bg-gray-100 text-[#555555]"
                        }`}
                    >
                      {index + 1}
                    </div>
                    <span
                      className={`text-base sm:text-lg md:text-xl ${currentIndex === index
                        ? "font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FDD253] to-[#B7FF5E]"
                        : "text-white font-medium"
                        }`}
                    >
                      {feature.title}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT SIDE — Image Carousel */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative w-full max-w-[300px] sm:max-w-[380px] md:max-w-[460px] lg:max-w-[500px] h-[320px] sm:h-[400px] md:h-[450px] lg:h-[500px] mx-auto flex items-center overflow-hidden"
            >
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  initial={{ y: -200, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 200, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0 flex flex-col items-center"
                >
                  {/* Previous Image - Smaller */}
                  <div className="h-[15%] w-full opacity-50 scale-90">
                    <img
                      src={getSlide(1).img}
                      alt={getSlide(1).title}
                      className="w-full h-full object-cover rounded-xl blur-[2px]"
                    />
                  </div>

                  {/* Current Image - Larger */}
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

              {/* Navigation Buttons */}
              <button
                onClick={() => paginate(-1)}
                className="absolute top-2 left-1/2 -translate-x-1/2 z-20 bg-gradient-to-r from-[#FDD253] to-[#B7FF5E] 
            text-xl rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shadow"
              >
                ⌃
              </button>

              <button
                onClick={() => paginate(1)}
                className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 bg-gradient-to-r from-[#FDD253] to-[#B7FF5E] 
            text-xl rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shadow"
              >
                ⌄
              </button>
            </motion.div>
          </div>
        </div>
      </section>


      <div className="min-h-[60vh] bg-[#FFFBDB]">
        {/* First Section */}
        <section className="min-h-[60vh] flex items-center justify-center px-4 py-8 mt-[-0px] sm:px-6">
  <div className="max-w-7xl grid md:grid-cols-2 gap-0 items-center mb-20">
    {/* Content */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="order-1 md:order-1 flex flex-col justify-center bg-[#5EA308] px-4 py-6 sm:px-6 sm:py-8 h-auto md:h-[700px]"
      viewport={{ once: true, amount: 0.5 }}
    >
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center sm:text-left italic"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {t("ourPreschool.title")}
        <br />
        {t("ourPreschool.t1")}
      </h2>
      <p
        className="text-white text-base sm:text-lg md:text-xl mt-4 leading-relaxed text-center sm:text-left"
        style={{ fontFamily: "Inter, sans-serif", textAlign: "justify" }}
      >
        {t("ourPreschool.description")}
      </p>
    </motion.div>

    {/* Image - hidden on mobile */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}   
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="hidden sm:flex order-2 justify-center items-center h-full"
      viewport={{ once: true, amount: 0.5 }}
    >
      <img src={img0} alt="Preschool" className="w-full h-full object-cover" />
    </motion.div>
  </div>
</section>


        {/* Second Section */}
        <section className="min-h-[60vh] flex items-center justify-center px-4 py-8 sm:px-6 mt-[-114px]">
          <div className="max-w-7xl grid md:grid-cols-2 gap-0 items-center mb-20">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-2 flex flex-col justify-center bg-[#5EA308] px-4 py-6 sm:px-6 sm:py-8 h-auto md:h-[700px]"
              viewport={{ once: true, amount: 0.5 }}
            >
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center sm:text-left italic"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {t("ourPreschool.title1")}
                <br />
                {t("ourPreschool.t")}
              </h2>
              <p
                className="text-white text-base sm:text-lg md:text-xl mt-4 leading-relaxed text-center sm:text-left"
                style={{ fontFamily: "Inter, sans-serif", textAlign: "justify" }}
              >
                {t("ourPreschool.desc")}
              </p>
            </motion.div>

            {/* Image - hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden sm:flex order-1 justify-center items-center h-full"
              viewport={{ once: true, amount: 0.5 }}
            >
              <img src={img6} alt="After-School Activity" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </section>

        {/* Third Section */}
        <section className="min-h-[60vh] flex items-center justify-center px-4 py-8 sm:px-6 mt-[-100px]">
          <div className="max-w-7xl grid md:grid-cols-2 gap-0 items-center mb-10">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-1 flex flex-col justify-center bg-[#5EA308] px-4 py-6 sm:px-6 sm:py-8 h-auto md:h-[700px]"
              viewport={{ once: true, amount: 0.5 }}
            >
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center sm:text-left italic"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {t("ourPreschool.title2")}
              </h2>
              <p
                className="text-white text-base sm:text-lg md:text-xl mt-4 leading-relaxed text-center sm:text-left"
                style={{ fontFamily: "Inter, sans-serif", textAlign: "justify" }}
              >
                <span
                  style={{
                    color: "#FFD700",
                    fontWeight: "bold",
                    fontFamily: "Montagu Slab",
                  }}
                >
                  {t("ourPreschool.T")}
                </span>
                {t("ourPreschool.description2")}
              </p>
            </motion.div>

            {/* Image - hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden sm:flex order-2 justify-center items-center h-full"
              viewport={{ once: true, amount: 0.5 }}
            >
              <img src={img8} alt="Preschool" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </section>
      </div>
      <section className="py-26 mt-[-20px] bg-[#5EA308]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-[-22px] mb-16" style={{ fontFamily: "Inter, sans-serif", fontStyle: "italic" }}>
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
                  <p className="text-gray-600 text-[19px] mt-3" style={{ fontFamily: "Inter, sans-serif", textAlign: "justify" }}>
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
