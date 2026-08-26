import { useRef, useEffect, useState } from "react";
import "./AutoCarousel.css";

export default function AutoCarousel({
  images,
  className = "",
  imageClassName = "",
}) {
  const scrollRef = useRef(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    let animationId;
    const scroll = () => {
      if (scrollRef.current && !isInteracting && !isDragging) {
        scrollRef.current.scrollLeft += 1;
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft -= scrollRef.current.scrollWidth / 2;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };
    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isInteracting, isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsInteracting(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast

    let newScrollLeft = scrollLeft - walk;

    // Seamless loop while dragging backwards
    if (newScrollLeft <= 0) {
      newScrollLeft += scrollRef.current.scrollWidth / 2;
    }

    scrollRef.current.scrollLeft = newScrollLeft;
  };

  return (
    <div
      className={`auto-carousel ${className}`}
      ref={scrollRef}
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={handleMouseLeave}
      onTouchStart={() => setIsInteracting(true)}
      onTouchEnd={() => setIsInteracting(false)}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {[...images, ...images].map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`carousel item ${i}`}
          className={`carousel-image ${imageClassName}`}
        />
      ))}
    </div>
  );
}
