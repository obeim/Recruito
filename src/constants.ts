export const navbarItems = ["Home", "Features", "Pricing", "Resources"];
export const logos = [
  { src: "clients/gsk-logo.png", alt: "GSK" },
  { src: "clients/ogilvy-logo.png", alt: "Ogilvy" },
  { src: "clients/intys-logo.png", alt: "Intys" },
  { src: "clients/linkedin-logo.png", alt: "LinkedIn" },
  { src: "clients/ogilvy-logo.png", alt: "Ogilvy" },
  { src: "clients/gsk-logo.png", alt: "GSK" },
  { src: "clients/ogilvy-logo.png", alt: "Ogilvy" },
];

export const features: Feature[] = [
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

interface Feature {
  title: string;
  description: string;
  imagePosition: "left" | "right";
  image: string;
}

interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export const benefits: Benefit[] = [
  {
    title: "Automate Processes",
    description:
      "Let Recruito handle resume screening, scheduling, and interviews so you can focus on strategic decisions.",
    icon: "benfits/icon1.svg", // Replace with your icon path
  },
  {
    title: "Provide Instant Information",
    description:
      "Quickly access relevant candidate data, ensuring no talent is overlooked in your search.",
    icon: "benfits/icon2.svg",
  },
  {
    title: "Make Data-Driven Decisions",
    description:
      "Utilize analytics to rank candidates based on key metrics, providing unbiased recommendations for your hiring team.",
    icon: "benfits/icon3.svg",
  },
];

interface Testimonial {
  name: string;
  role: string;
  feedback: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Alex Martin",
    role: "Company, HR",
    feedback:
      "Recruito has transformed our hiring process! We save countless hours each week The quality of candidates has significantly improved since we started using Recruito",
    image: "https://i.pravatar.cc/300",
  },
  {
    name: "Jane Doe",
    role: "Recruiter, IT",
    feedback:
      "Recruito has transformed our hiring process! We save countless hours each week The quality of candidates has significantly improved since we started using Recruito",
    image: "https://i.pravatar.cc/400",
  },
  {
    name: "John Smith",
    role: "Manager, Sales",
    feedback:
      "Recruito has transformed our hiring process! We save countless hours each week The quality of candidates has significantly improved since we started using Recruito",
    image: "https://i.pravatar.cc/500",
  },
  {
    name: "John Smith",
    role: "Manager, Sales",
    feedback:
      "Recruito has transformed our hiring process! We save countless hours each week The quality of candidates has significantly improved since we started using Recruito",
    image: "https://i.pravatar.cc/340",
  },
];

interface FAQItem {
  question: string;
  answer: string; // Markup string
}
export const faqItems: FAQItem[] = [
  {
    question: "What is an AI Agent?",
    answer: `
      <p>
        An AI agent is a software system that understands language, learns from data, and takes actions automatically to achieve specific goals.
        In the hiring world, an AI agent can review resumes, interact with candidates, and provide recommendations, all without manual oversight.
      </p>
      <ul>
        <li>Natural Language Processing to interpret resumes and candidate responses</li>
        <li>Adaptive Learning to improve accuracy and efficiency over time</li>
        <li>Task Automation to handle repetitive or time-consuming steps</li>
        <li>Data-Driven Insights for better predictions and decisions</li>
      </ul>
    `,
  },
  {
    question: "What are the Benefits of Using Recruito’s AI Agent?",
    answer: `
      <p>
        Using Recruito’s AI Agent helps streamline the hiring process, reduces time spent on manual tasks,
        enhances decision-making with data-driven insights, and improves the candidate experience.
      </p>
    `,
  },
  {
    question: "Next Steps?",
    answer: `
      <p>
        Contact us to learn more about implementing Recruito’s AI Agent into your hiring workflow.
        Get started today and see the difference!
      </p>
    `,
  },
];
