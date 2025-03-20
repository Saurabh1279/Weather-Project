# Weather App

A modern, responsive weather application built with React, TypeScript, and TailwindCSS that provides current weather information based on location searches.

![Weather App Screenshot](public/og-image.png)

## Features

- Search for weather by city name, postal code, or coordinates
- Display current weather conditions including:
  - Temperature (°C and °F)
  - Feels like temperature
  - Condition with icon
  - Wind speed and direction
  - Humidity and pressure
  - Visibility and UV index
  - Air quality information
- Responsive design that works on all device sizes
- Error handling with useful feedback
- Loading states for better user experience

## Tech Stack

- **React**: Frontend library
- **TypeScript**: Type safety
- **TailwindCSS**: Styling
- **shadcn/ui**: UI component library
- **React Query**: Data fetching and caching
- **Vite**: Build tool
- **WeatherAPI.com**: Weather data API

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/weather-app.git
cd weather-app
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory (optional - currently using a demo API key):

```
VITE_WEATHER_API_KEY=your_api_key_here
```

Note: The application currently uses a demo API key that may have limited requests. For production use, it's recommended to create your own API key at [WeatherAPI.com](https://www.weatherapi.com/).

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and navigate to http://localhost:8080

### Building for Production

To create a production build:

```bash
npm run build
```

The build outputs will be located in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## Usage

1. Enter a location (city name, postal code, or coordinates) in the search bar
2. Click the search button or press Enter
3. View the current weather conditions for the searched location
4. To search for a new location, simply enter a new search term

## Project Structure

```
weather-app/
├── public/               # Static assets
├── src/                  # Source files
│   ├── components/       # UI components
│   │   ├── ui/           # shadcn/ui components
│   │   └── ...           # Custom components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions and libraries
│   ├── pages/            # Page components
│   ├── services/         # API service functions
│   ├── types/            # TypeScript type definitions
│   ├── App.tsx           # Main application component
│   ├── index.css         # Global styles
│   └── main.tsx          # Application entry point
└── ...                   # Configuration files
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Weather data provided by [WeatherAPI.com](https://www.weatherapi.com/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
