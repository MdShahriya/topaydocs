import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import { ShieldCheck, Lock, Users, Zap, Globe, Award } from "lucide-react";

const FeatureList = [
  {
    title: "Advanced Scam Prevention",
    icon: <ShieldCheck size={48} color="#0D7CE9" />,
    description: (
      <>
        Cutting-edge AI-powered tools and real-time monitoring systems that detect and prevent crypto scams before they can cause harm to users.
      </>
    ),
  },
  {
    title: "Quantum-Resistant Security",
    icon: <Lock size={48} color="#15CFF1" />,
    description: (
      <>
        Future-proof cryptographic solutions designed to withstand quantum computing threats, ensuring long-term security for digital assets.
      </>
    ),
  },
  {
    title: "Global Community Network",
    icon: <Users size={48} color="#252833" />,
    description: (
      <>
        A worldwide network of security experts, developers, and researchers collaborating to create a safer cryptocurrency ecosystem.
      </>
    ),
  },
];

function Feature({ title, description, icon }) {
  return (
    <div className="col col--4">
      <div className={clsx("text--center", styles.featureCard)}>
        <div className={styles.icon}>{icon}</div>
        <Heading as="h3" className={styles.featureTitle}>
          {title}
        </Heading>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresHeader}>
          <Heading as="h2" className={styles.featuresTitle}>
            Why Choose Topay Foundation?
          </Heading>
          <p className={styles.featuresSubtitle}>
            We're building the future of secure cryptocurrency through innovative technology, 
            community collaboration, and proactive threat prevention.
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
