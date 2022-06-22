import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends React.Component {

    // USING FETCH API : (Done by own) (CAN USE ASYNC AWAIT TOO)
    // onSearchSubmit(term) {
    //     console.log(term);
    //     const params = new URLSearchParams({
    //         client_id: '1absaLgm0YZorA-RmMlIedgjCXu70QO9wzyL7OqSTOU',
    //         query: term
    //     })
    //     fetch('https://api.unsplash.com/search/photos/?' + params)
    //         .then(res => res.json())
    //         .then(res => {
    //             console.log(res.results);
    //         });
    // }

    state = {images: []};

    // USING AXIOS and ASYNC AWAIT:
    // AXIOS also returns Promise just like fetch api
    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos/',{
            params: {query: term}
        })

        this.setState({images: response.data.results});
        console.log(this.state.images);
    }

    render() {
        
        return (
            <div className='ui container' style={{ marginTop: '15px'}}>
                <SearchBar onSubmit = {this.onSearchSubmit} />
                Found: {this.state.images.length} images
            </div>
        );
        
    }

};

export default App;