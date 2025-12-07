// scripts/generate-manifest.js
const fs = require('fs');
const path = require('path');

console.log('📄 بدء تحديث ملف manifest.json...');

// بيانات الـ manifest
const manifestData = {
  "name": "أنمي فور يو",
  "short_name": "أنمي",
  "description": "أفضل تطبيق لمشاهدة الأنمي العربي المجاني",
  "start_url": "/Anime_for_you-/",
  "display": "standalone",
  "background_color": "#1e272e",
  "theme_color": "#ff4757",
  "orientation": "portrait",
  "icons": [
    {
      "src": "https://img.icons8.com/color/96/anime.png",
      "sizes": "96x96",
      "type": "image/png"
    },
    {
      "src": "https://img.icons8.com/color/144/anime.png",
      "sizes": "144x144",
      "type": "image/png"
    },
    {
      "src": "https://img.icons8.com/color/192/anime.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "https://img.icons8.com/color/512/anime.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "lang": "ar",
  "dir": "rtl"
};

try {
  // كتابة ملف manifest.json
  fs.writeFileSync(
    path.join(__dirname, '../manifest.json'),
    JSON.stringify(manifestData, null, 2)
  );
  
  console.log('✅ تم تحديث manifest.json بنجاح!');
  console.log('📍 تم تعيين start_url إلى: /Anime_for_you-/');
  
} catch (error) {
  console.error('❌ فشل في تحديث الملف:', error.message);
}
