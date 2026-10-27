import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

console.log('🚀 Iniciando compilación de producción con Vite...');
execSync('npx vite build', { stdio: 'inherit' });

console.log('📁 Sincronizando directorio completo de assets a dist/assets...');
const srcAssets = path.resolve('assets');
const distAssets = path.resolve('dist', 'assets');

if (fs.existsSync(srcAssets)) {
  fs.cpSync(srcAssets, distAssets, { recursive: true });
  console.log('✓ Todos los recursos y fotos de catálogo copiados a dist/assets.');
}

console.log('✅ Compilación de producción completada con éxito en /dist.');
