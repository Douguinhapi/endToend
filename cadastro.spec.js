// cadastro.spec.js
describe('Formulário de Cadastro', () => {
    beforeEach(() => {
        cy.visit('caminho/para/seu/formulario.html'); // Ajuste o caminho
    });

    it('deve exibir erro com campos obrigatórios vazios', () => {
        cy.get('button').click();
        cy.get('.mensagem').should('contain', 'Todos os campos são obrigatórios.');
    });

    it('deve exibir erro quando as senhas não correspondem', () => {
        cy.get('#nome').type('Teste');
        cy.get('#email').type('teste@example.com');
        cy.get('#senha').type('senha123');
        cy.get('#confirmacaoSenha').type('senha456');
        cy.get('button').click();
        cy.get('.mensagem').should('contain', 'As senhas não correspondem.');
    });

    it('deve cadastrar com sucesso', () => {
        cy.get('#nome').type('Teste');
        cy.get('#email').type('teste@example.com');
        cy.get('#senha').type('senha123');
        cy.get('#confirmacaoSenha').type('senha123');
        cy.get('button').click();
        cy.get('.mensagem').should('contain', 'Cadastro realizado com sucesso!');
    });
});
