# --- Base image: Node 24 (matches nvm use v24)
FROM node:24-bookworm-slim

WORKDIR /app

# Enable corepack (provides pnpm automatically in Node 16.9+)
RUN corepack enable

# Copy only package manifests first (for caching)
COPY package.json pnpm-lock.yaml ./

# Install dependencies (using frozen lockfile)
RUN pnpm install --frozen-lockfile

# Copy rest of the app
COPY . .

# Expose Vite dev port
EXPOSE 5173

# Run the Vite dev server
CMD ["pnpm", "run", "dev", "--", "--host", "0.0.0.0"]
