import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';

function App() {
    const [detection, setDetection] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDetection = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL || 'http://localhost:3000/api'}/detect-ddos`);
                setDetection(res.data);
                setError(null); // Clear error on successful fetch
            } catch (error) {
                console.error("Error fetching detection data:", error);
                setError("Failed to fetch detection data.");
            }
        };

        const interval = setInterval(fetchDetection, 5000); // Poll every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="App" style={{ textAlign: "center", padding: "20px" }}>
            <Helmet>
                <title>DDoS Detection Monitor</title>
            </Helmet>
            <h1>DDoS Detection Monitor</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {detection ? (
                <div>
                    <p>Entropy Value: {detection.entropy}</p>
                    <p>Is DDoS Attack: {detection.isDDoS ? "Yes" : "No"}</p>
                    {detection.isDDoS && (
                        <p style={{
                            color: "red",
                            fontWeight: "bold",
                            animation: "blink 1s step-end infinite"
                        }}>
                            Warning: Possible DDoS Attack!
                        </p>
                    )}
                </div>
            ) : (
                <p>Loading...</p>
            )}
            {/* Add CSS for blinking animation */}
            <style>
                {`
                    @keyframes blink {
                        50% {
                            opacity: 0;
                        }
                    }
                `}
            </style>
        </div>
    );
}

export default App;
