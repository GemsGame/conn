const validate = (object) => {
  const errors = {};
  if (object.projectName.length === 0) {
    errors.projectName = 'Поле не может быть пустым!';
  }
  if (object.projectName.length > 35) {
    errors.projectName = 'Слишком длинное имя проекта!';
  }
  if (object.website.length < 4) {
    errors.website = 'Введите адрес вашего сайта';
  } else if (!/\./.test(object.website)) {
    errors.website = 'Введите правильный адрес сайта';
  }
  if (object.count.length === 0) {
    errors.count = 'Выберете один из вариантов';
  }
  if (object.timer.length === 0) {
    errors.timer = 'Введите любое число';
  } else if (object.timer < 0) {
    errors.timer = 'Значение не может быть отрицательным';
  } else if (object.timer >= 600) {
    errors.timer = 'Это не сработает, ремендуем поставить 30 секунд';
  }


  return errors;
};

export default validate;
