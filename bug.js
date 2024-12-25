```javascript
// ... your Tailwind CSS configuration ...
module.exports = {
  // ... other configurations ...
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // Specify your source files here
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