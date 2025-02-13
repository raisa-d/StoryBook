# StoryBook
StoryBook is an app where people can share stories from their lives publically or privately! 

I am following a Traversy Media [tutorial](https://www.youtube.com/watch?v=SBvmnHTQIPY&ab_channel=TraversyMedia) to practice MVC architecure and Google OAuth.

Challenges/Lessons Learned:
- A lot of features of certain modules were deprecated, so I went to the documentation and had to update the code with the current way to do it. It was good practice to go through the documentation and updating an existing codebase.

Bugs:
- Traversy uses ../user in index.hbs handlebars template to go "up one level" to the original user. When I do this, I get the error: TypeError: Cannot read properties of null (reading '_id') and it cannot compare the ids because it can't access
- Right now, I have it as ./user so it shows the edit button on every single story, even other people's. Need to troubleshoot this when I continue working on this
- editIcon is also having an issue in show.hbs, still troubleshooting this.