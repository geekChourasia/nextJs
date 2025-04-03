# Next.js Posts Assessment

A Next.js application that demonstrates fetching and displaying posts from JSONPlaceholder API with server and client components, including comprehensive testing.

## Features

- Server-side data fetching using Next.js App Router
- Client-side interactivity with search functionality
- Responsive post card layout
- Integration with JSONPlaceholder API
- Comprehensive test coverage using Jest and React Testing Library

## Project Structure

```
nextjs-assessment/
├── src/
│   ├── app/
│   │   ├── page.js              # Main page component (Server Component)
│   │   ├── layout.js            # Root layout component
│   │   ├── ClientComponent.js    # Client-side interactive component
│   │   └── __tests__/          # Test files for app components
│   ├── components/
│   │   ├── Card.js             # Reusable card component
│   │   └── __tests__/          # Test files for components
│   ├── pages/
│   │   └── posts/
│   │       └── [id].js         # Dynamic post page
│   └── styles/
│       ├── Home.module.css     # Styles for the main page
│       ├── Card.module.css     # Styles for the card component
│   └── README.md
```

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Testing

The project uses Jest and React Testing Library for testing. The following test commands are available:

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run tests in CI mode
npm run test:ci
```

## Technical Details

- Built with Next.js 15+ using the App Router
- Uses Server Components for data fetching
- Implements Client Components for interactive features
- Fetches data from JSONPlaceholder API
- Utilizes CSS Modules for styling
- Testing setup includes:
  - Jest for test running and assertions
  - React Testing Library for component testing
  - Jest DOM for DOM testing utilities
  - Fetch mocking for API calls

## API Reference

The application fetches posts from:
- Endpoint: `https://jsonplaceholder.typicode.com/posts`
- Returns: Array of post objects with properties:
  - id: number
  - title: string
  - body: string
  - userId: number

## Dependencies

### Main Dependencies
- Next.js 15+
- React 19+
- React DOM 19+

### Development Dependencies
- Jest and Jest Environment JSDOM
- React Testing Library
- Babel presets for React and environment
- TailwindCSS for styling
