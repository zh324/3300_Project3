function updateEntertainment() {
    var enter_filtered_data = [];
    var entertainment = document.getElementById('enterID').checked;
    if (entertainment == true) {
        for (var i = 0; i < entertainmentData.length; i++) {
            if (filterPriceEnter(entertainmentData[i]) 
                && filterRatingEnter(entertainmentData[i]) 
                && filterRegionEnter(entertainmentData[i])
                && filterVenueEnter(entertainmentData[i])) {
                    enter_filtered_data.push(entertainmentData[i]);
                }
        }

        if (enter_filtered_data.length == 0) {
            window.alert("No results for entertainment found!");
        } else {
            console.log("entertainment data length: " + enter_filtered_data.length)
            for (var i = 0; i < enter_filtered_data.length; i++) {
                var object = addSplineObject(new THREE.Vector3(enter_filtered_data[i].coordinate[0], -150, enter_filtered_data[i].coordinate[1]), enter_filtered_data[i]["Company Name"], "yellow");
                objectCount++;
                positions.push(object.position);
            }
        }
    }
}


function filterPriceEnter(data) {
    var enterPriceVeryCheap = document.getElementById('enterPriceVeryCheap').checked;
    var enterPriceCheap = document.getElementById('enterPriceCheap').checked;
    var enterPriceMedium = document.getElementById('enterPriceMedium').checked;
    var enterPriceExpensive = document.getElementById('enterPriceExpensive').checked;
    if (!enterPriceVeryCheap && !enterPriceCheap && !enterPriceMedium && !enterPriceExpensive) {
        return true;
    }
    if (enterPriceVeryCheap && (data.Price == 0 || data.Price == 1)
        || enterPriceCheap && data.Price == 2
        || enterPriceMedium && data.Price == 3 
        || enterPriceExpensive && data.Price == 4) {
            return true;
    } else {
        return false;
    } 
}

function filterRatingEnter(data) {
    return true;
}

function filterRegionEnter(data) {
    var enterRegionMidtown = document.getElementById('enterRegionMidtown').checked;
    var enterRegionClinton = document.getElementById('enterRegionClinton').checked;
    var enterRegionOther = document.getElementById('enterRegionOther').checked;

    if (!enterRegionMidtown && !enterRegionClinton && !enterRegionOther) {
        return true;
    }
    if (enterRegionMidtown && (data.Region[0] == 'M')
        || enterRegionClinton && data.Region[0] == 'C'
        || enterRegionOther && data.Region[0] == 'O') {
            return true;
    } else {
        return false;
    }
}

function filterVenueEnter(data) {
    var enterVenueTheater = document.getElementById('enterVenueTheater').checked;
    var enterVenueComedy = document.getElementById('enterVenueComedy').checked;
    var enterVenueNightclub = document.getElementById('enterVenueNightclub').checked;
    var enterVenueAttraction = document.getElementById('enterVenueAttraction').checked;
    var enterVenueMovie = document.getElementById('enterVenueMovie').checked;
    var enterVenueMuseum = document.getElementById('enterVenueMuseum').checked;
    var enterVenueLivemusic = document.getElementById('enterVenueLivemusic').checked;
    var enterVenueLecturehall = document.getElementById('enterVenueLecturehall').checked;

    if (!enterVenueTheater 
        && !enterVenueComedy 
        && !enterVenueNightclub
        && !enterVenueAttraction
        && !enterVenueMovie
        && !enterVenueMuseum
        && !enterVenueLivemusic
        && !enterVenueLecturehall) {
        return true;
    }
    if (enterVenueTheater && (data.Subindustry == 'Theater')
        || enterVenueComedy && data.Subindustry == 'Comedy Club'
        || enterVenueNightclub && data.Subindustry == 'Nightclub'
        || enterVenueAttraction && data.Subindustry == 'Attractions / Amusement'
        || enterVenueMovie && data.Subindustry == 'Movies'
        || enterVenueMuseum && data.Subindustry == 'Museums / Galleries'
        || enterVenueLivemusic && data.Subindustry == 'Live Music'
        || enterVenueLecturehall && data.Subindustry == 'Lecture Hall') {
            return true;
    } else {
        return false;
    }
}