import type { Config } from "./tipos";

// Configuración generada con el wizard (/configurar).
export const CONFIG: Config = {
  marca: {
    negocio: "Desayunos y arreglos sorpresa SAMAY",
    descripcion:
      "Desayunos sorpresa entregados a domicilio, creados para sorprender a tu persona favorita, Autlán de Navarro, Jalisco",
    logo: "/logo.png",
    primario: "#be185d",
    secundario: "#7c3aed",
    fondo: "claro",
    whatsappPrincipal: "5213171004240",
    ciudad: "Autlán de Navarro",
    enlace: "",
  },
  vendedores: [
    { slug: "maira", nombre: "Maira", whatsapp: "5213171004240" },
  ],
  categorias: ["Cumpleaños", "Aniversario", "Reconciliación", "Buen día"],
  mensajePlantilla:
    "{saludo}vi tu catálogo y me interesa {producto}. ¡Quiero comprarlo!",
};
