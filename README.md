# README

## Summary - Off the Beaten Path

Off the Beaten Path, a clone of AllTrails, aims to help guide and plan outdoor adventures. The app provides a variety of trails and nature parks across the world for outdoor-lovers to get off their beaten path and into nature. A notable feature Off the Beaten Path offers is a map of the trail including its spec (route type, elevation gain and difficulty). Users are able to rate and leave reviews on specific trail pages based on their own experiences for other future adventurers to see. A user may also delete and edit their own reviews.  

* LIVE SITE: https://off-the-beaten-path-2021.herokuapp.com/#/



## Technologies Used

This application makes use of the following technologies: Ruby on rails, PostgreSQL, and AWS S3 storage was used to build the backend, while Javascript, React, Redux, and CSS were implemented for a smooth frontend interface. Regarding AWS S3 storage remotely stores photos, which are then imported to a specific trail or park page upon loading the relevant page. To render the trail and park maps, Mapbox GL JS is used to show location as well as draw the trails.


## Features

### Reviews 
  Upon navigating to a trail's page, users are able to leave a review if logged in. The review process has been engineered to make use of a modal interface, which does not navigate away from the trail show page. A user can click on 'write review' and a modal will pop up allowing the user to give a star rating of the trail and their own experience on the date they went. 

  Upon clicking 'create', the review will show in the review index on the trail show page, ordered by date of the activity. If the user is logged in, they will be able to delete and edit the review. Editing the review is also carried out using a modal. Create and Edit are done using the same modal and review form. 

  Lastly, based on  ratings that users give a trail, the total average rating is calculated and reviews are tallied as new reviews are written or old ones are deleted. This allows users to gather a bird's eye view of people's experiences on the trail.


<img width="600" alt="Screen Shot 2021-12-29 at 4 02 02 PM" src="https://user-images.githubusercontent.com/89127270/147676327-ca77fdc3-cf09-45a1-b895-b1e701d5b177.png">
<img width="600" alt="Screen Shot 2021-12-29 at 4 01 50 PM" src="https://user-images.githubusercontent.com/89127270/147849619-654b918e-983b-4d36-855a-fe99eaafc327.png">

<img width="465" alt="Screen Shot 2021-12-29 at 4 26 11 PM" src="https://user-images.githubusercontent.com/89127270/147677766-85b7d0b9-1935-4eb5-8003-7b32d93af1d4.png">
<img width="503" alt="Screen Shot 2021-12-29 at 4 27 46 PM" src="https://user-images.githubusercontent.com/89127270/147677772-be70efcb-72cd-4fe0-84ef-6ae0607c4f9e.png">
<!-- <img width="444" alt="Screen Shot 2021-12-29 at 4 28 00 PM" src="https://user-images.githubusercontent.com/89127270/147677775-96cd1544-d094-45bc-b0b9-52562c433eb1.png"> -->
<img width="376" alt="Screen Shot 2022-01-01 at 12 36 14 PM" src="https://user-images.githubusercontent.com/89127270/147849662-93bee180-aa84-4778-9249-005e8ca1564d.png">


  ## Map
  The trail show page also provides a map toggle on the same frontend route. Clicking 'View full map' on the right-hand sidebar navigates the user to a map (Mapbox GL JS) that draws the route of the trail, while still providing a summary of the trail and reviews in the left-hand sidebar. Users are able interact with the map with the navigation buttons and are able to toggle back to the main page by clicking on 'view trail details'.

  
<img width="700" alt="Screen Shot 2021-12-29 at 4 02 22 PM" src="https://user-images.githubusercontent.com/89127270/147676401-ebe39014-5871-4c46-8bdc-75355b5dbcff.png">


<img width="700" alt="Screen Shot 2021-12-29 at 4 19 36 PM" src="https://user-images.githubusercontent.com/89127270/147676978-333a8501-f93c-4d5b-8b3d-2901e956cb78.png">

<img width="700" alt="Screen Shot 2021-12-29 at 4 21 31 PM" src="https://user-images.githubusercontent.com/89127270/147677275-385eba7e-be90-4479-8aca-f61a331bc18f.png">
<img width="1000" alt="Screen Shot 2021-12-29 at 4 22 02 PM" src="https://user-images.githubusercontent.com/89127270/147677283-6f8f46a6-4069-42de-8d8c-09d739084f5c.png">


## Future features
* build a simple user profile showing a user's information
* add tags onto the trail and park pages
