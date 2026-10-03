import fs from 'node:fs'
import path from 'node:path'
import { bountyArticles } from './bounty-data'
export function getBountyArticle(slug: string) {
 const article = bountyArticles.find(a => a.slug === slug)
 if (!article) return undefined
 return {...article, body: fs.readFileSync(path.join(process.cwd(),'content/bounties',`${slug}.html`),'utf8')}
}
