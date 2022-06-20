export function winFramesPriceSingle(area, winFrames, winGlassPrice) {

    if(winFrames == "czarna") {
        const winFramesPrice = winGlassPrice + (area * 15);
        return winFramesPrice;
    } else if(winFrames == "szara" || winFrames == "ciemny brąz" || winFrames == "jasny brąz"){
        const winFramesPrice = winGlassPrice + (area * 22);
        return winFramesPrice;
    } else if(winFrames == "biała") {
        const winFramesPrice = winGlassPrice + (area * 40);
        return winFramesPrice;
    } else if(winFrames == "brak") {
    const winFramesPrice = winGlassPrice;
    return winFramesPrice;    
    } else {
        return 0;
    }
}