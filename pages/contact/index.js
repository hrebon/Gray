import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Contact = () => {
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          {/* Heading */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-10"
          >
            Let&#39;s <span className="text-accent">connect.</span>
          </motion.h2>

          {/* Form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col gap-6 w-full mx-auto"
          >
            {/* Input Fields */}
            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="Name" className="input" />
              <input type="email" placeholder="Email" className="input" />
            </div>
            <input type="text" placeholder="Subject" className="input" />
            <textarea placeholder="Message" className="textarea" />

            {/* Submit Button */}
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group relative"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let&#39;s talk
              </span>
              <BsArrowRight className="absolute text-[22px] opacity-0 translate-y-[120%] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
