import {
    GET_CREATIONS,
    ADD_CREATION,
    EDIT_CREATION,
    DELETE_CREATION,
    SET_SELECTED_CREATION,
    UNSET_CREATION,
    COMMENT_FORM_CHANGE,
    SET_COMMENT,
    EDIT_COMMENT,
    DELETE_COMMENT,
    FILTERS_FORM_CHANGE,
    SET_FORM_DATA_FOR_EDIT_COMMENT,
    RESET_FORM_DATA_FOR_EDIT_COMMENT
} from '../actionTypes' 

const nullCommentForm = {
    content: '', 
}

const initialState = {
    creations: [],
    selectedCreation: null,
    commentForm: nullCommentForm,
    filtersForm: {
        searchOption: 'name',
        search: '',
        filter: 'All',
        sort: 'alphabetically',
    }
}

export function creationsReducer(state= initialState, action) {
    switch(action.type){
        case GET_CREATIONS:
            return {...state, creations: action.creations}
        case FILTERS_FORM_CHANGE:
            return {...state, filtersForm: {
                ...state.filtersForm, [action.payload.name]: action.payload.value
            }}
        case ADD_CREATION:
            return {
                ...state,
                creations: [...state.creations, action.creation]
            }   
        case EDIT_CREATION:
            return {
                creations: [...state.creations.map(creation => creation.id === action.creation.id ? action.creation: creation)]
            }
        case DELETE_CREATION:
            return {
                ...state,
                creations: [...state.creations.filter(creation => creation.id !== action.creationId)]
            }
        case SET_SELECTED_CREATION:
            return {...state, selectedCreation: action.creation}
        case UNSET_CREATION:
            return {...state, selectedCreation: null}
        case COMMENT_FORM_CHANGE:
            return {...state, commentForm: {
                ...state.commentForm, [action.payload.name]: action.payload.value
            }}
        case SET_COMMENT:
            return {
                ...state, 
                selectedCreation: {
                    ...state.selectedCreation,
                    comments: [...state.selectedCreation.comments, action.payload]
                },
                commentForm: nullCommentForm
            }
        case SET_FORM_DATA_FOR_EDIT_COMMENT:
            return {...state, commentForm: {
                ...state.commentForm, content: action.content
            }}
        case RESET_FORM_DATA_FOR_EDIT_COMMENT:
            return {...state, commentForm: nullCommentForm}
        case EDIT_COMMENT:
            return {...state, selectedCreation: action.creation,
                commentForm: nullCommentForm
            }
        case DELETE_COMMENT:
            return {...state, selectedCreation: action.creation}
            default:
                return state
    }   
}