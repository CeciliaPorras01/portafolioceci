// Preguntas para el simulador de examen
const questions = [
    {
        question: "¿Cuál es el límite de velocidad en zonas urbanas?",
        options: ["50 km/h", "60 km/h", "80 km/h"],
        correct: "50 km/h"
    },
    {
        question: "¿Qué debes hacer al ver una señal de 'Alto'?",
        options: ["Seguir sin detenerte", "Acelerar", "Detenerte por completo"],
        correct: "Detenerte por completo"
    }
    // Agrega más preguntas aquí
];

let currentQuestionIndex = 0;

// Función para mostrar la siguiente pregunta
function nextQuestion() {
    const questionContainer = document.getElementById('question-container');
    const result = document.getElementById('result');
    
    if (currentQuestionIndex < questions.length) {
        const q = questions[currentQuestionIndex];
        
        // Mostrar la pregunta y opciones
        questionContainer.innerHTML = `
            <p class="text-xl mb-4">${q.question}</p>
            <ul class="space-y-2">
                ${q.options.map(option => `<li class="cursor-pointer bg-blue-100 p-2 rounded hover:bg-blue-200" onclick="checkAnswer('${option}')">${option}</li>`).join('')}
            </ul>
        `;
        result.innerHTML = '';
    } else {
        // Fin del examen
        questionContainer.innerHTML = '';
        result.innerHTML = '¡Examen finalizado!';
    }
}

// Función para verificar la respuesta
function checkAnswer(answer) {
    const q = questions[currentQuestionIndex];
    const result = document.getElementById('result');
    
    if (answer === q.correct) {
        result.innerHTML = '<span class="text-green-600">Correcto!</span>';
    } else {
        result.innerHTML = `<span class="text-red-600">Incorrecto, la respuesta correcta era: ${q.correct}</span>`;
    }

    currentQuestionIndex++;
    setTimeout(nextQuestion, 1500);  // Pasar a la siguiente pregunta después de 1.5 segundos
}

// Iniciar el examen al cargar la página
window.onload = nextQuestion;




//Salud Mental


const frases = [
    "Eres más fuerte de lo que piensas.",
    "Cada día es una nueva oportunidad.",
    "Nunca es tarde para ser quien quieres ser.",
    "La vida no se trata de esperar a que pase la tormenta, sino de aprender a bailar bajo la lluvia.",
    "Cree en ti y todo será posible.",
    "El éxito es la suma de pequeños esfuerzos repetidos cada día.",
    "No cuentes los días, haz que los días cuenten."
];

function generarFrase() {
    const fraseElement = document.getElementById("motivationalText");
    const randomIndex = Math.floor(Math.random() * frases.length);
    fraseElement.textContent = frases[randomIndex];
}
document.getElementById("generatePhraseBtn").addEventListener("click", generarFrase);


document.addEventListener("DOMContentLoaded", function() {
    let lazyloadFrames = document.querySelectorAll("iframe[data-src]");
    let lazyload = function() {
        for (let i = 0; i < lazyloadFrames.length; i++) {
            if (lazyloadFrames[i].getBoundingClientRect().top < window.innerHeight) {
                lazyloadFrames[i].src = lazyloadFrames[i].getAttribute("data-src");
                lazyloadFrames[i].removeAttribute("data-src");
            }
        }
    };
    window.addEventListener("scroll", lazyload);
    lazyload(); // Para cargar los iframes visibles al cargar la página
});
