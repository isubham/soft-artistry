import Stack from "..";

const trapRainWater = (elevationMap) => {
    if (elevationMap.length == 2) {
        return 0
    }

    let prevPeak = -Infinity
    let currentPeak = -Infinity

    let waterCount = 0
    let landCount = 0
    for (let i = 0; i < elevationMap.length; i++) {
        let height =  elevationMap[i];
        
        if (prevPeak <= height) {
            prevPeak = height;
        }
        else {
            waterCount += currentMax - height
        }
        
    }
    return waterCount;
    
};

export { trapRainWater };
