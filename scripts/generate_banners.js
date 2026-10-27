import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = path.resolve('assets');

async function createBanners() {
  console.log('Generando imágenes promocionales para el slider...');

  // 1. Hero Background (1920x800) con atleta + gradiente blanco/azul clínico
  try {
    const athlete = await sharp(path.join(assetsDir, 'hero_athlete.jpg'))
      .resize(1920, 800, { fit: 'cover', position: 'right top' })
      .toBuffer();

    // SVG Gradient overlay to blend perfectly into the white theme:
    // Solid white/soft-slate on the left for text readability, fading to reveal the athlete on the right
    const svgOverlay = Buffer.from(`
      <svg width="1920" height="800" viewBox="0 0 1920 800" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="whiteFade" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#F8FAFC" stop-opacity="0.98"/>
            <stop offset="42%" stop-color="#F8FAFC" stop-opacity="0.94"/>
            <stop offset="65%" stop-color="#F8FAFC" stop-opacity="0.65"/>
            <stop offset="85%" stop-color="#F8FAFC" stop-opacity="0.30"/>
            <stop offset="100%" stop-color="#F8FAFC" stop-opacity="0.15"/>
          </linearGradient>
          <linearGradient id="blueGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0B53A4" stop-opacity="0.04"/>
            <stop offset="100%" stop-color="#F8FAFC" stop-opacity="0.6"/>
          </linearGradient>
        </defs>
        <rect width="1920" height="800" fill="url(#whiteFade)"/>
        <rect width="1920" height="800" fill="url(#blueGlow)"/>
        <line x1="0" y1="799" x2="1920" y2="799" stroke="#E2E8F0" stroke-width="1"/>
      </svg>
    `);

    await sharp(athlete)
      .composite([{ input: svgOverlay, blend: 'over' }])
      .jpeg({ quality: 90 })
      .toFile(path.join(assetsDir, 'hero_slider_bg.jpg'));

    console.log('✓ hero_slider_bg.jpg creado');
  } catch (err) {
    console.error('Error creando hero_slider_bg:', err);
  }

  // Helper para generar banners promocionales de cada línea (1000x700)
  const lines = [
    {
      id: 'banner_sarms.jpg',
      src: 'prod_sarms.jpg',
      title: 'LÍNEA SARMS',
      subtitle: 'MODULADORES SELECTIVOS DE ANDRÓGENOS',
      badge: 'MASA MAGRA &amp; FUERZA',
      accentColor: '#0B53A4',
      badgeBg: '#EFF6FF',
      badgeText: '#1D4ED8',
      desc: 'YK-11 • RAD-140 • LGD-4033 • OSTARINE • MK-677',
      pureza: 'Pureza Verificada 99.8%'
    },
    {
      id: 'banner_injectable.jpg',
      src: 'prod_injectable.jpg',
      title: 'LÍNEA INYECTABLES',
      subtitle: 'SOLUCIONES ANABÓLICAS DE GRADO FARMACÉUTICO',
      badge: 'POTENCIA &amp; RENDIMIENTO',
      accentColor: '#0B53A4',
      badgeBg: '#EFF6FF',
      badgeText: '#1D4ED8',
      desc: 'TESTOSTERONA • TREMBOLONA • SUSTANON • BOLDENONA',
      pureza: 'Grado USP / GMP Certificado'
    },
    {
      id: 'banner_oral.jpg',
      src: 'prod_oral.jpg',
      title: 'LÍNEA ORALES',
      subtitle: 'TABLETAS DE MÁXIMA BIODISPONIBILIDAD',
      badge: 'DENSIDAD &amp; ROCOSIDAD',
      accentColor: '#D97706',
      badgeBg: '#FEF3C7',
      badgeText: '#B45309',
      desc: 'ANAVAR • WINSTROL • DIANABOL • PROVIRON',
      pureza: 'Acción Rápida &amp; Cero Retención'
    },
    {
      id: 'banner_pct.jpg',
      src: 'prod_pct.jpg',
      title: 'LÍNEA POST CICLO (PCT)',
      subtitle: 'PROTECCIÓN Y RECUPERACIÓN HORMONAL INTEGRAL',
      badge: 'SALUD &amp; PRESERVACIÓN',
      accentColor: '#16A34A',
      badgeBg: '#ECFDF5',
      badgeText: '#15803D',
      desc: 'TAMOXIFENO • CLOMIFENO • ANASTROZOL • HCG',
      pureza: 'Reinicio Seguro del Eje HPTA'
    },
    {
      id: 'banner_fatburn.jpg',
      src: 'prod_fatburn.jpg',
      title: 'LÍNEA QUEMADORES',
      subtitle: 'DEFINICIÓN Y OXIDACIÓN ACELERADA DE GRASA',
      badge: 'CORTE &amp; VASCULARIZACIÓN',
      accentColor: '#DC2626',
      badgeBg: '#FEF2F2',
      badgeText: '#DC2626',
      desc: 'CLEMBUTEROL 40MCG • T3 CYTOMEL • CARDARINE',
      pureza: 'Energía Térmica &amp; Definición Magra'
    }
  ];

  for (const line of lines) {
    try {
      const prodImgPath = path.join(assetsDir, line.src);
      if (!fs.existsSync(prodImgPath)) continue;

      // Redimensionar producto
      const productBuf = await sharp(prodImgPath)
        .resize(540, 540, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
        .toBuffer();

      // Marco gráfico compuesto para slider
      const bannerSvg = Buffer.from(`
        <svg width="1000" height="700" viewBox="0 0 1000 700" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="bgGrad" cx="50%" cy="50%" r="65%">
              <stop offset="0%" stop-color="#FFFFFF"/>
              <stop offset="60%" stop-color="#F8FAFC"/>
              <stop offset="100%" stop-color="#EDF2F7"/>
            </radialGradient>
            <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="16" stdDeviation="24" flood-color="#0B53A4" flood-opacity="0.10"/>
              <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#000000" flood-opacity="0.04"/>
            </filter>
            <filter id="prodGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="20" stdDeviation="22" flood-color="#0F172A" flood-opacity="0.15"/>
            </filter>
          </defs>

          <!-- Tarjeta principal con fondo blanco clínico -->
          <rect x="20" y="20" width="960" height="660" rx="24" fill="url(#bgGrad)" stroke="#E2E8F0" stroke-width="2" filter="url(#cardShadow)"/>

          <!-- Acentos de diseño moderno -->
          <path d="M 20 44 Q 20 20 44 20 L 956 20 Q 980 20 980 44 L 980 24 L 20 24 Z" fill="${line.accentColor}"/>
          <circle cx="500" cy="330" r="230" fill="${line.accentColor}" opacity="0.04"/>

          <!-- Badge Superior Oficial -->
          <rect x="60" y="60" width="220" height="38" rx="19" fill="${line.badgeBg}" stroke="${line.accentColor}" stroke-opacity="0.3" stroke-width="1.5"/>
          <text x="170" y="84" font-family="'Inter', sans-serif" font-size="12" font-weight="800" fill="${line.badgeText}" text-anchor="middle" letter-spacing="1.5">${line.badge}</text>

          <!-- Sello de Autenticidad Colombia -->
          <rect x="740" y="60" width="200" height="38" rx="19" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5"/>
          <text x="840" y="84" font-family="'Inter', sans-serif" font-size="12" font-weight="700" fill="#0F172A" text-anchor="middle">🇨🇴 Stock Oficial Colombia</text>

          <!-- Título Promocional -->
          <text x="500" y="145" font-family="'Barlow', sans-serif" font-size="34" font-weight="900" fill="#0F172A" text-anchor="middle" letter-spacing="0.5">${line.title}</text>
          <text x="500" y="175" font-family="'Inter', sans-serif" font-size="13" font-weight="700" fill="${line.accentColor}" text-anchor="middle" letter-spacing="2">${line.subtitle}</text>

          <!-- Badge Inferior con Compuestos -->
          <rect x="100" y="600" width="800" height="50" rx="14" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5"/>
          <text x="500" y="626" font-family="'Inter', sans-serif" font-size="13" font-weight="700" fill="#334155" text-anchor="middle">${line.desc}</text>
          <text x="500" y="642" font-family="'Inter', sans-serif" font-size="11" font-weight="600" fill="#64748B" text-anchor="middle">✓ ${line.pureza} • Envío Discreto Garantizado</text>
        </svg>
      `);

      await sharp(bannerSvg)
        .composite([
          {
            input: productBuf,
            top: 155,
            left: 230,
            blend: 'over'
          }
        ])
        .jpeg({ quality: 92 })
        .toFile(path.join(assetsDir, line.id));

      console.log(`✓ ${line.id} creado exitosamente`);
    } catch (err) {
      console.error(`Error creando ${line.id}:`, err);
    }
  }

  console.log('¡Todas las imágenes del slider han sido generadas!');
}

createBanners();
