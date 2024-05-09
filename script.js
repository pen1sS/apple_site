document.addEventListener("DOMContentLoaded", function() {
  // Находим кнопку по классу
  const searchButton = document.querySelector(".button_search");

  // Назначаем обработчик события при клике на кнопку
  searchButton.addEventListener("click", function() {
      // Находим прогрессбар по ID
      const progressBar = document.getElementById("myProgress");
      // Устанавливаем начальное значение прогрессбара
      progressBar.value = 0;

      // Очищаем все ячейки
      clearAllCells();

      // Запускаем анимацию прогрессбара
      const interval = setInterval(function() {
          // Увеличиваем значение прогрессбара
          progressBar.value += 1;
          // Если прогресс достиг максимального значения, останавливаем анимацию
          if (progressBar.value >= progressBar.max) {
              clearInterval(interval);

              // Выбираем случайную ячейку из каждого ряда
              const rows = document.querySelectorAll(".grid-row");
              rows.forEach(row => {
                  const cells = row.querySelectorAll(".grid-cell");
                  const randomIndex = Math.floor(Math.random() * cells.length);
                  cells[randomIndex].style.backgroundColor = "red"; // Пример изменения цвета
              });
          }
      }, 50); // Интервал анимации (50 миллисекунд = 20 обновлений в секунду)
  });

  // Функция для очистки всех ячеек
  function clearAllCells() {
      const cells = document.querySelectorAll(".grid-cell");
      cells.forEach(cell => {
          cell.style.backgroundColor = ""; // Очищаем цвет ячейки
      });
  }
});
