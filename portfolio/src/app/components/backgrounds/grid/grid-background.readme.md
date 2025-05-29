# About:
### The second iteration of grid background.
>
>##  A component that uses css linear gradients to present the illusion of a grid
<!-- 
>>
># Caution ⚠️: 
>>
>>### Using this component adds a large number of elements to the DOM.
>>   - This may cause:  
>>   - Slow Render times  
>>   - Angular Compiler warnings   -->

# Notes:
>### CSS:
>Uses CSS gradients to present a flexible grid background.
>
>Key properties: 
>- ``` background-size: 60px 60px;```
> -- allows setting of grid 'size'  
>- ```background-image:```
>    - linear-gradient(to right, #ff00ff55 1px, transparent 1px),  
>    - linear-gradient(to bottom, #ff00ff55 1px, transparent 1px);
>- ```background-image:```
>    - radial-gradient(circle,  #ff00ff55 2px, transparent 1px);
>
> Choose between ```radial``` or ```linear``` for ```circles``` or ```lines``` respectively

>### TS:
>.
<!-- >```[gridSize: number]``` used to calculate how many times the component is to repeat -->

>### HTML:  
>.  

>### TESTS:  
>.

>### MISC:  
>.
