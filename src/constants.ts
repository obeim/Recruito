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
      "Recruito has transformed our hiring process! We save countless hours each week. The quality of candidates has significantly improved since we started using Recruito.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Doe",
    role: "Recruiter, IT",
    feedback:
      "Recruito AI is a game-changer. It streamlined our entire workflow and helped us focus on quality over quantity.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "John Smith",
    role: "Manager, Sales",
    feedback:
      "I highly recommend Recruito AI. It’s intuitive and has made hiring so much easier.",
    image: "https://via.placeholder.com/150",
  },
];
