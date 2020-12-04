# substrate-startkit-gui-app
Frontend for building substrate blockchain using GUI

# Requirements
- On your computer
    * If setting up using Docker
        * Installed [Docker](https://www.docker.com/)
        * Installed docker-compose (Bundled with the official Docker setup)
    * If setting up locally
        * Installed [yarn](https://yarnpkg.com/) package manager
        * Installed [serve](https://www.npmjs.com/package/serve)

# Installation guide
Once you have cloned the repo on your computer you
can start configuring the frontend application by
following next steps:

1. Navigate to the root of the project
2. Fill the `.env` file, example of the values can
   be copied from the `.env.example` file
   
#### Docker setup:
1. Run `docker-compose up`
2. That's it!

(Note) If you've pulled new code files you'll have to rebuild the Docker image using `docker-compose up --build`

#### Local setup:
3. Run `yarn` to install dependencies
4. Run the app with `yarn dev` or production
build by using `yarn prod`
