import Axios from 'axios';
const HOST = "/api/v1/"
// const id = localStorage.getItem("id")
// const token = localStorage.getItem("KEY_TOKEN")

export const getAllBook = (page) => {
    return {
        type: 'GET_BOOK',
        payload: Axios.get(HOST + `?page=${page}`)
    }
}

export const getBookById = (id) => {
    return {
        type: 'GET_BOOK_BY_ID',
        payload: Axios.get(HOST + id)
    }
}

export const addBook = book => {
    return {
        type: 'POST_BOOK',
        payload: Axios.post(HOST + "addbook", book)
    }
}

export const updateBook = (id, book) => {
    return {
        type: 'PATCH_BOOK',
        payload: Axios.patch(HOST + id, book)
    }
}

export const deleteBook = (id) => {
    return {
        type: 'DELETE_BOOK',
        payload: Axios.delete(HOST + id)
    }
}

export const rentBook = (id, data) => {
    return {
        type: 'PATCH_BOOK',
        payload: Axios.patch(HOST + 'rentbook/' + id, data)
    }
}

export const returnBook = (id, data) => {
    return {
        type: 'PATCH_BOOK',
        payload: Axios.patch(HOST + 'returnbook/' + id, data)
    }
}

export const searchBookTitle = title => {
    return {
        type: "SEARCH_BOOK",
        payload: Axios.get("/api/v1/?search=" + title)
    };
};

export const sortBookBy = (column, sort) => {
    return {
        type: 'SORT_BOOK',
        payload: Axios.get(`/api/v1/?sortBy=${column}&sort=${sort}`)
    }
}