describe('dojo3', function() {
    
    
 
     it('dojo3', function() {
        cy.visit("https://staging.playplay.com/");
    cy.get('#log_in_link').click();
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    cy.get('#email').type('nightwatch.playplay@gmail.com');
    cy.get('#password').type('hctawthgin');
    cy.get('.pp__checkbox-container__icons').click();
    cy.get('span').click();
    cy.wait(10000);
    cy.get('.pp__start-from-scratch-card__icon-container').click();
    cy.get('[data-heap-label="library"]').click();
    cy.get('[data-heap-label="pp__library-panel__corporates"]').click();
    cy.get('.pp__screens-timeline__add-screen-cta > .ds__button-wrapper > .ds__button-secondary__content-wrapper').click();
    cy.get(':nth-child(1) > .pp__add-a-new-screen-screens-list__category-screens > :nth-child(1) > .pp__add-a-new-screen-catalog-item > .pp__add-a-new-screen-catalog-item__cover').click();
    const dataTransfer = new DataTransfer();
    cy.get('.media-thumbnail > .media-wrapper > .media-title-tooltip > .media-image-item').trigger('dragstart',{
        dataTransfer
    });
    cy.get('.upload-container').trigger('drop', {
        dataTransfer
     });
    cy.get('.ds__modal-footer__right > .ds__button-primary-medium > .ds__button-primary__content-wrapper').click();
    cy.get('[class="ds__button-action__content-wrapper"]').click();
    
    cy.get('.pp__project-view__bar-area2 > .ds__button-action-medium > .ds__button-action__content-wrapper').click();
    cy.wait(30000);
    cy.get(':nth-child(3) > .ds__button-wrapper > .ds__button-action__content-wrapper').click();
 
 
 });
     }) ;