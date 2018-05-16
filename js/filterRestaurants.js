function updateRestaurant() {
    var rest_filtered_data = [];
    var restaurant = document.getElementById('restID').checked;
    if (restaurant == true) {
        for (var i = 0; i < restaurantData.length; i++) {
            if (filterPriceRest(restaurantData[i]) 
                && filterRatingRest(restaurantData[i]) 
                && filterRegionRest(restaurantData[i])
                && filterTasteRest(restaurantData[i])) {
                    rest_filtered_data.push(restaurantData[i]);
                }
        }

        if (rest_filtered_data.length == 0) {
            window.alert("No results for restaurants found!");
        } else {
            console.log("restaurant data length: " + rest_filtered_data.length)
            for (var i = 0; i < rest_filtered_data.length; i++) {
                var object = addSplineObject("restaurant", new THREE.Vector3(rest_filtered_data[i].coordinate[0], -150, rest_filtered_data[i].coordinate[1]), rest_filtered_data[i]["Company Name"], rest_filtered_data[i]["Price"], rest_filtered_data[i]["Rating"], rest_filtered_data[i]["Region"], rest_filtered_data[i]["Address"], rest_filtered_data[i]["Phone"], rest_filtered_data[i]["Website"], "red");
                objectCount++;
                positions.push(object.position);
            }
        }
    }
}


function filterPriceRest(data) {
    var restPriceVeryCheap = document.getElementById('restPriceVeryCheap').checked;
    var restPriceCheap = document.getElementById('restPriceCheap').checked;
    var restPriceMedium = document.getElementById('restPriceMedium').checked;
    var restPriceExpensive = document.getElementById('restPriceExpensive').checked;
    if (!restPriceVeryCheap && !restPriceCheap && !restPriceMedium && !restPriceExpensive) {
        return true;
    }

    if (restPriceVeryCheap && (data.Price == 0 || data.Price == 1)
        || restPriceCheap && data.Price == 2
        || restPriceMedium && data.Price == 3 
        || restPriceExpensive && data.Price == 4) {
            return true;
    } else {
        return false;
    } 
}

function filterRatingRest(data) {
    var restRating1 = document.getElementById('restRating1').checked;
    var restRating2 = document.getElementById('restRating2').checked;
    var restRating3 = document.getElementById('restRating3').checked;
    var restRating4 = document.getElementById('restRating4').checked;
    var restRating5 = document.getElementById('restRating5').checked;
    if (!restRating1 && !restRating2 && !restRating3 && !restRating4 && !restRating5) {
        return true;
    }

    if (restRating1 && (data.Rating == 0 || data.Rating == 1)
        || restRating2 && (data.Rating == 1.5 || data.Rating == 2)
        || restRating3 && (data.Rating == 2.5 || data.Rating == 3)
        || restRating4 && (data.Rating == 3.5 || data.Rating == 4)
        || restRating5 && (data.Rating == 4.5 || data.Rating == 5)) {
            return true;
    } else {
        return false;
    }
}

function filterRegionRest(data) {
    var restRegionMidtown = document.getElementById('restRegionMidtown').checked;
    var restRegionClinton = document.getElementById('restRegionClinton').checked;
    var restRegionLincoln = document.getElementById('restRegionLincoln').checked;
    var restRegionSoho = document.getElementById('restRegionSoho').checked;
    if (!restRegionMidtown && !restRegionClinton && !restRegionLincoln && !restRegionSoho) {
        return true;
    }

    if (restRegionMidtown && (data.Region[0] == 'M')
        || restRegionClinton && data.Region[0] == 'C'
        || restRegionLincoln && data.Region[0] == 'L'
        || restRegionSoho && data.Region[0] == 'S') {
            return true;
    } else {
        return false;
    }
}

function filterTasteRest(data) {
    var restTasteMexican = document.getElementById('restTasteMexican').checked;
    var restTasteChinese = document.getElementById('restTasteChinese').checked;
    var restTasteItalian = document.getElementById('restTasteItalian').checked;
    var restTasteFrench = document.getElementById('restTasteFrench').checked;
    var restTasteAmerican = document.getElementById('restTasteAmerican').checked;
    var restTasteDiner = document.getElementById('restTasteDiner').checked;
    var restTasteFastfood = document.getElementById('restTasteFastfood').checked;
    var restTasteDessert = document.getElementById('restTasteDessert').checked;
    var restTasteThai = document.getElementById('restTasteThai').checked;
    var restTasteSteakhouse = document.getElementById('restTasteSteakhouse').checked;
    var restTasteBarbecue = document.getElementById('restTasteBarbecue').checked;
    var restTastePanasian = document.getElementById('restTastePanasian').checked;
    var restTasteRussian = document.getElementById('restTasteRussian').checked;
    var restTastePizza = document.getElementById('restTastePizza').checked;
    var restTasteTurkish = document.getElementById('restTasteTurkish').checked;
    var restTasteIdian = document.getElementById('restTasteIdian').checked;
    var restTasteJapanese = document.getElementById('restTasteJapanese').checked;
    var restTasteVietnamese = document.getElementById('restTasteVietnamese').checked;
    var restTasteSeafood = document.getElementById('restTasteSeafood').checked;
    var restTasteCajun = document.getElementById('restTasteCajun').checked;
    var restTasteChilean = document.getElementById('restTasteChilean').checked;
    var restTasteBeverages = document.getElementById('restTasteBeverages').checked;
    var restTasteScottish = document.getElementById('restTasteScottish').checked;
    var restTasteCatering = document.getElementById('restTasteCatering').checked;
    var restTasteBelgian = document.getElementById('restTasteBelgian').checked;
    var restTasteCuban = document.getElementById('restTasteCuban').checked;
    var restTasteBrazilian = document.getElementById('restTasteBrazilian').checked;
    var restTasteOthers = document.getElementById('restTasteOthers').checked;
    var restTasteArgentinian = document.getElementById('restTasteArgentinian').checked;
    var restTasteSpanish = document.getElementById('restTasteSpanish').checked;
    var restTasteOrganic = document.getElementById('restTasteOrganic').checked;
    var restTasteNonbeverages = document.getElementById('restTasteNonbeverages').checked;

    if (!restTasteMexican
        && !restTasteChinese
        && !restTasteItalian 
        && !restTasteFrench
        && !restTasteAmerican 
        && !restTasteDiner 
        && !restTasteFastfood 
        && !restTasteDessert 
        && !restTasteThai 
        && !restTasteSteakhouse 
        && !restTasteBarbecue 
        && !restTastePanasian 
        && !restTasteRussian 
        && !restTastePizza
        && !restTasteTurkish 
        && !restTasteIdian
        && !restTasteJapanese 
        && !restTasteVietnamese 
        && !restTasteSeafood 
        && !restTasteCajun 
        && !restTasteChilean 
        && !restTasteBeverages 
        && !restTasteScottish 
        && !restTasteCatering 
        && !restTasteBelgian 
        && !restTasteCuban 
        && !restTasteBrazilian 
        && !restTasteOthers 
        && !restTasteArgentinian 
        && !restTasteSpanish 
        && !restTasteOrganic 
        && !restTasteNonbeverages) {
        return true;
    }

    if (restTasteMexican && data.Subsubindustry == 'Mexican'
        || restTasteChinese && data.Subsubindustry == 'Chinese'
        || restTasteItalian && data.Subsubindustry == 'Italian'
        || restTasteFrench && data.Subsubindustry == 'French'
        || restTasteAmerican && data.Subsubindustry == 'American'
        || restTasteDiner && data.Subsubindustry == 'Diner'
        || restTasteFastfood && data.Subsubindustry == 'Fast Food'
        || restTasteDessert && data.Subsubindustry == 'Dessert'
        || restTasteThai && data.Subsubindustry == 'Thai'
        || restTasteSteakhouse && data.Subsubindustry == 'Steakhouse'
        || restTasteBarbecue && data.Subsubindustry == 'Barbecue'
        || restTastePanasian && data.Subsubindustry == 'Pan Asian'
        || restTasteRussian && data.Subsubindustry == 'Russian'
        || restTastePizza && data.Subsubindustry == 'Pizza'
        || restTasteTurkish && data.Subsubindustry == 'Turkish'
        || restTasteIdian && data.Subsubindustry == 'Indian'
        || restTasteJapanese && data.Subsubindustry == 'Japanese'
        || restTasteVietnamese && data.Subsubindustry == 'Vietnamese'
        || restTasteSeafood && data.Subsubindustry == 'Seafood'
        || restTasteCajun && data.Subsubindustry == 'Cajun'
        || restTasteChilean && data.Subsubindustry == 'Chilean'
        || restTasteBeverages && data.Subsubindustry == 'Beverages'
        || restTasteScottish && data.Subsubindustry == 'Scottish'
        || restTasteCatering && data.Subsubindustry == 'Catering'
        || restTasteBelgian && data.Subsubindustry == 'Belgian'
        || restTasteCuban && data.Subsubindustry == 'Cuban'
        || restTasteBrazilian && data.Subsubindustry == 'Brazilian'
        || restTasteOthers && data.Subsubindustry == 'N/A'
        || restTasteArgentinian && data.Subsubindustry == 'Argentinian'
        || restTasteSpanish && data.Subsubindustry == 'Spanish'
        || restTasteOrganic && data.Subsubindustry == 'Organic'
        || restTasteNonbeverages && data.Subsubindustry == 'Non-beverages') {
            return true;
    } else {
        return false;
    }
}