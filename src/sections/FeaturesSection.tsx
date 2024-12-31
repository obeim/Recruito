import React from "react";
import { motion } from "framer-motion";

interface Feature {
  title: string;
  description: string;
  imagePosition: "left" | "right";
  image: string;
}

const features: Feature[] = [
  {
    title: "Candidate Sourcing & Job Posting",
    description:
      "Easily post jobs and source candidates for your positions with our intuitive and powerful recruitment platform.",
    imagePosition: "right",
    image: "features/candidate-sourcing-image.png", // Replace with your image path
  },
  {
    title: "Automated Resume Screening & Filtering",
    description:
      "Our AI-powered tools evaluate resumes, highlighting only the most relevant candidates to streamline your hiring process.",
    imagePosition: "left",
    image: "features/resume-screening-image.png",
  },
  {
    title: "Online Assessment",
    description:
      "Evaluate candidates' skills with job-related tests and behavioral evaluations. Transparent scores help make informed decisions.",
    imagePosition: "right",
    image: "features/online-assessment-image.png",
  },
  {
    title: "AI Video Interviews",
    description:
      "Streamline your hiring process with automated AI video interviews to assess communication and soft skills.",
    imagePosition: "left",
    image: "features/video-interviews-image.png",
  },
  {
    title: "Final Shortlist for the Line Manager",
    description:
      "Every step of the recruitment process is designed to provide your team with the best candidates, ready for final review.",
    imagePosition: "right",
    image: "features/final-shortlist-image.png",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <div className="py-16 max-w-[90%] lg:max-w-[80%] mx-auto mt-10">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="px-6 py-2 rounded-full text-darkBlue font-medium mx-auto border border-neutralGray inline-block">
          Features
        </div>
      </motion.div>
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 w-[90%] md:w-[80%] mx-auto">
          Streamline your recruitment with our advanced features
        </h2>
      </motion.div>
      <div className="space-y-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={`flex flex-col gap-12 lg:flex-row ${
              feature.imagePosition === "left" ? "lg:flex-row-reverse" : ""
            } items-center`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Text Content */}
            <div className="lg:w-1/2 p-6 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 w-[90%] md:w-[80%] mx-auto lg:mx-0">
                {feature.description}
              </p>
            </div>
            {/* Image */}
            <div className="lg:w-1/2 h-full flex justify-center">
              <motion.img
                src={feature.image}
                alt={feature.title}
                className="max-w-full rounded-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
