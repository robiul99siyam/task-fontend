import apdaptable from "../assets/logo/apdaptable.png";
import bank1 from "../assets/logo/bank image/bank1.png";
import bank10 from "../assets/logo/bank image/bank10.png";
import bank11 from "../assets/logo/bank image/bank11.png";
import bank12 from "../assets/logo/bank image/bank12.png";
import bank13 from "../assets/logo/bank image/bank13.png";
import bank14 from "../assets/logo/bank image/bank14.png";
import bank15 from "../assets/logo/bank image/bank15.png";
import bank2 from "../assets/logo/bank image/bank2.png";
import bank3 from "../assets/logo/bank image/bank3.png";
import bank4 from "../assets/logo/bank image/bank4.png";
import bank5 from "../assets/logo/bank image/bank5.png";
import bank6 from "../assets/logo/bank image/bank6.png";
import bank7 from "../assets/logo/bank image/bank7.png";
import bank8 from "../assets/logo/bank image/bank8.png";
import bank9 from "../assets/logo/bank image/bank9.png";
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

const bankImageData = [
  { id: 1, image: bank1 },
  { id: 2, image: bank2 },
  { id: 3, image: bank3 },
  { id: 4, image: bank4 },
  { id: 5, image: bank5 },
  { id: 6, image: bank6 },
  { id: 7, image: bank7 },
  { id: 8, image: bank8 },
  { id: 9, image: bank9 },
  { id: 10, image: bank10 },
  { id: 11, image: bank11 },
  { id: 12, image: bank12 },
  { id: 13, image: bank13 },
  { id: 14, image: bank14 },
  { id: 15, image: bank15 },
];

export { bankImageData, languages, philosophy, SliderContent };
