# Stage 1: Build
FROM node:16 AS builder
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy tsconfig.json
COPY tsconfig.json ./

# Copy source files and build
COPY . .
RUN npm run build

# Stage 2: Run
FROM node:16
WORKDIR /app

# Copy only the build files
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/tsconfig.json ./

# Install only production dependencies
RUN npm install --production

# Expose port
EXPOSE 8001

# Start the app
CMD ["node", "-r", "tsconfig-paths/register", "dist/server.js"]
