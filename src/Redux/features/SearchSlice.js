import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",          //after creating a slice we have to create its initial state 
    initialState:{       
        query : '',
        activeTab : 'PHOTOS',
        results: [],
        loading: false,
        error : null
    },   //after initial state we create function to set slice 
    reducers:{
        setQuery(state ,action){
            state.query = action.payload
        },
        setActiveTab(state ,action){
            state.activeTab = action.payload
        },
        setResults(state ,action){
            state.results = action.payload
            state.loading= false
        },
        setLoading(state){
            state.loading = true
            state.error = false
        },
        setError(state ,action){
            state.error = action.payload
            state.loading = false
        },
        clearResults(state){
            state.results = []
        }
    }
});


export const {setActiveTab , setError, setLoading , setResults , setQuery , clearResults} = searchSlice.actions

export default  searchSlice.reducer