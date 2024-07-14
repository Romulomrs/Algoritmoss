CREATE TABLE IF NOT EXISTS 'Trips'(
    id TEXT PRIMARY KEY,
    start_date DATETIME,
    destination TEXT not null,
    end_date DATETIME,
    owner_name TEXT NOT NULL,
    owner_email TEXT not null,
    status INTEGER 
);

CREATE TABLE IF NOT EXISTS 'emails_to_invite'(
    id TEXT PRIMARY KEY,
    trip_id TEXT,
    email TEXT not null,
    FOREIGN KEY (trip_id) references trips (id)
);

CREATE TABLE IF NOT EXISTS 'links'(
    id TEXT PRIMARY KEY,
    trip_id TEXT,
    link TEXT not null,
    FOREIGN KEY (trip_id) references trips(id)
);