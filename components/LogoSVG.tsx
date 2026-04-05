export default function LogoSVG({ size = 30 }: { size?: number }) {
  const h = Math.round(size * 0.867)
  return (
    <svg viewBox="0 0 60 52" fill="none" width={size} height={h}>
      <polygon points="30,2 58,50 2,50" fill="none" stroke="#C0271A" strokeWidth="2.5"/>
      <polygon points="30,10 50,46 10,46" fill="none" stroke="#C0271A" strokeWidth="1" opacity="0.45"/>
      <line x1="10" y1="46" x2="20" y2="46" stroke="#C0271A" strokeWidth="2"/>
      <line x1="40" y1="46" x2="50" y2="46" stroke="#C0271A" strokeWidth="2"/>
      <circle cx="30" cy="30" r="5" fill="#C0271A"/>
    </svg>
  )
}
