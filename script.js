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
// LIVE TICKER – Birdeye API (einfach deine CA eintragen)
const CA = "7Y2TPeq3hqw21LRTCi4wBWoivDngCpNNJsN1hzhZpump"; // ← EINFACH HIER ERSETZEN!!!

async function updateTicker() {
  try {
    const res = await fetch(`https://public-api.birdeye.so/defi/token_overview?address=${CA}`, {
      headers: { "X-API-KEY": "c30e9d9a9b2f4e8a9b2f4e8a9b2f4e8a" } // free public key
    });
    const data = await res.json();
    if (data.success) {
      const d = data.data;
      document.getElementById('price').textContent = `$${Number(d.price).toFixed(8)}`;
      document.getElementById('change').textContent = `${d.priceChange24hPercent > 0 ? '+' : ''}${d.priceChange24hPercent.toFixed(2)}%`;
      document.getElementById('change').className = d.priceChange24hPercent > 0 ? 'positive' : 'negative';
      document.getElementById('holders').textContent = Number(d.holder || 0).toLocaleString();
      document.getElementById('volume').textContent = `$${Number(d.volume24h || 0).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
      document.getElementById('mcap').textContent = `$${Number(d.mc || 0).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    }
  } catch (e) {
    console.log("Ticker offline");
  }
}

// Update alle 15 Sekunden
setInterval(updateTicker, 15000);
updateTicker(); // Sofort beim Laden
