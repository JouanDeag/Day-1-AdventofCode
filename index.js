const fs = require('fs');
var depth = fs.readFileSync('./depth.txt', 'utf-8').split("\r\n");
var increases = 0;
var decreases = 0;
var sumincreases = 0;

// Stage 1
for (let i = 0; i < depth.length; i++) {
    if (parseInt(depth[i]) < parseInt(depth[i+1])) {
        increases++;
    } else {
        decreases++;
    };
}

// Stage 2
for (let i = 0; i < depth.length; i++) {
    var mat1 = parseInt(depth[i])+parseInt(depth[i+1])+parseInt(depth[i+2]) 
    var mat2 = parseInt(depth[i+1])+parseInt(depth[i+2])+parseInt(depth[i+3])
    if (mat1 < mat2) {
        sumincreases++;
    }
}

console.log('--------------------------');
console.info(`Total Increases: ${increases}`);
console.info(`Total Decreases: ${decreases}`);
console.info(`Sum Increases: ${sumincreases}`);