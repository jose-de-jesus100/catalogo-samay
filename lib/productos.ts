import type { Producto } from "./tipos";

/**
 * ================================================================
 *  TUS PRODUCTOS O SERVICIOS.
 *  El "Desayuno sorpresa con amor" se ofrece para 4 ocasiones distintas
 *  (una por categoría) para que sea fácil de encontrar según el motivo.
 *  Agrega más productos aquí cuando tengas otros (arreglos, combos, etc.).
 * ================================================================
 */
export const PRODUCTOS: Producto[] = [
  {
    slug: "desayuno-cumpleanos",
    nombre: "Desayuno Sorpresa con Amor",
    imagen: "/productos/desayuno-sorpresa-con-amor.jpg",
    categoria: "Cumpleaños",
    paraQuien: "Para la persona que quiere impresionar a alguien.",
    beneficio: "La seguridad de que el desayuno llegará bien a su destino.",
    caracteristicas: ["Se entrega a domicilio", "Personalizado", "Producto fresco"],
    precio: "$630",
    facilidades:
      "Pago en efectivo o transferencia. El envío se cobra aparte según el lugar de entrega.",
  },
  {
    slug: "desayuno-aniversario",
    nombre: "Desayuno Sorpresa con Amor",
    imagen: "/productos/desayuno-sorpresa-con-amor.jpg",
    categoria: "Aniversario",
    paraQuien: "Para la persona que quiere impresionar a alguien.",
    beneficio: "La seguridad de que el desayuno llegará bien a su destino.",
    caracteristicas: ["Se entrega a domicilio", "Personalizado", "Producto fresco"],
    precio: "$630",
    facilidades:
      "Pago en efectivo o transferencia. El envío se cobra aparte según el lugar de entrega.",
    destacado: true,
  },
  {
    slug: "desayuno-reconciliacion",
    nombre: "Desayuno Sorpresa con Amor",
    imagen: "/productos/desayuno-sorpresa-con-amor.jpg",
    categoria: "Reconciliación",
    paraQuien: "Para la persona que quiere impresionar a alguien.",
    beneficio: "La seguridad de que el desayuno llegará bien a su destino.",
    caracteristicas: ["Se entrega a domicilio", "Personalizado", "Producto fresco"],
    precio: "$630",
    facilidades:
      "Pago en efectivo o transferencia. El envío se cobra aparte según el lugar de entrega.",
    destacado: true,
  },
  {
    slug: "desayuno-buen-dia",
    nombre: "Desayuno Sorpresa con Amor",
    imagen: "/productos/desayuno-sorpresa-con-amor.jpg",
    categoria: "Buen día",
    paraQuien: "Para la persona que quiere impresionar a alguien.",
    beneficio: "La seguridad de que el desayuno llegará bien a su destino.",
    caracteristicas: ["Se entrega a domicilio", "Personalizado", "Producto fresco"],
    precio: "$630",
    facilidades:
      "Pago en efectivo o transferencia. El envío se cobra aparte según el lugar de entrega.",
    destacado: true,
  },
  {
    slug: "desayuno-feliz-cumpleanos",
    nombre: "Desayuno Feliz Cumpleaños",
    imagen: "/productos/desayuno-feliz-cumpleanos.jpg",
    categoria: "Cumpleaños",
    caracteristicas: [
      "Se entrega a domicilio",
      "Globo",
      "2 rosas",
      "Waffles",
      "Fruta",
      "Gelatina",
      "Jugo",
      "Sandwich jamón (pollo $20. +)",
    ],
    variantesPrecio: [
      { etiqueta: "Base de cartón 35x25cm.", precio: "$730" },
      { etiqueta: "Base de madera 30x300cm.", precio: "$820" },
    ],
    facilidades:
      "Pago en efectivo o transferencia. El envío se cobra aparte según el lugar de entrega.",
  },
  {
    slug: "desayuno-clavel",
    nombre: "Desayuno Clavel",
    imagen: "/productos/desayuno-clavel.jpg",
    categoria: "Cumpleaños",
    caracteristicas: [
      "Se entrega a domicilio",
      "Jugo",
      "Café",
      "1 flor",
      "Waffles c/Fruta",
      "Baguette jamón (pollo $20.+)",
    ],
    variantesPrecio: [
      { etiqueta: "Caja de cartón", precio: "$470.00" },
      { etiqueta: "Base de madera", precio: "$550" },
    ],
    facilidades:
      "Pago en efectivo o transferencia. El envío se cobra aparte según el lugar de entrega.",
  },
  {
    slug: "desayuno-jardin-floral",
    nombre: "Desayuno Jardín Floral",
    imagen: "/productos/desayuno-jardin-floral.jpg",
    categoria: "Cumpleaños",
    caracteristicas: [
      "Se entrega a domicilio",
      "Base de madera",
      "Flores variadas (cambia precio según temporada o flor seleccionada) 🌷",
      "Jugo de naranja / verde",
      "Galleta decorativa",
      "Waffles c/fruta",
      "Gelatina c/fruta según disponible",
      "Baguette de pollo",
    ],
    precio: "$1180",
    facilidades:
      "Pago en efectivo o transferencia. El envío se cobra aparte según el lugar de entrega.",
    destacado: true,
  },
];

export function productoPorSlug(slug: string): Producto | undefined {
  return PRODUCTOS.find((p) => p.slug === slug);
}
