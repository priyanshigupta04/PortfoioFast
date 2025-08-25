// components/BackgroundFX.js
"use client";

import { useEffect, useRef } from 'react';

const BackgroundFX = () => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    const particleCount = 200;
    let mouse = { x: null, y: null };

    // Update mouse coordinates on movement
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      init();
    };
    window.addEventListener('resize', handleResize);

    // Particle constructor
    function Particle(x, y, directionX, directionY, size, color) {
      this.x = x;
      this.y = y;
      this.directionX = directionX;
      this.directionY = directionY;
      this.size = size;
      this.color = color;
    }

    // Draw method
    Particle.prototype.draw = function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();
    };

    // Update method
    Particle.prototype.update = function () {
      // Bounce off edges
      if (this.x > canvas.width || this.x < 0) {
        this.directionX = -this.directionX;
      }
      if (this.y > canvas.height || this.y < 0) {
        this.directionY = -this.directionY;
      }

      this.x += this.directionX;
      this.y += this.directionY;

      // Mouse interaction
      if (mouse.x && mouse.y) {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          this.size = 6;
        } else {
          this.size = 2;
        }
      }

      this.draw();
    };

    // Initialization
    function init() {
      for (let i = 0; i < particleCount; i++) {
        let size = Math.random() * 5 + 1;
        let x = Math.random() * (canvas.width - size * 2) + size;
        let y = Math.random() * (canvas.height - size * 2) + size;
        let directionX = Math.random() * 0.5 - 0.25;
        let directionY = Math.random() * 0.5 - 0.25;
        let color = `rgba(150, 100, 250, 0.4)`; // A subtle purple-blue
        particles.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }

    // Animation loop
    function animate() {
      animationFrameRef.current = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
    }

    init();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-80" />;
};

export default BackgroundFX;