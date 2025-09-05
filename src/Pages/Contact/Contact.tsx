import React, { useState } from "react";
import { LocationEdit, Mail, Phone } from "lucide-react";
import img1 from '../../assets/About/HOME1.png'
// import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import img from "../../assets/About/HOME1_MOBILE.png";

const Contact: React.FC = () => {
  const { t } = useTranslation("global");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, subject, message } = formData;

    const mailto = `https://mail.google.com/mail/?view=cm&fs=1&to=mavenacademy.switzerland@gmail.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    )}`;
    window.open(mailto, "_blank");
  };

  // Animation variants - all slide from left to right
  const slideIn = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="bg-[#fefdf8]">
      {/* HERO SECTION */}
      <section className="min-h-[70vh] flex items-center justify-center mt-[-10px] lg:mt-[-10px] w-full">
  <div className="w-full grid md:grid-cols-2 lg:bg-[#FFFBDB] bg-[#E3E9A3]  gap-0 items-center">

    {/* Desktop background (unchanged) */}
    <div
      className="hidden md:block h-[700px] order-2 md:order-1 w-full"
      style={{
        backgroundImage: `url('${img1}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "20% center",
      }}
    />

    {/* Text content (always first on mobile, second on desktop) */}
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true, amount: 0.3 }}
      className="order-1 md:order-2 flex flex-col justify-center mt-20 h-auto px-6 sm:px-10 lg:px-20 py-10"
    >
      <h1
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#5EA308] italic leading-snug"
        style={{ fontFamily: "Inter, sans-serif", fontStyle: "italic" }}
      >
       {t("contac.contactTitle")}
      </h1>
      <p
        className="text-[#555555] text-base sm:text-lg lg:text-xl mt-5 leading-relaxed mb-0 text-justify"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
         {t("contac.line1")}
      </p>
    </motion.div>

    {/* Mobile-only background image (new) */}
    <div
      className="block md:hidden  order-3 w-full min-h-[400px] mt-[-42px]"
      style={{
        backgroundImage: `url('${img}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "20% center", // shifts image toward the right
      }}
    />
  </div>
</section>

      {/* CONTACT FORM & CARDS */}
      <section className="py-12 sm:py-16 bg-[#5EA308]">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {/* LEFT: FORM */}
          <motion.div
            variants={slideIn}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 italic"style={{ fontFamily: "Inter, sans-serif", fontStyle: "italic" }}>
              {t("contact.contactTitle")}
            </h2>
            <p className="text-white mb-8 text-sm sm:text-base lg:text-lg" style={{ fontFamily: "Inter, sans-serif", fontSize: "20px" }}>
              {t("contact.contactSubtitle")}
            </p>

            <form
              className="space-y-4 text-[#FFFBDB]"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="name"
                onChange={handleChange}
                placeholder={t("contact.form.name")}
                className="w-full border border-[#FFFBDB] bg-transparent rounded-lg p-3 text-sm sm:text-base placeholder-[#FFFBDB]"
              />
              <input
                type="email"
                name="email"
                onChange={handleChange}
                placeholder={t("contact.form.email")}
                className="w-full border border-[#FFFBDB] bg-transparent rounded-lg p-3 text-sm sm:text-base placeholder-[#FFFBDB]"
              />
              <input
                type="text"
                name="subject"
                onChange={handleChange}
                placeholder={t("contact.form.subject")}
                className="w-full border border-[#FFFBDB] bg-transparent rounded-lg p-3 text-sm sm:text-base placeholder-[#FFFBDB]"
              />
              <textarea
                name="message"
                onChange={handleChange}
                rows={4}
                placeholder={t("contact.form.message")}
                className="w-full border border-[#FFFBDB] bg-transparent rounded-lg p-3 text-sm sm:text-base placeholder-[#FFFBDB]"
              ></textarea>
              <button
                type="submit"
                className="bg-gradient-to-r from-[#FDD253] to-[#B7FF5E] text-[#555555] px-6 py-3 rounded-lg w-full sm:w-auto"
              >
                {t("contact.form.button")}
              </button>
            </form>
          </motion.div>

          {/* RIGHT: CARDS */}
          <div className="flex flex-col gap-6"style={{ fontFamily: "Inter, sans-serif" }}>
            {[ 
              {
                icon: <Mail className="text-[#555] w-6 h-6" />,
                title: t("contact.cardEmailTitle"),
                text: t("contact.cardEmailText"),
              },
              {
                icon: <Phone className="text-[#555] w-6 h-6" />,
                title: t("contact.cardPhoneTitle"),
                text: t("contact.cardPhoneText"),
              },
              {
                icon: <LocationEdit className="text-[#555] w-6 h-6" />,
                title: t("contact.cardAddressTitle"),
                text: "",
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                variants={slideIn}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative p-[2px] rounded-3xl bg-gradient-to-r from-[#FDD253] to-[#B7FF5E]"
              >
                <div className="bg-[#FFFBDB] rounded-3xl p-6 h-full text-center">
                  <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-[#FDD253] to-[#B7FF5E]">
                    {card.icon}
                  </div>
                  <h4 className="mt-4 text-lg sm:text-xl font-bold text-[#555555]">
                    {card.title}
                  </h4>
                  {card.text && (
                    <p className="text-gray-600 text-sm sm:text-base mt-2">
                      {card.text}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
