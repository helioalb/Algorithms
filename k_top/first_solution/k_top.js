function top(k, numbers) {
    const histogram = buildHistogramFrom(numbers);
    return getKTopsFromHistogram(k, histogram);
}

function buildHistogramFrom(numbers) {
    const histogram = {};
    for (number of numbers) {
        if (histogram[number])
            histogram[number]++;
        else
            histogram[number] = 1;
    }
    return histogram;
}

function getKTopsFromHistogram(k, histogram) {
    const kTops = [];
    for (let i = 0; i < k; i++) {
        const greaterFrequency = getGreaterFrequencyOf(histogram)
        delete histogram[greaterFrequency];
        kTops.push(Number(greaterFrequency));
    }
    return kTops;
}

function getGreaterFrequencyOf(histogram) {
    let max = 0;
    let keyOfMax;
    Object.keys(histogram).forEach(key => {
        if (histogram[key] > max) {
            max = histogram[key];
            keyOfMax = key;
        }
    });
    return keyOfMax;
}

module.exports = top;
