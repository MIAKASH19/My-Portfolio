import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )

            .then(
                () => {
                    Swal.fire({
                        icon: "success",
                        title: "Message Sent!",
                        text: "Your message has been successfully sent.",
                        confirmButtonColor: "#6366f1",
                    });
                    formRef.current.reset();
                },
                (error) => {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong! Please try again later.",
                        confirmButtonColor: "#6366f1",
                    });
                    console.error(error);
                }
            );
    };

    return (
        <section
            id="contact"
            className="w-full py-20 bg-linear-to-r from-purple-50 to-indigo-50"
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Heading */}
                <motion.h2
                    className="text-4xl font-bold text-gray-900 mb-12 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Contact Me
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        className="flex flex-col gap-6"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-5xl font-semibold text-indigo-600 mb-4">
                            Get in Touch
                        </h3>
                        <div className="flex items-center gap-4">
                            <FaEnvelope className="text-indigo-600 text-xl" />
                            <span className="text-gray-700 text-lg">mszharul1990@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaPhone className="text-indigo-600 text-xl" />
                            <span className="text-gray-700 text-lg">+8801830144301</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaWhatsapp className="text-green-600 text-xl" />
                            <span className="text-gray-700 text-lg">+8801830144301</span>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        ref={formRef}
                        onSubmit={sendEmail}
                        className="bg-white shadow-lg rounded-2xl p-8 flex flex-col gap-4"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <input
                            type="text"
                            name="from_name"
                            placeholder="Your Name"
                            required
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <input
                            type="email"
                            name="from_email"
                            placeholder="Your Email"
                            required
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows={5}
                            required
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        ></textarea>
                        <button
                            type="submit"
                            className="mt-2 bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
                        >
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
