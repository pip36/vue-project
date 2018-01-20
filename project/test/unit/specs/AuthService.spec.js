import Auth from '@/Auth/AuthService'


describe('AuthService', () => {
  it('should have a login function', () => {
    expect(typeof Auth.login === 'function').to.equal(true)
  })
  
})
