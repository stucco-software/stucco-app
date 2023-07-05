import adapter from '@sveltejs/adapter-static' // This was changed from adapter-auto
import preprocess from 'svelte-preprocess'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'

const file = fileURLToPath(new URL('package.json', import.meta.url))
const json = readFileSync(file, 'utf8')
const pkg = JSON.parse(json)
console.log(pkg.version)

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),
    version: {
		  name: pkg.version
		}
  },
}

export default config