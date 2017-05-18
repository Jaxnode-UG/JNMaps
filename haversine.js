

// distance function from GeoDataSource.com (C) All Rights Reserved 2015

const lat1 = 51.5103, lon1= 7.49347, lat2 = 51.431799, lon2 = 6.9326825;

const dist = distance(lat1, lon1, lat2, lon2);

console.log(dist);

function distance(lat1, lon1, lat2, lon2, unit) {
	const radlat1 = Math.PI * lat1/180;
	const radlat2 = Math.PI * lat2/180;
	const theta = lon1-lon2;
	const radtheta = Math.PI * theta/180;
	let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
	dist = Math.acos(dist);
	dist = dist * 180/Math.PI;
	dist = dist * 60 * 1.1515;
	if (unit=="K") { 
        dist = dist * 1.609344; 
    }
	if (unit=="N") { 
        dist = dist * 0.8684; 
    }
	return dist;
}
