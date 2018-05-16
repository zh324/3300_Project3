function textInit(){

    nameInfo = d3.select('#buildingName').append('svg')
    .style('background', 'white')
    .attr("id", "bar")
    .attr('width', "200")
    .attr('height', "50");
    
    nameInfo.append("text")
    .attr("id","bName")
    .attr("x", 40)
    .attr("y", 10)
    .attr("font-size", "14px")
    .attr("font-weight", "900")
    .style("fill", "#1C1B1B")
    .text("Click on the buildings");

    priceInfo = d3.select('#buildingPrice').append('svg')
    .style('background', 'white')
    .attr("id", "bar")
    .attr('width', "200")
    .attr('height', "50");
    
    priceInfo.append("text")
    .attr("id","bPrice")
    .attr("x", 40)
    .attr("y", 10)
    .attr("font-size", "14px")
    .attr("font-weight", "900")
    .style("fill", "#1C1B1B")
    .text("Click on the buildings");

    ratingInfo = d3.select('#buildingRating').append('svg')
    .style('background', 'white')
    .attr("id", "bar")
    .attr('width', "200")
    .attr('height', "50");
    
    ratingInfo.append("text")
    .attr("id","bRating")
    .attr("x", 40)
    .attr("y", 10)
    .attr("font-size", "14px")
    .attr("font-weight", "900")
    .style("fill", "#1C1B1B")
    .text("Click on the buildings");

    regionInfo = d3.select('#buildingRegion').append('svg')
    .style('background', 'white')
    .attr("id", "bar")
    .attr('width', "200")
    .attr('height', "50");
    
    regionInfo.append("text")
    .attr("id","bRegion")
    .attr("x", 40)
    .attr("y", 10)
    .attr("font-size", "14px")
    .attr("font-weight", "900")
    .style("fill", "#1C1B1B")
    .text("Click on the buildings");

    addressInfo = d3.select('#buildingAddress').append('svg')
    .style('background', 'white')
    .attr("id", "bar")
    .attr('width', "200")
    .attr('height', "50");
    
    addressInfo.append("text")
    .attr("id","bAddress")
    .attr("x", 40)
    .attr("y", 10)
    .attr("font-size", "14px")
    .attr("font-weight", "900")
    .style("fill", "#1C1B1B")
    .text("Click on the buildings");
    
    
}

function textUpdate(name, price, rating, region, address){

        d3.selectAll("#bName")
        .style("display","none");

        nameInfo.append("text")
        .attr("id","bName")
        .attr("x", 40)
        .attr("y", 10)
        .attr("font-size", "14px")
        .attr("font-weight", "900")
        .style("fill", "#1C1B1B")
        .text("Name:     " + name);

        d3.selectAll("#bPrice")
        .style("display","none");

        priceInfo.append("text")
        .attr("id","bPrice")
        .attr("x", 40)
        .attr("y", 10)
        .attr("font-size", "14px")
        .attr("font-weight", "900")
        .style("fill", "#1C1B1B")
        .text("Price:     " + price);

        d3.selectAll("#bRating")
        .style("display","none");

        ratingInfo.append("text")
        .attr("id","bRating")
        .attr("x", 40)
        .attr("y", 10)
        .attr("font-size", "14px")
        .attr("font-weight", "900")
        .style("fill", "#1C1B1B")
        .text("Rating:     " + rating);

        d3.selectAll("#bRegion")
        .style("display","none");

        regionInfo.append("text")
        .attr("id","bRegion")
        .attr("x", 40)
        .attr("y", 10)
        .attr("font-size", "14px")
        .attr("font-weight", "900")
        .style("fill", "#1C1B1B")
        .text("Region:     " + region);

        d3.selectAll("#bAddress")
        .style("display","none");

        addressInfo.append("text")
        .attr("id","bName")
        .attr("x", 40)
        .attr("y", 10)
        .attr("font-size", "14px")
        .attr("font-weight", "900")
        .style("fill", "#1C1B1B")
        .text("Address:     " + address);
        


}