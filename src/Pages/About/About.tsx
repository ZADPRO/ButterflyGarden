import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./About.css";
import img2 from "../../assets/Contact/contact1.webp";
import img from "../../assets/About/HOME1_MOBILE.png";
import img1 from "../../assets/About/HOME1.png"

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

  const title = t("syllabusSection.title") as string;
  const description = t("syllabusSection.description") as string;
  const cards = t("syllabusSection.cards", { returnObjects: true }) as Card[];
  const points = t("aboutSection.points", { returnObjects: true }) as Point[];

  return (
    <>
      {/* Section 1: About Hero */}
      <section className="items-center justify-center mt-[-10px] lg:h-[600px] lg:mt-[-10px] w-full">
        <div className="w-full grid md:grid-cols-2 lg:bg-[#FFFBDB] lg:h-[600px] bg-[#E3E9A3] gap-0 items-center">
          {/* Desktop background (reduced height) */}
          <div
            className="hidden md:block h-[600px] order-2 md:order-1 w-full"
            style={{
              backgroundImage: `url('${img1}')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "20% center",
            }}
          />

          {/* Text content */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="order-1 md:order-2 flex flex-col justify-center mt-10 h-auto px-6 sm:px-10 lg:px-16 py-6"
          >
            <h1
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#5EA308] mt-10 italic leading-snug mb-0"
              style={{ fontFamily: "Inter, sans-serif", fontStyle: "italic" }}
            >
              {t("about.title")}
            </h1>
            <p
              className="text-[#555555] text-sm sm:text-base lg:text-lg mt-4 leading-relaxed mb-0 text-justify"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {t("about.tagline")}
            </p>
          </motion.div>

          {/* Mobile-only background image (reduced height) */}
          <div
            className="block md:hidden order-3 w-full min-h-[250px] mt-[-20px]"
            style={{
              backgroundImage: `url('${img}')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "20% center",
            }}
          />
        </div>
      </section>
      {/* Section 2: Syllabus / Cards */}
      <section className="relative py-16 bg-[#5EA308] overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto text-center px-6">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 italic"
            style={{ fontFamily: "Inter, sans-serif" }}>
            {title}
          </motion.h2>

          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-base sm:text-lg lg:text-xl text-[#FFFBDB] mb-10" style={{ fontFamily: "Inter, sans-serif" }}
          >
            {description}
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.8,
                }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="relative p-[2px] pb-[13px] rounded-3xl bg-gradient-to-r from-[#FDD253] to-[#B7FF5E]"
              >
                <div className="rounded-3xl bg-[#FFFBDB] p-8 h-full text-left">
                  <div className="text-4xl sm:text-5xl mb-4">{card.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#555555] mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base lg:text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                    {card.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: About Points */}
      <section className="relative py-20 bg-[#FFFBDB]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6">
          {/* Left - Image */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center"
          >
            <img
              src={img2}
              alt="Classroom"
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg object-contain drop-shadow-2xl"
            />
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-left" style={{ fontFamily: "Inter, sans-serif" }}
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#5EA308] italic mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
              {t("aboutSection.label")}
            </h1>
            <div className="space-y-6" style={{ fontFamily: "Inter, sans-serif" }}>
              {points.map((point, index) => (
                <div key={index}>
                  <h3 className="flex items-center text-lg sm:text-xl font-bold text-[#555555]">
                    <span
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-[#FDD253] to-[#B7FF5E] text-[#555555] font-bold mr-3"
                      style={{
                        fontFamily: "Times New Roman, sans-serif",
                      }}
                    >
                      {point.id}
                    </span>
                    {point.title}
                  </h3>
                  <p className="text-gray-600 mt-2 ml-12 mr-3 text-sm sm:text-base lg:text-lg text-justify">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
