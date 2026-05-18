# Public data files for Australia in Flight

These files are cleaned, public-facing extracts prepared from the real source package used for the FIT2179 DV2 page. They are not raw workbook or shapefile dumps; they group the source data into the same analytical families used by the story page and Vega-Lite specifications.

## Files

### `routes_dec2025.csv`
Source: `domestic-airlines-december-2025.xlsx`, Summary sheet.  
Contains the December 2025 top competitive domestic route table with route, passengers, RPKs, available seats, ASKs, load factor, and trips.  
Supports: Chart 1 route map, Chart 2 top routes bar, and Chart 3 capacity/load-factor comparison.

### `routes_monthly_2014_2026.csv`
Source: `TopRoutesJuly2014February2026.xlsx`, Top Routes sheet.  
Contains monthly city-pair route records from July 2014 to February 2026, including passengers, trips, load factor, distance, RPKs, ASKs, seats, and moving annual totals.  
Supports: Chart 5 industry recovery context, Chart 6 load-factor trend, and Chart 7 route-level recovery small multiples.

### `airports_nov2025.csv`
Source: `webmonthlyairportnovember2025.xlsx`, Summary and AircraftMovements sheets.  
Contains November 2025 airport passenger totals, year-ended November 2025 passenger totals, and November 2025 aircraft movements for the listed Australian airports.  
Supports: Chart 4 airport concentration map, Chart 11 top airports bar, Chart 12 passenger/movement scatter, and Chart 13 airport efficiency map.

### `airport_intensity_population.csv`
Sources: `webmonthlyairportnovember2025.xlsx` and `32180DS0004_2001-25.xlsx` Table 2.  
Combines year-ended November 2025 airport passenger totals with 2025 Significant Urban Area population estimates to calculate passengers per resident for the airport-city pairings used in the page.  
Supports: Chart 14 passengers per resident and Chart 15 air travel intensity map.

## Source package notes

The original source package also includes `32180DS0003_2001-25.xlsx` and the `RA_2021_AUST_GDA2020` shapefile set. Those files support the broader population/geographic context used during preparation, but the published page links to cleaned CSV extracts rather than raw ABS workbooks or shapefile components.

The package also includes `weekly.zip`, containing weekly studio PDFs, studio code archives, and an exercise HTML file. It is treated as implementation and learning reference material for Vega-Lite, JavaScript, and mapping workflows, not as a chart dataset. No separate cleaned CSV is created from `weekly.zip` because it does not contain additional non-duplicate aviation, airport, or population observations used by the current charts.
