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
        } else if (filePath.endsWith('.tsx')) {
            results.push(filePath);
        }
    });
    return results;
}

const files = walk('./src/prevost/components');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    content = content.replace(/className="([^"]*)\bpy-32\b([^"]*)"/g, 'className="$1py-16 lg:py-32$2"');
    content = content.replace(/className="([^"]*)\bpy-24\b([^"]*)"/g, 'className="$1py-12 lg:py-24$2"');
    content = content.replace(/className="([^"]*)\bpy-20\b([^"]*)"/g, 'className="$1py-10 lg:py-20$2"');
    content = content.replace(/className="([^"]*)\bgap-16\b([^"]*)"/g, 'className="$1gap-8 lg:gap-16$2"');
    content = content.replace(/className="([^"]*)\bgap-12\b([^"]*)"/g, 'className="$1gap-6 lg:gap-12$2"');
    content = content.replace(/className="([^"]*)\btext-4xl md:text-5xl\b([^"]*)"/g, 'className="$1text-3xl sm:text-4xl md:text-5xl$2"');

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated ' + file);
    }
});
