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
      cy.contains('E-mail').type("yohan.limapo@gmail.com");
      cy.contains().type();
      cy.contains('button', 'Enviar').click()
  })
})
