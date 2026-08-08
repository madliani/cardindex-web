/** @type {import("prettier").Config} */
export default {
    arrowParens: "avoid",
    bracketSameLine: false,
    bracketSpacing: true,
    embeddedLanguageFormatting: "auto",
    endOfLine: "lf",
    htmlWhitespaceSensitivity: "strict",
    objectWrap: "collapse",
    plugins: ["prettier-plugin-astro"],
    printWidth: 80,
    proseWrap: "always",
    quoteProps: "as-needed",
    semi: false,
    singleAttributePerLine: false,
    singleQuote: false,
    tabWidth: 4,
    trailingComma: "none",
    useTabs: false
}
