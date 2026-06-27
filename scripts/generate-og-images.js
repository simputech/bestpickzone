#!/usr/bin/env node

const fs = require('fs/promises')
const path = require('path')

function loadSharp() {
  try {
    return require('sharp')
  } catch (_) {
    const sharpPath = require.resolve('sharp', {
      paths: [path.resolve(__dirname, '../../simputech/node_modules')],
    })
    return require(sharpPath)
  }
}

const sharp = loadSharp()

const WIDTH = 1200
const HEIGHT = 630

function escapeXml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function splitLines(text, maxLength = 24) {
  const words = text.split(' ')
  const lines = []
  let current = ''

  for (const word of words) {
    const next = current ? `${current} ${word}` : word
    if (next.length > maxLength && current) {
      lines.push(current)
      current = word
    } else {
      current = next
    }
  }

  if (current) lines.push(current)
  return lines
}

function renderSvg({
  brand,
  tagline,
  eyebrow,
  palette,
}) {
  const titleLines = splitLines(tagline, 26)
  const titleY = 290
  const titleTspans = titleLines
    .map((line, index) => `<tspan x="86" dy="${index === 0 ? 0 : 72}">${escapeXml(line)}</tspan>`)
    .join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="${WIDTH}" y2="${HEIGHT}" gradientUnits="userSpaceOnUse">
      <stop stop-color="${palette.bgStart}"/>
      <stop offset="1" stop-color="${palette.bgEnd}"/>
    </linearGradient>
    <radialGradient id="glowA" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(975 120) rotate(128) scale(480 520)">
      <stop stop-color="${palette.glowA}" stop-opacity="0.95"/>
      <stop offset="1" stop-color="${palette.glowA}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowB" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(250 600) rotate(-48) scale(530 530)">
      <stop stop-color="${palette.glowB}" stop-opacity="0.85"/>
      <stop offset="1" stop-color="${palette.glowB}" stop-opacity="0"/>
    </radialGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="24" stdDeviation="36" flood-color="${palette.shadow}" flood-opacity="0.28"/>
    </filter>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#glowA)"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#glowB)"/>
  <rect x="56" y="56" width="${WIDTH - 112}" height="${HEIGHT - 112}" rx="34" fill="${palette.panel}" fill-opacity="0.1" stroke="${palette.stroke}" stroke-opacity="0.38"/>
  <rect x="86" y="94" width="264" height="52" rx="26" fill="${palette.badge}" fill-opacity="0.18" stroke="${palette.badgeStroke}" stroke-opacity="0.35"/>
  <text x="118" y="127" font-family="Inter, Arial, sans-serif" font-size="22" font-weight="700" letter-spacing="0.16em" fill="${palette.badgeText}">${escapeXml(eyebrow.toUpperCase())}</text>
  <g filter="url(#shadow)">
    <rect x="86" y="170" width="138" height="138" rx="34" fill="${palette.markStart}"/>
    <rect x="86" y="170" width="138" height="138" rx="34" fill="url(#glowA)" opacity="0.22"/>
    <path d="M124 272V206H166C194 206 210 220 210 239C210 258 194 272 166 272H124ZM150 251H164C176 251 183 246 183 239C183 232 176 227 164 227H150V251Z" fill="${palette.markText}"/>
  </g>
  <text x="250" y="258" font-family="Georgia, 'Times New Roman', serif" font-size="56" font-weight="700" fill="${palette.brandText}">${escapeXml(brand)}</text>
  <text x="86" y="${titleY}" font-family="Inter, Arial, sans-serif" font-size="64" font-weight="800" fill="${palette.titleText}">${titleTspans}</text>
  <text x="86" y="516" font-family="Inter, Arial, sans-serif" font-size="26" font-weight="500" fill="${palette.bodyText}">
    Built for rich social previews across search, X, Facebook, and LinkedIn.
  </text>
  <path d="M856 458C856 392 910 338 976 338H1076C1117 338 1150 371 1150 412V458C1150 499 1117 532 1076 532H976C910 532 856 524 856 458Z" fill="${palette.ribbon}" fill-opacity="0.18" stroke="${palette.ribbonStroke}" stroke-opacity="0.34"/>
  <text x="1003" y="431" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="58" font-weight="800" fill="${palette.ribbonText}">
    OG
  </text>
  <text x="1003" y="476" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="600" fill="${palette.ribbonText}">
    1200×630
  </text>
</svg>`
}

async function writePng(outputPath, config) {
  const svg = renderSvg(config)
  await fs.mkdir(path.dirname(outputPath), { recursive: true })
  await sharp(Buffer.from(svg)).png().toFile(outputPath)
}

async function main() {
  const bpPublic = path.resolve(__dirname, '../public')
  const simpuPublic = path.resolve(__dirname, '../../simputech/public')

  const bestPickPalette = {
    bgStart: '#0b1f3a',
    bgEnd: '#142f56',
    glowA: '#3b82f6',
    glowB: '#f8fafc',
    panel: '#ffffff',
    stroke: '#dbeafe',
    badge: '#ffffff',
    badgeStroke: '#bfdbfe',
    badgeText: '#dbeafe',
    markStart: '#1d4ed8',
    markText: '#ffffff',
    brandText: '#ffffff',
    titleText: '#ffffff',
    bodyText: '#dbeafe',
    ribbon: '#ffffff',
    ribbonStroke: '#bfdbfe',
    ribbonText: '#e0f2fe',
    shadow: '#020617',
  }

  const simpuPalette = {
    bgStart: '#0b1d3a',
    bgEnd: '#153d7a',
    glowA: '#2563eb',
    glowB: '#38bdf8',
    panel: '#ffffff',
    stroke: '#bfdbfe',
    badge: '#dbeafe',
    badgeStroke: '#93c5fd',
    badgeText: '#dbeafe',
    markStart: '#2563eb',
    markText: '#ffffff',
    brandText: '#ffffff',
    titleText: '#ffffff',
    bodyText: '#dbeafe',
    ribbon: '#dbeafe',
    ribbonStroke: '#93c5fd',
    ribbonText: '#dbeafe',
    shadow: '#020617',
  }

  const bestPickImages = [
    ['og-default.png', 'BestPickZone', 'Expert Picks. Honest Reviews.', 'BestPickZone'],
    ['og-books.png', 'BestPickZone', 'Book Recommendations & Reviews', 'Books'],
    ['og-home-kitchen.png', 'BestPickZone', 'Home & Kitchen Buying Guides', 'Home & Kitchen'],
    ['og-health-fitness.png', 'BestPickZone', 'Health & Fitness Gear Reviews', 'Health & Fitness'],
    ['og-finance-software.png', 'BestPickZone', 'Finance & Software Reviews', 'Finance & Software'],
    ['og-beauty.png', 'BestPickZone', 'Beauty Product Comparisons', 'Beauty'],
    ['og-coffee.png', 'BestPickZone', 'Coffee Gear Buying Guides', 'Coffee'],
    ['og-wfh.png', 'BestPickZone', 'Work From Home Gear Reviews', 'WFH'],
  ]

  const simpuImages = [
    ['og-default.png', 'SimpUTech', 'AI-Powered Learning for Every Exam & Career Goal', 'SimpUTech'],
    ['og-exams.png', 'SimpUTech', 'Exam Guides & Study Resources', 'Exam Guides'],
    ['og-practice.png', 'SimpUTech', 'AI-Powered Practice Quizzes', 'Practice'],
  ]

  for (const [file, brand, tagline, eyebrow] of bestPickImages) {
    await writePng(path.join(bpPublic, file), {
      brand,
      tagline,
      eyebrow,
      palette: bestPickPalette,
    })
  }

  for (const [file, brand, tagline, eyebrow] of simpuImages) {
    await writePng(path.join(simpuPublic, file), {
      brand,
      tagline,
      eyebrow,
      palette: simpuPalette,
    })
  }

  console.log('Generated OG images for BestPickZone and SimpUTech.')
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
