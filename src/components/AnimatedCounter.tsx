import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
  isText?: boolean;
  text?: string;
  bgColor?: "orange" | "gray";
}

const AnimatedCounter = ({ end, suffix = "", prefix = "", duration = 2000, label, isText, text, bgColor }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started || isText) return;
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, end, duration, isText]);

  const bgColorClass = bgColor === "orange" ? "bg-accent/10" : bgColor === "gray" ? "bg-gray-200" : "";
  
  return (
    <div 
      ref={ref} 
      className={`px-4 py-6 sm:py-8 text-center ${bgColorClass}`}
      style={{
        backgroundImage: bgColor ? "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.05) 10px, rgba(0,0,0,0.05) 20px)" : "none"
      }}
    >
      <p className="text-3xl sm:text-5xl font-extrabold" style={{ color: bgColor === "orange" ? "hsl(24 100% 50%)" : "rgb(107, 114, 128)" }}>
        {isText ? text : `${prefix}${count}${suffix}`}
      </p>
      <p className="text-xs sm:text-sm font-semibold text-muted-foreground mt-2">{label}</p>
    </div>
  );
};

export default AnimatedCounter;
