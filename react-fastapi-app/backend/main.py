from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React app address
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {
        "message": "Welcome to the Trading API",
        "version": "1.0",
        "endpoints": [
            "/api/trading-data"
        ]
    }

@app.get("/api/trading-data")
async def get_trading_data():
    return {
        "stocks": [
            {"symbol": "AAPL", "price": 150.25},
            {"symbol": "GOOGL", "price": 2750.50},
            {"symbol": "MSFT", "price": 310.75}
        ]
    }