module.exports = {
  content: ["./index.html", "./input.css", "./formulario.html"],
  theme: {
    extend: {
      screens: {
        'xs': '376px', // Cambia el punto de quiebre para dispositivos móviles
        'sm': '476px', // Cambia el punto de quiebre para dispositivos móviles
        'md': '768px', // Cambia el punto de quiebre para tabletas
        'lg': '1024px', // Cambia el punto de quiebre para pantallas de escritorio
        'xl': '1280px', // Agrega un nuevo punto de quiebre
      }
     
    }
    
    
  },
  plugins: [],
};
