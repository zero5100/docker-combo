FROM node:6

# Set the working directory to /app
WORKDIR /home/node/app

# Copy the current directory contents into the container at /app
ADD package.json ./

# Install any needed packages
RUN npm install --quiet

# Copy all of the source files into the container workdir
COPY ./ ./

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Use the premade node user instead of root to run the app
USER node

# Run index.js when the container launches
# Using this array notation causes docker to run the app as PID 1
CMD [ "node", "index.js" ]
