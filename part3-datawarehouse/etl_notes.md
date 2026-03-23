## ETL Decisions

### Decision 1 — Fixing Missing Store City

Problem: Some rows had blank store_city, so location-based analysis would be incomplete or wrong.

Resolution: Filled the missing values using available data or defaults so that every record has a city.



### Decision 2 — Making Unit Price Consistent

Problem: unit_price values had different formats (some without decimals, some with many), which can cause confusion in calculations.

Resolution: Converted all prices to 2 decimal places so everything is consistent and easy to use.


### Decision 3 — Fixing Category Names

Problem: Category names were written in different formats (e.g., small letters, capital letters), making grouping difficult.

Resolution: Standardized all category names so the first letter is capital (e.g., "Electronics", "Clothing") for consistency.
