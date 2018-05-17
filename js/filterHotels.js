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
                var object = addSplineObject("hotel", new THREE.Vector3(hotel_filtered_data[i].coordinate[0], -150, hotel_filtered_data[i].coordinate[1]), hotel_filtered_data[i]["Company Name"], hotel_filtered_data[i]["Price"], hotel_filtered_data[i]["Rating"], hotel_filtered_data[i]["Region"], hotel_filtered_data[i]["Address"], hotel_filtered_data[i]["Phone"], hotel_filtered_data[i]["Website"], "green");
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
    var hotelRating1 = document.getElementById('hotelRating1').checked;
    var hotelRating2 = document.getElementById('hotelRating2').checked;
    var hotelRating3 = document.getElementById('hotelRating3').checked;
    var hotelRating4 = document.getElementById('hotelRating4').checked;
    var hotelRating5 = document.getElementById('hotelRating5').checked;
    if (!hotelRating1 && !hotelRating2 && !hotelRating3 && !hotelRating4 && !hotelRating5) {
        return true;
    }

    if (hotelRating1 && (data.Rating == 0 || data.Rating == 1)
        || hotelRating2 && (data.Rating == 1.5 || data.Rating == 2)
        || hotelRating3 && (data.Rating == 2.5 || data.Rating == 3)
        || hotelRating4 && (data.Rating == 3.5 || data.Rating == 4)
        || hotelRating5 && (data.Rating == 4.5 || data.Rating == 5)) {
            return true;
    } else {
        return false;
    }
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