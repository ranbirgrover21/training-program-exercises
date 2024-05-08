# React Hooks Pokedex Exercise by Alex Lee
This is the first exercise I have written, apologies if stuff don't make sense

## Please be aware
Aside from the extension task, the other tasks will only require you to modify HomePage.tsx and
InfoPage.tsx. All components from the components folder should remain unmodified.

## Task 1 - HomePage.tsx
Write the useEffect hook to generate a list of pokemon to be displayed on the homepage
This list should be stored in the provided pokemonData useState
HINT: the url for the useEffect hook is `https://pokeapi.co/api/v2/pokemon?limit=100`
Note that this is a pagination

## Task 2 - HomePage.tsx
Add functionality to the provided search bar component so that it is able to filter
the list of pokemon displayed on the home page

## Task 3 - InfoPage.tsx
Please write the useEffect hook to fetch the info on the pokemon and store it in a useState
HINT: `https://pokeapi.co/api/v2/pokemon/${id}`

## Task 4 - InfoPage.tsx
Using the components provided in the import statements, replicate the website layout provided. Don't forget to include the info you fetched from task 3.
HINT: You cannot enter the information directly like you would with a `<div>` as these components are already defined. They do however, have props defined for information entry.

## Extension Task
Add functionality to the sidebar buttons so that the list displayed on the homepage
changes depending on the category of the button pressed. The following catergories are:
- pokemons
- locations
- items
- machines

You will need to look around the PokeAPI website for the links.
This task will most likely require you to modify other files.

## Note
Search bar is not imported as its own component like the other components to make it 
easier for you to understand how to implement its functionality. Normally, the code for search
bar would be written in a separate file and imported