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
// 100vh Fix
const setVh = () => {
  document.documentElement.style.setProperty('--vh', window.innerHeight * 0.01 + 'px');
};
setVh();
window.addEventListener('resize', setVh);

// LIVE TICKER – Dexscreener (funktioniert sofort mit deiner CA)
const CA = "7Y2TPeq3hqw21LRTCi4wBWoivDngCpNNJsN1hzhZpump";

async function updateTicker() {
  try {
    const res = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${CA}`);
    const data = await res.json();

    if (data.pairs && data.pairs.length > 0) {
      const pair = data.pairs[0];
      const price = Number(pair.priceUsd || 0);
      const change = Number(pair.priceChange?.h24 || 0);
      const volume = Number(pair.volume?.h24 || 0);
      const liquidity = Number(pair.liquidity?.usd || 0);
      const mcap = liquidity * 2; // bei Pump.fun meist ~2× Liquidity

      document.getElementById('price').textContent   = `$${price.toFixed(9)}`;
      document.getElementById('change').textContent  = `${change > 0 ? '+' : ''}${change.toFixed(2)}%`;
      document.getElementById('change').className    = change > 0 ? 'positive' : 'negative';
      document.getElementById('volume').textContent  = `$${Math.round(volume).toLocaleString()}`;
      document.getElementById('mcap').textContent    = `$${Math.round(mcap).toLocaleString()}`;
    }
  } catch (e) {
    console.log("Warte auf ersten Trade…");
  }
}

// Start + alle 10 Sekunden
updateTicker();
setInterval(updateTicker, 10000);
