import uuid
import pytest 
from .trips_repository import TripsRepository
from datetime import datetime, timedelta
from src.models.settings.db_connection_handler import db_connection_handler

db_connection_handler.connect()
trip_id= str(uuid.uuid4())

@pytest.mark.skip(reason='interação com usuario')
def test_create_trip():
    conn = db_connection_handler.get_connection()
    trips_repository = TripsRepository(conn)

    trips_infos={
        "id": str(uuid.uuid4()),
          "start_date": datetime.strptime("02-01-2024", "%d-%m-%Y"),
                
      
         "destination": "Osasco",

         "end_date": datetime.strptime("02-01-2024", "%d-%m-%Y") + timedelta(days=5),
         "owner_name" :"Osvaldo",
          "owner_email" : "osvaldo@gmail.com",

    }

    trips_repository.create_trip(trips_infos)
@pytest.mark.skip(reason='interação com usuario')
def test_find_trip_by_id():
    conn = db_connection_handler.get_connection()
    trips_repository = TripsRepository(conn)

    trip= trips_repository.find_trip_by_id(trip_id)
    print(trip)
@pytest.mark.skip(reason='interação com usuario')
def test_update_trip_status():
    conn = db_connection_handler.get_connection()
    trips_repository = TripsRepository(conn)
    trips_repository= trips_repository.update_trip_status(trip_id)

    

