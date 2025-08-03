# React FastAPI App

This project is a full-stack application that uses React for the frontend and FastAPI for the backend. It is designed to demonstrate how to build a modern web application with a responsive user interface and a robust API.

## Project Structure

```
react-fastapi-app
├── backend
│   ├── src
│   │   ├── api
│   │   │   ├── __init__.py
│   │   │   └── routes.py
│   │   ├── core
│   │   │   ├── __init__.py
│   │   │   └── config.py
│   │   └── main.py
│   ├── requirements.txt
│   └── README.md
├── frontend
│   ├── src
│   │   ├── components
│   │   │   └── index.ts
│   │   ├── pages
│   │   │   └── index.ts
│   │   ├── services
│   │   │   └── api.ts
│   │   ├── types
│   │   │   └── index.ts
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
```

## Getting Started

### Prerequisites

- Python 3.7 or higher
- Node.js 14 or higher
- npm (Node Package Manager)

### Backend Setup

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Install the required Python packages:
   ```bash
   pip install -r requirements.txt
   ```

3. Run the FastAPI application:
   ```bash
   uvicorn src.main:app --reload
   ```

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install the required Node packages:
   ```bash
   npm install
   ```

3. Start the React application:
   ```bash
   npm start
   ```

## Usage

- The backend API will be available at `http://localhost:8000`.
- The frontend application will be available at `http://localhost:3000`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.