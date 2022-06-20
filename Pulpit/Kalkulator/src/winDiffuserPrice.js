export function winDiffuserPrice(winDiffuser, winMuntinsPrice) {
    var diffuserPrice = 0;
    if(winDiffuser == 'VENTEC ciśnieniowy biały') {
        diffuserPrice = 98;
    } else if(winDiffuser =='VENTEC ciśnieniowy biały/kolor'){
        diffuserPrice = 110;
    } else if(winDiffuser =='VENTEC ciśnieniowy dwustronny kolor'){
        diffuserPrice = 122;  
    } else if(winDiffuser =='VENTEC manualny biały'){
        diffuserPrice = 73;   
    } else if(winDiffuser =='VENTEC manualny biały/kolor'){
        diffuserPrice = 85;  
    } else if(winDiffuser =='VENTEC manualny dwustronny kolor'){
        diffuserPrice = 98; 
    } else if(winDiffuser =='VENTEC automatyczny biały'){
        diffuserPrice = 220;
    } else if(winDiffuser =='VENTEC automatyczny biały/kolor'){
        diffuserPrice = 232;
    } else if(winDiffuser =='VENTEC automatyczny dwustronny kolor'){
        diffuserPrice = 244;  
    } else if(winDiffuser =='AERECO AMO 103'){
        diffuserPrice = 98;   
    } else if(winDiffuser =='AERECO EMM 707 biały'){
        diffuserPrice = 250;  
    } else if(winDiffuser =='AERECO EMM 707 kolor'){
        diffuserPrice = 287; 
    } else if(winDiffuser =='AERECO EXR 306 biały'){
        diffuserPrice = 323; 
    } else if(winDiffuser =='AERECO EXR 306 kolor'){
        diffuserPrice = 366;  
    } else if(winDiffuser =='AERECO EXR 309 biały'){
        diffuserPrice = 433;  
    } else if(winDiffuser =='AERECO EXR 309 kolor'){
        diffuserPrice = 508; 
    } else if(winDiffuser =='RENSON TC45/24'){
        diffuserPrice = 592;
    } else if(winDiffuser =='RENSON TC60/24'){
        diffuserPrice = 616;
    } else if(winDiffuser =='RENSON THM90/24'){
        diffuserPrice = 787;                          
    } else if(winDiffuser == 'brak'){
        diffuserPrice = 0;
    } else {
        diffuserPrice = 0
    }
    const winDiffuserPrice = winMuntinsPrice + diffuserPrice;
    return winDiffuserPrice;
}