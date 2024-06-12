import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    colors: {
      ...colors,
      purple: 'hsl(238, 40%, 52%)',
      primary: 'hsl(238, 40%, 52%)',
      'soft-red': 'hsl(358, 79%, 66%)',
      'light-grayish-blue': 'hsl(239, 57%, 85%)',
      red: 'hsl(357, 100%, 86%)',
      blue: 'hsl(212, 24%, 26%)',
      'grayish-blue': 'hsl(211, 10%, 45%)',
      'light-gray': 'hsl(223, 19%, 93%)',
      'gray-light': 'hsl(228, 33%, 97%)',
    },
    extend: {},
  },
  plugins: [],
};
