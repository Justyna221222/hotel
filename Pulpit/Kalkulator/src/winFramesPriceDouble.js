export function winFramesPriceDouble(area, winFrames, winGlassPrice) {
   if(winFrames == "czarna") {
        const winFramesPrice = winGlassPrice + (area * 30);
        return winFramesPrice;
    } else if(winFrames == "szara" || winFrames == "ciemny brąz" || winFrames == "jasny brąz"){
        const winFramesPrice = winGlassPrice + (area * 44);
        return winFramesPrice;
    } else if(winFrames == "biała") {
        const winFramesPrice = winGlassPrice + (area * 70);
        return winFramesPrice;
    } else if(winFrames == "brak") {
        const winFramesPrice = winGlassPrice;
        return winFramesPrice; 
    } else {
        return 0;
    }
}

