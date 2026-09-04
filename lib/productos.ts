import type { Producto } from "./tipos";

/**
 * ================================================================
 *  TUS PRODUCTOS O SERVICIOS.
 *  Agrega más productos aquí cuando tengas otros (arreglos, combos, etc.).
 * ================================================================
 */
export const PRODUCTOS: Producto[] = [
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
  {
    slug: "desayuno-mi-amor",
    nombre: "Desayuno Mi Amor",
    imagen: "/productos/desayuno-mi-amor.jpg",
    categoria: "Aniversario",
    caracteristicas: [
      "Se entrega a domicilio",
      "Base de madera",
      "Arreglo floral 24 rosas / 4 girasoles",
      "Cuadro con foto",
      "Waffles",
      "Fruta",
      "Galleta decorativa",
      "Baguette de pollo",
      "Jugo de naranja",
      "Yogurth bebible",
    ],
    precio: "$2450",
    facilidades:
      "Pago en efectivo o transferencia. El envío se cobra aparte según el lugar de entrega.",
  },
  {
    slug: "desayuno-mi-persona-favorita",
    nombre: "Desayuno Mi Persona Favorita",
    imagen: "/productos/desayuno-mi-persona-favorita.jpg",
    categoria: "Aniversario",
    caracteristicas: [
      "Se entrega a domicilio",
      "Arreglo floral",
      "Jugo de naranja",
      "Café frío latte",
      "Baguette de pollo",
      "Galleta decorativa",
      "Manzana",
      "Barra de chocolate",
      "Base de madera 30x30cm.",
    ],
    precio: "$870",
    facilidades:
      "Pago en efectivo o transferencia. El envío se cobra aparte según el lugar de entrega.",
  },
  {
    slug: "desayuno-rosas-amor",
    nombre: "Desayuno Rosas Amor",
    imagen: "/productos/desayuno-rosas-amor.jpg",
    categoria: "Aniversario",
    caracteristicas: [
      "Se entrega a domicilio",
      "Arreglo floral 12 rosas",
      "Jugo",
      "Yogurth bebible",
      "Galleta decorativa",
      "Fruta",
      "Barra de chocolate",
      "3 tacos de barbacoa / baguette de pollo",
      "Base de madera 40x30cm.",
    ],
    precio: "$1230",
    facilidades:
      "Pago en efectivo o transferencia. El envío se cobra aparte según el lugar de entrega.",
  },
  {
    slug: "desayuno-fit-amor",
    nombre: "Desayuno Fit Amor",
    imagen: "/productos/desayuno-fit-amor.jpg",
    categoria: "Aniversario",
    caracteristicas: [
      "Se entrega a domicilio",
      "Jugo verde",
      "Gelatina de agua",
      "Fruta",
      "Sandwich de pollo",
      "Barra de chocolate",
      "2 rosas",
      "Base de madera 30x30cm.",
    ],
    precio: "$630",
    facilidades:
      "Pago en efectivo o transferencia. El envío se cobra aparte según el lugar de entrega.",
  },
  {
    slug: "caja-de-carton-con-tapa",
    nombre: "Caja de Cartón con Tapa",
    imagen: "/productos/caja-de-carton-con-tapa.jpg",
    categoria: "Aniversario",
    caracteristicas: [
      "Se entrega a domicilio",
      "Fruta",
      "Jugo",
      "Galleta decorativa",
      "Barra de chocolate",
      "Jugo de naranja",
      "Baguette de pollo",
    ],
    variantesPrecio: [
      { etiqueta: "2 rosas", precio: "$575" },
      { etiqueta: "Girasol", precio: "$595" },
    ],
    facilidades:
      "Pago en efectivo o transferencia. El envío se cobra aparte según el lugar de entrega.",
  },
  {
    slug: "desayuno-pliis-me-perdonas",
    nombre: "Desayuno Pliis Me Perdonas",
    imagen: "/productos/desayuno-pliis-me-perdonas.jpg",
    categoria: "Reconciliación",
    caracteristicas: [
      "Se entrega a domicilio",
      "Caja de cartón con tapa y mensaje",
      "Jugo",
      "Waffles",
      "Fruta",
      "Yogurth",
      "Arreglo de flores",
    ],
    precio: "$640",
    facilidades:
      "Pago en efectivo o transferencia. El envío se cobra aparte según el lugar de entrega.",
  },
  {
    slug: "caja-de-madera-con-mnsj",
    nombre: "Caja de Madera con Mensaje",
    imagen: "/productos/caja-de-madera-con-mnsj.jpg",
    categoria: "Reconciliación",
    caracteristicas: [
      "Se entrega a domicilio",
      "Botella 1800 añejo",
      "8 ferreros",
      "Caballito",
      "Frasco con pistache",
    ],
    precio: "$1480",
    facilidades:
      "Pago en efectivo o transferencia. El envío se cobra aparte según el lugar de entrega.",
  },
  {
    slug: "despertar-amor",
    nombre: "Despertar Amor",
    imagen: "/productos/despertar-amor.jpg",
    categoria: "Buen día",
    caracteristicas: [
      "Se entrega a domicilio",
      "Arreglo chico de flores",
      "Waffles",
      "Fruta",
      "Sandwich de jamón",
      "Jugo de naranja",
    ],
    precio: "$570",
    facilidades:
      "Pago en efectivo o transferencia. El envío se cobra aparte según el lugar de entrega.",
  },
  {
    slug: "wuafles-con-fruta",
    nombre: "Waffles con Fruta",
    imagen: "/productos/wuafles-con-fruta.jpg",
    categoria: "Buen día",
    caracteristicas: [
      "Se entrega a domicilio",
      "Waffles",
      "Jugo",
      "Gelatina",
      "Sandwich de jamón (pollo $20 +)",
    ],
    precio: "$520",
    facilidades:
      "Pago en efectivo o transferencia. El envío se cobra aparte según el lugar de entrega.",
  },
  {
    slug: "desayuno-amanecer",
    nombre: "Desayuno Amanecer",
    imagen: "/productos/desayuno-amanecer.jpg",
    categoria: "Buen día",
    caracteristicas: [
      "Se entrega a domicilio",
      "Arreglo de flores",
      "Barra de chocolate",
      "Yogurth c/granola",
      "Jugo de naranja",
      "Hamburguesa",
      "Fruta",
    ],
    precio: "$650",
    facilidades:
      "Pago en efectivo o transferencia. El envío se cobra aparte según el lugar de entrega.",
  },
  {
    slug: "desayuno-tacita-con-pan",
    nombre: "Desayuno Tacita con Pan",
    imagen: "/productos/desayuno-tacita-con-pan.jpg",
    categoria: "Buen día",
    caracteristicas: [
      "Se entrega a domicilio",
      "Pieza de pan",
      "Café",
      "Taza",
      "Chocolate",
      "Fruta",
      "Baguette de pollo",
      "1 rosa",
      "1 globo de helio",
    ],
    precio: "$720",
    facilidades:
      "Pago en efectivo o transferencia. El envío se cobra aparte según el lugar de entrega.",
  },
  {
    slug: "taza-con-flores",
    nombre: "Taza con Flores",
    imagen: "/productos/taza-con-flores.jpg",
    categoria: "Buen día",
    caracteristicas: [
      "Se entrega a domicilio",
      "Jugo",
      "Fruta",
      "Galleta decorada",
      "Gelatina",
      "Baguette de pollo",
    ],
    precio: "$760",
    facilidades:
      "Pago en efectivo o transferencia. El envío se cobra aparte según el lugar de entrega.",
  },
];

export function productoPorSlug(slug: string): Producto | undefined {
  return PRODUCTOS.find((p) => p.slug === slug);
}

/** Valor numérico de un producto (el más alto si tiene variantes de precio), para ordenar por precio. */
export function valorProducto(p: Producto): number {
  const precios = p.variantesPrecio
    ? p.variantesPrecio.map((v) => v.precio)
    : [p.precio ?? "0"];
  const numeros = precios.map((texto) => parseFloat(texto.replace(/[^0-9.]/g, "")) || 0);
  return Math.max(...numeros);
}
