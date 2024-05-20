# Megaclite

### Steps to run the project

1. Clone the repository
  `git clone git@github.com:williamkoller/megaclite.git`
2. access the project folder
  `cd megaclite`
3. Install the dependencies
  `yarn install --frozen-lockfile`
4. Copy the `.env.example` file to `.env`
  `cp -r .env.example .env`
5. Set node version
  `nvm use`
6. Run the project
  `yarn docker:up --build`