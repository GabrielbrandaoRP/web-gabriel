import localFont from 'next/font/local';


export const jetbrainsMono = localFont({
  src: [
    {
      path: './fonts/ttf/JetBrainsMono-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/ttf/JetBrainsMono-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/ttf/JetBrainsMono-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});
