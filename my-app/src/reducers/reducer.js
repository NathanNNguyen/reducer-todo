export const initialState = {
  todoList: [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589
    },
  ],
};

export const reducer = (state, action) => {
  // if (action.type === "add") {
  //   return [
  //     ...state,
  //     {
  // item: action.payload,
  // completed: false,
  // id: Date.now()
  //     }
  //   ]
  // };
  // return state;

  switch (action.type) {
    case 'add':
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            item: action.payload,
            completed: false,
            id: Date.now()
          }
        ]
      };
    case 'toggle':
      return {
        ...state,
        todoList:
          // state.todoList.map(item => item.id === action.payload ? { ...item, completed: !item.completed } : item)
          state.todoList.map(item => {
            if (item.id === action.payload) {
              return {
                ...item, completed: !item.completed
              }
            }
            return item
          })
      }

    case 'remove':
      const uncompleted = state.todoList.filter(e => e.completed === false);
      // console.log(state)
      return {
        ...state,
        todoList: uncompleted
      }

    default:
      return state;
  }
}