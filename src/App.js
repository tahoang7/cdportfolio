import React, { useEffect } from 'react';
import './App.css';

function App() {
    useEffect(() => {
        const canvas = document.getElementById('logoCanvas');
        const ctx = canvas.getContext('2d');

        // Set canvas size to fill the entire viewport
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Draw background
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw circle
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = Math.min(centerX, centerY) * 0.8; // Adjust radius for better fitting

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = '#f0db4f';
        ctx.lineWidth = 8;
        ctx.stroke();

        // Draw "TH" text with 3x bigger font size and color #5DDE65
        ctx.font = 'bold 180px Arial'; // Increased font size
        ctx.fillStyle = '#5DDE65'; // New color
        const textWidth = ctx.measureText('TH').width;
        const textX = centerX - textWidth / 2;
        const textY = centerY + 70; // Adjust vertical position for better fitting
        ctx.fillText('TH', textX, textY);
    }, []);

    return (
        <canvas id="logoCanvas" style={{ display: 'block' }}></canvas>
    );
}

export default App;