// scripts/generate-icons.js
const fs = require('fs');
const path = require('path');
const https = require('https');

console.log('🎨 بدء إنشاء أيقونات تطبيق الأنمي...');

// تأكد من وجود مجلد scripts
const scriptsDir = path.join(__dirname);
if (!fs.existsSync(scriptsDir)) {
  fs.mkdirSync(scriptsDir, { recursive: true });
}

// رسالة نجاح
console.log('✅ ملف generate-icons.js جاهز للاستخدام');
console.log('📌 لتوليد الأيقونات الفعلية، قم بتثبيت الحزم المطلوبة:');
console.log('   npm install sharp canvas --save-dev');
console.log('📌 أو استخدم أيقونات جاهزة من:');
console.log('   https://icons8.com/icon/set/anime/color');
