#!/bin/bash
# Navigate to the frontend directory
echo "Navigating to the backend directory..."
cd SoftwareUsefull/GitFolder/SchoolManagorV0.5/backend/ || { echo "Backend directory not found."; exit 1; }

# Run docker-compose up
echo "Starting Docker containers with docker-compose..."
docker compose up -d # -d flag runs containers in detached mode

# Check if Docker containers started successfully
if [ $? -eq 0 ]; then
    echo "Docker containers started successfully."
else
    echo "Failed to start Docker containers."
    exit 1
fi

# Wait for a few seconds to ensure services are up (optional)
echo "Waiting for services to initialize..."
sleep 5

# Run the Node.js backend
echo "Starting Node.js application..."
node app.js & # Run in the background

# Check if Node.js application started successfully
if [ $? -eq 0 ]; then
    echo "Node.js application started successfully."
else
    echo "Failed to start Node.js application."
    exit 1
fi

# Navigate to the frontend directory
echo "Navigating to the frontend directory..."
cd ../frontend/frontendApp || { echo "Frontend directory not found."; exit 1; }

# Start the Angular frontend
echo "Starting Angular application with 'ng serve'..."
ng serve --open

# Check if Angular application started successfully
if [ $? -eq 0 ]; then
    echo "Angular application started successfully."
else
    echo "Failed to start Angular application."
    exit 1
fi

