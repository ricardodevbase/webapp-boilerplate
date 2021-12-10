const SELECTORS={
 
        CONTACT_US:'[id="contact-link"]',
        SUBJECT_HEADING:'[id="id_contact"]',
        EMAIL:'[id="email"]',
        ORDERID:'[id="id_order"]',
        MESSAGEID:'[id="message"]',
        SUBMIT_BUTTON:'[id="submitMessage"]'
}

class contactUsPage{
    
    contactUs(){
        return(SELECTORS.CONTACT_US)
    }
    subjectHeading(){
        return(SELECTORS.SUBJECT_HEADING)
    }

    email(){
        return(SELECTORS.EMAIL)
    }

    orderId(){
        return(SELECTORS.ORDERID)
    }
    
    messageId(){
        return(SELECTORS.MESSAGEID)
    }
    
    submitButton(){
        return(SELECTORS.SUBMIT_BUTTON)
    }
    

    navigationContactUs() {
      cy.get(this.contactUs()).should('be.visible').click()
      cy.url().should('contain','controller=contact')
      cy.findByText('Message').should('be.visible')
    }

    addSubjectHeading(){
      cy.get(this.subjectHeading()).select('Customer service').should('have.value', '2') 
    }

    verifyTypeEmail(){
      cy.get(this.email()).as('email')
      cy.get('@email').should('be.visible').invoke('attr','data-validate')
      .should('eq','isEmail')
      cy.get('@email').type('ramdom@email.com')
    }
    typeOrderId(){
    cy.get(this.orderId()).should('be.visible').type('12345')
    }

    uploadDocument(){
    // programmatically upload a paper document
      const fileName = 'pdf_test.pdf';
      cy.fixture(fileName, 'base64').then(fileContent => {
        cy.get('[id="fileUpload"]').upload(
          {
            fileContent,
            fileName,
            mimeType: 'application/pdf',
            encoding: 'utf-8'
          },
          { subjectType: 'input' },
          { force: true }
        );
      });
    }

    typeMessage(){
    cy.get(this.messageId()).should('be.visible').type('testin1234')
    }

    submitAction(){
    cy.get(this.submitButton()).should('be.visible').click()

    }

    sucessSubmitionMessage(){
    cy.findByText('Your message has been successfully sent to our team.').should('be.visible')
    }

    invalidEmailMessage(){
    cy.findByText('Invalid email address.')
    }
   
    messageValidation(){
    cy.findByText('The message cannot be blank.')
    }
    
    subjectHeadingValidation(){
        cy.findByText('Please select a subject from the list provided.')
    }


}


module.exports = new contactUsPage()
