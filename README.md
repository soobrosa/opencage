# # POI Check-In App 📍

A location-based web app for checking into nearby Points of Interest (POIs) with persistent data storage via GitHub API.

## Features ✨

- 🗺️ **Interactive Map**: View your location and nearby POIs on an interactive map
- 📋 **Smart POI List**: Shows named venues sorted by distance with check-in counts
- 🔄 **Bidirectional Interaction**: Click venues in list to view on map, or map markers to highlight in list
- 📚 **Persistent Storage**: Check-ins saved to GitHub repository as JSON
- 🏠 **Reset View**: Quick reset button to return to your original location
- 📱 **Responsive Design**: Works on desktop and mobile devices

## Security & Configuration 🔐

This app uses **secure token management** - GitHub Personal Access Tokens are never committed to the repository.

### Local Development Setup

1. **Create GitHub Personal Access Token**:
   - Go to [GitHub Settings → Developer settings → Personal access tokens](https://github.com/settings/tokens)
   - Generate new token with "repo" permissions
   - Copy the token (starts with `ghp_`)

2. **Secure Local Config**:
   ```bash
   # Copy the example config
   cp config.example.js config.js
   
   # Edit config.js and add your token
   # This file is gitignored and won't be committed
   ```

3. **Open the app**:
   ```bash
   # Serve locally (Python example)
   python -m http.server 8000
   
   # Or use any static server
   npx serve .
   ```

### Vercel Deployment (Production)

1. **Connect your repository to Vercel**

2. **Add Environment Variable in Vercel Dashboard**:
   - Go to Project Settings → Environment Variables
   - Add: `GITHUB_TOKEN` = `your_token_here`

3. **Deploy**: Vercel will inject the token securely at build time

## How It Works 🛠️

1. **Location Detection**: Uses browser geolocation API
2. **POI Discovery**: Queries OpenStreetMap Overpass API for nearby amenities
3. **Smart Filtering**: Shows only venues with proper names (starting with capital letters)
4. **Distance Calculation**: Uses Haversine formula for accurate distances
5. **Data Persistence**: Stores check-ins as JSON in your GitHub repository

## Tech Stack 📚

- **Frontend**: Vanilla JavaScript, HTML, CSS
- **Maps**: Leaflet.js with OpenStreetMap tiles
- **Data**: OpenStreetMap Overpass API
- **Storage**: GitHub API for persistent data
- **Deployment**: Vercel static hosting

## File Structure 📁

```
├── index.html              # Main application
├── config.example.js       # Example configuration (committed)
├── config.js              # Your config with token (gitignored)
├── .gitignore             # Excludes config.js and secrets
├── vercel.json            # Vercel deployment configuration
└── README.md              # This file
```

## API Endpoints Used 🌐

- **Overpass API**: `https://overpass-api.de/api/interpreter` (POI data)
- **GitHub API**: `https://api.github.com/repos/{owner}/{repo}/contents/{path}` (data storage)

## Privacy & Data 🔒

- **Location**: Used only for finding nearby POIs, not stored remotely
- **Check-ins**: Stored in your own GitHub repository
- **Tokens**: Never committed to git, handled securely via environment variables

## Contributing 🤝

1. Fork the repository
2. Create your feature branch
3. Test locally with your own config.js
4. Submit a pull request

## License 📄

MIT License - feel free to use and modify!