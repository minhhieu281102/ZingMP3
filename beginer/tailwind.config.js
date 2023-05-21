/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    colors: {
      'hover-pink': '#BD8CD6'
    },
    extend: {
      keyframes: {
        'slide-right': {
          '0%': {
            '-webkit-transform': ' translateX(-500px);',
            transform: 'translateX(-500px);'
          },
          '100%': {
            '-webkit-transform': 'translateX(0);',
            transform: 'translateX(0);'
          }
        },
        'slide-left': {
          '0%': {
            '-webkit-transform': ' translateX(500px);',
            transform: 'translateX(500px);'
          },
          '100%': {
            '-webkit-transform': 'translateX(0);',
            transform: 'translateX(0);'
          }
        },
        'slide-left2': {
          '0%': {
            '-webkit-transform': ' translateX(500px);',
            transform: 'translateX(500px);'
          },
          '100%': {
            '-webkit-transform': 'translateX(0);',
            transform: 'translateX(0);'
          }
        },
        'rotate-center': {
          '0%': {
            '-webkit-transform': ' rotate(0)',
            transform: ' rotate(0)'
          },
          '100%': {
            '-webkit-transform': ' rotate(360deg)',
            transform: ' rotate(360deg)'
          }
        },
        'img-scale-up': {
          '0%': {
            '-webkit-transform': ' scale(1)',
            transform: ' scale(1)'
          },
          '100%': {
            '-webkit-transform': ' scale(1.1)',
            transform: ' scale(1.1)'
          }
        },
        'img-scale-down': {
          '0%': {
            '-webkit-transform': ' scale(1.1)',
            transform: ' scale(1.1)'
          },
          '100%': {
            '-webkit-transform': ' scale(1)',
            transform: ' scale(1)'
          }
        }
      },
      animation: {
        'slide-right': 'slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'slide-left': 'slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'slide-left2': 'slide-left2 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'rotate-center': 'rotate-center 8s linear infinite both;',
        'img-scale-up': 'img-scale-up 0.3s linear both ;',
        'img-scale-down': 'img-scale-down 0.3s linear both ;'
      },
      flex: {
        4: '4 4 0%',
        6: '6 6 0%'
      }
    },
    screens: {
      1600: '1600px'
    }
  },
  plugins: []
}
