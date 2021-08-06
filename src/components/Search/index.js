import React, {useState} from 'react'

const Search = ({searchText}) => {
    const [text, setText] = useState('')

    const handleSumit = (e) => {
        e.preventDefault()

        searchText(text)
    }

    return (
        <div>
            <form onSubmit={handleSumit}>
                <input type="text"
                 placeholder="e.g politics"
                  className="py-1 px-2 rounded-l-lg"
                  onChange={(e) => setText(e.target.value)}
                  />
                <button type="submit" 
                className="bg-green-400 py-1 px-2 rounded-r-lg text-black"> Search </button>
                
            </form>
        </div>
    )
}

export default Search;
