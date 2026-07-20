const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        let filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(filePath));
        } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
            results.push(filePath);
        }
    });
    return results;
}

const files = walk('./src');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Replace emails
    content = content.replace(/corporate@puritybrands\.ae/g, 'info@puritypts.com');
    content = content.replace(/info@nichiha\.ae/g, 'info@puritypts.com');
    content = content.replace(/sales@nichiha\.ae/g, 'info@puritypts.com');
    content = content.replace(/tech@nichiha\.ae/g, 'info@puritypts.com');
    content = content.replace(/sales@puritypremium\.ae/g, 'info@puritypts.com');
    content = content.replace(/abudhabi@puritypremium\.ae/g, 'info@puritypts.com');
    content = content.replace(/sharjah@puritypremium\.ae/g, 'info@puritypts.com');

    // Replace fake numbers with the main one
    content = content.replace(/\+971 4 888 3432/g, '+971 55 433 0532');
    content = content.replace(/\+971 2 555 1290/g, '+971 55 433 0532');
    content = content.replace(/\+971 6 742 8111/g, '+971 55 433 0532');
    content = content.replace(/\+971 50 333 4444/g, '+971 55 433 0532');

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated contacts in ' + file);
    }
});
