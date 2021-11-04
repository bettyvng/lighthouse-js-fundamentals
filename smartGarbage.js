const smartGarbage = (trash, bins) => Object.assign({}, bins, { [trash]: bins[trash] + 1 });

console.log (smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));
