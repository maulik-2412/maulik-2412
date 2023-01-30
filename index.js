const cacheSeconds = clampValue( 
   parseInt(10 || CONSTANTS.TWO_HOURS, 10), 
   CONSTANTS.TWO_HOURS, 
   CONSTANTS.ONE_DAY, 
 ); 
