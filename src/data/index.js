export const WA_NUM = '573053906784';
export const wa = (msg) =>
    `https://wa.me/${WA_NUM}?text=${encodeURIComponent(msg)}`;

export const TYPEWRITER_TEXTS = [
    'botones a WhatsApp',
    'diseño impactante',
    'velocidad de carga',
    'bots inteligentes',
    'conversiones reales',
];

export const SERVICES = [
    {
        icon: '🌐',
        title: 'Página Web SPA',
        desc: 'Diseño moderno, responsivo y optimizado. Una página de alto impacto que captura clientes las 24 horas del día.',
        tag: 'Landing Page',
    },
    {
        icon: '🤖',
        title: 'Bot de WhatsApp',
        desc: 'Automatiza respuestas, captura leads y atiende clientes sin parar. Tu asistente digital que nunca duerme.',
        tag: 'Automatización',
    },
    {
        icon: '📈',
        title: 'SEO Local',
        desc: 'Aparece primero en Google cuando alguien busca tu servicio en Barranquilla y la región Caribe.',
        tag: 'Posicionamiento',
    },
    {
        icon: '⚡',
        title: 'Pack Completo',
        desc: 'Página web + bot de WhatsApp + SEO local. El combo definitivo para dominar tu mercado local.',
        tag: 'Todo incluido',
    },
];

export const STEPS = [
    {
        num: '01',
        title: 'Hablamos por WhatsApp',
        desc: 'Me cuentas tu negocio, tus metas y lo que necesitas. Sin tecnicismos, simple y rápido.',
    },
    {
        num: '02',
        title: 'Diseño y propuesta',
        desc: 'Creo el diseño personalizado para tu marca en 48 horas. Tú apruebas antes de seguir.',
    },
    {
        num: '03',
        title: 'Desarrollo y entrega',
        desc: 'Construyo tu página con tecnología moderna. Entrega en 5-7 días hábiles.',
    },
    {
        num: '04',
        title: 'Soporte continuo',
        desc: 'Te acompaño después del lanzamiento. Cambios, actualizaciones y soporte directo por WhatsApp.',
    },
];

export const WHY_ITEMS = [
    {
        icon: '🚀',
        title: 'Páginas ultra rápidas',
        desc: 'Optimizadas para cargar en menos de 2 segundos. Google lo premia, tus clientes lo agradecen.',
    },
    {
        icon: '📱',
        title: '100% Responsivo',
        desc: 'Se ve perfecto en celular, tablet y computador. Más del 80% de tus clientes llegan desde el móvil.',
    },
    {
        icon: '💬',
        title: 'Todo integrado con WhatsApp',
        desc: 'Cada botón, cada formulario lleva al cliente directo a tu WhatsApp. Sin fricción, más ventas.',
    },
    {
        icon: '🎯',
        title: 'Diseño que convierte',
        desc: 'No solo es bonita: está diseñada para convertir visitantes en clientes reales.',
    },
];

export const PLANS = [
    {
        name: 'Básico',
        price: '600',
        period: 'USD — pago único',
        featured: false,
        features: [
            'Página web SPA (1 sección por servicio)',
            'Diseño responsivo y moderno',
            'Botón WhatsApp integrado',
            'Formulario de contacto',
            'Entrega en 7 días',
        ],
        btnLabel: 'Empezar con Básico',
        btnStyle: 'outline-btn',
        msg: 'Hola, me interesa el plan Básico',
    },
    {
        name: 'Pro',
        price: '1.200',
        period: 'USD — pago único',
        featured: true,
        features: [
            'Todo lo del plan Básico',
            'Bot de WhatsApp incluido',
            'SEO local optimizado',
            'Google Analytics + Píxel FB',
            '3 meses de soporte incluido',
            'Entrega en 5 días',
        ],
        btnLabel: '💬 Quiero el Plan Pro',
        btnStyle: 'grad-btn',
        msg: 'Hola, me interesa el plan Pro',
    },
    {
        name: 'Empresa',
        price: '2.500',
        period: 'USD — pago único',
        featured: false,
        features: [
            'Todo lo del plan Pro',
            'Bot avanzado con IA (ChatGPT)',
            'Múltiples páginas / secciones',
            'Pasarela de pagos integrada',
            '6 meses de soporte incluido',
            'Entrega en 10 días',
        ],
        btnLabel: 'Cotizar Empresa',
        btnStyle: 'outline-btn',
        msg: 'Hola, me interesa el plan Empresa',
    },
];

export const BOT_FEATS = [
    {
        icon: '💬',
        title: 'Respuestas automáticas 24/7',
        desc: 'El bot responde preguntas frecuentes, horarios, precios y más sin que tengas que estar pendiente.',
    },
    {
        icon: '🧲',
        title: 'Captura de leads',
        desc: 'Recopila nombre, teléfono e interés del cliente automáticamente y lo organiza en tu lista de contactos.',
    },
    {
        icon: '🤖',
        title: 'IA integrada (ChatGPT)',
        desc: 'Bots inteligentes que entienden lenguaje natural y mantienen conversaciones reales con tus clientes.',
    },
];

export const CHAT_MSGS = [
    { type: 'user', text: '¿Cuánto cuesta una página web?', time: '10:33' },
    {
        type: 'bot',
        text: 'Tenemos planes desde $600 USD con pago único. ¿Qué tipo de negocio tienes? 😊',
        time: '10:33',
    },
    { type: 'user', text: 'Tengo un restaurante en el norte', time: '10:34' },
    {
        type: 'bot',
        text: '¡Perfecto! Para restaurantes recomiendo el Plan Pro: página + bot de reservas + SEO local. ¿Te envío los detalles? 🍽️',
        time: '10:34',
    },
    { type: 'user', text: 'Sí, me interesa', time: '10:35' },
    {
        type: 'bot',
        text: '¡Genial! Te estoy enviando la información completa ahora mismo... 📋',
        time: '10:35',
    },
];

export const TESTIMONIALS = [
    {
        initials: 'MR',
        name: 'María Rodríguez',
        biz: 'Restaurante La Costa, Barranquilla',
        text: '"Mi restaurante tiene el doble de reservas desde que lanzamos la página. El bot de WhatsApp atiende a los clientes y yo solo recibo los pedidos confirmados. ¡Increíble!"',
    },
    {
        initials: 'JM',
        name: 'Dr. Jorge Méndez',
        biz: 'Clínica Dental Smile, Barranquilla',
        text: '"Muy profesional y rápido. Entregó en 6 días y el resultado superó mis expectativas. Ahora aparezco en Google cuando buscan dentistas en Barranquilla."',
    },
    {
        initials: 'AP',
        name: 'Alejandra Pinto',
        biz: 'Boutique Caribe Style, Barranquilla',
        text: '"El bot de WhatsApp para mi boutique es una maravilla. Responde preguntas de tallas, precios y disponibilidad. Mis ventas crecieron un 35% en el primer mes."',
    },
];