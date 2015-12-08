# AngularJS Frontend for our Campaign Contributions App

### Installation:
1. Install npm using homebrew (brew install npm)
2. Clone this repository
3. cd to this directory and run npm install

### Starting the server:
1. Go to the root of the directory
2. Run "npm start"
3. The home page should be at "localhost:8000/app/#/home"

### Expectations
The front end expects a backend server which supports the following API

GET /CONGRESS

Returns a json list of maps
i.e.
[{"chamber":"sen","id":"N00003535","name":"Sherrod Brown","party":"Democrat","state":"OH"},{"chamber":"sen","id":"N00007836","name":"Maria Cantwell","party":"Democrat","state":"WA"},...{..}]

GET /MEMBER/{MEMBERID}

Returns the following information about a congressmember: 

Party

State

How they voted on bills

i.e.

{"bills":[{"billid":"h511","billname":"","description":"On Agreeing to the Amendment: Amendment 5 to H R 348","vote":"No"},{"billid":"h523","billname":"Womenâ€™s Public Health and Safety Act","description":"On Motion to Recommit with Instructions: H R 3495 Womenâ€™s Public Health and Safety Act","vote":"No"},...],"donors":[{"amount":126000,"industry":"Defense aerospace contractors","pacs":{"Aerojet Rocketdyne":2000,...}},

GET /BILL/{BILLID}

Returns a JSON map containing bill information as well as the how each congress member voted on the bill

i.e.

{"billid":"bill1","billname":"bill1name","description":"bill1desc","voteDate":"bill1votedate","votes":[{"id":"N00036633","member":"rep1","party":"Republican","state":"state1","vote":"No"},...]}

