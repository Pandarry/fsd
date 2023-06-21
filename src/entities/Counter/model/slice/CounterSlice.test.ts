import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { CounterSchema } from '../..'
import { counterActions, counterReducer } from './CounterSlice'

describe('counterSlice', () => {
    test('decrement', () => {
        const state: CounterSchema = { value: 10 }
        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 })
    })
    test('increment', () => {
        const state: CounterSchema = { value: 10 }
        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 })
    })
    test('with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 })
    })
})
