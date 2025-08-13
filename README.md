# Trading Application

A full-stack trading application built with React (TypeScript) and FastAPI.

## Project Structure

```
react-fastapi-app/
├── backend/              # FastAPI server
│   ├── main.py          # Main API endpoints
│   └── requirements.txt  # Python dependencies
└── frontend/            # React TypeScript client
    ├── src/             # Source code
    ├── public/          # Static files
    └── package.json     # Node.js dependencies
```

## Getting Started

### Backend Setup

1. Create and activate virtual environment:
```bash
cd backend
python -m venv venv
source venv/bin/activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Run the server:
```bash
uvicorn main:app --reload
```

The API will be available at http://localhost:8000

### Frontend Setup

1. Install dependencies:
```bash
cd frontend
npm install
```

2. Start the development server:
```bash
npm start
```

The application will be available at http://localhost:3000

## API Documentation

FastAPI provides automatic interactive API documentation:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## Development

- Backend: FastAPI with Python 3.8+
- Frontend: React 18 with TypeScript
- Styling: Chakra UI
- Routing: React Router v6

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

Might put one in if this is ever half decent