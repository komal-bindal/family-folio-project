import React, { useRef, useState, useEffect } from "react";

type DraggableContainerProps = {
  children: React.ReactNode;
};

const DraggableContainer: React.FC<DraggableContainerProps> = ({
  children,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scaleRef = useRef<number>(1);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [lastScale, setLastScale] = useState(1);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handlePinchMove = (event: TouchEvent) => {
      if (!event.scale) return;
      const newScale = Math.max(0.1, Math.min(lastScale * event.scale, 2));
      scaleRef.current = newScale;
      container.style.transform = `translate(${translateX}px, ${translateY}px) scale(${newScale})`;
    };

    container.addEventListener("touchmove", handlePinchMove);

    return () => {
      container.removeEventListener("touchmove", handlePinchMove);
    };
  }, [lastScale, translateX, translateY]);

  const handleMouseDown = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsDragging(true);
    setStartX(event.pageX);
    setStartY(event.pageY);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!isDragging) return;

    const deltaX = event.pageX - startX;
    const deltaY = event.pageY - startY;

    setTranslateX((prev) => prev + deltaX);
    setTranslateY((prev) => prev + deltaY);

    setStartX(event.pageX);
    setStartY(event.pageY);

    if (containerRef.current) {
      containerRef.current.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scaleRef.current})`;
    }
  };

  const handleZoomIn = () => {
    const newScale = Math.min(scaleRef.current + 0.1, 2);
    scaleRef.current = newScale;
    if (containerRef.current) {
      containerRef.current.style.transform = `translate(${translateX}px, ${translateY}px) scale(${newScale})`;
    }
  };

  const handleZoomOut = () => {
    const newScale = Math.max(scaleRef.current - 0.1, 0.2);
    scaleRef.current = newScale;
    if (containerRef.current) {
      containerRef.current.style.transform = `translate(${translateX}px, ${translateY}px) scale(${newScale})`;
    }
  };

  return (
    <div>
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="relative h-screen w-screen cursor-grab touch-none flex justify-center items-center"
        style={{
          transform: `translate(${translateX}px, ${translateY}px)  relative scale(${scaleRef.current})`,
        }}
      >
        {children}
      </div>
      <div className="absolute bottom-4 right-4 flex gap-2">
        <button
          onClick={handleZoomIn}
          className="p-2 bg-gray-700 text-white rounded shadow"
        >
          +
        </button>
        <button
          onClick={handleZoomOut}
          className="p-2 bg-gray-700 text-white rounded shadow"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default DraggableContainer;
