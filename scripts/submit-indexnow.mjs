const key = '6b0e1c6c7a8248d5b5c9ab2f718f3d41'
const host = 'bestpickzone.com'
const keyLocation = `https://${host}/${key}.txt`

const rawUrls = process.argv.slice(2)
const urlList = [...new Set(rawUrls.map((url) => url.trim()).filter(Boolean))]

if (urlList.length === 0) {
  console.error('Usage: npm run indexnow:submit -- <url1> <url2> ...')
  process.exit(1)
}

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
  body: JSON.stringify({
    host,
    key,
    keyLocation,
    urlList,
  }),
})

const text = await response.text()

if (!response.ok) {
  console.error(`IndexNow submission failed: ${response.status} ${response.statusText}`)
  if (text) {
    console.error(text)
  }
  process.exit(1)
}

console.log(`IndexNow accepted ${urlList.length} URL(s).`)
if (text) {
  console.log(text)
}
