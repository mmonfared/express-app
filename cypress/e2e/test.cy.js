/// <reference types = 'cypress'/>
it('simple test',()=>{
    cy.request('http://localhost:2562').then((resp)=>{
        expect(resp.status).to.eq(200)
        console.log(resp)
        expect(resp.body.user).eq("Mohammad")
    })
})