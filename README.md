## Question 1 (Assignment project features)

- **Course Listings**:
The website offers a variety of courses for visitors to browse.
Each course listing includes essential information such as the course name, credit hours, course price, and course details.

- **Cart**:
Visitors have the ability to select multiple courses and add them to their shopping cart. But visitors can't add the same course multiple times.
When a course is added to the cart, it should display the following information:

- **Cart information**
  - *Course name:* The name of the course the visitor selected
  - *Total price:* The total cost of all the courses in the cart
  - *Total credit hours:* The total credit hours of all the courses in the cart
  - *Limited Credit Hours:* Visitors are allocated a specific number of credit hours.As visitors add courses to their cart, the system calculates and shows the remaining hours.Before allowing a course to be added to the cart, the website checks if the visitor has enough remaining credit hours. If the visitor has enough remaining credit hours, then the course can be added to the cart. If the visitor's credit hours are insufficient, the system shows a toast message.



## Question 2 ( how I managed the state in my assignment project.)

**In my assignment project, I used React's built-in useState hook to manage the state.**
###### 
Here's a breakdown of how I’m managing state in my assessment project.
In my assignment project, I defined four pieces of state:
- carts: an empty array to store the courses in the cart.
- totalCreditHour: A number to track the total credit hours of courses in the cart.
- remaining: A number to represent the available remaining credit hours
- totalPrices: A number to track the total price of courses in the cart.
- (handleAddToCarts): For adding courses to the cart section, I use the (handleAddToCarts) function. When a course is added to the cart, carts are used to see if the course already exists carts.find() website displays a toast as a warning if the course already exists. If not, repeat the process for all of the courses in the cart to get the total cost and credit hours. The next step is to determine if the total number of credits is greater than 20. Then the website displays an error toast.

If the total credit hours do not exceed the limit and the remaining number is less than 20, then the website will update the state:
- setCarts: Add the new course name to the cart.
- setTotalCreditHour: Update the total credit hours.
- setRemaining: Update the remaining credit hours.
- setTotalPrices: Update the total prices.