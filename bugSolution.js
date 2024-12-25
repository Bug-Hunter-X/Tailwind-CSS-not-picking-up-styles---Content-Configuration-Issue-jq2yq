```javascript
// ... your Tailwind CSS configuration ...
module.exports = {
  // ... other configurations ...
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // Correctly point to your source files
  theme: {
    extend: {
      colors: {
        'custom-color': '#abcdef',
      },
    },
  },
  plugins: [],
};
```