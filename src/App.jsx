import { useState } from 'react';
import coloring1 from './assets/coloring_page_1.png';
import coloring2 from './assets/coloring_page_2.png';
import coloring3 from './assets/coloring_page_3.png';

export default function App() {
  const [evilMode, setEvilMode] = useState(false);
  const [activeTab, setActiveTab] = useState('abby');

  const headerStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    background: evilMode ? '#1a0000' : '#ffffff',
    color: evilMode ? '#ffdddd' : '#222222',
    borderBottom: `1px solid ${evilMode ? '#330000' : '#e5e5e5'}`,
  };

  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: 1000,
    margin: '0 auto',
    padding: '12px 16px',
    gap: 12,
  };

  const menuStyle = {
    display: 'flex',
    gap: 16,
    listStyle: 'none',
    margin: 0,
    padding: 0,
    flexWrap: 'wrap',
  };

  const linkBase = {
    color: 'inherit',
    padding: '6px 10px',
    borderRadius: 6,
    fontWeight: 600,
    fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Arial, sans-serif',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
  };

  const linkStyle = (isActive) => ({
    ...linkBase,
    textDecoration: 'none',
    outline: 'none',
    boxShadow: isActive
      ? `inset 0 0 0 1px ${evilMode ? '#552222' : '#dddddd'}`
      : 'none',
    background: isActive ? (evilMode ? '#2a0000' : '#f5f5f5') : 'transparent',
  });

  const homeLinkStyle = (isActive) => ({
    ...linkStyle(isActive),
    padding: '6px 8px',
    fontWeight: 700,
    letterSpacing: '0.2px',
  });

  const toggleStyle = {
    cursor: 'pointer',
    border: '1px solid',
    borderColor: evilMode ? '#660000' : '#dddddd',
    background: evilMode ? '#2a0000' : '#f9f9f9',
    color: 'inherit',
    padding: '6px 10px',
    borderRadius: 8,
    fontWeight: 600,
  };

  const mainStyle = {
    maxWidth: 1000,
    margin: '0 auto',
    padding: '24px 16px',
    lineHeight: 1.6,
    color: evilMode ? '#ffdddd' : '#222',
    // Transparent in normal mode so the rainbow shows through; solid in evil mode for readability
    background: evilMode ? '#0d0000' : 'transparent',
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'abby':
        return (
          <section>
            <h1>Abby</h1>
            <p>Welcome! This is the Abby home tab. Use the menu to explore the site.</p>
          </section>
        );
      case 'party-info':
        return (
          <section>
            <h2>Party Info</h2>
            <p>Welcome! Add your party details here.</p>
            <div style={{
              background: evilMode ? '#1a0000' : '#fff',
              padding: 12,
              borderRadius: 8,
              border: `1px solid ${evilMode ? '#330000' : '#e5e5e5'}`,
              maxWidth: 900,
              marginTop: 12
            }}>
              <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
                <iframe
                  title="Party info video - autoplay"
                  src={`https://www.youtube.com/embed/01jdjzDWAMk?autoplay=1&playsinline=1&rel=0&modestbranding=1`}
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </section>
        );
      case 'shopping':
        return (
          <section>
            <h2>Shopping</h2>
            <p>Browse items we like. These links open on Amazon in a new tab.</p>

            {/* Shirts group */}
            <h3 style={{ marginTop: 16 }}>Shirts</h3>
            <div style={{ display: 'grid', gap: 16, maxWidth: 900 }}>
              {/* Shirt 1 */}
              <div style={{
                background: evilMode ? '#1a0000' : '#fff',
                padding: 12,
                borderRadius: 8,
                border: `1px solid ${evilMode ? '#330000' : '#e5e5e5'}`,
              }}>
                <h4 style={{ marginTop: 0, marginBottom: 8 }}>AIWUHE Kids Short Sleeve Crewneck Tee</h4>
                <p style={{ marginTop: 0, marginBottom: 12 }}>Simple crewneck t-shirt with heart theme options.</p>
                <a
                  href="https://www.amazon.com/AIWUHE-Short-Sleeve-T-Shirt-Toddler-Crewneck/dp/B0F2J6NTF7/ref=sr_1_10?crid=1PUAQYQ9K5G5Y&dib=eyJ2IjoiMSJ9.MOyfi2qOuHGe37TOH56v8WDE4zsJjvn5_yXnSdgFhNzPKjm9-Vce-4ej8IClzvtUPsFDqSLFy-IiwooAcSUMtQMLGWXpoowdf392lVVLpIiMo2-xVKQ628VKU7oyoafD6bMAYeHnVuE4BRnHLAhJGdhSCMZcQP5F8NuVFh0S27LPaptcCJQYH9JZwimlrPBF0sB3ClPz9TQGLzomwVz-UWRA0F0-p2omXrOYk4QOtPg6WI-2gvEYsD8352iwHNH324QtXk7e2VK-T7VfDGE_A9Abmw64k_SgN7n1slrAtsA.4401xmCT3PIGGUw1w4-qHJ8XZoeKtVop7E9oaa5PrwY&dib_tag=se&keywords=kids+t-shirts+hearts&qid=1755283818&sprefix=kids+t-shirts+hear%2Caps%2C213&sr=8-10"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View AIWUHE Kids Short Sleeve Crewneck Tee on Amazon"
                  style={{
                    textDecoration: 'none',
                    padding: '8px 12px',
                    borderRadius: 8,
                    border: `1px solid ${evilMode ? '#660000' : '#dddddd'}`,
                    background: evilMode ? '#2a0000' : '#f9f9f9',
                    color: 'inherit',
                    fontWeight: 600
                  }}
                >
                  View on Amazon
                </a>
              </div>

              {/* Shirt 2 */}
              <div style={{
                background: evilMode ? '#1a0000' : '#fff',
                padding: 12,
                borderRadius: 8,
                border: `1px solid ${evilMode ? '#330000' : '#e5e5e5'}`,
              }}>
                <h4 style={{ marginTop: 0, marginBottom: 8 }}>LittleSpring Valentines Kids T-Shirt</h4>
                <p style={{ marginTop: 0, marginBottom: 12 }}>Cute heart-themed tee for little ones.</p>
                <a
                  href="https://www.amazon.com/LittleSpring-Clothes-Tshirt-Little-Valentines/dp/B0BWDL79PB/ref=sr_1_9?crid=1PUAQYQ9K5G5Y&dib=eyJ2IjoiMSJ9.MOyfi2qOuHGe37TOH56v8WDE4zsJjvn5_yXnSdgFhNzPKjm9-Vce-4ej8IClzvtUPsFDqSLFy-IiwooAcSUMtQMLGWXpoowdf392lVVLpIiMo2-xVKQ628VKU7oyoafD6bMAYeHnVuE4BRnHLAhJGdhSCMZcQP5F8NuVFh0S27LPaptcCJQYH9JZwimlrPBF0sB3ClPz9TQGLzomwVz-UWRA0F0-p2omXrOYk4QOtPg6WI-2gvEYsD8352iwHNH324QtXk7e2VK-T7VfDGE_A9Abmw64k_SgN7n1slrAtsA.4401xmCT3PIGGUw1w4-qHJ8XZoeKtVop7E9oaa5PrwY&dib_tag=se&keywords=kids%2Bt-shirts%2Bhearts&qid=1755283818&sprefix=kids%2Bt-shirts%2Bhear%2Caps%2C213&sr=8-9&th=1&psc=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View LittleSpring Valentines Kids T-Shirt on Amazon"
                  style={{
                    textDecoration: 'none',
                    padding: '8px 12px',
                    borderRadius: 8,
                    border: `1px solid ${evilMode ? '#660000' : '#dddddd'}`,
                    background: evilMode ? '#2a0000' : '#f9f9f9',
                    color: 'inherit',
                    fontWeight: 600
                  }}
                >
                  View on Amazon
                </a>
              </div>

              {/* Shirt 3 */}
              <div style={{
                background: evilMode ? '#1a0000' : '#fff',
                padding: 12,
                borderRadius: 8,
                border: `1px solid ${evilMode ? '#330000' : '#e5e5e5'}`,
              }}>
                <h4 style={{ marginTop: 0, marginBottom: 8 }}>Eitqtbea Hippie Hearts Kids T-Shirt</h4>
                <p style={{ marginTop: 0, marginBottom: 12 }}>Groovy heart design tee for children.</p>
                <a
                  href="https://www.amazon.com/Eitqtbea-T-Shirt-Children-Sleeve-Hippies/dp/B0F48YTBM4/ref=sr_1_1_sspa?crid=1PUAQYQ9K5G5Y&dib=eyJ2IjoiMSJ9.MOyfi2qOuHGe37TOH56v8WDE4zsJjvn5_yXnSdgFhNzPKjm9-Vce-4ej8IClzvtUPsFDqSLFy-IiwooAcSUMtQMLGWXpoowdf392lVVLpIiMo2-xVKQ628VKU7oyoafD6bMAYeHnVuE4BRnHLAhJGdhSCMZcQP5F8NuVFh0S27LPaptcCJQYH9JZwimlrPBF0sB3ClPz9TQGLzomwVz-UWRA0F0-p2omXrOYk4QOtPg6WI-2gvEYsD8352iwHNH324QtXk7e2VK-T7VfDGE_A9Abmw64k_SgN7n1slrAtsA.4401xmCT3PIGGUw1w4-qHJ8XZoeKtVop7E9oaa5PrwY&dib_tag=se&keywords=kids+t-shirts+hearts&qid=1755283818&sprefix=kids+t-shirts+hear%2Caps%2C213&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Eitqtbea Hippie Hearts Kids T-Shirt on Amazon"
                  style={{
                    textDecoration: 'none',
                    padding: '8px 12px',
                    borderRadius: 8,
                    border: `1px solid ${evilMode ? '#660000' : '#dddddd'}`,
                    background: evilMode ? '#2a0000' : '#f9f9f9',
                    color: 'inherit',
                    fontWeight: 600
                  }}
                >
                  View on Amazon
                </a>
              </div>
            </div>

            {/* Shorts group */}
            <h3 style={{ marginTop: 24 }}>Shorts</h3>
            <div style={{ display: 'grid', gap: 16, maxWidth: 900 }}>
              {/* Product 1 */}
              <div style={{
                background: evilMode ? '#1a0000' : '#fff',
                padding: 12,
                borderRadius: 8,
                border: `1px solid ${evilMode ? '#330000' : '#e5e5e5'}`,
              }}>
                <h3 style={{ marginTop: 0, marginBottom: 8 }}>Athletic Shorts with Drawstring (Kids)</h3>
                <p style={{ marginTop: 0, marginBottom: 12 }}>Comfy elastic waist shorts great for play time.</p>
                <a
                  href="https://www.amazon.com/Athletic-Shorts-Drawstring-Elastic-Clothes/dp/B0F5W4D6TM"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Athletic Shorts with Drawstring on Amazon"
                  style={{
                    textDecoration: 'none',
                    padding: '8px 12px',
                    borderRadius: 8,
                    border: `1px solid ${evilMode ? '#660000' : '#dddddd'}`,
                    background: evilMode ? '#2a0000' : '#f9f9f9',
                    color: 'inherit',
                    fontWeight: 600
                  }}
                >
                  View on Amazon
                </a>
              </div>

              {/* Product 2 */}
              <div style={{
                background: evilMode ? '#1a0000' : '#fff',
                padding: 12,
                borderRadius: 8,
                border: `1px solid ${evilMode ? '#330000' : '#e5e5e5'}`,
              }}>
                <h3 style={{ marginTop: 0, marginBottom: 8 }}>JOYSAY American 4th of July Toddler Shorts</h3>
                <p style={{ marginTop: 0, marginBottom: 12 }}>Festive toddler shorts perfect for summer celebrations.</p>
                <a
                  href="https://www.amazon.com/JOYSAY-American-July-Toddler-Shorts/dp/B0D6G94Y26?th=1&psc=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View JOYSAY American 4th of July Toddler Shorts on Amazon"
                  style={{
                    textDecoration: 'none',
                    padding: '8px 12px',
                    borderRadius: 8,
                    border: `1px solid ${evilMode ? '#660000' : '#dddddd'}`,
                    background: evilMode ? '#2a0000' : '#f9f9f9',
                    color: 'inherit',
                    fontWeight: 600
                  }}
                >
                  View on Amazon
                </a>
              </div>
            </div>
          </section>
        );
      case 'activities':
        return (
          <section>
            <h2>Activities</h2>
            <p>Download and print this coloring page!</p>
            <div style={{
              background: evilMode ? '#1a0000' : '#fff',
              padding: 12,
              borderRadius: 8,
              border: `1px solid ${evilMode ? '#330000' : '#e5e5e5'}`,
              maxWidth: 900
            }}>
              <img
                src={coloring1}
                alt="Coloring page: playful scene with rainbow, teddy bear, and sign"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 12 }}>
                <a
                  href={coloring1}
                  download="coloring_page_1.png"
                  style={{
                    textDecoration: 'none',
                    padding: '8px 12px',
                    borderRadius: 8,
                    border: `1px solid ${evilMode ? '#660000' : '#dddddd'}`,
                    background: evilMode ? '#2a0000' : '#f9f9f9',
                    color: 'inherit',
                    fontWeight: 600
                  }}
                >
                  Download PNG
                </a>
                <a
                  href={coloring1}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    textDecoration: 'none',
                    padding: '8px 12px',
                    borderRadius: 8,
                    border: `1px solid ${evilMode ? '#660000' : '#dddddd'}`,
                    background: evilMode ? '#2a0000' : '#f9f9f9',
                    color: 'inherit',
                    fontWeight: 600
                  }}
                >
                  Open in new tab for printing
                </a>
              </div>
            </div>

            {/* Second coloring page below the first */}
            <div style={{
              background: evilMode ? '#1a0000' : '#fff',
              padding: 12,
              borderRadius: 8,
              border: `1px solid ${evilMode ? '#330000' : '#e5e5e5'}`,
              maxWidth: 900,
              marginTop: 16
            }}>
              <img
                src={coloring2}
                alt="Coloring page 2: printable drawing page"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 12 }}>
                <a
                  href={coloring2}
                  download="coloring_page_2.png"
                  style={{
                    textDecoration: 'none',
                    padding: '8px 12px',
                    borderRadius: 8,
                    border: `1px solid ${evilMode ? '#660000' : '#dddddd'}`,
                    background: evilMode ? '#2a0000' : '#f9f9f9',
                    color: 'inherit',
                    fontWeight: 600
                  }}
                >
                  Download PNG
                </a>
                <a
                  href={coloring2}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    textDecoration: 'none',
                    padding: '8px 12px',
                    borderRadius: 8,
                    border: `1px solid ${evilMode ? '#660000' : '#dddddd'}`,
                    background: evilMode ? '#2a0000' : '#f9f9f9',
                    color: 'inherit',
                    fontWeight: 600
                  }}
                >
                  Open in new tab for printing
                </a>
              </div>
            </div>

            {/* Third coloring page below the second */}
            <div style={{
              background: evilMode ? '#1a0000' : '#fff',
              padding: 12,
              borderRadius: 8,
              border: `1px solid ${evilMode ? '#330000' : '#e5e5e5'}`,
              maxWidth: 900,
              marginTop: 16
            }}>
              <img
                src={coloring3}
                alt="Coloring page 3: printable drawing page"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 12 }}>
                <a
                  href={coloring3}
                  download="coloring_page_3.png"
                  style={{
                    textDecoration: 'none',
                    padding: '8px 12px',
                    borderRadius: 8,
                    border: `1px solid ${evilMode ? '#660000' : '#dddddd'}`,
                    background: evilMode ? '#2a0000' : '#f9f9f9',
                    color: 'inherit',
                    fontWeight: 600
                  }}
                >
                  Download PNG
                </a>
                <a
                  href={coloring3}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    textDecoration: 'none',
                    padding: '8px 12px',
                    borderRadius: 8,
                    border: `1px solid ${evilMode ? '#660000' : '#dddddd'}`,
                    background: evilMode ? '#2a0000' : '#f9f9f9',
                    color: 'inherit',
                    fontWeight: 600
                  }}
                >
                  Open in new tab for printing
                </a>
              </div>
            </div>
          </section>
        );
      case 'dance':
        return (
          <section>
            <h2>Dance Mode</h2>
            <p>Get your groove on! The video will start automatically when you open this tab.</p>
            <div style={{
              background: evilMode ? '#1a0000' : '#fff',
              padding: 12,
              borderRadius: 8,
              border: `1px solid ${evilMode ? '#330000' : '#e5e5e5'}`,
              maxWidth: 900
            }}>
              <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
                <iframe
                  title="Dance mode video - autoplay"
                  src={`https://www.youtube.com/embed/S1atmGLwbIE?autoplay=1&playsinline=1&rel=0&modestbranding=1`}
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', marginTop: 16 }}>
                <iframe
                  title="Dance mode video - second"
                  src={`https://www.youtube.com/embed/lxqqs7A3Edo?playsinline=1&rel=0&modestbranding=1`}
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </section>
        );
      case 'jokes':
        return (
          <section>
            <h2 style={{ fontSize: 36, marginBottom: 8 }}>Jokes</h2>
            <div
              style={{
                background: evilMode ? '#1a0000' : 'linear-gradient(180deg, #ffffff 0%, #fff7ff 100%)',
                color: 'inherit',
                padding: 16,
                borderRadius: 14,
                border: `1px solid ${evilMode ? '#330000' : '#ece3f5'}`,
                boxShadow: evilMode
                  ? '0 6px 18px rgba(0,0,0,0.45)'
                  : '0 8px 20px rgba(98,0,153,0.12)',
                maxWidth: 900
              }}
            >
              <p style={{ fontSize: 18, marginTop: 0 }}>Here are some jokes Abby created to brighten your day:</p>
              <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: 12 }}>
                <li style={{ fontSize: 22, lineHeight: 1.5, marginBottom: 12, display: 'flex', gap: 10 }}>
                  <span role="img" aria-hidden="true">🤣</span>
                  <span>What kind of lightbulb goes blah blah blah? A person appluhcation.</span>
                </li>
                <li style={{ fontSize: 22, lineHeight: 1.5, marginBottom: 12, display: 'flex', gap: 10 }}>
                  <span role="img" aria-hidden="true">😂</span>
                  <span>What kind of ninzun goes papenzing? A 1 1 1.</span>
                </li>
                <li style={{ fontSize: 22, lineHeight: 1.5, marginBottom: 12, display: 'flex', gap: 10 }}>
                  <span role="img" aria-hidden="true">😜</span>
                  <span>What kind of tootkey goes ninja hunting? A rainbow rainbow paper.</span>
                </li>
                <li style={{ fontSize: 22, lineHeight: 1.5, marginBottom: 4, display: 'flex', gap: 10 }}>
                  <span role="img" aria-hidden="true">😆</span>
                  <span>What kind of chocolate cake goes to joe's house? A communication robot.</span>
                </li>
              </ul>
            </div>
          </section>
        );
      case 'faqs':
        return (
          <section>
            <h2>FAQs</h2>
            <p>Frequently asked questions.</p>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        // Big rainbow background in normal mode; solid dark in evil mode
        background: evilMode
          ? '#0d0000'
          : 'linear-gradient(135deg, #ff0000 0%, #ff7f00 16%, #ffff00 33%, #00ff00 50%, #0000ff 66%, #4b0082 83%, #8b00ff 100%)',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
      }}
    >
      <header style={headerStyle}>
        <nav style={navStyle}>
          <button
            style={homeLinkStyle(activeTab === 'abby')}
            onClick={() => setActiveTab('abby')}
            aria-current={activeTab === 'abby' ? 'page' : undefined}
          >
            Abby
          </button>
          <ul style={menuStyle}>
            <li>
              <button
                style={linkStyle(activeTab === 'party-info')}
                onClick={() => setActiveTab('party-info')}
                aria-pressed={activeTab === 'party-info'}
              >
                party info
              </button>
            </li>
            <li>
              <button
                style={linkStyle(activeTab === 'shopping')}
                onClick={() => setActiveTab('shopping')}
                aria-pressed={activeTab === 'shopping'}
              >
                shopping
              </button>
            </li>
            <li>
              <button style={toggleStyle} onClick={() => setEvilMode(v => !v)}>evil mode</button>
            </li>
            <li>
              <button
                style={linkStyle(activeTab === 'activities')}
                onClick={() => setActiveTab('activities')}
                aria-pressed={activeTab === 'activities'}
              >
                activities
              </button>
            </li>
            <li>
              <button
                style={linkStyle(activeTab === 'dance')}
                onClick={() => setActiveTab('dance')}
                aria-pressed={activeTab === 'dance'}
              >
                dance mode
              </button>
            </li>
            <li>
              <button
                style={linkStyle(activeTab === 'jokes')}
                onClick={() => setActiveTab('jokes')}
                aria-pressed={activeTab === 'jokes'}
              >
                jokes
              </button>
            </li>
            <li>
              <button
                style={linkStyle(activeTab === 'faqs')}
                onClick={() => setActiveTab('faqs')}
                aria-pressed={activeTab === 'faqs'}
             >
                FAQs
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main style={mainStyle}>
        {renderContent()}
      </main>
    </div>
  );
}
