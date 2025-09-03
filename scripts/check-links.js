const fs = require('fs');
const path = require('path');

const VALID_ROUTES = new Set([
  '/',
  '/curriculum',
  '/practice',
  '/interview-questions',
  '/selenium-cheatsheet',
  '/privacy',
  '/courses/manual-testing',
  '/courses/java-programming',
  '/courses/selenium-webdriver',
  '/courses/api-testing',
  '/manual-testing-basics',
  '/testing-techniques-black-box-ecp-bva',
  '/advanced-testing-methods-decision-table',
  '/test-documentation-plans-cases',
  '/defect-management-bug-lifecycle',
  '/java-fundamentals-data-types-variables',
  '/java-operators-control-structures',
  '/loops-iterations-for-while-dowhile',
  '/methods-functions-parameters-scope',
  '/selenium-introduction-webdriver-setup',
  '/web-element-identification-locators',
  '/element-interactions-click-type-clear',
  '/advanced-locators-xpath-css-selectors',
  '/dropdown-handling-select-class',
  '/checkbox-radio-buttons-handling',
  '/alert-handling-javascript-popups',
  '/frame-handling-iframe-navigation',
  '/actions-class-mouse-keyboard-events',
  '/javascript-executor-dom-manipulation',
  '/relative-xpath-fundamentals',
  '/advanced-xpath-axes-navigation',
  '/xpath-practice-assignments',
  '/xpath-sibling-navigation-following-preceding',
  '/advanced-xpath-practice-assignments',
  '/dropdown-handling-select-class-dynamic',
  '/dynamic-table-calendar-handling',
  '/multiple-window-tab-handling',
  '/selenium-roadmap-comprehensive-review',
  '/synchronization-implicit-explicit-fluent-wait',
  '/screenshots-browser-options-configuration',
  '/broken-link-detection-validation',
  '/selenium-theory-interview-questions',
  '/advanced-selenium-exception-handling',
  '/shadow-dom-handling-selenium',
  '/ssl-certificate-file-upload-autoit',
  '/javascript-executor-interface-advanced-operations',
  '/practice/button-click',
  '/practice/input-handling',
  '/practice/select-dropdown',
  '/practice/radio-button-toggle',
  '/practice/elements-challenge',
  '/practice/forms-challenge',
  '/practice/multi-select',
  '/practice/slider-challenge',
  '/practice/calendar-challenge',
  '/practice/waits-challenge',
  '/practice/table-operations',
  '/practice/advanced-table',
  '/practice/frame-navigation',
  '/practice/window-management',
  '/practice/drag-drop',
  '/practice/sort-challenge',
  '/practice/alert-dialog',
  '/practice/file-management',
  '/practice/shadow-dom',
  '/favicon.ico',
  '/favicon-32x32.png',
  '/apple-touch-icon.png'
]);

function extractLinks(content) {
  const linkRegex = /(?:href|to)=["']([^"']+)["']/g;
  const links = [];
  let match;
  
  while ((match = linkRegex.exec(content)) !== null) {
    links.push(match[1]);
  }
  
  return links;
}

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const links = extractLinks(content);
  const brokenLinks = [];
  
  links.forEach(link => {
    if (link.startsWith('/') && !link.startsWith('//')) {
      const cleanLink = link.split('#')[0].split('?')[0];
      if (!VALID_ROUTES.has(cleanLink)) {
        brokenLinks.push({
          file: filePath,
          link: link,
          type: 'internal'
        });
      }
    }
  });
  
  return brokenLinks;
}

function scanDirectory(dir) {
  const allBrokenLinks = [];
  
  function scan(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    items.forEach(item => {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scan(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        const brokenLinks = checkFile(fullPath);
        allBrokenLinks.push(...brokenLinks);
      }
    });
  }
  
  scan(dir);
  return allBrokenLinks;
}

const srcDir = path.join(__dirname, '..', 'src');
const brokenLinks = scanDirectory(srcDir);

if (brokenLinks.length === 0) {
  console.log('✅ No broken internal links found!');
} else {
  console.log(`❌ Found ${brokenLinks.length} broken internal links:`);
  brokenLinks.forEach(({ file, link }) => {
    console.log(`  ${file}: ${link}`);
  });
}

process.exit(brokenLinks.length > 0 ? 1 : 0);