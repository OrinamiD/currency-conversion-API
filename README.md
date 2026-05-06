# Currency Conversion API

## 📌 Overview

This project is a backend service that performs currency conversion using live exchange rates from an external API. It validates user input, fetches exchange rates, calculates the converted amount, stores the transaction in a database, and returns a structured response.

---

## 🚀 Features

* ✅ Clean REST API endpoint
* ✅ Input validation using Zod
* ✅ Integration with external exchange rate API
* ✅ Currency conversion logic
* ✅ MongoDB database storage
* ✅ Error handling for invalid inputs and API failures
* ✅ Clean architecture (Controller → Service → Repository)

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* TypeScript
* MongoDB (Mongoose)
* Zod (Validation)
* Axios (API calls)

---

## 📂 Project Structure

```
src/
│── config/          # Database configuration
│── modules/
│   └── conversion/
│       ├── conversion.controller.ts
│       ├── conversion.service.ts
│       ├── conversion.repository.ts
│       ├── conversion.model.ts
│       ├── conversion.schema.ts
│       └── conversion.routes.ts
│── middleware/      # Validation middleware
│── utils/           # External API client
│── index.ts         # App entry point
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone <your-repo-link>
cd currency-conversion
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Setup environment variables

Create a `.env` file in the root directory:

```env
PORT=8000
MONGODB_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/currencyDB
```

---

### 4. Run the application

```bash
npm run dev
```

Server will start at:

```
http://localhost:5000
```

---

## 🗄️ Database Setup

1. Create a MongoDB Atlas account: https://cloud.mongodb.com/
2. Create a new cluster (free tier is fine)
3. Add a database user (username & password)
4. Whitelist your IP (or use `0.0.0.0/0` for testing)
5. Copy your connection string into `.env`

---

## 🔌 API Endpoint

### Convert Currency

**POST** `/v1/api/convert`

---

### 📥 Request Body

```json
{
  "fromCurrency": "USD",
  "toCurrency": "NGN",
  "amount": 100
}
```

---

### 📤 Response

```json
{
  "data": {
    "fromCurrency": "USD",
    "toCurrency": "NGN",
    "amount": 100,
    "exchangeRate": 1373,
    "convertedAmount": 137300,
    "createdAt": "2026-05-06T10:30:00Z"
  }
}
```

---

## ❌ Error Handling

### Invalid Input

```json
{
  "errors": [
    {
      "field": "amount",
      "message": "Amount must be greater than 0"
    }
  ]
}
```

---

### Invalid Currency

```json
{
  "error": "Invalid toCurrency: XXX"
}
```

---

### External API Failure

```json
{
  "error": "Failed to fetch exchange rates"
}
```

---

## 🧪 Testing

### Manual Testing

Use Postman or Thunder Client:

* Method: `POST`
* URL: `http://localhost:8000/v1/api/convert`
* Headers:

  ```
  Content-Type: application/json
  ```
* Body:

```json
{
  "fromCurrency": "USD",
  "toCurrency": "NGN",
  "amount": 100
}
```

---

## ⚠️ Assumptions Made

* The external API provides exchange rates with USD as the base currency.
* Conversion is performed using the `buyValue` field from the API response.
* Only `USD` is supported as the source currency.
* Exchange rate API response structure remains consistent.

---

## 📌 Notes

* Ensure your MongoDB connection string is correct and accessible.
* If using special characters in your password, encode them (e.g., `@` → `%40`).
* Make sure your IP is whitelisted in MongoDB Atlas.

---


