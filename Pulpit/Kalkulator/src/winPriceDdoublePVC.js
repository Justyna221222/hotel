export function winPriceDdoublePVC(wWidth, wHeight) {
    if(wWidth != 0 && wHeight !=0) {
        if (wWidth >= 1400 && wWidth <=1500) {
            if(wHeight >= 1900 && wHeight <= 2000){
                return 4544;                       
            } else if(wHeight >= 2001 && wHeight <= 2100){
                return 4275;
            } else if(wHeight >= 2101 && wHeight <= 2200){
                return 4384;
            } else if(wHeight >= 2201 && wHeight <= 2300){
                return 4445;
            } else if(wHeight >= 2301 && wHeight <= 2400){
                return 4662;
            }
        } else if (wWidth >= 1501 && wWidth <=1600) {
            if(wHeight >= 1900 && wHeight <= 2000){
                return 4603;                       
            } else if(wHeight >= 2001 && wHeight <= 2100){
                return 4336;
            } else if(wHeight >= 2101 && wHeight <= 2200){
                return 4448;
            } else if(wHeight >= 2201 && wHeight <= 2300){
                return 4513;
            } else if(wHeight >= 2301 && wHeight <= 2400){
                return 4734;
            }
        } else if (wWidth >= 1601 && wWidth <=1700) {
            if(wHeight >= 1900 && wHeight <= 2000){
                return 4666;                       
            } else if(wHeight >= 2001 && wHeight <= 2100){
                return 4403;
            } else if(wHeight >= 2101 && wHeight <= 2200){
                return 4518;
            } else if(wHeight >= 2201 && wHeight <= 2300){
                return 4584;
            } else if(wHeight >= 2301 && wHeight <= 2400){
                return 4806;
            }
        } else if (wWidth >= 1701 && wWidth <=1800) {
            if(wHeight >= 1900 && wHeight <= 2000){
                return 4731;                       
            } else if(wHeight >= 2001 && wHeight <= 2100){
                return 4470;
            } else if(wHeight >= 2101 && wHeight <= 2200){
                return 4586;
            } else if(wHeight >= 2201 && wHeight <= 2300){
                return 4653;
            } else if(wHeight >= 2301 && wHeight <= 2400){
                return 4880;
            }
        } else if (wWidth >= 1801 && wWidth <=1900) {
            if(wHeight >= 1900 && wHeight <= 2000){
                return 4797;                       
            } else if(wHeight >= 2001 && wHeight <= 2100){
                return 4537;
            } else if(wHeight >= 2101 && wHeight <= 2200){
                return 4657;
            } else if(wHeight >= 2201 && wHeight <= 2300){
                return 4729;
            } else if(wHeight >= 2301 && wHeight <= 2400){
                return 4957;
            }
        } else if (wWidth >= 1901 && wWidth <=2000) {
            if(wHeight >= 1900 && wHeight <= 2000){
                return 4863;                       
            } else if(wHeight >= 2001 && wHeight <= 2100){
                return 4608;
            } else if(wHeight >= 2101 && wHeight <= 2200){
                return 4730;
            } else if(wHeight >= 2201 && wHeight <= 2300){
                return 4805;
            } else if(wHeight >= 2301 && wHeight <= 2400){
                return 5034;
            }
        } else {
            return 0;
        }
    } else {
        return 0;
    }
}