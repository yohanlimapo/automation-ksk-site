describe('Testes na página de contato', ()=>{
    beforeEach(() => {
        cy.visit("http://www.kstack.com.br/")
        cy.contains('a', 'CONTATO').click()
    })
    it("Nome campo obrigatório", ()=>{
        cy.contains('Nome').click();
        cy.contains('Email').type('yohan.limapo@kstack.com.br');
        cy.contains('span', 'Campo obrigatório').should('be.visible')
    })

    it('Nome incompleto', ()=>{
            cy.contains('Nome').type("Yohan");
            cy.contains('Email').type("yohan.limapo@kstack.com.br");
            cy.contains('span', 'Nome incompleto').should('be.visible')
    })
    it("Email campo obrigatório", ()=>{
        cy.contains('Nome').type("Yohan Dornelles");
        cy.contains('Email').click();
        cy.contains('Assunto').type("teste");
        cy.contains('span', 'Campo obrigatório').should('be.visible')
    })

    it("Email inválido", ()=>{
        cy.contains('Nome').type("Yohan Dornelles");
        cy.contains('Email').type("yohan");
        cy.contains('Assunto').type("teste");
        cy.contains('span', 'Este email é inválido').should('be.visible')
    })

    it("Assunto campo obrigatório", ()=>{
        cy.contains('Nome').type("Yohan Dornelles");
        cy.contains('Email').type("yohan.limapo@kstack.com.br");
        cy.contains('Assunto').click();
        cy.contains('Mensagem').type('teste');
        cy.contains('span', 'Campo obrigatório').should('be.visible')
    })

    it("Mensagem campo obrigatório", ()=>{
        cy.contains('Nome').type("Yohan Dornelles");
        cy.contains('Email').type("yohan.limapo@kstack.com.br");
        cy.contains('Assunto').type('teste');
        cy.contains('Mensagem').click();
        cy.contains('Assunto').click();
        cy.contains('span', 'Campo obrigatório').should('be.visible')        
    })
})