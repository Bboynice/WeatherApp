# Use lightweight Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy only package.json & package-lock.json first for better caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Build the Vite app
RUN npm run build

# Install `serve` globally to serve production build
RUN npm install -g serve

# Expose the correct production port
EXPOSE 4173

# Serve the built Vite app
CMD ["serve", "-s", "dist", "-l", "4173"]