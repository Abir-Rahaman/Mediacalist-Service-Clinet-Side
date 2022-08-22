/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
        
            "primary": "#29C790",
                    
            "secondary": "#f4a064",
                    
            "accent": "#2448c9",
                    
            "neutral": "#1D2C35",
                    
            "base-100": "#2A2F41",
                    
            "info": "#40A3CE",
                    
            "success": "#29C790",
                    
            "warning": "#C36B13",
                    
            "error": "#F02D44",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
