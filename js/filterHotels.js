function updateHotel() {
    var hotel_filtered_data = [];
    var hotel = document.getElementById('hotelID').checked;
    if (hotel == true) {
        for (var i = 0; i < hotelData.length; i++) {
            if (filterPriceHotel(hotelData[i]) 
                && filterRatingHotel(hotelData[i]) 
                && filterRegionHotel(hotelData[i])) {
                    hotel_filtered_data.push(hotelData[i]);
                }
        }

        if (hotel_filtered_data.length == 0) {
            window.alert("No results for hotels found!");
        } else {
            console.log("hotel data length: " + hotel_filtered_data.length)
            for (var i = 0; i < hotel_filtered_data.length; i++) {
                var object = addSplineObject(new THREE.Vector3(hotel_filtered_data[i].coordinate[0], -150, hotel_filtered_data[i].coordinate[1]), hotel_filtered_data[i]["Company Name"], "green");
                objectCount++;
                positions.push(object.position);
            }
        }
    }
}


function filterPriceHotel(data) {
    var hotelPriceVeryCheap = document.getElementById('hotelPriceVeryCheap').checked;
    var hotelPriceCheap = document.getElementById('hotelPriceCheap').checked;
    var hotelPriceMedium = document.getElementById('hotelPriceMedium').checked;
    var hotelPriceExpensive = document.getElementById('hotelPriceExpensive').checked;
    if (!hotelPriceVeryCheap && !hotelPriceCheap && !hotelPriceMedium && !hotelPriceExpensive) {
        return true;
    }
    if (hotelPriceVeryCheap && (data.Price == 0 || data.Price == 1)
        || hotelPriceCheap && data.Price == 2
        || hotelPriceMedium && data.Price == 3 
        || hotelPriceExpensive && data.Price == 3.5) {
            return true;
    } else {
        return false;
    } 
}

function filterRatingHotel(data) {
    return true;
}

function filterRegionHotel(data) {
    var hotelRegionMidtown = document.getElementById('hotelRegionMidtown').checked;
    var hotelRegionClinton = document.getElementById('hotelRegionClinton').checked;

    if (!hotelRegionMidtown && !hotelRegionClinton) {
        return true;
    }

    if (hotelRegionMidtown && (data.Region[0] == 'M')
        || hotelRegionClinton && data.Region[0] == 'C') {
            return true;
    } else {
        return false;
    }
}