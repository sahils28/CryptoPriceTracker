# 🚀 Crypto Price Tracker

A **Next.js** web application that displays live cryptocurrency prices using the **CoinGecko API**. The project also includes a **Docusaurus** documentation site.

## 📂 Project Structure
```
crypto-price-tracker/
├── web-app/  # Next.js Project
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── hooks/  # Custom hooks for API fetching
│   │   ├── pages/  # Next.js pages
│   │   ├── styles/  # Tailwind CSS global styles
│   ├── public/
│   ├── tailwind.config.js
│   ├── next.config.js
│   ├── package.json
│   ├── README.md
├── docs/  # Docusaurus Documentation
│   ├── docs/
│   │   ├── api-integration.md  # API integration details
│   │   ├── state-management.md  # Explanation of React Query
│   │   ├── challenges.md  # Challenges & solutions
│   ├── docusaurus.config.js
│   ├── package.json
│   ├── README.md
```

## ⚡ Features
- **Live Crypto Prices**: Fetches real-time cryptocurrency prices using the CoinGecko API.
- **Search Functionality**: Filter cryptocurrencies by name.
- **Manual Refresh Button**: Fetch the latest prices on demand.
- **React Query for State Management**: Efficient data fetching and caching.
- **Tailwind CSS for Styling**: Responsive and modern UI.
- **Docusaurus for Documentation**: Developer-friendly documentation site.
