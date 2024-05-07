import React, { useEffect } from 'react';
import './App.css';

function App() {
    useEffect(() => {
        const canvas = document.getElementById('logoCanvas');
        const ctx = canvas.getContext('2d');

        // Draw background
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw "TH" text
        ctx.font = 'bold 120px Arial';
        ctx.fillStyle = '#f0db4f';
        ctx.fillText('TH', 120, 200);

        // Draw circle around text
        ctx.beginPath();
        ctx.arc(200, 200, 90, 0, Math.PI * 2);
        ctx.strokeStyle = '#f0db4f';
        ctx.lineWidth = 8;
        ctx.stroke();
    }, []); // Empty dependency array ensures useEffect runs only once after initial render

    return (
        <canvas id="logoCanvas" width="400" height="400"></canvas>
    );
}

export default App;