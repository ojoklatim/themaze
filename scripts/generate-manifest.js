const fs = require('fs');
const path = require('path');

const igManifestPath = path.join(__dirname, '../public/images/instagram/manifest.json');
const mapsManifestPath = path.join(__dirname, '../public/images/google-maps/manifest.json');
const outputPath = path.join(__dirname, '../lib/manifest.json');

function generate() {
  let images = [];

  if (fs.existsSync(mapsManifestPath)) {
    const data = fs.readFileSync(mapsManifestPath, 'utf8');
    images = [...images, ...JSON.parse(data)];
  }

  if (fs.existsSync(igManifestPath)) {
    const data = fs.readFileSync(igManifestPath, 'utf8');
    images = [...images, ...JSON.parse(data)];
  }

  fs.writeFileSync(outputPath, JSON.stringify(images, null, 2));
  console.log(`✅ Combined manifest generated with ${images.length} images.`);
}

generate();
