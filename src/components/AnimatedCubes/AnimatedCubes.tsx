import { useEffect, useRef, useState, useCallback } from 'react';

const AnimatedCubes = () => {
    const sceneRef = useRef<HTMLCanvasElement>(null);
    const animationFrameRef = useRef<number>();
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const cubesRef = useRef<any[]>([]);

    const drawCubes = useCallback((ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (const cube of cubesRef.current) {
            const depthFactor = 1 - cube.z / 400;
            const size = cube.size * depthFactor;
            const x = cube.x + (canvas.width / 2 - cube.x) * (1 - depthFactor) * 0.5;
            const y = cube.y + (canvas.height / 2 - cube.y) * (1 - depthFactor) * 0.5;

            const pulse = Math.sin(cube.pulsePhase + Date.now() * cube.pulseSpeed);
            const dynamicOpacity = cube.opacity * (0.8 + 0.2 * pulse);

            ctx.fillStyle = cube.color;
            ctx.globalAlpha = dynamicOpacity;
            ctx.fillRect(x - size / 2, y - size / 2, size, size);

            // 3D effect - top face
            const topColor = `hsl(${cube.color.match(/\d+/g)?.join(',')}, 70%, 90%)`;
            ctx.fillStyle = topColor;
            ctx.beginPath();
            ctx.moveTo(x - size / 2, y - size / 2);
            ctx.lineTo(x - size / 2 + size * 0.3, y - size / 2 - size * 0.3);
            ctx.lineTo(x + size / 2 + size * 0.3, y - size / 2 - size * 0.3);
            ctx.lineTo(x + size / 2, y - size / 2);
            ctx.closePath();
            ctx.fill();

            // 3D effect - right face
            const rightColor = `hsl(${cube.color.match(/\d+/g)?.join(',')}, 60%, 70%)`;
            ctx.fillStyle = rightColor;
            ctx.beginPath();
            ctx.moveTo(x + size / 2, y - size / 2);
            ctx.lineTo(x + size / 2 + size * 0.3, y - size / 2 - size * 0.3);
            ctx.lineTo(x + size / 2 + size * 0.3, y + size / 2 - size * 0.3);
            ctx.lineTo(x + size / 2, y + size / 2);
            ctx.closePath();
            ctx.fill();
            ctx.globalAlpha = 1.0;
        }
    }, []);

    const updateCubes = useCallback((canvas: HTMLCanvasElement) => {
        for (const cube of cubesRef.current) {
            cube.x += cube.speedX;
            cube.y += cube.speedY;

            if (cube.x > canvas.width + cube.size / 2) cube.x = -cube.size / 2;
            if (cube.x < -cube.size / 2) cube.x = canvas.width + cube.size / 2;
            if (cube.y > canvas.height + cube.size / 2) cube.y = -cube.size / 2;
            if (cube.y < -cube.size / 2) cube.y = canvas.height + cube.size / 2;
        }
    }, []);

    const animate = useCallback((ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
        updateCubes(canvas);
        drawCubes(ctx, canvas);
        animationFrameRef.current = requestAnimationFrame(() => animate(ctx, canvas));
    }, [drawCubes, updateCubes]);

    useEffect(() => {
        const canvas = sceneRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const numCubes = 25;
        const colors = ['#86efac', '#60a5fa', '#f9a8d4', '#fca5a5', '#fef08a'];

        cubesRef.current = Array.from({ length: numCubes }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            z: Math.random() * 300 - 150,
            size: Math.random() * 25 + 15,
            color: colors[Math.floor(Math.random() * colors.length)],
            speedX: (Math.random() - 0.5) * 2,
            speedY: (Math.random() - 0.5) * 2,
            opacity: Math.random() * 0.5 + 0.5,
            pulseSpeed: Math.random() * 0.02 + 0.01,
            pulsePhase: Math.random() * Math.PI * 2,
        }));

        animate(ctx, canvas);

        const handleResize = () => {
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                cubesRef.current.forEach(cube => {
                    cube.x = Math.random() * canvas.width;
                    cube.y = Math.random() * canvas.height;
                });
                drawCubes(ctx, canvas);
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
    }, [animate, drawCubes]);

    return (
        <canvas
            ref={sceneRef}
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
                backgroundColor: '#f0f0f0',
            }}
        />
    );
};

export default AnimatedCubes;
