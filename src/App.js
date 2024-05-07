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
        ctx.strokeStyle = '#5DDE89';
        ctx.lineWidth = 8;
        ctx.stroke();

        // Draw "TH" text
        ctx.font = 'bold 60px Arial'; // Adjust font size for better fitting
        ctx.fillStyle = '#5DDE89';
        const textWidth = ctx.measureText('TH').width;
        const textX = centerX - textWidth / 2;
        const textY = centerY + 20; // Adjust vertical position for better fitting
        ctx.fillText('TH', textX, textY);
    }, []);

    return (
        <canvas id="logoCanvas" style={{ display: 'block' }}></canvas>
    );
}

export default App;
