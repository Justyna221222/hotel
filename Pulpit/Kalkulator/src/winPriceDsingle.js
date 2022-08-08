export function winPriceDsingle(wWidth, wHeight) {
    if(wWidth != 0 && wHeight !=0) {
        if (wWidth >= 900 && wWidth <=1000) {
            if(wHeight >= 1900 && wHeight <= 2000){
                return 2620;                       
            } else if(wHeight >= 2001 && wHeight <= 2100){
                return 2657;
            } else if(wHeight >= 2101 && wHeight <= 2200){
                return 2738;
            } else if(wHeight >= 2201 && wHeight <= 2300){
                return 2777;
            } else if(wHeight >= 2301 && wHeight <= 2400){
                return 2883;
            }
        } else if (wWidth >= 1001 && wWidth <=1100) {
            if(wHeight >= 1900 && wHeight <= 2000){
                return 2691;                       
            } else if(wHeight >= 2001 && wHeight <= 2100){
                return 2729;
            } else if(wHeight >= 2101 && wHeight <= 2200){
                return 2812;
            } else if(wHeight >= 2201 && wHeight <= 2300){
                return 2853;
            } else if(wHeight >= 2301 && wHeight <= 2400){
                return 2970;
            }
        } else if (wWidth >= 1101 && wWidth <=1200) {
            if(wHeight >= 1900 && wHeight <= 2000){
                return 2760;                       
            } else if(wHeight >= 2001 && wHeight <= 2100){
                return 2801;
            } else if(wHeight >= 2101 && wHeight <= 2200){
                return 2886;
            } else if(wHeight >= 2201 && wHeight <= 2300){
                return 2929;
            } else if(wHeight >= 2301 && wHeight <= 2400){
                return 3048;
            }
        }
    }
}