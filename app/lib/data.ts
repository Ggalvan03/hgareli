import { Producto } from "@/app/lib/definitions";

export const productos: Producto[] = [
    {
        id: 'prod-001',
        nombre: 'Anillo Aurora',
        tipo: 'Anillo',
        precio: 2500,
        thumbnail_URL: '/anillos/thumbnail/anillo.png',
        variantes: [
            {
                sub_id: 0,
                material: 'oro',
                descripcion: 'Anillo Aurora en oro de 14k con incrustaciones de zirconia.',
                tamaños: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
                precio: 2500,
                images_URL: [
                    '/anillos/oro/anillo_oro_1.png',
                    '/anillos/oro/anillo_oro_2.png',
                    '/anillos/oro/anillo_oro_3.png'
                ]
            }
        ]
    },
    {
        id: 'prod-002',
        nombre: 'Collar Estrella',
        tipo: 'Collar',
        precio: 3200,
        thumbnail_URL: '/collares/thumbnail/collar.png',
        variantes: [
            {
                sub_id: 0,
                material: 'plata',
                descripcion: 'Collar Estrella en plata esterlina con dije de estrella.',
                tamaños: ['45cm', '50cm'],
                precio: 3200,
                images_URL: [
                    '/collares/plata/collar_plata_1.png',
                    '/collares/plata/collar_plata_2.png',
                    '/collares/plata/collar_plata_3.png'
                ]
            }
        ]
    },
    {
        id: 'prod-003',
        nombre: 'Charm Corazón',
        tipo: 'Charm',
        precio: 1500,
        thumbnail_URL: '/charms/thumbnail/charm.png',
        variantes: [
            {
                sub_id: 0,
                material: 'oro',
                descripcion: 'Charm en forma de corazón de oro de 14k.',
                tamaños: ['Único'],
                precio: 1500,
                images_URL: [
                    '/charms/oro/charm_oro_1.png',
                    '/charms/oro/charm_oro_2.png',
                    '/charms/oro/charm_oro_3.png'
                ]
            }
        ]
    },
    {
        id: 'prod-004',
        nombre: 'Anillo Luna',
        tipo: 'Anillo',
        precio: 2800,
        thumbnail_URL: '/anillos/thumbnail/anillo.png',
        variantes: [
            {
                sub_id: 0,
                material: 'plata',
                descripcion: 'Anillo con diseño de luna creciente en plata.',
                tamaños: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
                precio: 2800,
                images_URL: [
                    '/anillos/plata/anillo_plata_1.png',
                    '/anillos/plata/anillo_plata_2.png',
                    '/anillos/plata/anillo_plata_3.png'
                ]
            }
        ]
    },
    {
        id: 'prod-005',
        nombre: 'Collar Flor',
        tipo: 'Collar',
        precio: 3500,
        thumbnail_URL: '/collares/thumbnail/collar.png',
        variantes: [
            {
                sub_id: 0,
                material: 'oro',
                descripcion: 'Collar con dije de flor de oro y zirconias.',
                tamaños: ['40cm', '45cm'],
                precio: 3500,
                images_URL: [
                    '/collares/oro/collar_oro_1.png',
                    '/collares/oro/collar_oro_3.png'
                ]
            }
        ]
    },
    {
        id: 'prod-006',
        nombre: 'Charm Estrella Fugaz',
        tipo: 'Charm',
        precio: 1700,
        thumbnail_URL: 'charms/thumbnail/charm.png',
        variantes: [
            {
                sub_id: 0,
                material: 'oro',
                descripcion: 'Charm de estrella fugaz en oro de 14k.',
                tamaños: ['único'],
                precio: 1700,
                images_URL: [
                    '/charms/oro/charm_oro_1.png',
                    '/charms/oro/charm_oro_2.png',
                    '/charms/oro/charm_oro_3.png'
                ]
            },
            {
                sub_id: 1,
                material: 'plata',
                descripcion: 'Charm de estrella fugaz en plata esterlina.',
                tamaños: ['único'],
                precio: 1300,
                images_URL: [
                    '/charms/plata/charm_plata_1.png',
                    '/charms/plata/charm_plata_2.png',
                    '/charms/plata/charm_plata_3.png'
                ]
            }
        ]
    },
    {
        id: 'prod-007',
        nombre: 'Anillo Aurora',
        tipo: 'Anillo',
        precio: 2500,
        thumbnail_URL: '/anillos/thumbnail/anillo.png',
        variantes: [
            {
                sub_id: 0,
                material: 'oro',
                descripcion: 'Anillo Aurora en oro de 14k con incrustaciones de zirconia.',
                tamaños: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
                precio: 2500,
                images_URL: [
                    '/anillos/oro/anillo_oro_1.png',
                    '/anillos/oro/anillo_oro_2.png',
                    '/anillos/oro/anillo_oro_3.png'
                ]
            }
        ]
    },
    {
        id: 'prod-008',
        nombre: 'Collar Estrella',
        tipo: 'Collar',
        precio: 3200,
        thumbnail_URL: '/collares/thumbnail/collar.png',
        variantes: [
            {
                sub_id: 0,
                material: 'plata',
                descripcion: 'Collar Estrella en plata esterlina con dije de estrella.',
                tamaños: ['45cm', '50cm'],
                precio: 3200,
                images_URL: [
                    '/collares/plata/collar_plata_1.png',
                    '/collares/plata/collar_plata_2.png',
                    '/collares/plata/collar_plata_3.png'
                ]
            }
        ]
    },
    {
        id: 'prod-009',
        nombre: 'Charm Corazón',
        tipo: 'Charm',
        precio: 1500,
        thumbnail_URL: '/charms/thumbnail/charm.png',
        variantes: [
            {
                sub_id: 0,
                material: 'oro',
                descripcion: 'Charm en forma de corazón de oro de 14k.',
                tamaños: ['Único'],
                precio: 1500,
                images_URL: [
                    '/charms/oro/charm_oro_1.png',
                    '/charms/oro/charm_oro_2.png',
                    '/charms/oro/charm_oro_3.png'
                ]
            }
        ]
    },
    {
        id: 'prod-010',
        nombre: 'Anillo Luna',
        tipo: 'Anillo',
        precio: 2800,
        thumbnail_URL: '/anillos/thumbnail/anillo.png',
        variantes: [
            {
                sub_id: 0,
                material: 'plata',
                descripcion: 'Anillo con diseño de luna creciente en plata.',
                tamaños: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
                precio: 2800,
                images_URL: [
                    '/anillos/plata/anillo_plata_1.png',
                    '/anillos/plata/anillo_plata_2.png',
                    '/anillos/plata/anillo_plata_3.png'
                ]
            }
        ]
    },
    {
        id: 'prod-011',
        nombre: 'Collar Flor',
        tipo: 'Collar',
        precio: 3500,
        thumbnail_URL: '/collares/thumbnail/collar.png',
        variantes: [
            {
                sub_id: 0,
                material: 'oro',
                descripcion: 'Collar con dije de flor de oro y zirconias.',
                tamaños: ['40cm', '45cm'],
                precio: 3500,
                images_URL: [
                    '/collares/oro/collar_oro_1.png',
                    '/collares/oro/collar_oro_3.png'
                ]
            }
        ]
    },
    {
        id: 'prod-012',
        nombre: 'Charm Estrella Fugaz',
        tipo: 'Charm',
        precio: 1700,
        thumbnail_URL: 'charms/thumbnail/charm.png',
        variantes: [
            {
                sub_id: 0,
                material: 'oro',
                descripcion: 'Charm de estrella fugaz en oro de 14k.',
                tamaños: ['único'],
                precio: 1700,
                images_URL: [
                    '/charms/oro/charm_oro_1.png',
                    '/charms/oro/charm_oro_2.png',
                    '/charms/oro/charm_oro_3.png'
                ]
            },
            {
                sub_id: 1,
                material: 'plata',
                descripcion: 'Charm de estrella fugaz en plata esterlina.',
                tamaños: ['único'],
                precio: 1300,
                images_URL: [
                    '/charms/plata/charm_plata_1.png',
                    '/charms/plata/charm_plata_2.png',
                    '/charms/plata/charm_plata_3.png'
                ]
            }
        ]
    }
];