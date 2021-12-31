const apiKey='Rq_Wz3UIRveUIS3twG-thYNk4pRAi5WudoWbjHg-yTfr4hAMscqF9zOulAF9NB7SYNU2sqeaHqnuM_dNySFgJdSoqS0a5CT95Tx9cvOga672bmcX6blQ5pQBYwvOYXYx';

const Yelp={
    search(term,location,sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
            headers:{
                Authorization:`Bearer ${apiKey}`
            }
        }).then(response=>{
            return response.json();
        }).then(jsonResponse=>{
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map(business=>{
                    return {
                        id:business.id,
                        imageSrc:business.image_url,
                        name:business.name,
                        address:business.location.address,
                        city:business.location.city,
                        state:business.location.state,
                        zipCode:business.location.zip_code,
                        category:business.categories[0].alias,
                        rating:business.rating,
                        reviewCount:business.review_count
                    }
                });
            } else {
                console.log('error');
            }
        });
    }
}

export default Yelp;