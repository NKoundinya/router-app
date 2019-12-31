import React from 'react'

export const TokenContext = React.createContext('')

export const TokenProvider = TokenContext.Provider
export const TokenConsumer = TokenContext.Consumer

export default TokenContext
