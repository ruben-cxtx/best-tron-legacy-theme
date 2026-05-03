WITH recent_programs AS (
  SELECT
    program_id,
    owner_id,
    status,
    cycle_count,
    updated_at
  FROM grid_programs
  WHERE updated_at >= NOW() - INTERVAL '7 days'
)
SELECT
  owner_id,
  COUNT(*) FILTER (WHERE status = 'syncing') AS syncing_count,
  AVG(cycle_count) AS average_cycles
FROM recent_programs
GROUP BY owner_id
HAVING COUNT(*) > 1
ORDER BY average_cycles DESC;
