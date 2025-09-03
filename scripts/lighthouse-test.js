const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const fs = require('fs');

async function runLighthouse(url, options = {}) {
  const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
  const opts = {
    logLevel: 'info',
    output: 'json',
    onlyCategories: ['performance'],
    port: chrome.port,
    ...options
  };
  
  const runnerResult = await lighthouse(url, opts);
  await chrome.kill();
  
  return runnerResult;
}

async function testPerformance() {
  const url = 'http://localhost:3000';
  
  console.log('🚀 Starting Lighthouse Performance Tests...\n');
  
  try {
    // Desktop test
    console.log('📱 Testing Desktop Performance...');
    const desktopResult = await runLighthouse(url, {
      formFactor: 'desktop',
      screenEmulation: {
        mobile: false,
        width: 1350,
        height: 940,
        deviceScaleFactor: 1,
        disabled: false,
      },
      throttling: {
        rttMs: 40,
        throughputKbps: 10240,
        cpuSlowdownMultiplier: 1,
        requestLatencyMs: 0,
        downloadThroughputKbps: 0,
        uploadThroughputKbps: 0,
      },
    });
    
    // Mobile test
    console.log('📱 Testing Mobile Performance...');
    const mobileResult = await runLighthouse(url, {
      formFactor: 'mobile',
      screenEmulation: {
        mobile: true,
        width: 375,
        height: 667,
        deviceScaleFactor: 2,
        disabled: false,
      },
      throttling: {
        rttMs: 150,
        throughputKbps: 1638.4,
        cpuSlowdownMultiplier: 4,
        requestLatencyMs: 0,
        downloadThroughputKbps: 0,
        uploadThroughputKbps: 0,
      },
    });
    
    // Extract scores
    const desktopScore = Math.round(desktopResult.lhr.categories.performance.score * 100);
    const mobileScore = Math.round(mobileResult.lhr.categories.performance.score * 100);
    
    // Extract metrics
    const desktopMetrics = desktopResult.lhr.audits;
    const mobileMetrics = mobileResult.lhr.audits;
    
    console.log('\n📊 PERFORMANCE RESULTS\n');
    console.log('='.repeat(50));
    
    console.log(`🖥️  DESKTOP SCORE: ${desktopScore}/100`);
    console.log(`📱 MOBILE SCORE:  ${mobileScore}/100`);
    
    console.log('\n📈 CORE WEB VITALS\n');
    
    // Desktop metrics
    console.log('🖥️  Desktop Metrics:');
    console.log(`   FCP: ${Math.round(desktopMetrics['first-contentful-paint'].numericValue)}ms`);
    console.log(`   LCP: ${Math.round(desktopMetrics['largest-contentful-paint'].numericValue)}ms`);
    console.log(`   CLS: ${desktopMetrics['cumulative-layout-shift'].numericValue.toFixed(3)}`);
    console.log(`   TTI: ${Math.round(desktopMetrics['interactive'].numericValue)}ms`);
    console.log(`   TBT: ${Math.round(desktopMetrics['total-blocking-time'].numericValue)}ms`);
    
    // Mobile metrics
    console.log('\n📱 Mobile Metrics:');
    console.log(`   FCP: ${Math.round(mobileMetrics['first-contentful-paint'].numericValue)}ms`);
    console.log(`   LCP: ${Math.round(mobileMetrics['largest-contentful-paint'].numericValue)}ms`);
    console.log(`   CLS: ${mobileMetrics['cumulative-layout-shift'].numericValue.toFixed(3)}`);
    console.log(`   TTI: ${Math.round(mobileMetrics['interactive'].numericValue)}ms`);
    console.log(`   TBT: ${Math.round(mobileMetrics['total-blocking-time'].numericValue)}ms`);
    
    // Save detailed reports
    fs.writeFileSync('lighthouse-desktop.json', JSON.stringify(desktopResult.lhr, null, 2));
    fs.writeFileSync('lighthouse-mobile.json', JSON.stringify(mobileResult.lhr, null, 2));
    
    console.log('\n💾 Detailed reports saved:');
    console.log('   - lighthouse-desktop.json');
    console.log('   - lighthouse-mobile.json');
    
    // Performance assessment
    console.log('\n🎯 PERFORMANCE ASSESSMENT\n');
    
    if (desktopScore >= 90 && mobileScore >= 90) {
      console.log('🟢 EXCELLENT: Both desktop and mobile scores are 90+');
    } else if (desktopScore >= 80 && mobileScore >= 80) {
      console.log('🟡 GOOD: Both scores are 80+, room for improvement');
    } else {
      console.log('🔴 NEEDS WORK: Scores below 80, optimization required');
    }
    
  } catch (error) {
    console.error('❌ Error running Lighthouse:', error.message);
    console.log('\n💡 Make sure the development server is running:');
    console.log('   npm run dev');
  }
}

testPerformance();