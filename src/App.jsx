import Banner from './components/Banner.jsx'

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top rotating GIF banner */}
      <Banner height={320} />

      {/* Main page content */}
      <main style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Arial, sans-serif'
      }}>
        <h1>Elder Scrolls Gaol</h1>
      </main>
    </div>
  );
}
