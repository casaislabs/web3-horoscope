import { useState, useRef } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import html2canvas from 'html2canvas';
import {
  simpleHash,
  getZodiac,
  getZodiacEmoji,
  getElement,
  getLuckyColor,
  getHoroscopePhrase,
  getLuckyNumber,
  getAdvice,
  getRarity,
  getChallenge,
  getLuckyNFT,
  getLuckyProtocol,
  getMood,
  getLuckyTime,
} from './utils/horoscope';

function Home() {
  const { address, isConnected } = useAccount();
  const [copied, setCopied] = useState(false);
  const cardRef = useRef(null);

  let zodiac, zodiacEmoji, element, color, phrase, luckyNumber, advice, rarity;
  let challenge, luckyNFT, luckyProtocol, mood, luckyTime;
  if (isConnected && address) {
    const hash = simpleHash(address);
    zodiac = getZodiac(hash);
    zodiacEmoji = getZodiacEmoji(hash);
    element = getElement(hash);
    color = getLuckyColor(hash);
    phrase = getHoroscopePhrase(hash);
    luckyNumber = getLuckyNumber(hash);
    advice = getAdvice(hash);
    rarity = getRarity(hash);
    challenge = getChallenge(hash);
    luckyNFT = getLuckyNFT(hash);
    luckyProtocol = getLuckyProtocol(hash);
    mood = getMood(hash);
    luckyTime = getLuckyTime(hash);
  }

  const handleCopy = () => {
    if (!address) return;
    const text = `🔮 Web3 Horoscope
Sign: ${zodiacEmoji} ${zodiac}
Element: ${element}
Phrase: ${phrase}
Lucky color: ${color}
Lucky number: ${luckyNumber}
Rarity: ${rarity.emoji} ${rarity.label}
Advice: ${advice}
Mood: ${mood.emoji} ${mood.label}
Web3 Challenge: ${challenge}
Lucky NFT: ${luckyNFT}
Lucky Protocol: ${luckyProtocol}
Lucky Time: ${luckyTime}
Address: ${address}`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  const handleDownloadImage = async () => {
    if (!cardRef.current) return;
    const canvas = await html2canvas(cardRef.current);
    const link = document.createElement('a');
    link.download = 'web3-horoscope.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  const handleShareTwitter = () => {
    const text = encodeURIComponent(
      `🔮 Web3 Horoscope
Sign: ${zodiacEmoji} ${zodiac}
Element: ${element}
Phrase: ${phrase}
Lucky color: ${color}
Lucky number: ${luckyNumber}
Rarity: ${rarity.emoji} ${rarity.label}
Advice: ${advice}
Mood: ${mood.emoji} ${mood.label}
Web3 Challenge: ${challenge}
Lucky NFT: ${luckyNFT}
Lucky Protocol: ${luckyProtocol}
Lucky Time: ${luckyTime}`
    );
    const url = `https://twitter.com/intent/tweet?text=${text}`;
    window.open(url, '_blank');
  };

  const handleShareTelegram = () => {
    const text = encodeURIComponent(
      `🔮 Web3 Horoscope
Sign: ${zodiacEmoji} ${zodiac}
Element: ${element}
Phrase: ${phrase}
Lucky color: ${color}
Lucky number: ${luckyNumber}
Rarity: ${rarity.emoji} ${rarity.label}
Advice: ${advice}
Mood: ${mood.emoji} ${mood.label}
Web3 Challenge: ${challenge}
Lucky NFT: ${luckyNFT}
Lucky Protocol: ${luckyProtocol}
Lucky Time: ${luckyTime}`
    );
    const url = `https://t.me/share/url?url=&text=${text}`;
    window.open(url, '_blank');
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
      {/* Mystic particles background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/3 w-24 h-24 bg-pink-400 opacity-30 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-indigo-400 opacity-20 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute top-2/3 right-1/2 w-16 h-16 bg-yellow-300 opacity-20 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>
      <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 flex flex-col items-center animate-fade-in">
        <h1 className="text-3xl font-bold text-white mb-6 drop-shadow-lg animate-fade-in">🔮 Web3 Horoscope</h1>
        <ConnectButton
          label="Connect Wallet"
          chainStatus="icon"
          showBalance={false}
          accountStatus={{
            smallScreen: 'avatar',
            largeScreen: 'full',
          }}
        />
        {isConnected && address && (
          <div
            ref={cardRef}
            className="mt-8 w-full max-w-xs rounded-xl p-6 text-center shadow-lg transition-shadow duration-500 hover:shadow-2xl animate-glow"
            style={{ background: color, color: '#fff' }}
          >
            <div className="text-2xl font-bold mb-2">{zodiacEmoji} {zodiac} · {element}</div>
            <div className="mb-2">{phrase}</div>
            <div className="mb-2 text-sm opacity-90">Lucky color: <span style={{ fontWeight: 'bold' }}>{color}</span></div>
            <div className="mb-2 text-sm opacity-90">Lucky number: <span style={{ fontWeight: 'bold' }}>{luckyNumber}</span></div>
            <div className="mb-2 text-sm opacity-90">Rarity: <span>{rarity.emoji} {rarity.label}</span></div>
            <div className="mb-2 text-sm opacity-90">Advice: <span>{advice}</span></div>
            <div className="mb-2 text-sm opacity-90">Mood: <span>{mood.emoji} {mood.label}</span></div>
            <div className="mb-2 text-sm opacity-90">Web3 Challenge: <span>{challenge}</span></div>
            <div className="mb-2 text-sm opacity-90">Lucky NFT: <span>{luckyNFT}</span></div>
            <div className="mb-2 text-sm opacity-90">Lucky Protocol: <span>{luckyProtocol}</span></div>
            <div className="mb-2 text-sm opacity-90">Lucky Time: <span>{luckyTime}</span></div>
            <div className="text-xs mt-2 opacity-60 break-all">{address}</div>
            <button
              onClick={handleCopy}
              className="mt-4 w-full px-4 py-2 rounded bg-white/30 hover:bg-white/50 text-white font-semibold transition transform hover:scale-110 animate-bounce"
            >
              {copied ? 'Copied!' : 'Copy Horoscope'}
            </button>
            <button
              onClick={handleDownloadImage}
              className="mt-2 w-full px-4 py-2 rounded bg-white/30 hover:bg-white/50 text-white font-semibold transition transform hover:scale-110"
            >
              Download as Image
            </button>
            <div className="flex gap-2 mt-4 justify-center">
              <button
                onClick={handleShareTwitter}
                className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white font-semibold transition transform hover:scale-110 flex items-center gap-2"
                title="Share on Twitter"
              >
                <span>🐦</span> Twitter
              </button>
              <button
                onClick={handleShareTelegram}
                className="px-4 py-2 rounded bg-blue-400 hover:bg-blue-500 text-white font-semibold transition transform hover:scale-110 flex items-center gap-2"
                title="Share on Telegram"
              >
                <span>📲</span> Telegram
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;