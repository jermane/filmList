import React from 'react';


const SearchBox = (props) => {
    const { onSearchChange} = props;
    return (
        <div>
            <input 
                className="searchBox" 
                type="search" 
                placeholder="Search Films..."
                onChange={onSearchChange}
            />
            
        </div>
    );
}

export default SearchBox;
