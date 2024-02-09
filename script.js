let button= document.getEementByTagName('button');
button.addEventListener('click',getData);
const boatUrl = ' https://www.yachtworld.com/yachtworld/search/boat?pageSize=26&page=1&facets=countrySubdivision,make,condition,makeModel,type,class,country,countryRegion,countryCity,fuelType,hullMaterial,hullShape,minYear,maxYear,minLengthPercentil,maxLengthPercentil,minMaxPercentilPrices,minTotalHorsepowerPercentil,maxTotalHorsepowerPercentil,enginesConfiguration&fields=id,make,model,year,featureType,specifications.dimensions.lengths.nominal,location.address,aliases,owner.logos,owner.name,owner.rootName,owner.location.address.city,owner.location.address.country,price.hidden,price.type.amount,portalLink,class,media.0,isOemModel,isCurrentModel,attributes,previousPrice,mediaCount,cpybLogo&useMultiFacetedFacets=true&enableSponsoredSearch=true&enablePremiumPlacement=false&enableOEM=true&locale=en-US&region=gulfcoast&country=US&distance=200mi&length=34-42&uom=ft&sort=recommended&fuelType=diesel&multiFacetedBoatTypeClass=[%22power%22,[%22power-trawler%22]]&price=35-85000&currency=USD&advantageSort=1';

function getData(){
    // create XHR object
     let xml = new XMLHttpRequest();
    // the function with the 3 parameters
    console.log(boatUrl);
      xml.open('GET',boatUrl,true );
      // the function called when an xhr transaction is completed
        xml.onload  = function(){
        if(this.status ==200){
                document.getElementById('para').innerHTML=this.responseText;
}
}
   // the function that sends the request
   xml.send();  
}