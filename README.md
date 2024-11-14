# DDoS Detection System

This project is a **Distributed Denial of Service (DDoS)** detection system that monitors incoming network traffic for suspicious patterns. It uses **entropy computation** to identify anomalies that may indicate a potential DDoS attack. The backend is built with **Node.js**, and **MongoDB** is used to store packet logs. The frontend is built using **React.js** and periodically fetches data from the backend to display the detection results.

## Features

- Logs network packets with **IP addresses** and timestamps.
- Computes entropy to identify unusual patterns that may signify a DDoS attack.
- Provides real-time DDoS detection and monitoring.
- Displays results with an **entropy value** and a **DDoS status** on the frontend.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (MongoDB Atlas)
- **DDoS Detection**: Entropy-based computation

## Getting Started

Follow these steps to run the project locally:

### Prerequisites

1. **Node.js**: Ensure that Node.js is installed on your system.
   - Download and install from [Node.js official website](https://nodejs.org/).

2. **MongoDB Atlas**: Create a MongoDB Atlas account and create a cluster.
   - Follow [MongoDB Atlas setup guide](https://www.mongodb.com/cloud/atlas).
   
3. **API Key**: Add your MongoDB Atlas connection URI in your project files.

### Clone the Repository

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/ddos-detection.git
   ```

2. Navigate into the project directory:

   ```bash
   cd ddos-detection
   ```

### Backend Setup

1. **Install dependencies**:

   ```bash
   cd backend
   npm install
   ```

2. **Set up MongoDB Atlas URI**:
   - In your `app.js` file, replace the MongoDB connection URI with your own Atlas URI.

3. **Run the backend server**:

   ```bash
   npm start
   ```

   The server will run on `http://localhost:3000`.

### Frontend Setup

1. **Install dependencies**:

   ```bash
   cd frontend
   npm install
   ```

2. **Run the frontend**:

   ```bash
   npm start
   ```

   The frontend will run on `http://localhost:3000`.

### Access the Application

- Visit `http://localhost:3000` in your browser to see the DDoS detection monitor in action. The page will show the entropy value and whether a potential DDoS attack is detected based on the incoming network traffic.

### Folder Structure

```
ddos-detection/
├── backend/
│   ├── models/
│   │   └── Packet.js          # MongoDB schema for packet logs
│   ├── routes/
│   │   └── detection.js       # API routes for DDoS detection
│   ├── app.js                 # Main backend entry point
│   ├── package.json           # Backend dependencies
├── frontend/
│   ├── src/
│   │   ├── App.js             # Main React component
│   │   ├── App.css            # Styling for the frontend
│   ├── package.json           # Frontend dependencies
├── .gitignore                 # Files to ignore in Git
├── README.md                  # This file
```

### Contributing

Feel free to fork this project, create an issue, or submit a pull request.

1. Fork the repository.
2. Create a feature branch:
   
   ```bash
   git checkout -b feature-name
   ```

3. Commit your changes:

   ```bash
   git commit -m "Add feature-name"
   ```

4. Push to the branch:

   ```bash
   git push origin feature-name
   ```

5. Create a pull request to merge into the `main` branch.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
