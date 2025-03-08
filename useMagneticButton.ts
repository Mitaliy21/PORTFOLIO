import { useRef, useEffect } from 'react';

export function useMagneticButton() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = button.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      
      const centerX = width / 2;
      const centerY = height / 2;
      
      const deltaX = x - centerX;
      const deltaY = y - centerY;
      
      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
      const maxDistance = Math.sqrt((width / 2) ** 2 + (height / 2) ** 2);
      
      const strength = 0.5;
      const normalizedX = (deltaX / maxDistance) * strength;
      const normalizedY = (deltaY / maxDistance) * strength;
      
      button.style.transform = `translate(${normalizedX * 30}px, ${normalizedY * 30}px)`;
    };

    const handleMouseLeave = () => {
      button.style.transform = 'translate(0, 0)';
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return buttonRef;
}
