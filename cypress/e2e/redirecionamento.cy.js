describe('Redirecionamento a partir da página principal', ()=>{
    beforeEach(() => {
        cy.visit("http://web.kstack.com.br/v2/Home/Index")
    })
    
    it('Página Kstacker',
    {
        retries: {
          runMode: 2,
          openMode: 2,
        },
    }, ()=> {
        cy.contains('a', 'KSTACKER').click();
        cy.url()
        cy.location('span')
        //Não estou sabendo fazer este it(), talvez porque a imagem está sobreposta.
    })

    it('Página Contato', ()=> {
        cy.contains('a', 'CONTATO').click();
        cy.contains('Nos conte como podemos te ajudar').should('be.visible')
    })

    it('Página Carreiras (vem ser KSK)', ()=> {
        cy.contains('a', 'VEM PRA KSK').click();
        cy.contains('Encontre a vaga que é sua cara').should('be.visible')
    })

})