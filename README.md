# Bun-Elysia-HTMX-GS

This is a simple counter web application built with **Elysia** as the backend framework, **HTMX** for dynamic component interaction, and **Tailwind CSS** for styling. It also uses **Bun** as the runtime environment.

## Features

- Dynamic counter that increments or decrements using HTMX.
- Server-side logic handles counter updates via simple GET and POST requests.
- Styled with Tailwind CSS.

## Technologies Used

- **Bun**: A fast JavaScript runtime.
- **Elysia**: Minimal and efficient web framework.
- **HTMX**: Allows for seamless interaction without writing JavaScript.
- **Tailwind CSS**: Utility-first CSS framework for easy styling.

## Project Structure

```bash
bun-elysia-htmx-gs/
├── src/
│   └── index.tsx   # Main server script
├── package.json    # Project metadata and scripts
└── README.md       # Project documentation
```

## Setup Instructions

1. Install Bun
   If you don’t have Bun installed, you can install it by running the following command:

```bash
curl -fsSL https://bun.sh/install | bash
```

2. Clone this repository

```bash
git clone https://github.com/yourusername/bun-elysia-htmx-gs.git
cd bun-elysia-htmx-gs
```

3. Install Dependencies

```bash
bun install
Run the Development Server
```

4. Start the development server with Bun:

```bash
bun run dev
```

5. Access the Application
   Visit the application in your browser at:

```
http://localhost:3000
```

## How It Works

- The counter’s value is stored server-side in a simple variable.
- HTMX is used to send POST requests when the increment (+) or decrement (-) buttons are clicked.
- The counter is dynamically updated by swapping out the HTML using hx-swap.

## License

This project is licensed under the MIT License.

```
Feel free to modify this as needed for your project!
```
