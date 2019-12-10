/* global fetch:false */
import { fetchFavouritesActionCreator, REHYDRATED, TOGGLE_FAVOURITE_TYPE } from '../actions'
import { createIsFavouritedSelector, getFavouritesApiUrl } from '../selectors'

const fetchFavourites = async (apiUrl, reqMethod = {}) => {
  const response = await fetch(apiUrl, {
    headers: {
      Accept: 'application/json'
    },
    ...reqMethod
  })

  const favourites = await response.json()

  if (!response.ok || !Array.isArray(favourites)) {
    const error = new Error('Failed to fetch favourites')
    error.status = response.status
    throw error
  }

  return favourites
}

const toggleFavourites = (apiUrl, id, isFavourited) => {
  const url = `${apiUrl}/${id}`

  const reqMethod = {
    method: isFavourited ? 'DELETE' : 'PUT'
  }

  return fetchFavourites(url, reqMethod)
}

export default store => next => action => {
  const ret = next(action)
  const state = store.getState()
  const apiUrl = getFavouritesApiUrl(state)

  if (action.type === TOGGLE_FAVOURITE_TYPE) {
    const entityId = action.payload.entityId
    const isFavouritedSelector = createIsFavouritedSelector(entityId)
    const isFavourited = isFavouritedSelector(state)
    store.dispatch(fetchFavouritesActionCreator(toggleFavourites(apiUrl, entityId, isFavourited)))
  }

  if (action.type === REHYDRATED) {
    store.dispatch(fetchFavouritesActionCreator(fetchFavourites(apiUrl)))
  }

  return ret
}
