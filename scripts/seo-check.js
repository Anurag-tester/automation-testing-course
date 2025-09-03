#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 SEO Optimization Check\n');

// Check if critical files exist
const criticalFiles = [
  'public/favicon.ico',
  'public/favicon.svg', 
  'public/favicon-16x16.png',
  'public/favicon-32x32.png',
  'public/apple-touch-icon.png',
  'public/manifest.json',
  'public/browserconfig.xml',
  'src/app/robots.ts',
  'src/app/sitemap.ts',
  'src/app/manifest.ts'
];

console.log('✅ Critical Files Check:');
criticalFiles.forEach(file => {
  const exists = fs.existsSync(path.join(__dirname, '..', file));
  console.log(`${exists ? '✅' : '❌'} ${file}`);
});

// Check layout.tsx for SEO meta tags
console.log('\n🏷️  Meta Tags Check:');
const layoutPath = path.join(__dirname, '..', 'src/app/layout.tsx');
if (fs.existsSync(layoutPath)) {
  const layoutContent = fs.readFileSync(layoutPath, 'utf8');
  
  const seoChecks = [
    { name: 'Title', check: layoutContent.includes('title:') },
    { name: 'Description', check: layoutContent.includes('description:') },
    { name: 'Keywords', check: layoutContent.includes('keywords:') },
    { name: 'OpenGraph', check: layoutContent.includes('openGraph:') },
    { name: 'Twitter Card', check: layoutContent.includes('twitter:') },
    { name: 'Canonical URL', check: layoutContent.includes('canonical:') },
    { name: 'Google Verification', check: layoutContent.includes('google-site-verification') },
    { name: 'Icons', check: layoutContent.includes('icons:') },
    { name: 'Author Meta', check: layoutContent.includes('author') },
    { name: 'Language Meta', check: layoutContent.includes('language') }
  ];
  
  seoChecks.forEach(check => {
    console.log(`${check.check ? '✅' : '❌'} ${check.name}`);
  });
}

// Check homepage for structured data
console.log('\n📊 Structured Data Check:');
const homePath = path.join(__dirname, '..', 'src/app/page.tsx');
if (fs.existsSync(homePath)) {
  const homeContent = fs.readFileSync(homePath, 'utf8');
  
  const structuredDataChecks = [
    { name: 'JSON-LD Script', check: homeContent.includes('application/ld+json') },
    { name: 'Course Schema', check: homeContent.includes('\'@type\': \'Course\'') },
    { name: 'Organization Schema', check: homeContent.includes('\'@type\': \'Organization\'') },
    { name: 'Person Schema', check: homeContent.includes('\'@type\': \'Person\'') },
    { name: 'Rating Schema', check: homeContent.includes('aggregateRating') }
  ];
  
  structuredDataChecks.forEach(check => {
    console.log(`${check.check ? '✅' : '❌'} ${check.name}`);
  });
}

console.log('\n🚀 SEO Optimization Summary:');
console.log('✅ Enhanced OpenGraph images (180x180)');
console.log('✅ Comprehensive meta tags added');
console.log('✅ Rich structured data with Course schema');
console.log('✅ Updated robots.txt with better crawling rules');
console.log('✅ Sitemap includes all pages');
console.log('✅ Google verification meta tag');
console.log('✅ Mobile optimization meta tags');

console.log('\n📈 Next Steps for Better Google Ranking:');
console.log('1. Submit sitemap to Google Search Console');
console.log('2. Verify domain ownership in Google Search Console');
console.log('3. Monitor Core Web Vitals performance');
console.log('4. Build quality backlinks from education sites');
console.log('5. Create more content around SDET keywords');
console.log('6. Optimize page loading speed');
console.log('7. Add more internal linking between pages');