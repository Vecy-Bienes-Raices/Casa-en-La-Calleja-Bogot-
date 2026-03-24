/**
 * 🌍 CONFIGURACIÓN UNIVERSAL VECY - CASA POLO CLUB
 */

const propertyConfig = {
  // 1. SEO
  seo: {
    title: "Casa Chalet en Venta/Permuta - La Calleja, Usaquén, Bogotá | 239m²",
    description: "Oportunidad única en La Calleja. Casa chalet de 239m² con 3 habitaciones, 3 baños, estudio, terrazas y remodelación integral. Venta o Permuta.",
    keywords: "Casa en Venta, La Calleja, Usaquén, Bogotá, Casa Chalet, Permuta Inmueble, Bienes Raíces",
    ogUrl: "https://casa-la-calleja-bogota.netlify.app/", 
    ogImage: "assets/1.jpg", 
    author: "Vecy Bienes Raíces", 
    copyright: "2026"
  },
  
  // 2. Encabezado Principal
  infoPrincipal: {
    headerBadge: "🏡 ¡Tu Nuevo Hogar en La Calleja te Espera! ✨",
    tituloHtml: "CASA CHALET EN LA CALLEJA - USAQUÉN, BOGOTÁ",
    precioVenta: "<span style='text-decoration: line-through; font-size: 0.7em; opacity: 0.9; display: block;'>Valor Comercial Estimado</span><span style='color: #FFD700; font-size: 1.2em; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);'>Hoy: $890.000.000</span>",
    valorAdmin: "$950.000",
    labelExtra: "💵 Admón (con dcto)"
  },

  // 3. Rejilla de Detalles
  detalles: [
    { label: "Área Total", value: "239,03 m²", icon: "📐" },
    { label: "Habitaciones", value: "3", icon: "🛏️" },
    { label: "Baños", value: "3", icon: "🚿" },
    { label: "Parqueaderos", value: "2", icon: "🚗" },
    { label: "Pisos", value: "3", icon: "🏢" },
    { label: "Antigüedad", value: "50 años", icon: "📅" }
  ],

  // 4. Características Internas
  caracteristicasInternas: [
    { name: "Chimenea tradicional", emoji: "🔥" },
    { name: "Estudios (2)", emoji: "📚" },
    { name: "Terrazas (2)", emoji: "🌅" },
    { name: "Zona de barbacoa", emoji: "🍖" },
    { name: "Cocina integral", emoji: "🍳" },
    { name: "Remodelada integralmente", emoji: "⚒️" }
  ],
  destacadoInterno: "Casa chalet completamente remodelada hace 11 años (tubería PVC y acometidas eléctricas nuevas), con ambientes amplios e independientes y excelente iluminación.",

  // 5. Características Externas
  caracteristicasExternas: [
    { name: "Conjunto cerrado (25 casas)", emoji: "🏡" },
    { name: "Vigilancia 24/7 y Portería", emoji: "👮" },
    { name: "Cerca de Autopista Norte y Av. Cra 19", emoji: "🛣️" },
    { name: "Cerca de Unibosque y Country Club", emoji: "🏫" },
    { name: "Transporte público y zonas comerciales", emoji: "🚌" },
    { name: "Zonas Residenciales y Parques", emoji: "🌳" }
  ],
  destacadoUbicacion: "Ubicación privilegiada en La Calleja, Usaquén. Sector exclusivo y tranquilo, a pocos metros de las arterias principales del norte de Bogotá.",

  // 6. Mapa
  mapa: {
    urlEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.2201449852434!2d-74.0536486!3d4.7200000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f8538c642e977%3A0xc368a51351112d7d!2sLa%20Calleja%2C%20Usaqu%C3%A9n%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco", // Ajustar a ubicación exacta si es necesario
    titulo: "Ubicación La Calleja"
  },

  // 7. Descripción Final
  descripcionFinal: {
    titulo: "🔑 Oportunidad Excepcional",
    texto: `
    <div class="roi-item">
      <p><strong>Remodelación de Calidad:</strong> Tuberías en PVC y sistema eléctrico actualizado, brindando tranquilidad a largo plazo.</p>
      <p><strong>Flexibilidad de Negocio:</strong> Se acepta permuta hasta por el 60% del valor del inmueble.</p>
      <div style="margin-top: 30px; text-align: center;">
          <a href="analisis.html" class="btn-analisis">
             📋 VER MÁS DETALLES DE LA CASA
          </a>
      </div>
    </div>`
  },

  // 8. Multimedia
  multimedia: {
    videoUrl: "assets/Casa-La-Calleja.mp4", 
    videoThumbnail: "assets/1.jpg", 
    imagesCount: 47, 
    imagePrefix: "assets/",
    imageExtension: ".jpg",
    imagesList: [
      "assets/1.jpg", "assets/2.jpg", "assets/3.jpg", "assets/4.jpg", "assets/5.jpg", "assets/6.jpg", "assets/7.jpg", "assets/8.jpg", "assets/9.jpg", "assets/10.jpg",
      "assets/11.jpg", "assets/12.jpg", "assets/13.jpg", "assets/14.jpg", "assets/15.jpg", "assets/16.jpg", "assets/17.jpg", "assets/18.jpg", "assets/19.jpg", "assets/20.jpg",
      "assets/21.jpg", "assets/22.jpg", "assets/23.jpg", "assets/24.jpg", "assets/25.jpg", "assets/26.jpg", "assets/27.jpg", "assets/28.jpg", "assets/29.jpg", "assets/30.jpg",
      "assets/31.jpg", "assets/32.jpg", "assets/33.jpg", "assets/34.jpg", "assets/35.jpg", "assets/36.jpg", "assets/37.jpg", "assets/38.jpg", "assets/39.jpg", "assets/40.jpg",
      "assets/41.jpg", "assets/42.jpg", "assets/43.jpg", "assets/44.jpg", "assets/45.jpg", "assets/46.jpg", "assets/47.jpg"
    ]
  },

  // 9. Botón Compartir
  share: {
    whatsappText: `🏡 *CASA EN VENTA - LA CALLEJA, BOGOTÁ*

💰 *Precio:* *$890.000.000 COP* (Negociables)
📍 *Ubicación:* La Calleja, Usaquén
📐 *Área Construida:* 150.38 m² | *Total:* 239.03 m²
🛏️ *Habitaciones:* 3 | 🚿 *Baños:* 3 | 📚 *Estudios:* 2
🚗 *Parqueaderos:* 2 | 🏢 *Pisos:* 3

✨ *Destacado:* Remodelación integral, 2 terrazas, zona BBQ, conjunto cerrado con vigilancia 24/7. ¡Se acepta permuta!

🔗 *Ver Fotos y Detalles:*
https://casa-la-calleja-bogota.netlify.app/`
  }
};
