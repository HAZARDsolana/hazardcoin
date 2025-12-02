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
// LIVE TICKER – DEXSCREENER (funktioniert SOFORT bei Pump.fun Tokens)
const CA = "7Y2TPeq3hqw21LRTCi4wBWoivDngCpNNJsN1hzhZpump";

async function updateTicker() {
  try {
    const res = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${CA}`);
    const data = await res.json();

    if (data.pairs && data.pairs.length > 0) {
      const pair = data.pairs.find(p => p.baseToken.address === CA) || data.pairs[0];
      
      const price = Number(pair.priceUsd || 0);
      const priceChange24h = pair.priceChange?.h24 || 0;
      const volume24h = pair.volume?.h24 || 0;
      const liquidity = pair.liquidity?.usd || 0;
      const mcap = price * 1_000_000_000; // 1B Supply (bei den meisten Pump.fun Tokens)

      document.getElementById('price').textContent = `$${price.toFixed(9)}`;
      document.getElementById('change').textContent = `${priceChange24h > 0 ? '+' : ''}${priceChange24h.toFixed(2)}%`;
      document.getElementById('change').className = priceChange24h > 0 ? 'positive' : 'negative';
      document.getElementById('volume').textContent = `$${Math.round(volume24h).toLocaleString()}`;
      document.getElementById('mcap').textContent = `$${Math.round(mcap).toLocaleString()}`;
      
      // Holders gibt Dexscreener nicht → wir lassen es leer oder setzen manuell später
      document.getElementById('holders').textContent = "soon";
    }
  } catch (e) {
    console.log("Noch kein Trade – warte auf ersten Käufer");
  }
}

// Update alle 10 Sekunden
updateTicker();
setInterval(updateTicker, 10000);
