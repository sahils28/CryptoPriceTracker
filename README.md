## Crypto Price Tracker

A **Next.js** web application that displays **live cryptocurrency prices** using the **CoinGecko API**. The project also supports **search functionality**, **price trend visualization**, and a **responsive UI**.

---

## 📂 Project Structure

```
CryptoPriceTracker/
│── web-app/                  # Next.js Application
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   ├── hooks/             # Custom React hooks for API fetching
│   │   ├── pages/             # Next.js pages
│   │   ├── styles/            # Global CSS styles
│   ├── public/                # Static assets (images, background patterns)
│   ├── next.config.js         # Next.js configuration
│   ├── package.json           # Dependencies & scripts
│   ├── server.js              # Custom Node.js server
│   ├── README.md              # Project documentation
├── docs/                      # Docusaurus Documentation
│   ├── docs/
│   │   ├── api-integration.md # API integration details
│   │   ├── state-management.md# Explanation of React Query usage
│   │   ├── challenges.md      # Challenges & solutions
│   ├── docusaurus.config.js   # Docusaurus configuration
│   ├── package.json           # Dependencies for documentation
│   ├── README.md              # Docs-specific ReadMe
```

---

##  Features

✔ **Live Crypto Prices:** Fetches real-time cryptocurrency data using the **CoinGecko API**.  
✔ **Search Functionality:** Instantly search for any cryptocurrency.  
✔ **Price Trend Visualization:** Displays historical price trends using **Chart.js**.  
✔ **Manual Refresh Button:** Refresh prices on demand.  
✔ **React Query for State Management:** Optimized data fetching and caching.  
✔ **Styled UI:** Responsive design using **custom CSS styles**.  
✔ **Docusaurus for Documentation:** A developer-friendly documentation site.  

---

## 🚀 How to Run the Project

### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/your-username/CryptoPriceTracker.git
cd CryptoPriceTracker/web-app
```

### 2️⃣ **Install Dependencies**
```sh
npm install
```

### 3️⃣ **Run the Development Server**
```sh
npm run dev
```
Now visit **`http://localhost:3000`** to view the application.

### 4️⃣ **Run the Documentation Site (Optional)**
If you want to run the **Docusaurus** documentation:
```sh
cd ../docs
npm install
npm run start
```
Now visit **`http://localhost:3001`** for the documentation.

---

## 🛠 API Integration (CoinGecko)

The project fetches cryptocurrency data from **CoinGecko API**:

- **GET Market Data:**  
  `https://api.coingecko.com/api/v3/coins/markets`  
  **Params:** `vs_currency=usd`, `per_page=10`, `page=1`

- **GET Coin Details:**  
  `https://api.coingecko.com/api/v3/coins/{id}`  

- **GET Historical Prices:**  
  `https://api.coingecko.com/api/v3/coins/{id}/market_chart`  
  **Params:** `vs_currency=usd`, `days=7`

---

## 🎯 Future Enhancements

- Add multi-currency support.  
- Implement user authentication for personalized dashboards.  
- Introduce a dark mode toggle.  
- Improve performance optimizations.

