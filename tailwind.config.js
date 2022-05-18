module.exports = {
  mode: 'jit',
  purge: ['src/**/*.{js,jsx,ts,tsx}', 'public/**/*.html'],
  content: [],
  theme: {
    backgroundImage: {
      'studio-display': 'url("https://www.apple.com/v/home/an/images/promos/studio-display/promo_studiodisplay_avail__d1cx9j73ooq6_large.jpg")',
      'all-products': 'url("https://www.apple.com/v/home/an/images/promos/trade-in-may-2022/promo_trade_in_may_2022__bbvnbfzoqzxu_large.jpg")',
    },
    extend: {
      colors: {
        'home-gray': '#fbfafd',
      },
    },
  },
  plugins: [],
}
