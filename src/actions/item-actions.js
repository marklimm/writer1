//import axios from 'axios'
//import rng from '../utilities/randomNumberGenerator'
//import loggerActions from '../actions/logger-actions'
//import personGenerator from '../utilities/personGenerator'

export const ADD_ITEM = 'ADD_ITEM'
export const GET_ITEMS = 'GET_ITEMS'



export function addItem(name, description, price){

    return (dispatch, getState) => {

        //const newPersonName = name || personGenerator.generateName()
        //const newPersonAge = age || personGenerator.generateAge()

        dispatch({
            type: ADD_ITEM,
            payload: {
                name: name,
                description: description,
                price: price
            }
        })

    }
}


export function getItems(){

    return (dispatch, getState) => {

        dispatch({
            type: GET_ITEMS,
            payload: {}
        })
    }
}


//
//const getEventEffectOnPerson = (eventType, person) => {
//
//    const moraleChangedBy = rng.getRandomNumber(
//        eventType.moraleChange.low,
//        eventType.moraleChange.high
//    )
//
//    let eventStr
//    if(moraleChangedBy === 0){
//        eventStr = `${person.name}'s morale stayed at ${person.morale}`
//    }
//    else{
//        eventStr = `${person.name}'s morale went from ${person.morale} to ${person.morale + moraleChangedBy}`
//    }
//
//    return {
//        userId: person.userId,
//        eventStr,
//        newMoraleValue: person.morale + moraleChangedBy
//    }
//}


export default {
    addItem,
    getItems
};