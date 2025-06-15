import React, { useState } from 'react';
import AddPostForm from './AddPostForm';

function Menu() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = (e) => {
    e.preventDefault(); // чтобы не прыгала страница при клике на ссылку
    setShowForm((prev) => !prev);
  };

  return (
    <>
      <ul>
        <li><a href="#">Главная</a></li>
        <li><a href="#">О сайте</a></li>
        <li><a href="#">Каталог</a></li>
        <li><a href="#">Обратная связь</a></li>
        <li><a href="#" onClick={toggleForm}>
          {showForm ? 'Закрыть форму' : 'Добавить пост'}
        </a></li>
        <li><a href="#">Войти / Регистрация</a></li>
      </ul>

      {showForm && <AddPostForm onClose={() => setShowForm(false)} />}
    </>
  );
}

export default Menu;
