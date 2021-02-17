import React, { useState } from 'react'
import { Provider, useSelector, useDispatch } from 'react-redux'
import { addFavoriteTerm, removeFavoriteTerm } from './actions'

function JargonList() {

    const terms = useSelector(state => state.terms)
    const favorites = useSelector(state => state.favorites)
    const [showFavorites, setShowFavorites] = useState(false)
    const dispatch = useDispatch()

    const toggleFavorites = () => {
        setShowFavorites(true)
    }

    const toggleJargon = () => {
        setShowFavorites(false)
    }

    const renderContent = () => {
        if (showFavorites) {
            return (
                <div>
                    <h1>JS Jargon</h1>
                    <div>
                        <button onClick={ () => toggleJargon() }>Show Jargon</button>
                    </div>
                    <div>
                        { 
                            favorites.map((term, index) => {
                                return (
                                    <div key={ index }>
                                        <h1>{ term.name }</h1>
                                        <p>{ term.description }</p>
                                        <button onClick={ () => dispatch(removeFavoriteTerm(term.name)) }>
                                            Remove from favorites
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <h1>JS Jargon</h1>
                    <div>
                        <button onClick={ () => toggleFavorites() }>Show Favorites</button>
                    </div>
                    {
                        terms.map((term, index) => {
                            return (
                                <div key={ index }>
                                    <h1>{ term.name }</h1>
                                    <p>{ term.description }</p>
                                    <button onClick={() => dispatch(addFavoriteTerm({ name: term.name, description: term.description })) }>
                                        Add To Favorites
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }
    }

    return (
        <div>
            { renderContent() }
        </div>
    )

}

export default JargonList