import React, { useState } from 'react';

const posts = [
  {
    title: 'Новинка',
    date: '13-05-2025 09:28:40',
    author: 'nadya',
    image: './images/cake.jpg',
    description: 'Встречайте новинку - шоколадный чизкейк с клубникой! Ждём вас в гости!',
  },
  {
    title: 'Ищем работников',
    date: '10-05-2025 06:45:52',
    author: 'root',
    image: './images/barista.jpg',
    description: 'Ищем работников в нашу дружную команду! Присылайте резюме и мы вам ответим.',
  },
  {
    title: 'Круассан в подарок',
    date: '21-05-2025 06:44:43',
    author: 'maria',
    image: './images/croissant.jpg',
    description: 'Дарим круассан в подарок при покупке кофе до 11:00.',
  },
];

function PostList() {
  const [sortDesc, setSortDesc] = useState(true); // true = от новых к старым

  const parseDate = (str) => {
  const [datePart, timePart] = str.split(' ');
  const [day, month, year] = datePart.split('-');
  return new Date(`${year}-${month}-${day}T${timePart}`);
};

const sortedPosts = [...posts].sort((a, b) => {
  const dateA = parseDate(a.date);
  const dateB = parseDate(b.date);
  return sortDesc ? dateB - dateA : dateA - dateB;
});


  return (
    <div className="container">
      <button
        onClick={() => setSortDesc(!sortDesc)}
        style={{
          marginBottom: '20px',
          padding: '10px 20px',
          backgroundColor: '#444',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Сортировать: {sortDesc ? 'Сначала новые' : 'Сначала старые'}
      </button>

      <ul className="menu_items-list">
        {sortedPosts.map((post, index) => (
          <li key={index}>
            <p>Категория: Новости | автор: {post.author}</p>
            <p>Дата: {post.date}</p>
            <h2>{post.title}</h2>
            <img src={post.image} alt={post.title} className="img-article-leftthumb" />
            <p>{post.description}</p>
            <p><a href="#">Читать пост</a></p>
            <p>Адрес: ул. Ватутина, 4</p>
            <p>Действует до: 15.06.2025</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;