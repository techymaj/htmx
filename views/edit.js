const createEditFormTemplate = (book) => /*html*/`
    <form>
        <input required type="text" name="title" placeholder="title" value="${book.title}">
        <input required type="text" name="author" placeholder="author" value="${book.author}">
        <button hx-put="/books/${book.id}" hx-target="closest li" hx-swap="outerHTML">Confirm</button>
    </form>
`;

export default createEditFormTemplate;