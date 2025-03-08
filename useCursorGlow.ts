import { useEffect } from 'react';

export function useCursorGlow() {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-glow';
    document.body.appendChild(cursor);

    const updateCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX - cursor.offsetWidth / 2 + 'px';
      cursor.style.top = e.clientY - cursor.offsetHeight / 2 + 'px';
    };

    window.addEventListener('mousemove', updateCursor);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      document.body.removeChild(cursor);
    };
  }, []);
}
