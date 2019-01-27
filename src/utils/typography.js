import Typography from "typography"

const typography = new Typography({
    baseFontSize: "18px",
    baseLineHeight: 2,
    googleFonts: [
        {
            name: 'IBM Plex Mono',
            styles: ['400', '700'],
        }
    ],
    headerFontFamily: [
        "IBM Plex Mono",
        "monospace"
    ],
    bodyFontFamily: [
        "IBM Plex Mono",
        "monospace"
    ],
    scaleRatio: 2
})

export default typography