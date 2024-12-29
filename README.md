# To-Do App - README

## Introduction
This is a simple and functional To-Do App built using HTML, CSS, and JavaScript. The app allows users to add tasks to a list and delete tasks when completed. It is an ideal project for beginners learning web development.

## Features
- Add new tasks to your to-do list.
- Delete tasks from the list with a single click.
- Clean and minimal design for ease of use.

## Project Structure
```
To-Do App
│
├── index.html        # HTML file for the structure of the app
├── style.css         # CSS file for styling the app
└── app.js            # JavaScript file for interactivity
```

## Technologies Used
- **HTML5**: For the structure of the app.
- **CSS3**: For styling the elements.
- **JavaScript**: For adding dynamic functionalities like adding and deleting tasks.

## How to Run the App
1. Clone or download the repository.
2. Open the `index.html` file in any modern web browser.
3. Start adding tasks by typing into the input box and clicking the "Add" button.
4. Remove tasks by clicking the "delete" button next to each task.

## How It Works
### Adding Tasks
- When the user types a task into the input box and clicks the "Add" button:
  - A new `<li>` element is created.
  - A "delete" button is added to the `<li>`.
  - The new task is appended to the `<ul>` (task list).

### Deleting Tasks
- When the user clicks the "delete" button:
  - The parent `<li>` of the button (the corresponding task) is removed from the list.

## License
This project is licensed under the **MIT License**.  
You are free to use, modify, and distribute this software with proper attribution. See the `LICENSE` file for more details.
