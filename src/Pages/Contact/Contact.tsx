import React, { useState } from "react";
import { LocationEdit, Mail, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import img from '../../assets/About/HOME1.png'
const Contact: React.FC = () => {
  const { t } = useTranslation("global");

  const socialLinks = [
    {
      name: t("contact.orbitFacebook"),
      icon: <FaFacebookF size={18} color="#1877F2" />,
      url: "https://facebook.com",
      borderColor: "#1877F2",
      angle: 0,
    },
    {
      name: t("contact.orbitInstagram"),
      icon: <FaInstagram size={18} color="#E4405F" />,
      url: "https://instagram.com",
      borderColor: "#E4405F",
      angle: 120,
    },
    {
      name: t("contact.orbitEmail"),
      icon: <FaEnvelope size={18} color="#0A66C2" />,
      url: "https://linkedin.com",
      borderColor: "#0A66C2",
      angle: 240,
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, subject, message } = formData;

    const mailto = `https://mail.google.com/mail/?view=cm&fs=1&to=mavenacademy.switzerland@gmail.com.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    )}`;
    window.open(mailto, "_blank");
    setShowSuccess(true);

    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="bg-[#fefdf8]">
    <section className="min-h-[70vh] flex items-center justify-center py- w-full">
  <div
    style={{
      backgroundImage: `url('${img}')`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "60% center", // Shift image slightly to the right
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
      transition={{ duration: 0.6, delay: 0.2 }}
      className="order-1 md:order-2 flex flex-col justify-center h-[700px] p-8"
      viewport={{ once: true, amount: 0.5 }}
    >
      <h1
        className="text-5xl font-extrabold text-[#5EA308]"
        style={{
          fontFamily: "Inter, sans-serif",
          fontStyle: "italic",
          paddingLeft: "140px",
          paddingRight: "140px",
          textAlign: "justify",
        }}
      >
        {t("contac.contactTitle")}
      </h1>
      <p
        className="text-[#555555] text-xl mt-5 ml-38 mr-10 leading-relaxed"
        style={{
          fontFamily: "Inter, sans-serif",
          paddingLeft: "px",
          paddingRight: "140px",
          textAlign: "justify",
        }}
      >
        {t("contac.line1")}
      </p>
    </motion.div>
  </div>
</section>

      <section className="py-16 bg-[#5EA308]">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4" style={{ fontFamily: "Inter, sans-serif", fontStyle: "italic" }}>
              {t("contact.contactTitle")}
            </h2>
            <p className="text-white mb-8 max-w-md text-sm sm:text-base" style={{ fontFamily: "Inter, sans-serif", fontSize: "20px" }}>
              {t("contact.contactSubtitle")}
            </p>

            <form className="space-y-5 text-[#FFFBDB]">
              <input
                type="text"
                placeholder={t("contact.form.name")}
                className="w-full border border-[#FFFBDB] bg-transparent rounded-lg p-3 text-[#FFFBDB] placeholder-[#FFFBDB] text-sm sm:text-base"
              />
              <input
                type="email"
                placeholder={t("contact.form.email")}
                className="w-full border border-[#FFFBDB] bg-transparent rounded-lg p-3 text-[#FFFBDB] placeholder-[#FFFBDB] text-sm sm:text-base"
              />
              <input
                type="text"
                placeholder={t("contact.form.subject")}
                className="w-full border border-[#FFFBDB] bg-transparent rounded-lg p-3 text-[#FFFBDB] placeholder-[#FFFBDB] text-sm sm:text-base"
              />
              <textarea
                rows={4}
                placeholder={t("contact.form.message")}
                className="w-full border border-[#FFFBDB] bg-transparent rounded-lg p-3 text-[#FFFBDB] placeholder-[#FFFBDB] text-sm sm:text-base"
              ></textarea>
              <button
                type="submit"
                className="bg-gradient-to-r from-[#FDD253] to-[#B7FF5E] text-[#555555] px-6 py-3 rounded-lg w-full sm:w-auto"
              >
                {t("contact.form.button")}
              </button>
            </form>

          </motion.div>

          {/* RIGHT SIDE CARDS WITH SAME GRADIENT BORDER */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-end gap-6 md:col-span-1 w-full md:w-auto"
          >
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="relative p-[2px] rounded-3xl bg-gradient-to-r from-[#FDD253] to-[#B7FF5E]"
            >
              <div className="bg-[#FFFBDB] rounded-3xl p-6 h-full text-center border-2 border-dashed border-transparent">
                <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-[#FDD253] to-[#B7FF5E]">
                  <Mail className="text-[#555] w-6 h-6" />
                </div>

                <h4 className="mt-4 text-xl font-bold text-[#555555]" style={{ fontFamily: "Inter, sans-serif" }}>
                  {t("contact.cardEmailTitle")}
                </h4>
                <p className="text-gray-600 text-sm mt-2 break-words" style={{ fontFamily: "Inter, sans-serif", fontSize: "19px" }}>
                  {t("contact.cardEmailText")}
                </p>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="relative p-[2px] rounded-3xl bg-gradient-to-r from-[#FDD253] to-[#B7FF5E]"
            >
              <div className="bg-[#FFFBDB] rounded-3xl p-6 h-full text-center border-2 border-dashed border-transparent">
                <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-[#FDD253] to-[#B7FF5E]">
                  <Phone className="text-[#555] w-6 h-6" />
                </div>
                <h4 className="mt-4 text-xl font-bold text-[#555555]" style={{ fontFamily: "Inter, sans-serif" }}>
                  {t("contact.cardPhoneTitle")}
                </h4>
                <p className="text-gray-600 text-sm mt-2" style={{ fontFamily: "Inter, sans-serif", fontSize: "19px" }}>
                  {t("contact.cardPhoneText")}
                </p>
              </div>
            </motion.div>
            {/* Address Card */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="relative p-[2px] rounded-3xl bg-gradient-to-r from-[#FDD253] to-[#B7FF5E]"
            >
              <div className="bg-[#FFFBDB] rounded-3xl p-6 h-full text-center border-2 border-dashed border-transparent">
                <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-[#FDD253] to-[#B7FF5E]">
                  <LocationEdit className="text-[#555] w-6 h-6" />
                </div>
                <h4 className="mt-4 text-xl font-bold text-[#555555]" style={{ fontFamily: "Inter, sans-serif" }}>
                  {t("contact.cardAddressTitle")}
                </h4>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
// -----------------------------------------
// =========================================
