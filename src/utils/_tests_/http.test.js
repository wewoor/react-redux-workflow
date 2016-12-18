/**
 * Test case for http.js
 */
import http from '../http'

it('http get is ok', () => {
    expect(http.build).toBeDefined()
    expect(http.get).toBeDefined()
})

it('http post is ok', () => {
    expect(http.post).toBeDefined()
})

it('http request is ok', () => {
    expect(http.request).toBeDefined()
})