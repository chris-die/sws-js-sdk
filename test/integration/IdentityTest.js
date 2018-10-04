import Sws from '../../src/index'
import { describe, it, before } from 'mocha'
import { expect } from 'chai'

describe('Identity Tests', function () {
  describe('Identity URI Validation Tests', function () {
    let swsClient
    before(function () {
      swsClient = new Sws({ appId: 'myClientAppId' })
    })
    it(`confirms URI used in 'tokenRefresh()' method, by returning a non-404 HTTP response`, function () {
      return swsClient.id.tokenRefresh('token.value').then(
        () => Promise.reject(new Error('Expected non-2xx HTTP response code')),
        err => {
          expect(err.httpStatus).not.to.equal(404)
        }
      )
    })

    it(`confirms URI used in 'getUser()' method, by returning a non-404 HTTP response`, function () {
      return swsClient.id.getUser().then(
        () => Promise.reject(new Error('Expected non-2xx HTTP response code')),
        err => {
          expect(err.httpStatus).not.to.equal(404)
        }
      )
    })

    it(`confirms URI used in 'login()' method, by returning a non-404 HTTP response`, function () {
      return swsClient.id.login().then(
        () => Promise.reject(new Error('Expected non-2xx HTTP response code')),
        err => {
          expect(err.httpStatus).not.to.equal(404)
        }
      )
    })
  })
})
