describe('Testes na página de carreiras', ()=>{
  beforeEach(() => {
      cy.visit("http://www.kstack.com.br/")
      cy.contains('a', 'VER VAGAS').click()
      
  })

  it("verificar se item das vagas eh clicavel",()=>{
      cy.contains('span', 'JAVA').click();
      cy.contains('a', 'Enviar CV').should('be.visible');
      //abrirá o perfil da vaga
  })

  it("preencher formulario da vaga",()=>{
      cy.contains('span', 'JAVA').click();
      cy.contains('a', 'Enviar CV').click();
      //vai abrir logo abaixo o forms para preencher
      cy.contains('Nome').type("Yohan Dornelles");
      cy.contains('E-mail').type("yohan.limapo@kstack.com.br");
      cy.contains('URL do LinkedIn').type("https://www.linkedin.com/in/yohanlimapo/");
      cy.contains('Telefone').type("61996085486");
      cy.contains('button', 'Enviar').click();
      cy.contains('Sua candidatura foi enviada com sucesso', {timeout:10000}).should('be.visible')
  })
  it("Nome campo obrigatório", ()=>{
    cy.contains('span', 'JAVA').click();
    cy.contains('a', 'Enviar CV').click();
    cy.contains('Nome').click();
    cy.contains('E-mail').type('yohan.limapo@kstack.com.br');
    cy.contains('div', 'Campo obrigatório').should('be.visible')
})

    it("Nome Incompleto", ()=>{
    cy.contains('span', 'JAVA').click();
    cy.contains('a', 'Enviar CV').click();
    cy.contains('Nome').type("Yohan");
    cy.contains('E-mail').type("yohan.limapo@kstack.com.br");
    cy.contains('div', 'Nome incompleto').should('be.visible')
    })

    it("Email campo obrigatório", ()=>{
        cy.contains('span', 'JAVA').click();
        cy.contains('a', 'Enviar CV').click();
        cy.contains('Nome').type("Yohan Dornelles");
        cy.contains('E-mail').click();
        cy.contains('URL do LinkedIn').type("https://www.linkedin.com/in/yohanlimapo/");
        cy.contains('span', 'Campo obrigatório').should('be.visible')
    })

    it("Email inválido", ()=>{
        cy.contains('span', 'JAVA').click();
        cy.contains('a', 'Enviar CV').click();
        cy.contains('Nome').type("Yohan Dornelles");
        cy.contains('E-mail').type("yohan");
        cy.contains('URL do LinkedIn').type("https://www.linkedin.com/in/yohanlimapo/");
        cy.contains('span', 'Este email é inválido').should('be.visible')
    })

    it("URL LinkedIn Obrigatório",()=>{
    cy.contains('span', 'JAVA').click();
    cy.contains('a', 'Enviar CV').click();
    cy.contains('Nome').type("Yohan Dornelles");
    cy.contains('E-mail').type("yohan.limapo@kstack.com.br");
    cy.contains('URL do LinkedIn').click();
    cy.contains('Telefone').type("61996085486");
    cy.contains('span', 'Campo obrigatório').should('be.visible')
    cy.contains('button', 'Enviar').click();
    })

    it("URL LinkedIn inválida",()=>{
        cy.contains('span', 'JAVA').click();
        cy.contains('a', 'Enviar CV').click();
        cy.contains('Nome').type("Yohan Dornelles");
        cy.contains('E-mail').type("yohan.limapo@kstack.com.br");
        cy.contains('URL do LinkedIn').type("yohan");
        cy.contains('Telefone').type("61996085486");
        cy.contains('span', 'Esta URL é inválida').should('be.visible')
        cy.contains('button', 'Enviar').click();
        })

    it("Telefone campo obrigatório",()=>{
        cy.contains('span', 'JAVA').click();
        cy.contains('a', 'Enviar CV').click();
        cy.contains('Nome').type("Yohan Dornelles");
        cy.contains('E-mail').type("yohan.limapo@kstack.com.br");
        cy.contains('URL do LinkedIn').type("https://www.linkedin.com/in/yohanlimapo/");
        cy.contains('Telefone').click();
        cy.contains('E-mail').click();
        cy.contains('span', 'Campo obrigatório').should('be.visible')
        })
})
