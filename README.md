# Backend APIs for Patient, Pharmacy, and Appointment Management

This project is a backend solution built with Node.js and Express.js. It provides RESTful APIs to manage patient data, pharmacy orders, and appointment scheduling.

---

## Features

### 1. Patient API
- Retrieve a list of patients from mock data.
- **Endpoint**:  
  - `GET /api/patients`

### 2. Pharmacy Orders API
- Add, view, and delete pharmacy orders using an in-memory database.
- **Endpoints**:  
  - `POST /api/pharmacy/add`  
  - `GET /api/pharmacy`  
  - `DELETE /api/pharmacy/delete/:id`

### 3. Appointment API
- Create and retrieve appointments with validation to avoid overlaps.
- **Endpoints**:  
  - `POST /api/appointments/create`  
  - `GET /api/appointments`

---

## Installation and Usage

### Prerequisites
- **Node.js** (v14+)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/AgniprovoMandal/Custom-REST-Apis
   cd your-repo-name
2. Install the dependancies:
   ```bash
   npm install
3. Start the server:
   ```bash
   node index.js
4. Access the APIs at http://localhost:3000

