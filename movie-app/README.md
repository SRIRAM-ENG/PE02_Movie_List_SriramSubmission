# Input
An array of movie objects with the qualities of a movie—title, genre, and release year—make up the program's input. The moviesData array in the MovieList component contains a definition of the movie objects.

# Process
The application uses React and adopts a component-based methodology. The rendering of the movie list and the implementation of the filter capabilities are done by the MovieList component.

Each distinct genre in the movie list has an option in the dropdown select element that is created when the component is rendered. The handleGenreChange method is activated by the user's selection of a genre. According to the chosen genre, this function filters the movies and modifies their condition. The full list of movies is shown if "All Genres" is chosen.

The handleMovieClick function is called by the component to handle the click event on a movie. This feature shows the title of the clicked movie in an alert.

# Output
The program generates the following outputs:

A single list item or card displaying a filtered collection of movies organized by genre.
Each movie's title, genre, and year of release are represented.
When a movie is clicked, an alert indicating the title of the selected film appears.

Based on how the user interacts with the dropdown pick element and movie click events, the result is dynamically changed.

The application renders dynamic data using JSX expressions and JSX syntax, respectively. The styles are defined in the App.css file and are applied via CSS.

Finally ,he program provides a user-friendly interface to browse and filter movies, and it enhances the user experience by providing real-time feedback through alerts and dynamic rendering of movie information.