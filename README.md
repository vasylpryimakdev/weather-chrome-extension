# Weather Chrome Extension

A modern Chrome extension that displays weather information for multiple cities with an interactive overlay feature.

## Features

- **Weather Cards**: Display current weather conditions for multiple cities
- **City Management**: Add and remove cities dynamically
- **Temperature Scale Toggle**: Switch between Celsius and Fahrenheit
- **Home City**: Set a primary city for quick access
- **Overlay Mode**: Toggle weather overlay on any webpage
- **Context Menu**: Right-click to add selected text as a city
- **Badge Updates**: Hourly temperature updates in extension badge
- **Options Page**: Configure extension settings
- **Persistent Storage**: Cities and preferences saved across sessions

## Installation

1. Clone the repository

```bash
git clone https://github.com/vasylpryimakdev/weather-chrome-extension.git
cd weather-chrome-extension
```

2. Install dependencies: `npm install`
3. Build the extension: `npm run build`
4. Open Chrome and navigate to `chrome://extensions/`
5. Enable "Developer mode"
6. Click "Load unpacked" and select the `dist` folder

## Usage

### Popup Interface

- Click the extension icon to open the popup
- Add cities using the input field and "+" button
- Toggle temperature scale using the °C/°F button
- Enable overlay mode using the picture-in-picture icon
- Delete cities using the "Delete" button on each card

### Overlay Mode

- Toggle the overlay to show weather on any webpage
- Click the "X" on the overlay card to hide it
- Configure auto-overlay in the options page

### Context Menu

- Select text (city name) on any webpage
- Right-click and choose "Add city to weather extension"

### Options Page

- Set your home city for quick access
- Configure auto-overlay behavior
- Save preferences with the Save button

## Development

### Technologies Used

- **React** - UI framework
- **TypeScript** - Type safety
- **Material-UI** - Component library
- **Chrome Extension APIs** - Storage, messaging, context menus
- **OpenWeather API** - Weather data

### Project Structure

```
src/
├── components/WeatherCard/    # Reusable weather card component
├── popup/                    # Extension popup interface
├── options/                  # Options page
├── contentScript/             # Webpage overlay script
├── background/               # Service worker
├── utils/                   # Utilities (API, storage, messages)
└── static/                  # Static assets and manifest
```

### Building

```bash
# Install dependencies
npm install

# Development build
npm run dev

# Production build
npm run build
```

## Configuration

### API Key

The extension uses the OpenWeather API. Update the API key in `src/utils/api.ts`:

```typescript
const OPEN_WEATHER_API_KEY = "your-api-key-here";
```

### Permissions

The extension requires the following Chrome permissions:

- `storage` - Save user preferences and cities
- `contextMenus` - Add cities via right-click menu
- `alarms` - Periodic weather updates

## API Integration

### OpenWeather API

- Endpoint: `https://api.openweathermap.org/data/2.5/weather`
- Parameters: `q` (city), `units` (metric/imperial), `appid`
- Response includes temperature, conditions, humidity, wind speed

### Storage Structure

```typescript
interface LocalStorage {
  cities?: string[];
  options?: LocalStorageOptions;
}

interface LocalStorageOptions {
  homeCity: string;
  tempScale: "metric" | "imperial";
  hasAutoOverlay: boolean;
}
```

## Troubleshooting

### Common Issues

1. **"Could not establish connection" error**
   - Reload the extension after making changes
   - Ensure the content script is properly injected

2. **Weather not loading**
   - Check that the API key is valid
   - Verify city names are spelled correctly
   - Check network connection

3. **Overlay not appearing**
   - Ensure auto-overlay is enabled in options
   - Check that content script permissions are granted

### Debugging

- Open Chrome DevTools on the popup for popup errors
- Check the console on the target webpage for content script issues
- Review background script logs in the extension management page

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Credits

- Weather data provided by [OpenWeather](https://openweathermap.org/)
- Icons from [Material-UI](https://material-ui.com/)
- Built with [Chrome Extension Manifest V3](https://developer.chrome.com/docs/extensions/mv3/)
