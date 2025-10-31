
document.addEventListener('DOMContentLoaded', function() {
    // ... (Código de los gráficos aquí) ...
    // Gráfico Circular (div9)
const ctxCircular = document.getElementById('graficaCircular');

if (ctxCircular) {
    new Chart(ctxCircular, {
        type: 'doughnut', // Tipo de gráfico: rosquilla
        data: {
            labels: ['Completados', 'Pendientes', 'Cancelados'],
            datasets: [{
                label: 'Cantidad de Vuelos',
                data: [75, 15, 10], // Datos de ejemplo
                backgroundColor: [
                    'rgba(60, 86, 85, 0.9)',    // Color principal oscuro
                    'rgba(148, 178, 177, 0.9)', // Color intermedio
                    'rgba(255, 159, 64, 0.9)'   // Naranja o amarillo para contraste
                ],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, // Permite que el gráfico ajuste su tamaño al contenedor
            plugins: {
                legend: {
                    position: 'bottom',
                }
            }
        }
    });
}

// Gráfico de Barras (div8)
const ctxBarras = document.getElementById('graficaBarras');

if (ctxBarras) {
    new Chart(ctxBarras, {
        type: 'bar', // Tipo de gráfico: barras
        data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
            datasets: [{
                label: 'Viajes (totales)',
                data: [1, 2, 3, 4, 5, 6], // Datos de ejemplo
                backgroundColor: 'rgba(60, 86, 85, 0.7)', // Color que se ajusta a tu diseño
                borderColor: 'rgba(60, 86, 85, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Gráfico de Ondas/Líneas (div10)
const ctxOndas = document.getElementById('graficaOndas');

if (ctxOndas) {
    new Chart(ctxOndas, {
        type: 'line', // Tipo de gráfico: línea
        data: {
            labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6', 'Sem 7'],
            datasets: [{
                label: 'Tráfico (visitas)',
                data: [50, 75, 60, 90, 85, 120, 110], // Datos de ejemplo
                borderColor: 'rgba(60, 86, 85, 1)',
                backgroundColor: 'rgba(60, 86, 85, 0.3)', // Relleno suave
                tension: 0.4, // Suaviza las líneas para el efecto "onda"
                fill: true,   // Rellena el área bajo la línea
                borderWidth: 2,
                pointRadius: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false // Oculta la leyenda para un look más limpio
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

    // --- Funcionalidad del Menú Lateral ---
    
    // 1. Obtener todas las opciones del menú
    const opcionesMenu = document.querySelectorAll('.contener_opcion');

    // 2. Definir una función para manejar el clic
    opcionesMenu.forEach(opcion => {
        opcion.addEventListener('click', function(event) {
            // Prevenir la acción por defecto del enlace (evita recargar la página)
            event.preventDefault(); 
            
            // 3. Quitar la clase 'activo' de cualquier opción que la tenga
            opcionesMenu.forEach(item => {
                item.classList.remove('activo');
            });

            // 4. Agregar la clase 'activo' a la opción que fue clicada
            this.classList.add('activo');
        });
    });

    // Opcional: Establecer una opción por defecto como activa al cargar
    const opcionInicial = document.querySelector('.dashboard'); 
    if (opcionInicial) {
        opcionInicial.classList.add('activo');
    }
});