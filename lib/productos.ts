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
    caracteristicas: ["Personalizado", "Se entrega a domicilio", "Producto fresco"],
    precio: "$630",
    facilidades:
      "Pago en efectivo o transferencia. El envío se cobra aparte según el lugar de entrega.",
    destacado: true,
  },
  {
    slug: "desayuno-aniversario",
    nombre: "Desayuno Sorpresa con Amor",
    imagen: "/productos/desayuno-sorpresa-con-amor.jpg",
    categoria: "Aniversario",
    paraQuien: "Para la persona que quiere impresionar a alguien.",
    beneficio: "La seguridad de que el desayuno llegará bien a su destino.",
    caracteristicas: ["Personalizado", "Se entrega a domicilio", "Producto fresco"],
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
    caracteristicas: ["Personalizado", "Se entrega a domicilio", "Producto fresco"],
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
    caracteristicas: ["Personalizado", "Se entrega a domicilio", "Producto fresco"],
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
      "Globo",
      "2 rosas",
      "Waffles",
      "Fruta",
      "Gelatina",
      "Jugo",
      "Sandwich jamón (pollo $20. +)",
      "Base de cartón 35x25cm.",
    ],
    precio: "$730",
    facilidades:
      "Pago en efectivo o transferencia. El envío se cobra aparte según el lugar de entrega. Con base de madera: $820.",
  },
];

export function productoPorSlug(slug: string): Producto | undefined {
  return PRODUCTOS.find((p) => p.slug === slug);
}
