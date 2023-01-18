context('TodoMVC', () => {
    it('Adicionar um nova tarefa', () => {
        cy.visit('https://todomvc-app-for-testing.surge.sh/')
        cy.get('input.new-todo').type('Hello  World').type('{enter}')

        cy.get('ul.todo-list li').should('have.length', 1)
    })
})
