import cutting from "../assets/logo/cutting.svg";
import fullSuite from "../assets/logo/full_suite.svg";
import samplify from "../assets/logo/samplify.png";

const languages = [
  { code: "EN", label: "(English)" },
  { code: "TH", label: "(Thai)" },
  { code: "ID", label: "(Bahasa Indonesia)" },
  { code: "TW", label: "(Traditional Chinese)" },
];

const philosophy = [
  {
    id: 1,
    title: "Full-suite solutions",
    description:
      "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
    image: fullSuite,
  },
  {
    id: 2,
    title: "Simplify the complex",
    description:
      "Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data",
    image: samplify,
  },
  {
    id: 3,
    title: "Cutting-edge tech",
    description:
      "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.",
    image: cutting,
  },
];
export { languages, philosophy };
