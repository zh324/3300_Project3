function textInit(){

    nameInfo = d3.select('#buildingName').append('svg')
    .attr("id", "bar")
    .attr('width', "250")
    .attr('height', "30");
    
    nameInfo.append("text")
    .attr("id","bName")
    .attr("x", 40)
    .attr("y", 20)
    .style("font-size", "30px")
    // .attr("class", "infoText")

    priceInfo = d3.select('#buildingPrice').append('svg')
    .attr("id", "bar")
    .attr('width', "250")
    .attr('height', "30");
    
    priceInfo.append("text")
    .attr("id","bPrice")
    .attr("x", 40)
    .attr("y", 20)
    .attr("class", "infoText")

    ratingInfo = d3.select('#buildingRating').append('svg')
    .attr("id", "bar")
    .attr('width', "250")
    .attr('height', "30");
    
    ratingInfo.append("text")
    .attr("id","bRating")
    .attr("x", 40)
    .attr("y", 20)
    .attr("class", "infoText")

    // regionInfo = d3.select('#buildingRegion').append('svg')
    // .attr("id", "bar")
    // .attr('width', "250")
    // .attr('height', "30");
    
    // regionInfo.append("text")
    // .attr("id","bRegion")
    // .attr("x", 40)
    // .attr("y", 20)
    // .attr("class", "infoText")

    addressInfo = d3.select('#buildingAddress').append('svg')
    .attr("id", "bar")
    .attr('width', "250")
    .attr('height', "30");
    
    addressInfo.append("text")
    .attr("id","bAddress")
    .attr("x", 40)
    .attr("y", 20)
    .attr("class", "infoText")

    phoneInfo = d3.select('#buildingPhone').append('svg')
    .attr("id", "bar")
    .attr('width', "250")
    .attr('height', "30");
    
    phoneInfo.append("text")
    .attr("id","bPhone")
    .attr("x", 40)
    .attr("y", 20)
    .attr("class", "infoText")

    websiteInfo = d3.select('#buildingWebsite').append('svg')
    .attr("id", "bar")
    .attr('width', "300")
    .attr('height', "35");
    
    websiteInfo.append("text")
    .attr("id","bWebsite")
    .attr("x", 40)
    .attr("y", 20)
    .attr("class", "infoText")
    
}

function textUpdate(name, price, rating, region, address, phone, website){

        d3.selectAll("#bName")
        .style("display","none");

        nameInfo.append("text")
        .attr("id","bName")
        .attr("x", 40)
        .attr("y", 20)
        .attr("class", "infoText")
        .text(name);

        d3.selectAll("#bPrice")
        .style("display","none");

        priceInfo.append("text")
        .attr("id","bPrice")
        .attr("x", 40)
        .attr("y", 20)
        .attr("class", "infoText")
        .text("Price: ");

        for (var i = 0; i <= price; i++) {
            priceInfo.append("text")
            .attr("id","bPrice")
            .attr("x", 90 + i * 10)
            .attr("y", 20)
            .attr("class", "infoText")
            .text("$");           
        }
        // priceInfo.append("text")
        // .attr("id","bPrice")
        // .attr("x", 40)
        // .attr("y", 20)
        // .attr("class", "infoText")
        // .text("Price:     " + price);

        d3.selectAll("#bRating")
        .style("display","none");

        ratingInfo.append("text")
        .attr("id","bRating")
        .attr("x", 40)
        .attr("y", 20)
        .attr("class", "infoText")
        .text("Rating:     " + rating);

        // d3.selectAll("#bRegion")
        // .style("display","none");

        // regionInfo.append("text")
        // .attr("id","bRegion")
        // .attr("x", 40)
        // .attr("y", 20)
        // .attr("class", "infoText")
        // .text("Region:     " + region);

        d3.selectAll("#bAddress")
        .style("display","none");

        addressInfo.append("text")
        .attr("id","bAddress")
        .attr("x", 40)
        .attr("y", 20)
        .attr("class", "infoText")
        .text("Address:     " + address);

        d3.selectAll("#bPhone")
        .style("display","none");

        phoneInfo.append("text")
        .attr("id","bPhone")
        .attr("x", 40)
        .attr("y", 20)
        .attr("class", "infoText")
        .text("Phone:     " + phone);

        d3.selectAll("#bWebsite")
        .style("display","none");

        websiteInfo.append("text")
        .attr("id","bWebsite")
        .attr("x", 40)
        .attr("y", 20)
        .attr("class", "infoText")
        .text("Website:     " + website);
}