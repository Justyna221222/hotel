export function winMuntinsPriceDouble(winMuntins, winType, winWidth, winHeight, winFramePrice) {
    //return 9 + winMuntins + winType;
    var muntinArea = 0;
    var muntinLength = 0;
    if(winType == "fix w ramie" || winType == "rozwierne" || winType == "Uchylne" || winType == "Rozwierno-uchylne") {
        muntinArea = 4;
        muntinLength = (winWidth - 0.2) + (winHeight - 0.2);
    } else if(winType == "Rozwierne + rozwierno-uchylne" || winType == "Rozweirno-uchylne + FIX" || winType == "Stałe FIX + FIX") {
        muntinArea = 8;
        muntinLength = (winWidth - 0.2) + (2 * (winHeight - 0.2));
    } else if(winType == "Rozwierne + rozwierne + rozwierno-uchylne" || winType == "Stałe FIX + FIX + FIX") {
        muntinArea = 12;
        muntinLength = (winWidth - 0.2) + (3 * (winHeight - 0.2));
    } else {
       muntinArea = 0;
    }
    if(winMuntins == 'biała 26mm') {
        var meterPrice = 46;
    } else if(winMuntins == 'drewnopodobna 26mm') {
        meterPrice = 69;
    } else if(winMuntins == 'biała 45mm') {
        meterPrice = 65;
    } else if(winMuntins == 'drewnopodobna 45mm') {
        meterPrice = 88;
    } else if(winMuntins == 'brak') {
        muntinArea = 0;
        meterPrice = 0;
    } else {
        return 0;
    }
    const winMuntinsPrice = winFramePrice + ((2 * 38 * muntinArea) + (muntinLength * meterPrice * 2))
    return winMuntinsPrice;

}