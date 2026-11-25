
import puppeteer from 'puppeteer-core';
const b = await puppeteer.launch({ executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', headless: true, args:['--no-sandbox','--disable-gpu'] });
const p = await b.newPage();
await p.setViewport({width:1440,height:900,deviceScaleFactor:1});
await p.goto('http://localhost:5173/', {waitUntil:'networkidle2', timeout: 30000});
await new Promise(r=>setTimeout(r,1200));
await p.screenshot({path:'shot-test.png'});
await b.close();
console.log('OK');
