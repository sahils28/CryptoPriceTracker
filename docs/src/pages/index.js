import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

export default function Home() {
  return (
    <Layout title="Crypto Price Tracker" description="Real-time Cryptocurrency Data">
      <header className={styles.heroBanner}>
        <div className="container">
          <h1 className="hero__title">🚀 Crypto Price Tracker</h1>
          <p className="hero__subtitle">
            Get real-time cryptocurrency prices, market trends, and insights.
          </p>
          <div>
            <a className="button button--primary button--lg" href="/docs/setup-guide">
              📖 Get Started
            </a>
            <a className="button button--secondary button--lg" href="/docs/api-integration" style={{ marginLeft: "10px" }}>
              ⚡ API Documentation
            </a>
            <a className="button button--success button--lg" href="/docs/state-management" style={{ marginLeft: "10px" }}>
              🛠 State Management
            </a>
            <a className="button button--warning button--lg" href="/docs/challenges-solutions" style={{ marginLeft: "10px" }}>
              🚧 Challenges & Solutions
            </a>
          </div>
        </div>
      </header>
    </Layout>
  );
}