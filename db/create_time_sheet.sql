CREATE TABLE time_sheet (
    id SERIAL PRIMARY KEY,
    punch_date text NOT NULL,
    punch_day text NOT NULL,
    punch_time text NOT NULL,
    punch_type text NOT NULL
)