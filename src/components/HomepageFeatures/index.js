import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import { ShieldCheck, Lock, Users } from "lucide-react"; // Modern icons

const FeatureList = [
  {
    title: "Scam Prevention Tools",
    icon: <ShieldCheck size={48} color="#ff6b6b" />,
    description: (
      <>
        Topay Foundation provides cutting-edge tools and strategies to protect users from crypto scams, ensuring safer digital interactions.
      </>
    ),
  },
  {
    title: "Quantum Threat Defense",
    icon: <Lock size={48} color="#4f46e5" />,
    description: (
      <>
        We are leading the way in addressing quantum threats to the crypto industry, developing robust solutions for a future-proof digital ecosystem.
      </>
    ),
  },
  {
    title: "Community Collaboration",
    icon: <Users size={48} color="#10b981" />,
    description: (
      <>
        Our foundation thrives on a strong community, bringing together experts, developers, and enthusiasts to fight scams and quantum threats.
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
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
