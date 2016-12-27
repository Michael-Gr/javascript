// 1. Assign the message "Hello, World!" to a variable.
variable = "Hello, World!"

// 2. Assign a different string to a variable name of your choice.
arbitrary_variable = "different string"

// 3. Assign a number to a variable.
number_variable = 3

// 4. Use string concatenation to display the number from #3 in a string.
number_as_string = number_variable.toString()

// 5. Make an array of at least four of your favorite movies or books or bands.
array = []
array[0] = "Fringe"
array[1] = "Black Mirror"
array[2] = "Breaking Bad"
array[3] = "Dexter"
array[4] = "The Sopranos"
array[5] = "Hannibal"

// 6. Make a object of information about yourself with at least four properties.
myself = new Object();
myself.name = "Michael"
myself.age = 24
myself.hair = "Short and Brown"
myself.ethnicity = "Anyones guess"

// 7. Make an array of objects containing more information about your favorite movies. The objects should have at least three properties.
movies = []

movie0 = new Object();
movie0.title = "My Neighbor Totoro";
movie0.year = 1988;
movie0.duration = "86 minutes";
movies[0] = movie0

movie1 = new Object();
movie1.title = "Kiki's Delivery Service";
movie1.year = 1989;
movie1.duration = "102 minutes";
movies[1] = movie1

movie2 = new Object();
movie2.title = "Princess Mononoke";
movie2.year = 1997;
movie2.duration = "134 minutes";
movies[2] = movie2

movie3 = new Object();
movie3.title = "Spirited Away";
movie3.year = 2001;
movie3.duration = "125 minutes";
movies[3] = movie3

movie4 = new Object();
movie4.title = "Howl's Moving Castle";
movie4.year = 2004;
movie4.duration = "119 minutes";
movies[4] = movie4

movie5 = new Object();
movie5.title = "Ponyo";
movie5.year = 2008;
movie5.duration = "103 minutes";
movies[5] = movie5

// 8. Use `for` to loop through the answer from exercise #7 and print only one property from the object. i.e., given `{ title: "Gone with the Wind" }` you print "Gone with the Wind".
x = 0
for (movies[x]; x < movies.length - 1; x++) {
   console.log(movies[x].title);
}
