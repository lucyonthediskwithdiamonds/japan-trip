import { useEffect, useRef } from 'react'

const PETAL_COLORS = ['#ffb7c5', '#ffc8d4', '#ffaabe', '#f9a8d4', '#fda4af', '#fbb6ce']

export default function CherryBlossoms({ count = 18 }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    for (let i = 0; i < count; i++) {
      const petal = document.createElement('div')
      petal.className = 'petal'

      const size = Math.random() * 14 + 8
      const left = Math.random() * 100
      const duration = Math.random() * 8 + 7
      const delay = Math.random() * 12
      const color = PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)]
      const rotate = Math.random() * 360

      petal.style.cssText = `
        left: ${left}%;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        animation: sakura-fall ${duration}s ${delay}s linear infinite;
        transform: rotate(${rotate}deg);
        opacity: 0;
        border-radius: 150% 0 150% 0;
      `

      container.appendChild(petal)
    }

    return () => {
      while (container.firstChild) container.removeChild(container.firstChild)
    }
  }, [count])

  return <div className="petal-container" ref={containerRef} />
}
