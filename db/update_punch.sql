update time_sheet
SET punch_date = $2, punch_day = $3, punch_time = $4, punch_type = $5
where id = $1;
SELECT * FROM time_sheet