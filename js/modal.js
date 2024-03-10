const modal = $('#sign-up-modal');

const openModal = () => {
  modal.addClass("visible");
  $("#form-submit-btn").get(0).disabled = true;
  $("body").css("overflow", "hidden");
};

const closeModal = () => {
  modal.removeClass('visible');
  $('body').css('overflow', 'auto');
  resetForm();
}

const resetForm = () => {
  $("#form").get(0).reset();
  const inputs = $(".modal-form__input");
  inputs.each((_, input) => {
    input.setCustomValidity("");
  });
};

const isDisabled = () => {
  if ($("#form").data("changed") && $("#form").get(0).checkValidity()) {
    return false;
  }

  return true;
}

const onSubmit = () => {
  const data = {};

  $.each($("#form :input").serializeArray(), function (_, field) {
    data[field.name] = field.value;
  });
};

// Validators
const validate = (field) => {
  console.log('validate');
  const input = $(`#${field}`);
  const value = input.val();

  const lookup = {
    name: {
      validator: validateUsername,
      errorText: 'Присутствуют запрещенные символы',
    },
    email: {
      validator: validateEmail,
      errorText: 'Недействительный почтовый адрес',
    },
    phone: {
      validator: validatePhoneNumber,
      errorText: 'Недействительный номер телефона',
    },
  };

  if (!value) {
    input.get(0).setCustomValidity('Это обязательное поле');
    $(`#${field}Error`).text('Это обязательное поле');
    return;
  }

  const { errorText, validator } = lookup[field];
  const isValid = validator(value);

  if (!isValid) {
    input.get(0).setCustomValidity(errorText);
    $(`#${field}Error`).text(errorText);
  } else {
    input.get(0).setCustomValidity("");
  }
}

const validateUsername = (username) => {
  const regex = /^[a-zA-Z0-9_-]+$/;
  const regexRus = /^[а-яА-Я0-9_-]+$/;
  return regex.test(username) || regexRus.test(username);
}

const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const validatePhoneNumber = (phoneNumber) => {
  const regex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
  return regex.test(phoneNumber);
}

// Event Listeners
$("#form :input").change(() => {
  const isFormValid = $('#form').get(0).checkValidity();
  let allFieldsTouched = true;

  $.each($("#form :input").serializeArray(), function (_, field) {
    if (!field.value) {
      allFieldsTouched = false;
    }
  });

  if (isFormValid && allFieldsTouched) {
    $("#form-submit-btn").get(0).disabled = false;
  } else {
    $("#form-submit-btn").get(0).disabled = true;
  }
});