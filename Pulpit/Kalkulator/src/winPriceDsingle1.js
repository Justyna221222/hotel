export function winPriceDsingle1(wWidth, wHeight) {
    if(wWidth != 0 && wHeight !=0) {
        if (wWidth >= 900 && wWidth <=1000) {
            if(wHeight >= 1900 && wHeight <= 2000){
                return 2808;                       
            } else if(wHeight >= 2001 && wHeight <= 2100){
                return 2842;
            } else if(wHeight >= 2101 && wHeight <= 2200){
                return 2921;
            } else if(wHeight >= 2201 && wHeight <= 2300){
                return 2958;
            } else if(wHeight >= 2301 && wHeight <= 2400){
                return 3073;
            }
        } else if (wWidth >= 1001 && wWidth <=1100) {
            if(wHeight >= 1900 && wHeight <= 2000){
                return 2865;                       
            } else if(wHeight >= 2001 && wHeight <= 2100){
                return 2901;
            } else if(wHeight >= 2101 && wHeight <= 2200){
                return 2981;
            } else if(wHeight >= 2201 && wHeight <= 2300){
                return 3019;
            } else if(wHeight >= 2301 && wHeight <= 2400){
                return 3135;
            }
        } else if (wWidth >= 1101 && wWidth <=1200) {
            if(wHeight >= 1900 && wHeight <= 2000){
                return 2924;                       
            } else if(wHeight >= 2001 && wHeight <= 2100){
                return 2959;
            } else if(wHeight >= 2101 && wHeight <= 2200){
                return 3041;
            } else if(wHeight >= 2201 && wHeight <= 2300){
                return 3080;
            } else if(wHeight >= 2301 && wHeight <= 2400){
                return 3197;
            }
        }
    }
}