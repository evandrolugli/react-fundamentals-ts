## Overview
A demo of React + TypeScript basics, showcasing the core fundamentals in action!  
Created to understand and apply key concepts of modern React development using TypeScript. It includes typing for props and state, function components with type annotations, and basic React patterns.

## Tech Stack
- **React** (with functional components)
- **TypeScript**
- **Vite** (for fast development server and build)
- **CSS Modules** (for scoped styling)

## Key Features
- Strongly typed components and props
- Type-safe state management with `useState`
- Conditional rendering with ternaries
- List rendering using `.map()`
- Reusable and composable UI components
- Controlled input elements
- Basic styling with CSS Modules

## Key Code Concepts
```tsx
// Passing typed props
type GreetingsProps = { name: string }
const Greetings: React.FC<GreetingsProps> = ({ name }) => <h1>Hello, {name}</h1>

// useState with types
const [count, setCount] = useState<number>(0)

// Conditional rendering
{isLoggedIn ? <Dashboard /> : <Login />}

// List rendering
{items.map((item: Item) => (
  <ItemCard key={item.id} {...item} />
))}
```

## Run the App
```tsx
> npm install
> npm run dev
```