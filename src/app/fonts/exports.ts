import localFont from "next/font/local";

export const gtEestiPro = localFont({
  src: [
    {
      path: "./gt-eesti-pro/GTEestiProText-Regular.woff2",
      style: "normal",
      weight: '400',
    },
    {
      path:'./gt-eesti-pro/GTEestiProText-Medium.woff2',
      style: "normal",
      weight: '500', 
    },
    {
      path: './gt-eesti-pro/GTEestiProText-Bold.woff2',
      style: "normal",
      weight: '700',
    },
    {
      path: './gt-eesti-pro/GTEestiProText-UltraLight.woff2',
      style: "normal",
      weight: '200',
    },
    {
      path: './gt-eesti-pro/GTEestiProText-Thin.woff2',
      style: "normal",
      weight: '100',
    },
    {
      path: './gt-eesti-pro/GTEestiProText-Light.woff2',
      style: "normal",
      weight: '300',
    },
  ],
  variable: '--font-gt-eesti-pro',
})

export const geist = localFont({
  src: [
    {
      path: './GeistVF.woff',
      style: "normal",
      weight: '400',
    }
  ],
  variable: '--font-geist',
})