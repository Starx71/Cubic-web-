
import { useEffect, useRef, useState } from 'react';

const AnimatedCubes = () => {
    const sceneRef = useRef<HTMLCanvasElement>(null);
    const animationFrameRef = useRef<number>();
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = sceneRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const numCubes = 25; // Slightly more cubes
        const cubes: {
            x: number;
            y: number;
            z: number;
            size: number;
            color: string;
            speedX: number;
            speedY: number;
            opacity: number; // Added opacity
            pulseSpeed: number; // Added pulse speed
            pulsePhase: number; // Added pulse phase
        }[] = [];

        const colors = ['#86efac', '#60a5fa', '#f9a8d4', '#fca5a5', '#fef08a']; // Lighter, pastel colors

        for (let i = 0; i < numCubes; i++) {
            cubes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                z: Math.random() * 300 - 150, // Increased Z-depth for more pronounced 3D
                size: Math.random() * 25 + 15, // Slightly larger cubes
                color: colors[Math.floor(Math.random() * colors.length)],
                speedX: (Math.random() - 0.5) * 2,
                speedY: (Math.random() - 0.5) * 2,
                opacity: Math.random() * 0.5 + 0.5, // Initial opacity between 0.5 and 1
                pulseSpeed: Math.random() * 0.02 + 0.01, // Slower pulse speed
                pulsePhase: Math.random() * Math.PI * 2, // Random initial phase
            });
        }

        const drawCubes = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (const cube of cubes) {
                // Simulate perspective
                const depthFactor = 1 - cube.z / 400; // Adjusted divisor for depth effect
                const size = cube.size * depthFactor;
                const x = cube.x + (canvas.width / 2 - cube.x) * (1 - depthFactor) * 0.5;
                const y = cube.y + (canvas.height / 2 - cube.y) * (1 - depthFactor) * 0.5;

                // Calculate pulsing opacity
                const pulse = Math.sin(cube.pulsePhase + Date.now() * cube.pulseSpeed);
                const dynamicOpacity = cube.opacity * (0.8 + 0.2 * pulse); // Opacity varies between 0.6 and 1.0

                ctx.fillStyle = cube.color;
                ctx.globalAlpha = dynamicOpacity; // Apply dynamic opacity
                ctx.fillRect(x - size / 2, y - size / 2, size, size);

                // 3D effect - top face (lighter)
                const topColor = `hsl(${cube.color.match(/\d+/g)?.join(',')}, 70%, 90%)`; // Lightest
                ctx.fillStyle = topColor;
                ctx.beginPath();
                ctx.moveTo(x - size / 2, y - size / 2);
                ctx.lineTo(x - size / 2 + size * 0.3, y - size / 2 - size * 0.3);
                ctx.lineTo(x + size / 2 + size * 0.3, y - size / 2 - size * 0.3);
                ctx.lineTo(x + size / 2, y - size / 2);
                ctx.closePath();
                ctx.fill();

                // 3D effect - right face (darker)
                const rightColor = `hsl(${cube.color.match(/\d+/g)?.join(',')}, 60%, 70%)`; // Medium
                ctx.fillStyle = rightColor;
                ctx.beginPath();
                ctx.moveTo(x + size / 2, y - size / 2);
                ctx.lineTo(x + size / 2 + size * 0.3, y - size / 2 - size * 0.3);
                ctx.lineTo(x + size / 2 + size * 0.3, y + size / 2 - size * 0.3);
                ctx.lineTo(x + size / 2, y + size / 2);
                ctx.closePath();
                ctx.fill();
                ctx.globalAlpha = 1.0; // Reset opacity
            }
        };

        const updateCubes = () => {
            for (const cube of cubes) {
                cube.x += cube.speedX;
                cube.y += cube.speedY;

                if (cube.x > canvas.width + cube.size / 2) cube.x = -cube.size / 2;
                if (cube.x < -cube.size / 2) cube.x = canvas.width + cube.size / 2;
                if (cube.y > canvas.height + cube.size / 2) cube.y = -cube.size / 2;
                if (cube.y < -cube.size / 2) cube.y = canvas.height + cube.size / 2;
            }
        };

        const animate = () => {
            updateCubes();
            drawCubes();
            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                for (const cube of cubes) {
                    cube.x = Math.random() * canvas.width;
                    cube.y = Math.random() * canvas.height;
                }
                drawCubes();
            }
        };

        const handleMouseMove = (event: MouseEvent) => {
            if (canvas) {
                const rect = canvas.getBoundingClientRect();
                setMousePos({
                    x: event.clientX - rect.left,
                    y: event.clientY - rect.top,
                });
            }
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={sceneRef}
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
                backgroundColor: '#f0f0f0', // Light background
            }}
        />
    );
};

export default AnimatedCubes;
