import {
    GET_CREATIONS,
    ADD_CREATION,
    EDIT_CREATION,
    DELETE_CREATION,
    SET_SELECTED_CREATION,
    UNSET_CREATION,
    COMMENT_FORM_CHANGE,
    SET_COMMENT,
    SET_FORM_DATA_FOR_EDIT_COMMENT,
    RESET_FORM_DATA_FOR_EDIT_COMMENT,
    EDIT_COMMENT,
    DELETE_COMMENT,
    FILTERS_FORM_CHANGE
} from '../actionTypes'

import { getCurrentUser } from './currentUser'

const BASE_URL = 'http://localhost:3001/api/v1/'
const CREATION_URL = `${BASE_URL}/creations`
const COMMENT_URL = `${BASE_URL}/comments`

export const getCreations = () => {
    return (dispatch) => {
      fetch(CREATION_URL, {
        credentials: 'include',
      })
      .then(resp => resp.json())
      .then(creations => dispatch({
        type: GET_CREATIONS,
        creations
      }))
    }
  }

  export const addCreation = (CreationData) => {
    return dispatch => {
      const sendableCreationData = {
        image: CreationData.image,
        name: CreationData.name,
        notes: CreationData.notes,
        date: CreationData.date,
        category: CreationData.category,
        city: CreationData.city,
        country: CreationData.country,
        public: CreationData.isPublic,
      }
      return fetch(CREATION_URL, {
        credentials: "include",
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sendableCreationData),
      })
      .then(response => response.json())
      .then(creation => {
        if (creation.error) {
          alert(creation.error)
        } else {
          dispatch({
            type: ADD_CREATION, 
            creation
          })
          dispatch(getCurrentUser())
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  }

export const editCreation = (creationData) => {
    return dispatch => {
        const sendableCreationData = {
            image: creationData.image,
            name: creationData.name,
            notes: creationData.notes,
            date: creationData.date,
            category: creationData.category,
            city: creationData.city,
            country: creationData.country,
            public: creationData.isPublic,
            id: creationData.id
        }
        
        return fetch(`${CREATION_URL}/${creationData.id}`, {
            credentials: "include",
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(sendableCreationData),
        })
        .then(response => response.json())
        .then(creation => {
            if (creation.error) {
                alert(creation.error)
            } else {
                dispatch({
                    type: EDIT_CREATION,
                    creation
                })
                dispatch(getCurrentUser())
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
}

export const deleteCreation = (creationId) => {
    return (dispatch) => {
        return fetch(`${CREATION_URL}/${creationId}`, {
            credentials: "include",
            method: 'DELETE',
        })
        .then(resp => resp.json())
        .then(() => {
            dispatch({
                type: DELETE_CREATION,
                creationId
            })
            dispatch(getCurrentUser())
        })
    }
}

export const setSelectedCreation = (creationId) => {
    return (dispatch) => {
        return fetch(`${CREATION_URL}/${creationId}`, {
            credentials: 'include'
        })
        .then(resp => resp.json())
        .then(creation => dispatch({
            type: SET_SELECTED_CREATION,
            creation
        }))
    }
}

export const unsetCreation = () => ({type: UNSET_CREATION})

export const commentFormChange = (e) => ({
    type: COMMENT_FORM_CHANGE,
    payload: {name: e.target.name, value: e.target.value}
})

export const submitComment = commentData => {
    return dispatch => {
      fetch(COMMENT_URL, {
        credentials: "include",
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData),
      })
      .then(resp => resp.json())
      .then(comment => dispatch({
        type: SET_COMMENT,
        payload: comment
      }))
    }
  }

export const setFormDataForEditComment = content => {
    return {
        type: SET_FORM_DATA_FOR_EDIT_COMMENT,
        content
    }
}

export const resetFormDataForComment = () => {
    return {
        type: RESET_FORM_DATA_FOR_EDIT_COMMENT
    }
}

export const editComment = (commentData, commentId) => {
    return dispatch => {
        fetch(`${COMMENT_URL}/${commentId}`, {
            credentials: 'include',
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(commentData)
        })
        .then(resp => resp.json())
        .then(creation => dispatch({
            type: EDIT_COMMENT,
            creation
        }))
    }
}


export const deleteComment = (commentId) => {
    return (dispatch) => {
      return  fetch(`${COMMENT_URL}/${commentId}`, {
        credentials: "include",
        method: 'DELETE',
      })
      .then(resp => resp.json())
      .then(creation => {
        dispatch({
        type: DELETE_COMMENT,
        creation,
        })
      })
    }
  }
  
  export const handleSearchFormChange = (e) => ({
    type: FILTERS_FORM_CHANGE,
    payload: {name: e.target.name, value: e.target.value}
  })

  