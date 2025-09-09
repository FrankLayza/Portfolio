// "use client"

import { useEffect, useRef } from "react";

export default function GrainBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createGrain = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 255;
        const alpha = Math.random() * 0.1; // Low opacity for subtle effect

        data[i] = noise; // Red
        data[i + 1] = noise; // Green
        data[i + 2] = noise; // Blue
        data[i + 3] = alpha * 255; // Alpha
      }

      ctx.putImageData(imageData, 0, 0);
    };

    const getValidColor = (cssColor, fallback = "#000000") => {
      // Create a temporary element to test if the color is valid
      const tempElement = document.createElement("div");
      tempElement.style.color = cssColor;
      document.body.appendChild(tempElement);
      const computedColor = getComputedStyle(tempElement).color;
      document.body.removeChild(tempElement);
      // Return computed color if valid, else fallback
      return computedColor === "rgb(0, 0, 0)" && cssColor !== "rgb(0, 0, 0)"
        ? fallback
        : computedColor;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Get computed CSS custom property values
      const computedStyle = getComputedStyle(document.documentElement);
      const backgroundColorRaw = computedStyle.getPropertyValue("--background").trim();
      const mutedColorRaw = computedStyle.getPropertyValue("--muted").trim();

      // Convert to Canvas-compatible colors
      const backgroundColor = getValidColor(`hsl(${backgroundColorRaw})`, "hsl(0, 0%, 100%)");
      const mutedColor = getValidColor(`hsl(${mutedColorRaw} / 0.3)`, "hsl(0, 0%, 90%)");

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, backgroundColor);
      gradient.addColorStop(0.5, mutedColor);
      gradient.addColorStop(1, backgroundColor);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add grain effect
      createGrain();

      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{
        background: `
          radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, hsl(var(--accent) / 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, hsl(var(--secondary) / 0.1) 0%, transparent 50%)
        `,
      }}
    />
  );
}