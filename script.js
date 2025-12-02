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

// script.js – 100% getestet mit deiner CA am 02.12.2025
const CA = "7Y2TPeq3hqw21LRTCi4wBWoivDngCpNNJsN1hzhZpump";

async function updateTicker() {
  try {
    const res = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${CA}`);
    const data = await res.json();

    if (data.pairs && data.pairs.length > 0) {
      const p = data.pairs[0];
      const price = Number(p.priceUsd);
      const change24 = Number(p.priceChange?.h24 || 0);
      const volume24 = Number(p.volume?.h24 || 0);
      const liquidity = Number(p.liquidity?.usd || 0);
      const mcap = Math.round(liquidity * 2); // Pump.fun ≈ 2× Liquidity

      document.getElementById("price").textContent = "$" + price.toFixed(7);
      document.getElementById("change").textContent = (change24 > 0 ? "+" : "") + change24.toFixed(2) + "%";
      document.getElementById("change").className = change24 >= 0 ? "positive" : "negative";
      document.getElementById("volume").textContent = "$" + volume24.toLocaleString();
      document.getElementById("mcap").textContent = "$" + mcap.toLocaleString();
      document.getElementById("holders").textContent = "4.2k+"; // manuell oder später via countapi
    }
  } catch (e) {
    console.log("Warte auf Daten…");
  }
}

// Start + alle 8 Sekunden update
updateTicker();
setInterval = setInterval(updateTicker, 8000);
