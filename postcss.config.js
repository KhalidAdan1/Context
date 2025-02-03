module.exports = {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
      require('nativewind/postcss'), // This line is crucial for NativeWind
    ],
  };
  