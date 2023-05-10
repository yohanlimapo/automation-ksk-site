describe('Testes na página de carreiras', ()=>{
  beforeEach(() => {
      cy.visit("http://web.kstack.com.br/v2/Home/Index")
      cy.contains('a', 'VEM PRA KSK').click()
  })

  it("verificar se item das vagas eh clicavel",()=>{
      cy.contains('span', 'ANALISTA MONITORAÇÃO').click();
      cy.contains('a', 'Enviar CV').should('be.visible');
      //abrirá o perfil da vaga
  })

  it("preencher formulario da vaga",()=>{
      cy.contains('span', 'ANALISTA MONITORAÇÃO').click();
      cy.contains('a', 'Enviar CV').click();
      //vai abrir logo abaixo o forms para preencher
      cy.contains('Nome').type("Yohan Dornelles");
      cy.contains('E-mail').type("yohan.limapo@kstack.com.br");
      cy.contains('URL do LinkedIn').type("https://www.linkedin.com/in/yohanlimapo/");
      cy.contains('Telefone').type("61996085486");
      cy.contains('button', 'Enviar').click();
      cy.contains('Sua candidatura foi enviada com sucesso', {timeout:10000}).should('be.visible')
  })

  it("Verificar campo URL LinkedIn (deve ser obrigatório)",()=>{
    cy.contains('span', 'ANALISTA MONITORAÇÃO').click();
    cy.contains('a', 'Enviar CV').click();
    //vai abrir logo abaixo o forms para preencher
    cy.contains('Nome').type("Yohan Dornelles");
    cy.contains('E-mail').type("yohan.limapo@kstack.com.br");
    cy.contains('URL do LinkedIn').click();
    cy.contains('Telefone').type("61996085486");
    cy.contains('span', 'Campo obrigatório').should('be.visible')
    cy.contains('button', 'Enviar').click();
    })
})
