import React from 'react'
import QuoteCard from './QuoteCard'

const Quotes = () => {
    const quoteData = [
        {
            "desc": "It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
            "author" : "Adam Scott"
        },
        {
            "desc": "Eat breakfast like a king, lunch like a prince, and dinner like a pauper.",
            "author" : "Adelle Davis"
        },
        {
            "desc": "We are indeed much more than what we eat, but what we eat can nevertheless help us to be much more than what we are.",
            "author" : "Adelle davis"
        },
        {
            "desc": "It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
            "author" : "Adam Scott"
        },
        {
            "desc": "Eat breakfast like a king, lunch like a prince, and dinner like a pauper.",
            "author" : "Adelle Davis"
        },
        {
            "desc": "We are indeed much more than what we eat, but what we eat can nevertheless help us to be much more than what we are.",
            "author" : "Adelle davis"
        },
        {
            "desc": "It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
            "author" : "Adam Scott"
        },
        {
            "desc": "Eat breakfast like a king, lunch like a prince, and dinner like a pauper.",
            "author" : "Adelle Davis"
        },
        {
            "desc": "We are indeed much more than what we eat, but what we eat can nevertheless help us to be much more than what we are.",
            "author" : "Adelle davis"
        }
        
]
  return (
    <div>
        {
                    quoteData.map((ele, index) => {
                        return (
                            <QuoteCard
                            description={ele.desc}
                            author={ele.author}
                            key ={index}
                            />
                        )
                    })
                }
    </div>
  )
}

export default Quotes