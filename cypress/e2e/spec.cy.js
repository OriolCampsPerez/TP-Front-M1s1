describe('Make sure our todo list app is working well', () => {
    it('Test that we can open a browser and load our app', () => {
        cy.visit("http://192.168.1.32:4000/");
    })
    it('Vérifier que lorsque vous cliquez sur le bouton “lancer une partie”, l’affichage propose bien à l’utilisateur de saisir un mot', () => {
        cy.visit("http://192.168.1.32:4000/");
        cy.get('#new-game').click();
        cy.get('#new-word').should('exist');
        
    })
    it('Vérifiez que lorsque vous saisissez “zzzzz”, vous avez le message d’erreur “mot invalide” qui apparaît', () => {
        cy.visit("http://192.168.1.32:4000/");
        cy.get('#new-game').click();
        cy.get('#new-word').type('zzzzz');
        cy.get('#verif-the-word').click();
        cy.get('#not-valid-word').should('exist');
        

     })

     it('Vérifiez que lorsque vous saisissez le mot ”jante”, celui-ci est bien accepté', () => {
        cy.visit("http://192.168.1.32:4000/");
        cy.get('#new-game').click();
        cy.get('#new-word').type('jante');
        cy.get('#verif-the-word').click();
        cy.get('#valid-word').should('exist');
        

     })
     it('Vérifiez que lorsque vous appuyez sur le bouton “abandonner la partie”, vous arrivez bien sur une page de défaite', () => {
        cy.visit("http://192.168.1.32:4000/");
        cy.get('#new-game').click();
        cy.get('#abandon').click();
        cy.get('#defeat-page').should('exist');
        

     })
     
     it('Lorsque vous accédez aux statistiques, vérifiez bien que vous avez la page des statistiques qui s’affiche', () => {
        cy.visit("http://192.168.1.32:4000/");
        cy.get('#button-stats').click();
        cy.get('#stats-page').should('exist');
        

     })



})
