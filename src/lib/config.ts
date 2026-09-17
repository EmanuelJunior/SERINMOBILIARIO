export const SITE_CONFIG = {
  name: "SERINMOBILIARIO",
  slogan: "SU CONFIANZA ES NUESTRA SEGURIDAD",
  description:
    "Ecosistema inmobiliario premium en Santa Marta, Colombia. Compra, venta, inversión y comercialización de propiedades de alta gama en el Caribe colombiano.",
  city: "Santa Marta, Magdalena, Colombia",
  address: "Cra 1C # 18-23, Edificio Bahía Marina, Santa Marta",
  phone: "+57 (300) 890-4422",
  phoneClean: "573008904422",
  email: "contacto@serinmobiliario.com",
  adminEmail: "gerencia@serinmobiliario.com",
  clientify: {
    apiUrl: process.env.NEXT_PUBLIC_CLIENTIFY_API_URL || "https://api.clientify.net/v1",
    apiKey: process.env.NEXT_PUBLIC_CLIENTIFY_API_KEY || "",
    accountName: "SERINMOBILIARIO_SANTA_MARTA",
  },
  social: {
    instagram: "https://instagram.com/serinmobiliariocol",
    whatsapp: "https://wa.me/573008904422",
    facebook: "https://facebook.com/serinmobiliariocol",
    linkedin: "https://linkedin.com/company/serinmobiliario",
  },
};
