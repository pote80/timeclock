INSERT INTO time_sheet (punch_date, punch_day, punch_time, punch_type)
VALUES
($1, $2, $3, $4);
SELECT * FROM time_sheet;