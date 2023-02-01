const noteInput = document.getElementById("note-input");
const addNote = document.getElementById("add-note");
const notes = document.getElementById("notes");

addNote.onclick = function () {
  notes.innerHTML += `<li>${noteInput.value}</li>`;
  const listItem = document.querySelectorAll("li");
  listItem.forEach(function (li) {
    li.onclick = function (event) {
      event.target.classList.toggle("done");
      //noteInput.reset();
    };
  });
};

noteInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    addNote.click();
  }
});
