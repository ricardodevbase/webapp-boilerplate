class contactUsPage {
  //variable declaration
  contactUs = '[id="contact-link"]';
  subjectHeading='[id="id_contact"]';
  emailId='[id="email"]';
  orderId='[id="id_order"]';
  messageId='[id="message"]';
  submitButton='[id="submitMessage"]';

  navigationContactUs=()=> {
    cy.get(this.contactUs).should('be.visible').click()
    cy.url().should('contain','controller=contact')
    cy.findByText('Message').should('be.visible')
  }

  addSubjectHeading=()=>{
    cy.get(this.subjectHeading).select('Customer service').should('have.value', '2') 
  }

  verifyTypeEmail=(inputEmail)=>{
    cy.get(this.emailId).as('email')
    cy.get('@email').should('be.visible').invoke('attr','data-validate')
    .should('eq','isEmail')
    cy.get('@email').type(inputEmail)
  }
  typeOrderId=()=>{
  cy.get(this.orderId).should('be.visible').type('12345')
  }

  uploadDocument=(fileName)=>{
  // programmatically upload a paper document
    //const fileName = file;
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

  typeMessage=()=>{
  cy.get(this.messageId).should('be.visible').type('testin1234')
  }

  submitAction=()=>{
  cy.get(this.submitButton).should('be.visible').click()

  }

  sucessSubmitionMessage=()=>{
  cy.findByText('Your message has been successfully sent to our team.').should('be.visible')
  }

  invalidEmailMessage=()=>{
  cy.findByText('Invalid email address.').should('be.visible')
  }
 
  messageValidation=()=>{
  cy.findByText('The message cannot be blank.').should('be.visible')
  }
  
  subjectHeadingValidation=()=>{
      cy.findByText('Please select a subject from the list provided.').should('be.visible')
  }
}

module.exports = new contactUsPage()