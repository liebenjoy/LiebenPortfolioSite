#!/bin/bash

echo "🚀 Starting Modern Resume Portfolio with Vite..."
echo "📦 Installing dependencies if needed..."

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    npm install
fi

echo "🔥 Starting development server..."
echo "🌐 Your app will be available at: http://localhost:5173"
echo "⏹️  Press Ctrl+C to stop the server"

npm run dev
