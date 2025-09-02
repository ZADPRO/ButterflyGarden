import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import './About.css';
import img1 from '../../assets/Home/img1.webp';
import img2 from '../../assets/Contact/contact1.webp';
import img from '../../assets/About/HOME1.png'
import P1 from '../../assets/About/pattern-6.webp';
import P2 from '../../assets/About/pattern-7.webp';
import P3 from '../../assets/About/pattern-8.webp';
import wave from '../../assets/Home/Wave-02 (1).svg'
interface Point {
  id: string;
  title: string;
  text: string;
}

interface Card {
  id: string;
  title: string;
  text: string;
  icon: string;
  image: string;
}

const About = () => {
  const { t } = useTranslation("global");

  // Translated content
  const title = t("syllabusSection.title") as string;
  const description = t("syllabusSection.description") as string;
  const cards = t("syllabusSection.cards", { returnObjects: true }) as Card[];
  const points = t("aboutSection.points", { returnObjects: true }) as Point[];

  return (
    <>
  <section className="min-h-[70vh] flex items-center justify-center py- w-full">
  <div
    style={{
      backgroundImage: `url('${img}')`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "60% center", 
    }}
    className="w-full grid md:grid-cols-2 bg-[#FFFBDB] gap-0 items-center"
  >
    {/* Left Section (now just spacer) */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="order-2 md:order-1 h-[700px] hidden md:block"
      viewport={{ once: true, amount: 0.5 }}
    />

    {/* Right: Text Section */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="order-1 md:order-2 flex flex-col justify-center h-[700px]  p-8"
      viewport={{ once: true, amount: 0.5 }}
    >
      <h1
        className="text-5xl font-extrabold text-[#5EA308]"
        style={{
          fontFamily: "Inter, sans-serif",
          fontStyle: "italic",
          paddingLeft: "140px",
          paddingRight: "80px",
          textAlign: "justify",
        }}
      >
        {t("about.title")}
      </h1>
      <p
        className="text-[#555555] text-xl mt-5 leading-relaxed"
        style={{
          fontFamily: "Inter, sans-serif",
          paddingLeft: "140px",
          paddingRight: "140px",
          textAlign: "justify",
        }}
      >
        {t("about.tagline")}
      </p>
    </motion.div>
  </div>
</section>
      <section className="relative py-16 bg-[#5EA308] overflow-hidden">
        {/* Decorative background balls */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse"></div>
        <div className="absolute top-20 right-0 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-bounce"></div>
        <div className="absolute bottom-10 left-1/2 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-green-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-bounce"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center px-6">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}   // Start from left
            animate={{ x: 0, opacity: 1 }}      // Slide to center
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-white mb-4" style={{ fontFamily: "Inter, sans-serif", fontStyle: "italic" }}
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg text-[#FFFBDB] mb-10" style={{ fontFamily: "Inter, sans-serif", fontSize: "22PX" }}
          >
            {description}
          </motion.p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, x: -100 }}  // Start from left
                animate={{ opacity: 1, x: 0 }}      // Slide to center
                transition={{
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 120,
                }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className={`relative p-[2px] pb-[13px] rounded-3xl bg-gradient-to-r from-[#FDD253] to-[#B7FF5E]`}
              >

                <div
                  className={`rounded-3xl bg-[#FFFBDB] p-8 h-full text-left border-2 border-dashed border-transparent`}
                >
                  <div className="text-5xl mb-4">{card.icon}</div>

                  <h3 className="text-xl font-bold text-[#555555] mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
                    {card.title}
                  </h3>
                  <p className="text-gray-600" style={{ fontFamily: "Inter, sans-serif", fontSize: "19PX" }}>{card.text}</p></div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Section 2: About Points */}
      <section className="relative py-20 bg-[#FFFBDB]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-6">
          {/* Left Side - Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={img2}
              alt="Classroom"
              className="w-full max-w-lg object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="text-left "
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <motion.h1
              initial={{ x: -100, opacity: 0 }}   // Start from left
              animate={{ x: 0, opacity: 1 }}      // Slide to center
              transition={{ duration: 0.6 }}
              className="text-4xl mb-10 font-extrabold text-[#5EA308] mb-4" style={{ fontFamily: "Inter, sans-serif", fontStyle: "italic" }}
            >
              {t("aboutSection.label")}
            </motion.h1>


            <div className="space-y-8">
              {points.map((point, index) => (
                <div key={index}>
                  <h3 className="flex items-center text-xl font-bold text-[#555555]" style={{
                    fontFamily: "Inter, sans-serif",
                    textAlign: "justify",
                  }}>
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-[#FDD253] to-[#B7FF5E] text-[#555555] font-bold mr-3" style={{
                    fontFamily: "Inter"}}>
                      {point.id}
                    </span>
                    {point.title}
                  </h3>
                  <p className="ml-15 mr-1 text-gray-600 mt-2" style={{
                    fontFamily: "Inter, sans-serif",
                    textAlign: "justify",
                    fontSize: "19PX"
                  }}>{point.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Language Integration */}
      {/* <section className="min-h-[80vh] flex flex-col items-center justify-center py-12 px-6 bg-[#f8f6f3] relative">
  
  <img
    src={wave}
    alt="Wave Pattern"
    className="absolute top-0 left-0 w-full object-cover transform rotate-180"
    style={{
      width: "100%",
      objectFit: "fill",
    }}
  />

  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-3xl font-bold text-blue-700 mb-12"
  >
    {t("languageIntegration.title")}
  </motion.h2>


  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
    <img src={P1} alt="Cloud" className="absolute mt-90 left-150 w-16 opacity-80" />
    <img src={P2} alt="Bird" className="absolute mt-[-130px] left-15 w-12 animate-bounce" />
    <img src={P3} alt="Girl" className="absolute right-20 mt-[-130px] w-10" />
    
 
    {t("languageIntegration.ageGroups", { returnObjects: true }).map((group: any, index: number) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 * index }}
        className="flex flex-col items-center text-center relative"
      >
        
        <div
          className={`w-32 h-32 flex items-center justify-center 
            ${index === 0
              ? "border-2 border-dashed border-blue-300 bg-blue-50 rotate-3"
              : index === 1
              ? "rounded-full border-2 border-dashed border-orange-300 bg-orange-50"
              : "border-2 border-dashed border-yellow-300 bg-yellow-50 -rotate-3"
            }`}
        >
          <span className="text-4xl font-bold text-gray-600">
            {group.ageRange.charAt(0)}
          </span>
        </div>
        <div
          className={`absolute top-4 right-16 w-10 h-10 flex items-center justify-center rounded-full text-white text-sm font-semibold
            ${index === 0 ? "bg-blue-400" : index === 1 ? "bg-orange-400" : "bg-yellow-400"}
          `}
        >
          {`0${index + 1}`}
        </div>
        <h3 className="text-xl font-semibold text-blue-700 mt-6">
          {group.ageRange}
        </h3>
        <ul className="text-gray-600 mt-3 space-y-1">
          {group.activities.map((activity: any, idx: number) => (
            <li key={idx}>{activity}</li>
          ))}
        </ul>
      </motion.div>
    ))}
  </div>
  <img
    src={wave}
    alt="Wave Pattern"
    className="absolute bottom-0 left-0 w-full object-cover transform rotate-180"
    style={{
      width: "100%",
      objectFit: "fill",
    }}
  />
</section> */}

    </>
  );
};

export default About;
