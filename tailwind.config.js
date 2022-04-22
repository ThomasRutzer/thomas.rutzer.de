const radixUIColors = require("@radix-ui/colors")

// eslint-disable-next-line import/no-commonjs
module.exports = {
    theme: {
        extend: {
            gridTemplateColumns: {
                "project-archive-descr": "120px repeat(1, minmax(0, 1fr));",
            },
            fontSize: {
                "6xl": "5rem",
            }
        },
        colors: {
            white: radixUIColors.slateDark.slate12,
            black: radixUIColors.slateDark.slate1,
            grey: { 
                1: radixUIColors.slateDark.slate1, 
                2: radixUIColors.slateDark.slate2, 
                3: radixUIColors.slateDark.slate3, 
                4: radixUIColors.slateDark.slate4, 
                5: radixUIColors.slateDark.slate5, 
                6: radixUIColors.slateDark.slate6,
                7: radixUIColors.slateDark.slate7, 
                8: radixUIColors.slateDark.slate8, 
                9: radixUIColors.slateDark.slate9, 
                10: radixUIColors.slateDark.slate10, 
                11: radixUIColors.slateDark.slate11, 
                12: radixUIColors.slateDark.slate12
            },
            secondary: { default: "#5551FF", lighter: "#9693ff" },
            primary: "#FE8477",
        },
        fill: theme => ({
            highlight: theme("colors.highlight"),
        }),
        fontFamily: {
            mono: "IBM Plex Mono, monospace",
            sans: "IBM Plex Sans, sans",
        },
        spacing: {
            0: "0px",
            1: "8px",
            2: "12px",
            3: "16px",
            4: "24px",
            5: "32px",
            6: "48px",
            7: "84px",
        },
    },
    variants: {},
    plugins: [],
    corePlugins: {
        float: false,
    },
    content: ["./src/**/*.html", "./src/**/*.js"],
    safelist: [
        "col-start-1",
        "col-start-2",
        "lg:col-start-1",
        "lg:col-start-2",
        "lg:col-start-3",
        "lg:col-start-4",
        "lg:col-start-5",
        "lg:col-start-6",
        "lg:col-span-1",
        "lg:col-span-2",
        "lg:col-span-3",
        "lg:col-span-4",
        "lg:col-span-5",
        "lg:col-span-6",
        "lg:row-start-1",
        "lg:row-start-2",
        "lg:row-start-3",
        "lg:row-span-1",
        "lg:row-span-2",
        "lg:row-span-3",
    ],
}
