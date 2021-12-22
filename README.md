# README

## Summary - Off the Beaten Path

Off the Beaten Path, a clone of AllTrails, aims to help guide and plan outdoor adventures. The app provides a variety of trails and nature parks across the world for outdoor-lovers to get off their beaten path and into nature. A notable feature Off the Beaten Path offers is a map of the trail including its spec (route type, elevation gain and difficulty). Users are able to rate and leave reviews on specific trail pages based on their own experiences for other future adventurers to see. A user may also delete and edit their own reviews.  

* LIVE SITE: https://off-the-beaten-path-2021.herokuapp.com/#/
* Note: search functionality and park pages are still being built.


## Technologies Used

This application makes use of the following technologies: Ruby on rails, PostgreSQL, and AWS S3 storage was used to build the backend, while Javascript, React, Redux, and CSS were implemented for a smooth frontend interface. Regarding AWS S3 storage remotely stores photos, which are then imported to a specific trail or park page upon loading the relevant page. To render the trail and park maps, Mapbox GL JS is used to show location as well as draw the trails.


## Features

### Reviews 
  Upon navigating to a trail's page, users are able to leave a review if logged in. The review process has been engineered to make use of a modal interface, which does not navigate away from the trail show page. A user can click on 'write review' and a modal will pop up allowing the user to give a star rating of the trail and their own experience on the date they went. 

  Upon clicking 'create', the review will show in the review index on the trail show page, ordered by date of the activity. If the user is logged in, they will be able to delete and edit the review. Editing the review is also carried out using a modal. 

  Lastly, based on  ratings that users give a trail, the total average rating is calculated and reviews are tallied as new reviews are written or old ones are deleted. This allows users to gather a bird's eye view of people's experiences on the trail.



  ## Map
  The trail show page also provides a map toggle on the same frontend route. Clicking 'View full map' on the right-hand sidebar navigates the user to a map (Mapbox GL JS) that draws the route of the trail, while still providing a summary of the trail and reviews in the left-hand sidebar. Users are able interact with the map with the navigation buttons and are able to toggle back to the main page by clicking on 'view trail details'.

  

## Future features
* build a simple user profile showing a user's information
* add tags onto the trail and park pages
