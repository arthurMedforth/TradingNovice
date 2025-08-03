# Backend Documentation

## Overview
This is the backend of the React and FastAPI application. It provides the API endpoints that the frontend will interact with.

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-fastapi-app/backend
   ```

2. **Create a virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the FastAPI application**
   ```bash
   uvicorn src.main:app --reload
   ```

5. **Access the API documentation**
   Open your browser and navigate to `http://127.0.0.1:8000/docs` to view the interactive API documentation.

## Directory Structure
- `src/api`: Contains the API routes.
- `src/core`: Contains core configuration and settings.
- `src/main.py`: Entry point for the FastAPI application.

## Usage
The backend provides various endpoints for the frontend to consume. Refer to the API documentation for details on available routes and their usage.