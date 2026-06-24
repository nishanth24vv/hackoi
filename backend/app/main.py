from fastapi import FastAPI
app = FastAPI(title='ClimateVerse API', version='1.0.0')
@app.get('/health')
def health(): return {'status':'ok','service':'climateverse-api'}
@app.get('/api/v1/risk')
def risk():
    return {'formula':'Risk = Hazard × Exposure × Vulnerability','top_districts':['Guwahati','Jodhpur','Mumbai Suburban'],'alert_level':'Orange'}
