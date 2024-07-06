const createHomepageTemplate = () => /*html*/`
  <!DOCTYPE html>
  <html>
    <head>
      <title>My Reading List</title>
      <script src="https://unpkg.com/htmx.org@2.0.0" 
      integrity="sha384-wS5l5IKJBvK6sPTKa2WZ1js3d947pvWXbPJ1OmWfEuxLgeHcEbjUUA5i9V5ZkpCw" 
      crossorigin="anonymous">
    </script>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <header>
        <h1>My Reading List</h1>
      </header>

      <main>
        <div class="search" style="text-align: center;">
            <input 
            type="search" 
            name="search"
            placeholder="search books by title..."
            hx-post="/books/search"
            hx-trigger="keyup changed delay:300ms"
            hx-target=".book-list">
            <button>Search</button>
        </div>
        <div class="book-list">
          <button hx-get="/books" hx-target="closest div" hx-trigger="dblclick">Show Books</button>
        </div>

        <div class="add-book-form">
          <h2>What do you want to read?</h2>
          <!-- form template here later -->
          <form 
          hx-post="/books" 
          hx-on::after-request="document.querySelector('form').reset()"
          hx-target=".book-list ul" 
          hx-swap="beforeend">
            <input required type="text" name="title" placeholder="title">
            <input required type="text" name="author" placeholder="author">
            <button>Add Book</button>
          </form>
        </div>
      </main>
    </body>
  </html>
`;

export default createHomepageTemplate;