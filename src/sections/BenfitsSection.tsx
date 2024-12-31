import React from "react";

interface Benefit {
  title: string;
  description: string;
  icon: string;
}

const benefits: Benefit[] = [
  {
    title: "Automate Processes",
    description:
      "Let Recruito handle resume screening, scheduling, and interviews so you can focus on strategic decisions.",
    icon: "path/to/automate-icon.svg", // Replace with your icon path
  },
  {
    title: "Provide Instant Information",
    description:
      "Quickly access relevant candidate data, ensuring no talent is overlooked in your search.",
    icon: "path/to/information-icon.svg",
  },
  {
    title: "Make Data-Driven Decisions",
    description:
      "Utilize analytics to rank candidates based on key metrics, providing unbiased recommendations for your hiring team.",
    icon: "path/to/data-driven-icon.svg",
  },
];

const BenefitsSection: React.FC = () => {
  return (
    <div className="bg-gray-900 py-16 px-4 sm:px-8 lg:px-16 text-white">
      <div className="text-center mb-12">
        <p className="text-teal-400 text-sm font-medium uppercase">Benefits</p>
        <h2 className="text-3xl font-bold">
          Unlock the advantages of using Recruito AI for your hiring needs.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-center mb-4">
              <img
                src={benefit.icon}
                alt={benefit.title}
                className="h-12 w-12 text-teal-400"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
            <p className="text-gray-400">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;
