export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-300 via-blue-200 to-purple-300">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg w-11/12 max-w-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">¡Bienvenido!</h1>
        <p className="text-gray-600 mb-6">
          Este es un ejemplo de auditoría de sistemas. Las auditorías de
          sistemas son procesos esenciales para evaluar la seguridad, eficiencia
          y cumplimiento de los sistemas tecnológicos dentro de una
          organización. Incluyen el análisis de infraestructuras, software y
          datos para identificar posibles riesgos y optimizar recursos.
        </p>
        <a
          href="https://www.google.com/search?q=auditoría+de+sistemas"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-full inline-block"
        >
          Leer más
        </a>
      </div>
    </div>
  );
}
