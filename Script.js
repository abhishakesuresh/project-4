// Fetch and Display Posts
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    const postsContainer = document.getElementById('posts-container');
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
      postsContainer.appendChild(postElement);
    });
  })
  .catch(error => {
    console.error('Error fetching posts:', error);
    // Display error message to the user
    const errorElement = document.createElement('div');
    errorElement.textContent = 'Failed to fetch posts. Please try again later.';
    document.body.appendChild(errorElement);
  });

// Fetch and Display Todos
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(todos => {
    const todosContainer = document.getElementById('todos-container');
    todos.forEach(todo => {
      const todoElement = document.createElement('div');
      todoElement.innerHTML = `<input type="checkbox" ${todo.completed ? 'checked' : ''}><span>${todo.title}</span>`;
      todosContainer.appendChild(todoElement);
    });
  })
  .catch(error => {
    console.error('Error fetching todos:', error);
    // Display error message to the user
    const errorElement = document.createElement('div');
    errorElement.textContent = 'Failed to fetch todos. Please try again later.';
    document.body.appendChild(errorElement);
  });

// Implement your JavaScript design pattern here for better structure and maintainability