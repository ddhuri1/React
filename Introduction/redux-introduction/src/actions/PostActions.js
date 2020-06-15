export const deletePost = (id) => {
    return {
      type: 'DELETE_POST',
      id: id
    }
  }

  export const addPost = (state) => {
    return {
      type: 'ADD_POST',
      state
    }
  }