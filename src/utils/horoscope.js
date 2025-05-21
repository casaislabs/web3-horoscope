const zodiacSigns = [
  { name: 'Aries', emoji: '🐏' },
  { name: 'Taurus', emoji: '🐂' },
  { name: 'Gemini', emoji: '👯' },
  { name: 'Cancer', emoji: '🦀' },
  { name: 'Leo', emoji: '🦁' },
  { name: 'Virgo', emoji: '🌾' },
  { name: 'Libra', emoji: '⚖️' },
  { name: 'Scorpio', emoji: '🦂' },
  { name: 'Sagittarius', emoji: '🏹' },
  { name: 'Capricorn', emoji: '🐐' },
  { name: 'Aquarius', emoji: '🌊' },
  { name: 'Pisces', emoji: '🐟' }
];

const elements = ['Fire', 'Earth', 'Air', 'Water'];

const colors = [
  '#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FFD700', '#00CED1',
  '#FF69B4', '#8A2BE2', '#00FF7F', '#FF4500', '#1E90FF', '#FFDAB9'
];

const phrases = [
  'Today is a great day for new opportunities in Web3.',
  'Trust your digital intuition.',
  'Your wallet will attract good vibes.',
  'An unexpected NFT may come into your life.',
  'The energy of the blockchain is on your side.',
  'Make a transaction with confidence.',
  'Your luck in Web3 is on the rise.',
  'Today is a good day to explore new protocols.',
  'Share your Web3 knowledge.',
  'Decentralization smiles upon you today.',
  'An airdrop could be near.',
  'Hodl and stay on your path.'
];

const advices = [
  'Double-check contract addresses before interacting.',
  'Never share your seed phrase.',
  'Try a new dApp today.',
  'Back up your wallet securely.',
  'Explore a new blockchain.',
  'Teach a friend about Web3.',
  'Review your wallet security settings.',
  'Research a trending protocol.',
  'Support an open-source project.',
  'Update your wallet app.'
];

const rarities = [
  { label: 'Common', emoji: '⭐' },
  { label: 'Rare', emoji: '🌟' },
  { label: 'Epic', emoji: '💫' },
  { label: 'Legendary', emoji: '🔥' }
];

// --- New Additions ---
const challenges = [
  'Try a new DeFi protocol today!',
  'Send a small tip to a friend.',
  'Explore a DAO and join their Discord.',
  'Mint an NFT on a new platform.',
  'Read a Web3 article and share it.',
  'Backup your seed phrase securely.',
  'Vote on a governance proposal.',
  'Bridge assets to another chain.',
  'Try a Layer 2 solution.',
  'Teach someone about crypto.'
];

const nfts = [
  'CryptoPunk', 'Bored Ape', 'Azuki', 'Doodles', 'Moonbird', 'Cool Cat', 'World of Women', 'Goblin', 'CloneX', 'OnChainMonkey'
];

const protocols = [
  'Uniswap', 'Aave', 'Lens', 'Zora', 'ENS', 'Sismo', 'Safe', 'Arbitrum', 'Optimism', 'Starknet'
];

const moods = [
  { label: 'Inspired', emoji: '✨' },
  { label: 'Adventurous', emoji: '🌍' },
  { label: 'Lucky', emoji: '🍀' },
  { label: 'Curious', emoji: '🧐' },
  { label: 'Chill', emoji: '😎' },
  { label: 'Focused', emoji: '🎯' },
  { label: 'Creative', emoji: '🎨' },
  { label: 'Energetic', emoji: '⚡' }
];

const luckyTimes = [
  '08:00', '10:30', '12:00', '14:14', '16:20', '18:08', '20:22', '22:11'
];

// Simple hash: sum of char codes
export function simpleHash(address) {
  return address
    .split('')
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
}

export function getZodiac(hash) {
  return zodiacSigns[hash % 12].name;
}

export function getZodiacEmoji(hash) {
  return zodiacSigns[hash % 12].emoji;
}

export function getElement(hash) {
  return elements[hash % 4];
}

export function getLuckyColor(hash) {
  return colors[hash % colors.length];
}

export function getHoroscopePhrase(hash) {
  return phrases[hash % phrases.length];
}

export function getLuckyNumber(hash) {
  return (hash % 99) + 1;
}

export function getAdvice(hash) {
  return advices[hash % advices.length];
}

export function getRarity(hash) {
  return rarities[hash % rarities.length];
}

// --- New Exports ---
export function getChallenge(hash) {
  return challenges[hash % challenges.length];
}

export function getLuckyNFT(hash) {
  return nfts[hash % nfts.length];
}

export function getLuckyProtocol(hash) {
  return protocols[hash % protocols.length];
}

export function getMood(hash) {
  return moods[hash % moods.length];
}

export function getLuckyTime(hash) {
  return luckyTimes[hash % luckyTimes.length];
}