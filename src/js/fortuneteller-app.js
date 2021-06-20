import User from "./models/user";
import Form from "./components/Form";

const container = document.querySelector(".container");
//the call to load the page and fire any functions
renderPage();

function renderPage() {
  container.innerHTML = Form();
  createAUserFromForm();
}

function createAUserFromForm() {
  container.addEventListener("click", (event) => {
    //event delegation
    if (event.target.classList.contains("submit")) {
      //once we click submit, have the parent "look for" a child element with a .petName class
      const firstName =
        event.target.parentElement.querySelector(".firstName").value;
      const lastName =
        event.target.parentElement.querySelector(".lastName").value;
      const age = event.target.parentElement.querySelector(".age").value;
      const birthMonth =
        event.target.parentElement.querySelector(".birthMonth").value;
      const siblings =
        event.target.parentElement.querySelector(".siblings").value;

      const color = event.target.parentElement.querySelector(".color").value;
      const createdUser = new User(
        firstName,
        lastName,
        age,
        birthMonth,
        color,
        siblings
      );
      console.log(createdUser.fortune());

      const userPara = document.createElement("p");
      userPara.innerText = createdUser.fortune();
      container.appendChild(userPara);
    }
  });
}
