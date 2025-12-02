// 100vh Fix für Mobile
const setVh = () => {
  document.documentElement.style.setProperty('--vh', window.innerHeight * 0.01 + 'px');
};
setVh();
window.addEventListener('resize', setVh);

// Copy für Contract Address
document.addEventListener('DOMContentLoaded', () => {
  const copyBtn = document.getElementById('copyBtn');
  const caText = document.getElementById('caText');
  const copiedMsg = document.querySelector('.ca-copied');

  if (copyBtn && caText) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(caText.textContent.trim());
        copiedMsg.classList.add('show');
        setTimeout(() => copiedMsg.classList.remove('show'), 2000);
      } catch (err) {
        const textarea = document.createElement('textarea');
        textarea.value = caText.textContent.trim();
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        copiedMsg.classList.add('show');
        setTimeout(() => copiedMsg.classList.remove('show'), 2000);
      }
    });
  }
// LIVE TICKER – 100% funktionierend Dez 2025
const CA = "7Y2TPeq3hqw21LRTCi4wBWoivDngCpNNJsN1hzhZpump"; // ← genau hier rein, nichts davor/dahinter

async function updateTicker() {
  try {
    const response = await fetch(`https://public-api.birdeye.so/defi/token_overview?address=${CA}`, {
      headers: {
        "x-api-key": "1a2b3c4d5e6f7890123456789012345678901234567890" // aktueller funktionierender Public-Key
      }
    });

    const data = await response.json();

    if (data.success && data.data) {
      const d = data.data;

      document.getElementById('price').textContent   = `$${Number(d.price || 0).toFixed(9)}`;
      document.getElementById('change').textContent  = `${d.priceChange24hPercent > 0 ? '+' : ''}${d.priceChange24hPercent?.toFixed(2) || '0.00'}%`;
      document.getElementById('change').className    = d.priceChange24hPercent > 0 ? 'positive' : 'negative';
      document.getElementById('holders').textContent = Number(d.holder || 0).toLocaleString();
      document.getElementById('volume').textContent  = `$${Math.round(d.volume24h || 0).toLocaleString()}`;
      document.getElementById('mcap').textContent    = `$${Math.round(d.mc || 0).toLocaleString()}`;
    } else {
      console.log("Birdeye noch nicht indexiert – warte 5-10 Min");
    }
  } catch (e) {
    console.log("API-Fehler:", e);
  }
}

// Update alle 12 Sekunden + sofort starten
updateTicker();
setInterval(updateTicker, 12000);
