import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'

const OUT = 'C:/Users/ADVAN/AppData/Local/Temp/opencode/shots'
mkdirSync(OUT, { recursive: true })

const browser = await chromium.launch({ channel: 'chromium' })
const base = 'http://127.0.0.1:4173'

async function shootPage(page, file) {
  await page.waitForTimeout(1200)
  await page.screenshot({ path: `${OUT}/${file}.png` })
}

// Desktop
const desktop = await browser.newPage({ viewport: { width: 1440, height: 900 } })
await desktop.goto(base, { waitUntil: 'networkidle' })
await desktop.waitForTimeout(2500)

await shootPage(desktop, 'desktop-01-hero')

await desktop.evaluate(() => document.getElementById('profil').scrollIntoView())
await desktop.waitForTimeout(2500)
await shootPage(desktop, 'desktop-02-profil')

await desktop.evaluate(() => window.scrollBy(0, 1100))
await desktop.waitForTimeout(2500)
await shootPage(desktop, 'desktop-02b-timeline')

await desktop.evaluate(() => document.getElementById('destinasi').scrollIntoView())
await desktop.waitForTimeout(5000)
await shootPage(desktop, 'desktop-03-destinasi')

await desktop.getByRole('button', { name: 'Bahari', exact: true }).click()
await desktop.waitForTimeout(2200)
await shootPage(desktop, 'desktop-03b-filter')
await desktop.getByRole('button', { name: 'Semua', exact: true }).click()
await desktop.waitForTimeout(1500)

await desktop.getByRole('button', { name: 'Lihat detail Pantai Anyer' }).click()
await desktop.waitForTimeout(1200)
await shootPage(desktop, 'desktop-04-modal')
await desktop.keyboard.press('Escape')
await desktop.waitForTimeout(600)

await desktop.evaluate(() => document.getElementById('kuliner').scrollIntoView())
await desktop.waitForTimeout(1800)
await shootPage(desktop, 'desktop-05-kuliner')

await desktop.evaluate(() => window.scrollBy(0, 900))
await desktop.waitForTimeout(1400)
await shootPage(desktop, 'desktop-06-budaya')

await desktop.evaluate(() => document.getElementById('kontak').scrollIntoView())
await desktop.waitForTimeout(3000)
await shootPage(desktop, 'desktop-07-kontak')

await desktop.fill('input[placeholder="Contoh: Rani Prameswari"]', 'Rani Prameswari')
await desktop.fill('input[placeholder="nama@email.com"]', 'rani@email.com')
await desktop.selectOption('select', 'Pantai & Bahari')
await desktop.fill('textarea', 'Liburan 3 hari 2 malam untuk 4 orang, fokus pantai dan kuliner.')
await desktop.getByRole('button', { name: 'Kirim Pesan' }).click()
await desktop.waitForTimeout(1400)
await shootPage(desktop, 'desktop-07b-form-success')

await desktop.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
await desktop.waitForTimeout(1600)
await shootPage(desktop, 'desktop-08-footer')

// Mobile
const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } })
await mobile.goto(base, { waitUntil: 'networkidle' })
await mobile.waitForTimeout(2500)
await shootPage(mobile, 'mobile-01-hero')

await mobile.getByRole('button', { name: 'Buka menu' }).click()
await mobile.waitForTimeout(900)
await shootPage(mobile, 'mobile-02-menu')
await mobile.getByRole('button', { name: 'Tutup menu' }).click()
await mobile.waitForTimeout(600)

await mobile.evaluate(() => document.getElementById('destinasi').scrollIntoView())
await mobile.waitForTimeout(5000)
await shootPage(mobile, 'mobile-03-destinasi')

await mobile.evaluate(() => document.getElementById('kuliner').scrollIntoView())
await mobile.waitForTimeout(1600)
await shootPage(mobile, 'mobile-04-kuliner')

await mobile.evaluate(() => document.getElementById('kontak').scrollIntoView())
await mobile.waitForTimeout(1600)
await shootPage(mobile, 'mobile-05-kontak')

await browser.close()
console.log('done')
