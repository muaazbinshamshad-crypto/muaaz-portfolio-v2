export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="wrap">
      <span>© {year} Muaaz Bin Shamshad</span>
      <span>Built with React + Vite</span>
    </footer>
  )
}
