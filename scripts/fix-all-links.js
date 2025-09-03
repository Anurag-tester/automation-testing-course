const fs = require('fs');
const path = require('path');

const linkMappings = {
  '/practice/input-edit': '/practice/input-handling',
  '/practice/frame-innerhtml': '/practice/frame-navigation',
  '/practice/radio-toggle': '/practice/radio-button-toggle',
  '/practice/window-tabs': '/practice/window-management',
  '/practice/elements-find': '/practice/elements-challenge',
  '/practice/drag-aui1': '/practice/drag-drop',
  '/practice/drop-aui2': '/practice/drag-drop',
  '/practice/sort-aui3': '/practice/sort-challenge',
  '/practice/multiselect-aui4': '/practice/multi-select',
  '/practice/select-aui4': '/practice/multi-select',
  '/practice/slider-aui5': '/practice/slider-challenge',
  '/practice/waits-timeouts': '/practice/waits-challenge',
  '/practice/table-simple': '/practice/table-operations',
  '/practice/table-advanced': '/practice/advanced-table',
  '/practice/calendar-datetime': '/practice/calendar-challenge',
  '/practice/forms-allinone': '/practice/forms-challenge'
};

function fixLinksInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  Object.entries(linkMappings).forEach(([oldLink, newLink]) => {
    if (content.includes(oldLink)) {
      content = content.replaceAll(oldLink, newLink);
      modified = true;
    }
  });
  
  return { content, modified };
}

function scanAndFixDirectory(dir) {
  let totalFixed = 0;
  
  function scan(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    items.forEach(item => {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scan(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        const { content, modified } = fixLinksInFile(fullPath);
        if (modified) {
          fs.writeFileSync(fullPath, content, 'utf8');
          totalFixed++;
        }
      }
    });
  }
  
  scan(dir);
  return totalFixed;
}

const srcDir = path.join(__dirname, '..', 'src');
const fixedFiles = scanAndFixDirectory(srcDir);

console.log(`✅ Fixed links in ${fixedFiles} files`);