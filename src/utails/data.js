import apdaptable from "../assets/logo/apdaptable.png";
import cutting from "../assets/logo/cutting.svg";
import focused from "../assets/logo/focused.png";
import fullSuite from "../assets/logo/full_suite.svg";
import ready from "../assets/logo/ready.png";
import safe from "../assets/logo/safe.png";
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

const SliderContent = [
  {
    id: 1,
    tags: "Customer focused",
    title: "Purpose-built financial services",
    description:
      "Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.",
    motive:
      "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
    images: focused,
  },
  {
    id: 2,
    tags: "Agile and adaptable",
    title: "Agile and adaptable for growth",
    description:
      "Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.",
    motive:
      "Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.",
    images: apdaptable,
  },
  {
    id: 3,
    tags: "Compliance ready",
    title: "Manage compliance with ease",
    description:
      "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.",
    motive:
      "Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.",
    images: ready,
  },
  {
    id: 4,
    tags: "Secure and safe",
    title: "Highly secure and safe",
    description:
      "Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.",
    motive:
      "Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.",

    images: safe,
  },
];
export { languages, philosophy, SliderContent };
