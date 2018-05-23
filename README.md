## Architecture

OrderCoffee is a single page app built on a Ruby on Rails backend, with a PostgreSQL database, and a React/Redux frontend. To get started with the project navigate to the project directory in the console and run:

`rails db:setup`

This will create the database, and seed it with a little over 500 "orders" that can be viewed. Next, run `webpack` to bundle up the project's JavaScript files and `rails s` to start the server. Now you can navigate to localhost:3000 in your browser to view the project.

## Trade Offs

A choice was made to keep the database limited to a single table. This comes with a cost to the amount of memory required to keep track of the information within. Since there are a limited number of coffee_names and methods that are used to brew, these strings could be stored in a separate table, and only an index to reference them could be stored with each order. However, it was chosen not to normalize the database in this way since the memory cost is minimal (only substantial when many billions of orders are being stored), whereas the time/calculation savings of keeping the database denormalized in this way are substantial.

## Production Readiness

With just a few steps, this project could be deployed to Heroku. The first step would be to create a project on Heroku with the nodejs and ruby Buildpacks added to the project.

Next, add the following line to the "scripts" object in the package.json file:

`"postinstall": "webpack -p"`

This is important to ensure that Heroku is able to not just perform the bundling of the JavaScript files in the project, but also to minify these files for the production environment.

Next, from the console, navigate to the project directory and add a git remote for heroku using the Heroku Git URL that was provided when the project was created on their site. This will look something like:

`git remote add heroku https://git.heroku.com/make-friends.git`

Finally, deploy the master branch of the project to heroku using the command:

`git push heroku master`
