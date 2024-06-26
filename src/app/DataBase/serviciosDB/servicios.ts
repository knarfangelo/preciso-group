import { IServicio } from "../../models/IServicio";

export const servicios: IServicio[] = [
    {
        img: '/servicios/1.jpg',
        title: 'Sistema de Utilización de Media y Baja Tensión',
        description: 'Diseñamos y ejecutamos sistemas eléctricos seguros y eficientes para aplicaciones industriales, comerciales y residenciales.',
        subServicio: [
            {
                img: "/servicios/1.jpg",
                title: "Diseño del sistema",
                description: "Realizamos un estudio detallado de las necesidades energéticas del cliente y diseñamos sistemas personalizados que optimizan el uso de la energía.",
                subServicio: []
            },
            {
                img: "/servicios/1.jpg",
                title: "Instalación de equipos",
                description: "Instalamos transformadores, interruptores, paneles de distribución y otros equipos necesarios para la correcta operación del sistema de media y baja tensión.",
                subServicio: []
            },
        ]
    },
    {
        img: '/servicios/2.jpg',
        title: 'Mantenimiento de Subestaciones Eléctricas',
        description: 'Brindamos servicios integrales de mantenimiento para subestaciones eléctricas, garantizando su óptimo funcionamiento y seguridad.',
        subServicio: [
            {
                img: "/servicios/2.jpg",
                title: "Mantenimiento Preventivo",
                description: "Realizamos maniobras de desconexión, limpieza del transformador y celda, mediciones de temperatura y aislamiento, ajustes de terminales y relés de protección; y saneamiento con solvente dieléctrico.",
                subServicio: []
            },
            {
                img: "/servicios/2.jpg",
                title: "Mantenimiento Correctivo",
                description: "Diagnosticamos y corregimos fallos en subestaciones eléctricas, proporcionando informes técnicos detallados y certificados de operatividad firmados por ingenieros eléctricos colegiados.",
                subServicio: []
            },
        ]
    },
    {
        img: '/servicios/3.jpg',
        title: 'Servicios Eléctricos de Baja Tensión',
        description: 'Ofrecemos una amplia gama de servicios eléctricos para instalaciones de baja tensión, asegurando la eficiencia y confiabilidad de su sistema eléctrico.',
        subServicio: [
            {
                img: "/servicios/3.jpg",    
                title: "Instalaciones eléctricas",
                description: "Realizamos instalaciones eléctricas completas, desde el diseño y planificación hasta la ejecución, asegurando el cumplimiento de todas las normativas y estándares de calidad.",
                subServicio: []
            },
            {
                img: "/servicios/3.jpg",
                title: "Mantenimiento de tableros eléctricos",
                description: "Proveemos servicios de mantenimiento preventivo y correctivo de tableros eléctricos, asegurando su óptimo funcionamiento y prolongando su vida útil.",
                subServicio: []
            }
        ]
    },
    {
        img: '/servicios/3.jpg',
        title: 'Tendido de Redes',
        description: 'Planificamos, instalamos y mantenemos redes eléctricas para una distribución segura y eficiente de la energía eléctrica.',
        subServicio: [
            {
                img: "/servicios/3.jpg",
                title: "Diseño y planificación",
                description: "Realizamos un estudio exhaustivo del terreno y las necesidades del cliente para diseñar redes eléctricas optimizadas.",
                subServicio: []
            },
            {
                img: "/servicios/3.jpg",
                title: "Instalación de cables y equipos",
                description: "Instalamos cables de alta calidad y equipos necesarios para el correcto funcionamiento de la red eléctrica, garantizando la seguridad y eficiencia del sistema.",
                subServicio: []
            }
        ]
    }
]