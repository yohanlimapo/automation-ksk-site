describe('Testes na página de carreiras versão Inglês', ()=>{
  beforeEach(() => {
      cy.visit("http://www.kstack.com.br/Home/IndexEnglish");
      cy.contains('a', 'SEE JOBS').click()
      
  })

  it("verificar se item das vagas eh clicavel",()=>{
      cy.contains('span', 'FULL STACK').click();
      cy.contains('a', 'Send your CV').should('be.visible');
      //abrirá o perfil da vaga
  })

  it("preencher formulario da vaga",()=>{
      cy.contains('span', 'FULL STACK').click();
      cy.contains('a', 'Send your CV').click();
      //vai abrir logo abaixo o forms para preencher
      cy.contains('Full Name').type("Yohan Dornelles");
      cy.contains('E-mail').type("yohan.limapo@kstack.com.br");
      cy.contains('LinkedIn URL').type("https://www.linkedin.com/in/yohanlimapo/");
      cy.contains('Phone number').type("61996085486");
      cy.contains('button', 'Send').click();
      cy.contains('Your application has been sent successfully', {timeout:10000}).should('be.visible')
  })
  it("Nome campo obrigatório", ()=>{
    cy.contains('span', 'FULL STACK').click();
    cy.contains('a', 'Send your CV').click();
    cy.contains('Full Name').click();
    cy.contains('E-mail').type('yohan.limapo@kstack.com.br');
    cy.contains('div', 'Required field').should('be.visible')
})

    it("Nome Incompleto", ()=>{
    cy.contains('span', 'FULL STACK').click();
    cy.contains('a', 'Send your CV').click();
    cy.contains('Full Name').type("Yohan");
    cy.contains('E-mail').type("yohan.limapo@kstack.com.br");
    cy.contains('div', 'Incomplete name').should('be.visible')
    })

    it("Email campo obrigatório", ()=>{
        cy.contains('span', 'FULL STACK').click();
        cy.contains('a', 'Send your CV').click();
        cy.contains('Full Name').type("Yohan Dornelles");
        cy.contains('E-mail').click();
        cy.contains('LinkedIn URL').type("https://www.linkedin.com/in/yohanlimapo/");
        cy.contains('span', 'Required field').should('be.visible')
    })

    it("Email inválido", ()=>{
        cy.contains('span', 'FULL STACK').click();
        cy.contains('a', 'Send your CV').click();
        cy.contains('Full Name').type("Yohan Dornelles");
        cy.contains('E-mail').type("yohan");
        cy.contains('LinkedIn URL').type("https://www.linkedin.com/in/yohanlimapo/");
        cy.contains('span', 'This email is invalid').should('be.visible')
    })

    it("URL LinkedIn Obrigatório",()=>{
    cy.contains('span', 'FULL STACK').click();
    cy.contains('a', 'Send your CV').click();
    cy.contains('Full Name').type("Yohan Dornelles");
    cy.contains('E-mail').type("yohan.limapo@kstack.com.br");
    cy.contains('LinkedIn URL').click();
    cy.contains('Phone number').type("61996085486");
    cy.contains('span', 'Required field').should('be.visible')
    cy.contains('button', 'Send').click();
    })

    it("URL LinkedIn inválida",()=>{
        cy.contains('span', 'FULL STACK').click();
        cy.contains('a', 'Send your CV').click();
        cy.contains('Full Name').type("Yohan Dornelles");
        cy.contains('E-mail').type("yohan.limapo@kstack.com.br");
        cy.contains('LinkedIn URL').type("yohan");
        cy.contains('Phone number').type("61996085486");
        cy.contains('span', 'This URL is invalid').should('be.visible')
        cy.contains('button', 'Send').click();
        })

    it("Telefone campo obrigatório",()=>{
        cy.contains('span', 'FULL STACK').click();
        cy.contains('a', 'Send your CV').click();
        cy.contains('Full Name').type("Yohan Dornelles");
        cy.contains('E-mail').type("yohan.limapo@kstack.com.br");
        cy.contains('LinkedIn URL').type("https://www.linkedin.com/in/yohanlimapo/");
        cy.contains('Phone number').click();
        cy.contains('E-mail').click();
        cy.contains('span', 'Required field').should('be.visible')
        })
})
