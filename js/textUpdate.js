function textInit(){

    nameInfo = d3.select('#buildingName').append('svg')
    .attr("id", "bar")
    .attr('width', "250")
    .attr('height', "30");
    
    nameInfo.append("text")
    .attr("id","bName")
    .attr("x", 60)
    .attr("y", 20)
    .attr("class", "infoText")

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

    regionInfo = d3.select('#buildingRegion').append('svg')
    .attr("id", "bar")
    .attr('width', "250")
    .attr('height', "30");
    
    regionInfo.append("text")
    .attr("id","bRegion")
    .attr("x", 40)
    .attr("y", 20)
    .attr("class", "infoText")

    addressInfo = d3.select('#buildingAddress').append('svg')
    .attr("id", "bar")
    .attr('width', "250")
    .attr('height', "35");
    
    addressInfo.append("text")
    .attr("id","bAddress")
    .attr("x", 40)
    .attr("y", 20)
    .attr("class", "infoText")
    
}

function textUpdate(name, price, rating, region, address){

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
        .text("Price:     " + price);

        d3.selectAll("#bRating")
        .style("display","none");

        ratingInfo.append("text")
        .attr("id","bRating")
        .attr("x", 40)
        .attr("y", 20)
        .attr("class", "infoText")
        .text("Rating:     " + rating);

        d3.selectAll("#bRegion")
        .style("display","none");

        regionInfo.append("text")
        .attr("id","bRegion")
        .attr("x", 40)
        .attr("y", 20)
        .attr("class", "infoText")
        .text("Region:     " + region);

        d3.selectAll("#bAddress")
        .style("display","none");

        addressInfo.append("text")
        .attr("id","bName")
        .attr("x", 40)
        .attr("y", 20)
        .attr("class", "infoText")
        .text("Address:     " + address);
        


}