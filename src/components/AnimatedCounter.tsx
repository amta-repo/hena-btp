import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
  isText?: boolean;
  text?: string;
}

const AnimatedCounter = ({ end, suffix = "", prefix = "", duration = 2000, label, isText, text }: AnimatedCounterProps) => {
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

  return (
    <div ref={ref} className="px-4 py-4 sm:py-5 text-center">
      <p className="text-xl sm:text-2xl font-bold text-accent">
        {isText ? text : `${prefix}${count}${suffix}`}
      </p>
      <p className="text-xs sm:text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

export default AnimatedCounter;
