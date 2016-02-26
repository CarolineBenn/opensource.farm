# opensource.farm

**opensourcefarm.herokuapp.com**

### Screenshot of app



### Tech used:
MEAN stack - MongoDB, Express, AngularJS, Node.js
ZURB Foundation v5.3
Pushy menu _https://github.com/christophery/pushy_
MetOffice Datapoint API for weather updates

### The idea:
I spend a lot time out in the countryside, and thought about how I could mix the outdoors with technology. How much fun would it be to have people come along and have a bit of space and freedom to experiment with building farming-related robots, or use sensors and all sorts of hardware. And thus opensource.farm was born.

It's a small patch of land (currently covered in brambles) that has scope to be something a little more interesting over time, especially if you like digging, ploughing and burning. The opensource.farm website is a place for people who are interested to upload their project ideas, from concept through to completion and gives people to see what everyone else is working on. 

### General approach: 
I started this project using Express rendering EJS views. I worked on the HTML markup first so I knew where each bit was going to be on the page. Once I got the interactive wireframe working, I started working on getting the info on the page. This is when I realised that I wasn't using AngularJS, so I took a big step backwards and remade the site in a more Angularified way. I split the project into two halves, the backend and front-end. 

### Installation instructions


`npm install`
`nodemon app.js`

### User stories
A User must be able to register and log in to the site so they can upload their own project
A User must be able to upload a project to the site to share with other users what they are doing.
A User must be able to edit their project should they wish to
A User must be able to delete their project should they wish to

### Wireframes

![alt tag](http://nobodyknowsthisishere.co.uk/images/wireframe3.png)
![alt tag](http://nobodyknowsthisishere.co.uk/images/wireframe2.png)

### Architecture

![alt tag](http://nobodyknowsthisishere.co.uk/images/structure.png)

