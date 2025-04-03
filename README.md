# Next.js Posts Assessment

A Next.js application that demonstrates fetching and displaying posts from JSONPlaceholder API with server and client components.

## Features

- Server-side data fetching using Next.js 13+ App Router
- Client-side interactivity
- Responsive post card layout
- Integration with JSONPlaceholder API

## Project Structure

```
nextjs-assessment/
├── src/
│   ├── app/
│   │   ├── page.js           # Main page component (Server Component)
│   │   └── ClientComponent.js # Client-side interactive component
│   ├── components/
│   │   └── Card.js           # Reusable card component
│   └── styles/
│       └── Home.module.css    # Styles for the main page
```

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Technical Details

- Built with Next.js 13+ using the App Router
- Uses Server Components for data fetching
- Implements Client Components for interactive features
- Fetches data from JSONPlaceholder API
- Utilizes CSS Modules for styling

## API Reference

The application fetches posts from:
- Endpoint: `https://jsonplaceholder.typicode.com/posts`
- Returns: Array of post objects with properties:
  - id
  - title
  - body
  - userId
