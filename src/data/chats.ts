export interface ChatMessage {
  nombre: string;
  imagen: string;
  mensaje: string;
}

export type ChatAPI = {
  greeting: string;
  instructions: string[];
  chats: ChatMessage[];
}

export const chatData: ChatAPI = {
  greeting: "¡Bienvenido al chat!",
  instructions: [
    "Haz clic en un usuario para ver más detalles.",
    "Puedes responder tocando el ícono de mensaje.",
    "Los mensajes nuevos se mostrarán en la parte superior.",
  ],
  chats: [
    { nombre: "Ana", imagen: "src/assets/1.jpg", mensaje: "¡Hola! ¿Cómo estás?" },
    { nombre: "Carlos", imagen: "src/assets/2.jpg", mensaje: "¿Ya viste la nueva serie?" },
    { nombre: "Luisa", imagen: "src/assets/3.jpg", mensaje: "Estoy en camino 🚗" },
    { nombre: "Pedro", imagen: "src/assets/4.jpg", mensaje: "¡Listo para el reto!" },
    { nombre: "Marta", imagen: "src/assets/5.jpg", mensaje: "No entendí esa parte 😕" },
    { nombre: "Jorge", imagen: "src/assets/6.jpg", mensaje: "Me encantó el proyecto" },
    { nombre: "Sofía", imagen: "src/assets/7.jpg", mensaje: "¡Feliz cumpleaños! 🎉" },
    { nombre: "Andrés", imagen: "src/assets/8.jpg", mensaje: "¿Alguien tiene el link?" },
    { nombre: "Clara", imagen: "src/assets/9.jpg", mensaje: "Sí, ya lo envié" },
    { nombre: "Lucas", imagen: "src/assets/10.jpg", mensaje: "Vamos a intentarlo otra vez" },
    { nombre: "Valeria", imagen: "src/assets/11.jpg", mensaje: "Ya terminé mi parte ✨" },
    { nombre: "Hugo", imagen: "src/assets/12.jpg", mensaje: "Necesito ayuda con esto" },
    { nombre: "Camila", imagen: "src/assets/13.jpg", mensaje: "Nos vemos mañana 😊" },
    { nombre: "Ricardo", imagen: "src/assets/14.jpg", mensaje: "¡Eso estuvo genial!" },
    { nombre: "Elena", imagen: "src/assets/15.jpg", mensaje: "¿Qué hora es la reunión?" },
    { nombre: "David", imagen: "src/assets/16.jpg", mensaje: "Voy a preparar un café" },
    { nombre: "Paula", imagen: "src/assets/17.jpg", mensaje: "Te lo explico en un momento" },
    { nombre: "Nico", imagen: "src/assets/18.jpg", mensaje: "¿Estás disponible ahora?" },
    { nombre: "Isabel", imagen: "src/assets/19.jpg", mensaje: "Amo este grupo 🥰" },
    { nombre: "Tomás", imagen: "src/assets/20.jpg", mensaje: "Voy saliendo ya" }
  ]
}