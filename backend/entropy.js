// entropy.js
function calculateEntropy(data) {
    const counts = data.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});
    const probabilities = Object.values(counts).map(count => count / data.length);
    return -probabilities.reduce((acc, p) => acc + p * Math.log2(p), 0);
}

module.exports = calculateEntropy;
