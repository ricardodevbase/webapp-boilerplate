/// <reference types="cypress" />
const ContactUsInfo = require('../support/contactUs.js')

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://automationpractice.com/index.php')
    })
    
    it('submit correct information', () => {
      ContactUsInfo.navigationContactUs()
      ContactUsInfo.addSubjectHeading()
      ContactUsInfo.verifyTypeEmail()
      ContactUsInfo.typeOrderId()
      ContactUsInfo.uploadDocument()
      ContactUsInfo.typeMessage()
      ContactUsInfo.submitAction()
      ContactUsInfo.sucessSubmitionMessage()
    })

    it('verify  email error message', () => {
      ContactUsInfo.navigationContactUs()
      ContactUsInfo.submitAction()
      ContactUsInfo.invalidEmailMessage()
    })

    it('verify message cannot be blank', () => {
      ContactUsInfo.navigationContactUs()
      ContactUsInfo.verifyTypeEmail()
      ContactUsInfo.submitAction()
      ContactUsInfo.messageValidation()
    })
  
    it('verify Subject Heading should be choosen', () => {
      ContactUsInfo.navigationContactUs()
      ContactUsInfo.verifyTypeEmail()
      ContactUsInfo.typeMessage()
      ContactUsInfo.submitAction()
      ContactUsInfo.subjectHeadingValidation()
    })

    


      


  })
  