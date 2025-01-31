import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Scam Prevention Tools',
    description: (
      <>
        Topay Foundation provides cutting-edge tools and strategies to protect users from crypto scams, ensuring safer digital interactions.
      </>
    ),
  },
  {
    title: 'Quantum Threat Defense',
    description: (
      <>
        We are leading the way in addressing quantum threats to the crypto industry, developing robust solutions for a future-proof digital ecosystem.
      </>
    ),
  },
  {
    title: 'Community Collaboration',
    description: (
      <>
        Our foundation thrives on a strong community, bringing together experts, developers, and enthusiasts to fight scams and quantum threats.
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
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
