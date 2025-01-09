# Backend Part

## Technologies Used
- **Node.js**
- **Docker Desktop**: Refer to the official [Docker Desktop Documentation](https://docs.docker.com/desktop/) for installation and setup.

## How to Run the Backend
Follow these steps to execute the backend:

1. Open a terminal and navigate to the backend repository.
2. Start the Docker containers:
   ```bash
   docker compose up
3. Open another terminal and navigate to the backend repository again.
   ```bash
   node app.js
   ```
    And you should have this line of code just above your executed command 
    ```bash
    Server runnig : http://localhost:4956
    Executing (default): SELECT 1+1 AS result
    
    Connection established successfully for the Table Course 
    ```
## How to add column into a Sequelize table
Follow thses steps into the backend repo: 

1. Add the column you want to add into the config folder
2. Run this command:
   ```bash
   npx sequelize-cli migration:generate --name add-new-columns-to-courses
   ```
   It will display something like this :
   ```bash 
   Sequelize CLI [Node: 18.19.1, CLI: 6.6.2, ORM: 6.37.5]
   
   Successfully created migrations folder at "/home/enzo/SoftwareUsefull/GitFolder/SchoolManagorV0.5/backend/migrations".
   New migration was created at /home/enzo/SoftwareUsefull/GitFolder/SchoolManagorV0.5/backend/migrations/20250109193705-add-new-columns-to-courses.js .
   ```
3. Go to the generated file named into the migrations folder and open the created file (ex above: 20250109193705-add-new-columns-to-courses.js ) 

4. Add Column and remove Column according to the commentary

5. Create the file config.json (if it's note already here ) into the congif directory fullfield with the informations of your database

6. Run this command :
   ```bash
   npx sequelize-cli db:migrate
   ```
   It should print something like :
   ```bash
   Sequelize CLI [Node: 18.19.1, CLI: 6.6.2, ORM: 6.37.5]

   Loaded configuration file "config/config.json".
   Using environment "development".
   == 20250109193705-add-new-columns-to-courses: migrating =======
   == 20250109193705-add-new-columns-to-courses: migrated (0.028s)
   ```
7. And It works :)

# Frontend Part

## Technologies Used 
- **TODO**

## How to Run the Backend
Follow these steps to execute the frontend:

1. Open a terminal and navigate to the frontendApp repository.
2. Install angular CLI package
   ```bash
   npm install
   npm install -g @angular/cli
   ```
   Then it will ask you to accept or not 2 shared data (you can say yes and cancel it later). Finally if it's all works you will see :
   ```bash
   Application bundle generation complete. [2.620 seconds]

   Watch mode enabled. Watching for file changes...
   NOTE: Raw file sizes do not reflect development server per-request transformations.
     ➜  Local:   http://localhost:4200/
     ➜  press h + enter to show help
   ```
   



   

  
