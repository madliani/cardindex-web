import sitemapIntegration from "@astrojs/sitemap"
import { defineConfig } from "astro/config"

const PORT = 4321

const integrations = [sitemapIntegration()]

/** @type {import("astro").AstroConfig} */
export default defineConfig({
    base: "/",
    build: { inlineStylesheets: "never" },
    devToolbar: { enabled: true },
    integrations: [...integrations],
    output: "static",
    prefetch: { defaultStrategy: "tap" },
    server: { host: true, open: true, port: PORT },
    site: "https://cardindex.vercel.app/"
})
