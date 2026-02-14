// 1. Configuración del Candado
const correctCombination = [14, 2, 26]; 
let currentCombination = [0, 0, 0]; 

function changeDigit(wheel, delta) {
    const wheelElement = document.getElementById(`wheel${wheel}`);
    let currentDigit = parseInt(wheelElement.querySelector('span').textContent);
  
    // El sistema es de 32 posiciones (0 a 31)
    currentDigit = (currentDigit + delta + 32) % 32;
  
    // Mostramos el número con dos dígitos
    wheelElement.querySelector('span').textContent = currentDigit.toString().padStart(2, '0');
  
    // Guardamos
    currentCombination[wheel - 1] = currentDigit;
  
    checkCombination();
}

function checkCombination() {
    const statusElement = document.getElementById('status');
  
    const isMatch = currentCombination[0] === correctCombination[0] &&
                    currentCombination[1] === correctCombination[1] &&
                    currentCombination[2] === correctCombination[2];

    if (isMatch) {
        statusElement.textContent = '🔓 ¡Eres mi llave!';
        statusElement.style.color = '#fff7d6';
        
        // Efecto visual extra al ganar
        document.querySelector('.lock-container').style.border = '2px solid #fff';
        document.querySelector('.lock-container').style.boxShadow = '0 0 20px #fff7d6';

        setTimeout(() => {
        // Esto ahora redirigirá a tu archivo local
        window.location.href = 'morada.html';
    }, 2000);
    } else {
        statusElement.textContent = 'Ingresa la combinación...';
        statusElement.style.color = '#fffbe6';
    }
}

// 2. Generación de Estrellas (Fondo)
window.onload = () => {
    
    // A. Estrellas Fugaces (Shooting Stars)
    const shootingContainer = document.querySelector('.shooting-stars');
    // Creamos 10 estrellas fugaces
    for (let i = 0; i < 10; i++) {
        let star = document.createElement('div');
        star.className = 'shooting-star';
        
        // Posición aleatoria
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        
        // Retraso aleatorio para que no salgan todas a la vez
        star.style.animationDelay = (Math.random() * 5) + 's';
        
        shootingContainer.appendChild(star);
    }
  }

  // Función para crear estrellas estáticas al cargar la página
window.addEventListener('load', () => {
    const staticContainer = document.querySelector('.static-stars');

    if (staticContainer) {
        for (let i = 0; i < 150; i++) {
            let star = document.createElement('div');
            star.className = 'static-star';
            
            // Posición aleatoria en toda la pantalla
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            
            // Tamaño aleatorio entre 1px y 3px
            const size = Math.random() * 2 + 1;
            
            // Aplicar estilos directamente
            star.style.left = `${x}vw`;
            star.style.top = `${y}vh`;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            
            // Duración aleatoria del parpadeo (entre 2 y 5 segundos)
            const duration = Math.random() * 3 + 2;
            star.style.setProperty('--duration', `${duration}s`);
            
            // Retraso aleatorio para que no parpadeen todas al mismo tiempo
            star.style.animationDelay = `${Math.random() * 5}s`;

            staticContainer.appendChild(star);
        }
    }
});


// Función para crear un par de Novas brillantes
function createNovas() {
    const staticContainer = document.querySelector('.static-stars');
    if (!staticContainer) return;

    // Vamos a crear solo 3 para que destaquen
    for (let i = 0; i < 5; i++) {
        let nova = document.createElement('div');
        nova.className = 'nova';
        
        // Posiciones estratégicas (puedes ajustarlas)
        const positions = [
            {top: '15%', left: '10%'}, // Esquina superior izquierda
            {top: '25%', left: '85%'}, // Esquina superior derecha
            {top: '40%', left: '75%'},  // Lateral
             {top: '65%', left: '25%'}, // Esquina superior izquierda
            {top: '10%', left: '25%'}, // Esquina superior derecha
            {top: '50%', left: '35%'}  // Lateral
        ];

        nova.style.top = positions[i].top;
        nova.style.left = positions[i].left;
        
        // Retraso de animación para que no pulsen igual
        nova.style.animationDelay = (i * 1.5) + 's';

        staticContainer.appendChild(nova);
    }
}

// Llama a la función al cargar
createNovas();
