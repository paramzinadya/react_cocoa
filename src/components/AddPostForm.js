import React, { useState } from 'react';

function AddPostForm({ onClose }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    status: '',
    image: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    const kirilRegex = /^[А-Яа-яЁё\s]+$/;

    if (!formData.title.trim()) {
      newErrors.title = 'Введите заголовок';
    } else if (!kirilRegex.test(formData.title)) {
      newErrors.title = 'Только буквы кириллицы';
    } else if (formData.title.length > 70) {
      newErrors.title = 'Не более 70 символов';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Введите описание';
    } else if (formData.description.length > 250) {
      newErrors.description = 'Не более 250 символов';
    }

    if (!formData.category) newErrors.category = 'Выберите категорию';
    if (!formData.status) newErrors.status = 'Выберите статус';
    if (!formData.image.trim()) newErrors.image = 'Добавьте ссылку на изображение';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Добавлен пост:', formData);
      alert('Пост успешно добавлен!');
      onClose(); // Закрыть форму
    }
  };

  const getInputClass = (field) => errors[field] ? 'input-error' : '';

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h2 className="post-form__heading">Добавить пост</h2>

      <label>Заголовок:</label>
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        className={getInputClass('title')}
      />
      {errors.title && <p className="error">{errors.title}</p>}

      <label>Описание:</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        className={getInputClass('description')}
      />
      {errors.description && <p className="error">{errors.description}</p>}

      <label>Категория:</label>
      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        className={getInputClass('category')}
      >
        <option value="">-- Выберите --</option>
        <option value="новости">Новости</option>
        <option value="афиша">Афиша</option>
        <option value="новинки">Новинки</option>
        <option value="акции">Акции</option>
      </select>
      {errors.category && <p className="error">{errors.category}</p>}

      <label>Статус:</label>
      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
        className={getInputClass('status')}
      >
        <option value="">-- Выберите --</option>
        <option value="опубликован">Опубликован</option>
        <option value="черновик">Черновик</option>
      </select>
      {errors.status && <p className="error">{errors.status}</p>}

      <label>Ссылка на изображение:</label>
      <input
        name="image"
        value={formData.image}
        onChange={handleChange}
        className={getInputClass('image')}
      />
      {errors.image && <p className="error">{errors.image}</p>}

      <button type="submit">Сохранить пост</button>
    </form>
  );
}

export default AddPostForm;
