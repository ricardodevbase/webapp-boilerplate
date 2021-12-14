const ContactUsInfo = require('../support/pages/contactUs.js')
const exampleData = require('../fixtures/example')

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://automationpractice.com/index.php')
    })
    
    it('submit correct information', () => {
      ContactUsInfo.navigationContactUs()
      ContactUsInfo.addSubjectHeading()
      ContactUsInfo.verifyTypeEmail(exampleData.email)
      ContactUsInfo.typeOrderId()
      ContactUsInfo.uploadDocument(exampleData.pdfFileName)
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
      ContactUsInfo.verifyTypeEmail(exampleData.email)
      ContactUsInfo.submitAction()
      ContactUsInfo.messageValidation()
    })
  
    it('verify Subject Heading should be choosen', () => {
      ContactUsInfo.navigationContactUs()
      ContactUsInfo.verifyTypeEmail(exampleData.email)
      ContactUsInfo.typeMessage()
      ContactUsInfo.submitAction()
      ContactUsInfo.subjectHeadingValidation()
    })

    


      


  })
  