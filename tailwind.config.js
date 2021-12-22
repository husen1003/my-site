module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        "banner": "linear-gradient(to right, rgba(0, 0, 0, 0.90), rgba(0, 0, 0, 0.15)), url('assets/images/pic_with_pc.jpg')"
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        type: 'typing 7s steps(21, end), blink-caret .5s step-end infinite alternate;',
        wave: 'wiggle 3s linear infinite'
      },
      keyframes: {
        typing: {
          'from': { width: '0' },
        },
        'blink-caret': {
          '50%': {'border-color': 'transparent'}
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
};
