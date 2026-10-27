/**
 * INFINITY CHIMIE (INFINITY PHARMACEUTICALS)
 * Interactive Catalog & Quick Conversion Engine
 */

const WHATSAPP_NUMBER = "573124916138";

// 29 Official Products Database
const PRODUCTS_DATA = [
  // --- CATEGORÍA: SARMS ---
  {
    id: "sarms-yk11",
    name: "YK 11",
    compound: "Myostatin Inhibitor 10mg/ml",
    category: "sarms",
    categoryLabel: "SARMs",
    benefit: "Potente constructor de masa muscular seca y fuerza extrema mediante inhibición de miostatina.",
    price: 179900,
    priceFormatted: "$179.900 COP",
    image: "assets/prod_sarms.jpg",
    badge: "Masa & Fuerza",
    grade: "Fórmula 30ml"
  },
  {
    id: "sarms-rad140",
    name: "TESTOLON (RAD 140)",
    compound: "RAD-140 Anabolic SARM",
    category: "sarms",
    categoryLabel: "SARMs",
    benefit: "Incremento extremo de fuerza, vascularización y resistencia muscular de alto rendimiento.",
    price: 169900,
    priceFormatted: "$169.900 COP",
    image: "assets/prod_sarms.jpg",
    badge: "Fuerza Extrema",
    grade: "Fórmula 30ml"
  },
  {
    id: "sarms-mk2866",
    name: "OSTARINE (MK 2866)",
    compound: "Enobosarm MK-2866",
    category: "sarms",
    categoryLabel: "SARMs",
    benefit: "Preserva masa muscular magra y define con mínima retención. Ideal para etapas de inicio o corte.",
    price: 159900,
    priceFormatted: "$159.900 COP",
    image: "assets/prod_sarms.jpg",
    badge: "Definición Magra",
    grade: "Fórmula 30ml"
  },
  {
    id: "sarms-lgd4033",
    name: "LIGANDROL (LGD 4033)",
    compound: "Ligandrol LGD-4033",
    category: "sarms",
    categoryLabel: "SARMs",
    benefit: "Gran promotor de volumen muscular denso y ganancia de fuerza acelerada en periodos cortos.",
    price: 165000,
    priceFormatted: "$165.000 COP",
    image: "assets/prod_sarms.jpg",
    badge: "Volumen Rápido",
    grade: "Fórmula 30ml"
  },
  {
    id: "sarms-mk677",
    name: "IBUTAMOREN (MK 677)",
    compound: "GH Secretagogue MK-677",
    category: "sarms",
    categoryLabel: "SARMs",
    benefit: "Estimulador endógeno de la hormona de crecimiento, mejora el descanso profundo, apetito y volumen.",
    price: 175000,
    priceFormatted: "$175.000 COP",
    image: "assets/prod_sarms.jpg",
    badge: "GH Booster",
    grade: "Fórmula 30ml"
  },
  {
    id: "sarms-gw501516",
    name: "CARDARINE (GW 501516)",
    compound: "PPAR-δ Agonist",
    category: "sarms",
    categoryLabel: "SARMs",
    benefit: "Oxidación acelerada de tejido adiposo y resistencia cardiovascular insuperable para entrenamientos intensos.",
    price: 159900,
    priceFormatted: "$159.900 COP",
    image: "assets/prod_sarms.jpg",
    badge: "Resistencia Top",
    grade: "Fórmula 30ml"
  },

  // --- CATEGORÍA: ANABÓLICOS ORALES ---
  {
    id: "oral-winstrol",
    name: "WINSTROL ORAL",
    compound: "Estanozolol 10mg",
    category: "orales",
    categoryLabel: "Anabólicos Orales",
    benefit: "Definición extrema, rocosidad muscular sin retención de líquidos y explosión de fuerza.",
    price: 145000,
    priceFormatted: "$145.000 COP",
    image: "assets/prod_oral.jpg",
    badge: "Dureza & Rocosidad",
    grade: "100 Tabletas"
  },
  {
    id: "oral-anavar",
    name: "ANAVAR",
    compound: "Oxandrolona 10mg",
    category: "orales",
    categoryLabel: "Anabólicos Orales",
    benefit: "Fuerza, densidad y definición premium con mínimo impacto secundario y cero retención de agua.",
    price: 185000,
    priceFormatted: "$185.000 COP",
    image: "assets/prod_oral.jpg",
    badge: "Grado Élite",
    grade: "100 Tabletas"
  },
  {
    id: "oral-dianabol",
    name: "DIANABOL",
    compound: "Metandienona 10mg",
    category: "orales",
    categoryLabel: "Anabólicos Orales",
    benefit: "El clásico predilecto para aumentos masivos de volumen muscular y fuerza explosiva desde la semana 1.",
    price: 135000,
    priceFormatted: "$135.000 COP",
    image: "assets/prod_oral.jpg",
    badge: "Volumen Masivo",
    grade: "100 Tabletas"
  },
  {
    id: "oral-anadrol",
    name: "ANADROL",
    compound: "Oximetolona 50mg",
    category: "orales",
    categoryLabel: "Anabólicos Orales",
    benefit: "Fuerza bestial inigualable y rápida ganancia de tamaño muscular para culturismo avanzado.",
    price: 155000,
    priceFormatted: "$155.000 COP",
    image: "assets/prod_oral.jpg",
    badge: "Potencia Alta",
    grade: "60 Tabletas"
  },
  {
    id: "oral-turinabol",
    name: "TURINABOL",
    compound: "4-Clorodehidrometiltestosterona 10mg",
    category: "orales",
    categoryLabel: "Anabólicos Orales",
    benefit: "Ganancia de masa magra de alta calidad biológica, sin aromatización ni retención hídrica.",
    price: 149000,
    priceFormatted: "$149.000 COP",
    image: "assets/prod_oral.jpg",
    badge: "Masa Magra",
    grade: "100 Tabletas"
  },
  {
    id: "oral-proviron",
    name: "PROVIRON",
    compound: "Mesterolona 25mg",
    category: "orales",
    categoryLabel: "Anabólicos Orales",
    benefit: "Optimiza los niveles de testosterona libre, sinergiza otros compuestos y mejora la vascularización.",
    price: 139000,
    priceFormatted: "$139.000 COP",
    image: "assets/prod_oral.jpg",
    badge: "Optimizador",
    grade: "50 Tabletas"
  },

  // --- CATEGORÍA: ANABÓLICOS INYECTABLES ---
  {
    id: "inj-testo-enantato",
    name: "TESTOSTERONA ENANTATO",
    compound: "Testosterone Enanthate 250mg/ml",
    category: "inyectables",
    categoryLabel: "Anabólicos Inyectables",
    benefit: "Base clásica indispensable para cualquier ciclo de construcción de masa muscular sólida y fuerza.",
    price: 149900,
    priceFormatted: "$149.900 COP",
    image: "assets/prod_injectable.jpg",
    badge: "Base Indispensable",
    grade: "Vial 10ml Estéril"
  },
  {
    id: "inj-testo-propionato",
    name: "TESTOSTERONA PROPIONATO",
    compound: "Testosterone Propionate 100mg/ml",
    category: "inyectables",
    categoryLabel: "Anabólicos Inyectables",
    benefit: "Testosterona de acción ultrarrápida perfecta para etapas de definición, corte y precompetencia.",
    price: 139900,
    priceFormatted: "$139.900 COP",
    image: "assets/prod_injectable.jpg",
    badge: "Acción Rápida",
    grade: "Vial 10ml Estéril"
  },
  {
    id: "inj-boldenona",
    name: "BOLDENONA",
    compound: "Boldenone Undecylenate 300mg/ml",
    category: "inyectables",
    categoryLabel: "Anabólicos Inyectables",
    benefit: "Ganancia muscular constante y limpia con excelente vascularización y estimulación del apetito.",
    price: 155000,
    priceFormatted: "$155.000 COP",
    image: "assets/prod_injectable.jpg",
    badge: "Vascularización",
    grade: "Vial 10ml Estéril"
  },
  {
    id: "inj-primobolan",
    name: "PRIMOBOLAN",
    compound: "Metenolona Enantato 100mg/ml",
    category: "inyectables",
    categoryLabel: "Anabólicos Inyectables",
    benefit: "El compuesto preferido por culturistas para masa magra limpia, altísimo perfil de pureza y estética.",
    price: 230000,
    priceFormatted: "$230.000 COP",
    image: "assets/prod_injectable.jpg",
    badge: "Pureza Élite",
    grade: "Vial 10ml Estéril"
  },
  {
    id: "inj-masteron",
    name: "MASTERON",
    compound: "Drostanolona Propionato 100mg/ml",
    category: "inyectables",
    categoryLabel: "Anabólicos Inyectables",
    benefit: "Dureza y corte de competición, actúa como anti-estrógeno suave y otorga un acabado rocoso.",
    price: 169900,
    priceFormatted: "$169.900 COP",
    image: "assets/prod_injectable.jpg",
    badge: "Corte Competición",
    grade: "Vial 10ml Estéril"
  },
  {
    id: "inj-tren-acetato",
    name: "TRENBOLONA ACETATO",
    compound: "Trenbolone Acetate 100mg/ml",
    category: "inyectables",
    categoryLabel: "Anabólicos Inyectables",
    benefit: "Máxima potencia anabólica: destrucción de grasa corporal y ganancias musculares rocosas sin aromatizar.",
    price: 179900,
    priceFormatted: "$179.900 COP",
    image: "assets/prod_injectable.jpg",
    badge: "Potencia Máxima",
    grade: "Vial 10ml Estéril"
  },
  {
    id: "inj-tren-enantato",
    name: "TRENBOLONA ENANTATO",
    compound: "Trenbolone Enanthate 200mg/ml",
    category: "inyectables",
    categoryLabel: "Anabólicos Inyectables",
    benefit: "Versión de liberación prolongada de la potente trenbolona para menor frecuencia de aplicación.",
    price: 189900,
    priceFormatted: "$189.900 COP",
    image: "assets/prod_injectable.jpg",
    badge: "Liberación Prolongada",
    grade: "Vial 10ml Estéril"
  },
  {
    id: "inj-deca",
    name: "DECA-DURABOLIN",
    compound: "Nandrolona Decanoato 250mg/ml",
    category: "inyectables",
    categoryLabel: "Anabólicos Inyectables",
    benefit: "Incremento masivo de volumen muscular y protección/regeneración articular superior durante cargas pesadas.",
    price: 165000,
    priceFormatted: "$165.000 COP",
    image: "assets/prod_injectable.jpg",
    badge: "Protección Articular",
    grade: "Vial 10ml Estéril"
  },
  {
    id: "inj-sustanon",
    name: "SUSTANON",
    compound: "4 Testosterone Esters Blend 250mg/ml",
    category: "inyectables",
    categoryLabel: "Anabólicos Inyectables",
    benefit: "Mezcla de cuatro ésteres para picos inmediatos y liberación estable a lo largo de los días.",
    price: 149900,
    priceFormatted: "$149.900 COP",
    image: "assets/prod_injectable.jpg",
    badge: "Liberación Estable",
    grade: "Vial 10ml Estéril"
  },

  // --- CATEGORÍA: POST CICLO Y COMPLEMENTOS ---
  {
    id: "pct-clomid",
    name: "CLOMID",
    compound: "Citrato de Clomifeno 50mg",
    category: "pct",
    categoryLabel: "Post Ciclo & Complementos",
    benefit: "Estimulador clave de gonadotropinas para la recuperación acelerada del eje hormonal natural tras un ciclo.",
    price: 110000,
    priceFormatted: "$110.000 COP",
    image: "assets/prod_pct.jpg",
    badge: "Reactivador HPTA",
    grade: "50 Cápsulas"
  },
  {
    id: "pct-novaldex",
    name: "NOVALDEX",
    compound: "Tamoxifeno Citrato 20mg",
    category: "pct",
    categoryLabel: "Post Ciclo & Complementos",
    benefit: "Modulador selectivo de estrógenos (SERM) fundamental para bloquear y prevenir ginecomastia.",
    price: 105000,
    priceFormatted: "$105.000 COP",
    image: "assets/prod_pct.jpg",
    badge: "Anti-Ginecomastia",
    grade: "60 Cápsulas"
  },
  {
    id: "pct-arimidex",
    name: "ARIMIDEX",
    compound: "Anastrozol 1mg",
    category: "pct",
    categoryLabel: "Post Ciclo & Complementos",
    benefit: "Inhibidor de aromatasa premium que mantiene los estrógenos bajo control y previene retención de líquidos.",
    price: 140000,
    priceFormatted: "$140.000 COP",
    image: "assets/prod_pct.jpg",
    badge: "Control Estrógeno",
    grade: "30 Cápsulas"
  },
  {
    id: "pct-hcg",
    name: "HCG",
    compound: "Gonadotropina Coriónica Humana 5000 UI",
    category: "pct",
    categoryLabel: "Post Ciclo & Complementos",
    benefit: "Reactivador testicular de acción directa, indispensable en terapia intra-ciclo y reinicio.",
    price: 125000,
    priceFormatted: "$125.000 COP",
    image: "assets/prod_pct.jpg",
    badge: "Soporte Testicular",
    grade: "Vial Liofilizado"
  },
  {
    id: "pct-liv52",
    name: "LIV-52",
    compound: "Protector & Desintoxicante Hepático Clínico",
    category: "pct",
    categoryLabel: "Post Ciclo & Complementos",
    benefit: "Cuidado orgánico y clínico de las enzimas del hígado antes, durante y después del consumo de orales.",
    price: 65000,
    priceFormatted: "$65.000 COP",
    image: "assets/prod_pct.jpg",
    badge: "Salud Hepática",
    grade: "100 Tabletas"
  },

  // --- CATEGORÍA: FAT BURN (QUEMADORES) ---
  {
    id: "fatburn-clembuterol",
    name: "CLEMBUTEROL",
    compound: "Clenbuterol Clorhidrato 40mcg",
    category: "fatburn",
    categoryLabel: "Fat Burn (Quemadores)",
    benefit: "Potente termogénico y broncodilatador beta-2 que dispara la tasa metabólica y preserva músculo magro.",
    price: 110000,
    priceFormatted: "$110.000 COP",
    image: "assets/prod_fatburn.jpg",
    badge: "Termogénico Top",
    grade: "100 Tabletas"
  },
  {
    id: "fatburn-t3",
    name: "T3 (CYTOMEL)",
    compound: "Liotironina Sódica 25mcg",
    category: "fatburn",
    categoryLabel: "Fat Burn (Quemadores)",
    benefit: "Hormona tiroidea bioactiva que acelera drásticamente la tasa basal de quema calórica en etapas de corte.",
    price: 120000,
    priceFormatted: "$120.000 COP",
    image: "assets/prod_fatburn.jpg",
    badge: "Acelerador Tiroideo",
    grade: "60 Tabletas"
  },
  {
    id: "fatburn-lipoburn",
    name: "LIPOBURN",
    compound: "Advanced Thermogenic Multi-Complex",
    category: "fatburn",
    categoryLabel: "Fat Burn (Quemadores)",
    benefit: "Fórmula sinérgica diseñada para inhibición selectiva del apetito y máxima energía durante el déficit calórico.",
    price: 115000,
    priceFormatted: "$115.000 COP",
    image: "assets/prod_fatburn.jpg",
    badge: "Definición Total",
    grade: "60 Cápsulas"
  }
];

// App State
let activeCategory = "all";
let searchQuery = "";
let cartStack = [];

// Initialize DOM
document.addEventListener("DOMContentLoaded", () => {
  renderCategoryBadges();
  renderProducts();
  setupEventListeners();
  setupHeroSlider();
  setupFAQ();
  setupMobileMenu();
});

// Category Badges Count
function renderCategoryBadges() {
  const counts = {
    all: PRODUCTS_DATA.length,
    sarms: PRODUCTS_DATA.filter(p => p.category === "sarms").length,
    orales: PRODUCTS_DATA.filter(p => p.category === "orales").length,
    inyectables: PRODUCTS_DATA.filter(p => p.category === "inyectables").length,
    pct: PRODUCTS_DATA.filter(p => p.category === "pct").length,
    fatburn: PRODUCTS_DATA.filter(p => p.category === "fatburn").length
  };

  Object.keys(counts).forEach(cat => {
    const el = document.getElementById(`count-${cat}`);
    if (el) el.textContent = counts[cat];
  });
}

// Render Products Grid
function renderProducts() {
  const grid = document.getElementById("products-grid");
  const countEl = document.getElementById("visible-products-count");
  if (!grid) return;

  const filtered = PRODUCTS_DATA.filter(prod => {
    const matchesCat = (activeCategory === "all") || (prod.category === activeCategory);
    const searchClean = searchQuery.trim().toLowerCase();
    const matchesSearch = !searchClean || 
      prod.name.toLowerCase().includes(searchClean) || 
      prod.compound.toLowerCase().includes(searchClean) || 
      prod.benefit.toLowerCase().includes(searchClean);
    return matchesCat && matchesSearch;
  });

  if (countEl) {
    countEl.textContent = `${filtered.length} productos disponibles`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #FFFFFF; border-radius: 16px; border: 1px dashed #CBD5E1; box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04);">
        <p style="font-size: 1.4rem; color: #0B53A4; font-weight: 700; margin-bottom: 8px;">No encontramos productos con tu búsqueda</p>
        <p style="color: #64748B; margin-bottom: 20px;">Intenta con otro término o consulta disponibilidad directamente con nuestro asesor.</p>
        <a href="https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Infinity%20Chimie,%20estoy%20buscando%20un%20producto%20espec%C3%ADfico" target="_blank" class="btn-secondary-wa">Consultar en WhatsApp</a>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(prod => {
    const isAdded = cartStack.some(item => item.id === prod.id);
    const waUrl = getProductWhatsAppUrl(prod);

    return `
      <article class="product-card" id="card-${prod.id}">
        <!-- Image with White Packaging Showcase -->
        <div class="product-image-container">
          <span class="product-cat-pill">${prod.categoryLabel}</span>
          <span class="product-grade-badge">${prod.badge}</span>
          <img src="${prod.image}" alt="${prod.name} - Infinity Pharmaceuticals" loading="lazy">
        </div>

        <!-- Body Content -->
        <div class="product-body">
          <h3 class="product-name">${prod.name}</h3>
          <span class="product-compound">${prod.compound}</span>
          <p class="product-benefit">${prod.benefit}</p>

          <!-- Footer & Price -->
          <div class="product-footer">
            <div class="price-row">
              <span class="price-label">Precio Colombia</span>
              <span class="price-amount">${prod.priceFormatted}</span>
            </div>

            <div class="card-actions">
              <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-wa" title="Pedir este producto por WhatsApp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 18.06c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.13 8.13 0 0 1-1.25-4.29c0-4.5 3.66-8.16 8.16-8.16 2.18 0 4.23.85 5.77 2.39a8.11 8.11 0 0 1 2.39 5.77c-.01 4.5-3.67 8.14-8.08 8.14zm4.47-6.11c-.25-.12-1.46-.72-1.68-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.35-.77-1.85c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.08 0 1.23.89 2.42 1.02 2.59.12.17 1.76 2.68 4.26 3.76.6.26 1.06.41 1.42.53.6.19 1.15.16 1.58.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31z"/>
                </svg>
                Pedir por WhatsApp
              </a>

              <button type="button" class="btn-add-cart ${isAdded ? 'added' : ''}" onclick="toggleProductInStack('${prod.id}')" title="${isAdded ? 'Quitar de orden combinada' : 'Añadir a orden combinada'}">
                ${isAdded ? '✓' : '+'}
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// Generate direct WhatsApp link
function getProductWhatsAppUrl(product) {
  const message = `Hola Infinity Chimie 🇨🇴, quiero pedir el siguiente producto de su catálogo oficial:%0A%0A*Producto:* ${encodeURIComponent(product.name)}%0A*Concentración:* ${encodeURIComponent(product.compound)}%0A*Categoría:* ${encodeURIComponent(product.categoryLabel)}%0A*Precio:* ${encodeURIComponent(product.priceFormatted)}%0A%0A¿Tienen disponibilidad y cuáles son los medios de pago para despacho a mi ciudad?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

// Event Listeners for Filters & Search
function setupEventListeners() {
  // Category tabs
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.getAttribute("data-category");
      renderProducts();
    });
  });

  // Search input
  const searchInput = document.getElementById("catalog-search");
  const clearBtn = document.getElementById("search-clear");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      if (clearBtn) {
        clearBtn.style.display = searchQuery ? "block" : "none";
      }
      renderProducts();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      searchQuery = "";
      clearBtn.style.display = "none";
      renderProducts();
    });
  }
}

// Cart / Multi-Product Stack System
window.toggleProductInStack = function(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const existingIndex = cartStack.findIndex(p => p.id === productId);
  if (existingIndex > -1) {
    cartStack.splice(existingIndex, 1);
  } else {
    cartStack.push(product);
  }

  updateStackBar();
  renderProducts();
};

window.clearProductStack = function() {
  cartStack = [];
  updateStackBar();
  renderProducts();
};

function updateStackBar() {
  const stackBar = document.getElementById("stack-bar");
  const countEl = document.getElementById("stack-count");
  const totalEl = document.getElementById("stack-total");
  const sendBtn = document.getElementById("stack-send-btn");

  if (!stackBar) return;

  if (cartStack.length === 0) {
    stackBar.classList.remove("visible");
    return;
  }

  stackBar.classList.add("visible");
  const totalSum = cartStack.reduce((sum, item) => sum + item.price, 0);

  if (countEl) countEl.textContent = `${cartStack.length} ${cartStack.length === 1 ? 'producto' : 'productos'}`;
  if (totalEl) totalEl.textContent = `$${totalSum.toLocaleString("es-CO")} COP`;

  if (sendBtn) {
    const productListText = cartStack.map((item, idx) => `${idx + 1}. ${item.name} (${item.compound}) - ${item.priceFormatted}`).join("%0A");
    const fullMsg = `Hola Infinity Chimie 🇨🇴, deseo realizar una orden combinada de los siguientes productos:%0A%0A${productListText}%0A%0A*Total Estimado:* $${totalSum.toLocaleString("es-CO")} COP%0A%0APor favor confirmarme disponibilidad y datos bancarios para envío express a mi domicilio.`;
    sendBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${fullMsg}`;
  }
}

// FAQ Accordion
function setupFAQ() {
  const items = document.querySelectorAll(".faq-item");
  items.forEach(item => {
    const question = item.querySelector(".faq-question");
    if (!question) return;
    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      items.forEach(i => i.classList.remove("active"));
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
}

// Mobile Menu
function setupMobileMenu() {
  const toggle = document.getElementById("mobile-menu-toggle");
  const menu = document.getElementById("nav-menu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    menu.classList.toggle("open");
  });

  const links = menu.querySelectorAll(".nav-link");
  links.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
    });
  });
}

// ============================================================================
// HERO SLIDER CONTROLLER
// ============================================================================
function setupHeroSlider() {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".slider-dot");
  const prevBtn = document.getElementById("slider-prev");
  const nextBtn = document.getElementById("slider-next");
  const slider = document.getElementById("hero-slider");

  if (!slides.length) return;

  let currentSlide = 0;
  let autoPlayTimer = null;
  const slideInterval = 5500;

  function showSlide(index) {
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;
    currentSlide = index;

    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === currentSlide);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentSlide);
    });
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function startAutoPlay() {
    stopAutoPlay();
    autoPlayTimer = setInterval(nextSlide, slideInterval);
  }

  function stopAutoPlay() {
    if (autoPlayTimer) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      startAutoPlay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();
      startAutoPlay();
    });
  }

  dots.forEach(dot => {
    dot.addEventListener("click", (e) => {
      const idx = parseInt(e.target.getAttribute("data-index"), 10);
      if (!isNaN(idx)) {
        showSlide(idx);
        startAutoPlay();
      }
    });
  });

  if (slider) {
    slider.addEventListener("mouseenter", stopAutoPlay);
    slider.addEventListener("mouseleave", startAutoPlay);

    // Touch swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    slider.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      const diff = touchEndX - touchStartX;
      if (Math.abs(diff) > 40) {
        if (diff < 0) {
          nextSlide();
        } else {
          prevSlide();
        }
        startAutoPlay();
      }
    }
  }

  // Filter triggers inside slides ("VER LÍNEA SARMS", "VER INYECTABLES", etc.)
  const filterTriggers = document.querySelectorAll(".hero-filter-trigger");
  filterTriggers.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetCat = btn.getAttribute("data-target-category");
      if (targetCat) {
        const catBtn = document.querySelector(`.filter-btn[data-category="${targetCat}"]`);
        if (catBtn) {
          catBtn.click();
        }
      }
    });
  });

  startAutoPlay();
}
