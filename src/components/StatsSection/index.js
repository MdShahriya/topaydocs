import React from 'react';
import styles from './styles.module.css';
import { TrendingUp, Users, Shield, Globe, Award } from 'lucide-react';

const stats = [
  {
    icon: <Shield size={32} color="#0D7CE9" />,
    number: "10,000+",
    label: "Scams Prevented",
    description: "Malicious activities blocked"
  },
  {
    icon: <Users size={32} color="#15CFF1" />,
    number: "50,000+",
    label: "Protected Users",
    description: "Active community members"
  },
  {
    icon: <Globe size={32} color="#252833" />,
    number: "120+",
    label: "Countries",
    description: "Global reach and impact"
  },
  {
    icon: <Award size={32} color="#333333" />,
    number: "99.9%",
    label: "Success Rate",
    description: "Threat detection accuracy"
  }
];

function StatCard({ icon, number, label, description }) {
  return (
    <div className={styles.statCard}>
      <div className={styles.statIcon}>
        {icon}
      </div>
      <div className={styles.statNumber}>{number}</div>
      <div className={styles.statLabel}>{label}</div>
      <div className={styles.statDescription}>{description}</div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className={styles.statsGrid}>
          {stats.map((stat, idx) => (
            <StatCard key={idx} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}