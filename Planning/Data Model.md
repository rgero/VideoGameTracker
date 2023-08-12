# Data Model
This document is going to be a brainstorming session for what would be needed in order to make this project work. The goal, as stated in the README.md is to make this a website similar to the way that Goodreads works, but for Video Games. 

## Games
The first thing I think we'd need is a game object. What's the data that I'd need to capture for each one for a MVP?

- Title of the Game
- Publisher
- Systems available for it to be played on
- Release Date
- Cover Art?

### Nice to haves
- How long to beat
- Ratings (pulled externally?)
- Places to buy? If I can create an affiliate link with Amazon that'd be dope.
- An internal rating system with comments/Reviews left by users

## Accounts
This is going to be the account of the person. Again following Goodreads as the example what would I need?

- Display Name
- Lists
	- Want to Play
	- Currently Playing
	- Have Played
- Profile Picture
- Login Credentials

### Nice to Haves
- Friends
- Custom Lists
	- Goodreads has the ability to create your own "bookshelves" but these are just really some sort of tagging system.
- Gaming Challenges

## Publishers
Should I maintain the publisher data? I was thinking as a document within the database. But what data would I store about them? What would I care about?

## Where would I get this data?
It looks like I can get a lot of data from [IGDB: Video Game Database API](https://www.igdb.com/api)
It might be a lot of work to get the backlog of games into the database. They have data on nearly 250,000 games...

It might be worth the following workflow
- Search my database to see if we have the data.
- If I don't, look at the Video Game Database for the game, dynamically creating the result as a page for the user.
- If the user stores it on a list, store it in the database?

#### Benefits
- Much smaller local database size. I wouldn't have to store every game that ever existed, just the ones saved by the users

#### Risks
- Dependency on an external API.
- Performance hit. I'd be doing multiple database calls.

Would I honestly need to store the games if I have this API? I could change it so that the users store a list of relevant IDs.