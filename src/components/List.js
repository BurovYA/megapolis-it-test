import React, { useState, useEffect } from 'react';
import styles from './List.module.css';
import ListItem from './ListItem';
import TodoListApi from '../api/TodoList';

function List(props) {
  const [data, setData] = useState({ items: [] });

  useEffect(() => {
    TodoListApi.get().then(todoListData => {
      setData({ items: todoListData.data });
    });
  }, []);

  return (
    <div className={`${styles.list} ${props.className}`}>
      {data.items.map(item => (
        <ListItem key={item.id} data={item} />
      ))}
    </div>
  );
}

export default List;
