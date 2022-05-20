const sendForm = ({ formId }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement("div");
  statusBlock.className = "hm";
  const errorText = "Ошибка...";
  const successText = "Спасибо! Наш менеджер с Вами свяжется!";
  const errText = "Попробуйте еще раз!";

  const fio = document.querySelectorAll(".modal-callback .form-control")[0];
  const tel = document.querySelectorAll(".modal-callback .form-control")[1];

  fio.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^а-яА-Я]/, "");
  });
  tel.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^\d,+]/, "");
  });

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll(".form-control");
    const formData = new FormData(form);
    const formBody = {};

    const load = function () {
      form.append(statusBlock);
      let skCircle = document.createElement("div");
      skCircle.className = "sk-circle-bounce";
      statusBlock.append(skCircle);
      for (let i = 1; i < 12; i++) {
        let skChild = document.createElement("div");
        skChild.className = "sk-child sk-circle-" + [i] + "";
        skCircle.append(skChild);
      }
    };

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    const validate = () => {
      let success = true;

      if (formBody["fio"].length < 2) {
        success = false;
      }
      if (formBody["tel"].length < 18 || formBody["tel"].length > 18) {
        success = false;
      }

      return success;
    };

    if (validate(formElements)) {
      load();
      sendData(formBody)
        .then((data) => {
          statusBlock.textContent = successText;
          formElements.forEach((input) => {
            input.value = "";
          });
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
        });
    } else {
      alert("Данные не валидны!");
      form.append(statusBlock);
      statusBlock.textContent = errText;

      const input = document.querySelectorAll(".form-control");
      const hm = document.querySelector(".hm");
      input.forEach(function (item) {
        item.onfocus = function () {
          if (hm) {
            hm.innerHTML = "";
            hm.remove();
          }
        };
      });
    }
  };
  try {
    if (!form) {
      throw new Error("Верните форму на место");
    }
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};

export { sendForm };
