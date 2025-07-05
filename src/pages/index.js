import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { ArrowRight, BookOpen, Shield, Zap, Users, Globe } from 'lucide-react';

import styles from './index.module.css';

function HeroSection() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Build a safer crypto future with <span className={styles.highlight}>Topay Foundation</span>
            </h1>
            <p className={styles.heroDescription}>
              Comprehensive documentation and tools to protect against scams and quantum threats in the cryptocurrency ecosystem.
            </p>
            <div className={styles.heroActions}>
              <Link
                className={styles.primaryButton}
                to="/docs/getting-started/Introduction_to_Topay_Foundation">
                <BookOpen size={20} />
                Get Started
                <ArrowRight size={16} />
              </Link>
              <Link
                className={styles.secondaryButton}
                to="/docs/getting-started/Getting_Started_with_Topay_Foundation">
                Quick Start Guide
              </Link>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.featureGrid}>
              <div className={styles.featureCard}>
                <Shield className={styles.featureIcon} />
                <span>Scam Prevention</span>
              </div>
              <div className={styles.featureCard}>
                <Zap className={styles.featureIcon} />
                <span>Quantum Security</span>
              </div>
              <div className={styles.featureCard}>
                <Users className={styles.featureIcon} />
                <span>Community</span>
              </div>
              <div className={styles.featureCard}>
                <Globe className={styles.featureIcon} />
                <span>Global Impact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickNavSection() {
  const quickLinks = [
    {
      title: "Getting Started",
      description: "Learn the basics of crypto security and scam prevention",
      icon: <BookOpen size={24} />,
      link: "/docs/getting-started/Getting_Started_with_Topay_Foundation",
      color: "#0D7CE9"
    },
    {
      title: "Security Guide",
      description: "Comprehensive guide to protecting your digital assets",
      icon: <Shield size={24} />,
      link: "/docs/security/Crypto_Security_Fundamentals",
      color: "#15CFF1"
    },
    {
      title: "Quantum Threats",
      description: "Understanding and preparing for quantum computing risks",
      icon: <Zap size={24} />,
      link: "/docs/Quantum-threats-&-Scams/Quantum-Threats-in-Blockchain-Technology",
      color: "#252833"
    },
    {
      title: "Community",
      description: "Join our global network of security advocates",
      icon: <Users size={24} />,
      link: "/docs/community/Topay_Foundation_Community_Building_Basics",
      color: "#333333"
    }
  ];

  return (
    <section className={styles.quickNavSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Explore Our Documentation</h2>
          <p className={styles.sectionDescription}>
            Everything you need to understand and implement crypto security best practices
          </p>
        </div>
        <div className={styles.quickNavGrid}>
          {quickLinks.map((item, index) => (
            <Link key={index} to={item.link} className={styles.quickNavCard}>
              <div className={styles.quickNavIcon} style={{ color: item.color }}>
                {item.icon}
              </div>
              <div className={styles.quickNavContent}>
                <h3 className={styles.quickNavTitle}>{item.title}</h3>
                <p className={styles.quickNavDescription}>{item.description}</p>
              </div>
              <ArrowRight size={16} className={styles.quickNavArrow} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { number: "10,000+", label: "Scams Prevented" },
    { number: "50,000+", label: "Protected Users" },
    { number: "120+", label: "Countries" },
    { number: "99.9%", label: "Success Rate" }
  ];

  return (
    <section className={styles.statsSection}>
      <div className={styles.container}>
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to secure your crypto journey?</h2>
          <p className={styles.ctaDescription}>
            Join thousands of users who trust Topay Foundation for their crypto security needs.
          </p>
          <div className={styles.ctaActions}>
            <Link className={styles.primaryButton} to="/docs/getting-started/Introduction_to_Topay_Foundation">
              <BookOpen size={20} />
              Start Learning
              <ArrowRight size={16} />
            </Link>
            <Link className={styles.secondaryButton} to="/blog">
              Read Our Blog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Crypto Security Documentation`}
      description="Comprehensive documentation and tools to protect against scams and quantum threats in the cryptocurrency ecosystem.">
      <main className={styles.main}>
        <HeroSection />
        <QuickNavSection />
        <StatsSection />
        <CTASection />
      </main>
    </Layout>
  );
}
