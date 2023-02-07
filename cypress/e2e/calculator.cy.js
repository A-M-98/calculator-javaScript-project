beforeEach(() => {
  cy.log('http://127.0.0.1:5501/index.html')
})



describe('testing number buttons', () => {
  it('Presss number 123, number 123 should show up', () => {
    cy.visit('http://127.0.0.1:5501/index.html')
    cy.get(':nth-child(13)').click()
    cy.get(':nth-child(14)').click()
    cy.get(':nth-child(15)').click()
    cy.get('#output').should("contain", "123")
  })
})

describe('testing logic functionality (AC)', () => {
  it('press AC, all output is deleted', () => {
    cy.visit('http://127.0.0.1:5501/index.html')
    cy.get(':nth-child(13)').click()
    cy.get(':nth-child(14)').click()
    cy.get(':nth-child(15)').click()
    cy.get('#allClear').click()
    cy.get('#output').should("contain", "")
  })
})

describe('testing logic functionality (C)', () => {
  it('Press C, previous valvue is cleared', () => {
    cy.visit('http://127.0.0.1:5501/index.html')
    cy.get(':nth-child(13)').click()
    cy.get(':nth-child(14)').click()
    cy.get(':nth-child(15)').click()
    cy.get('#clear').click()
    cy.get('#output').should("contain", "12")
  })
})

describe('testing logic functionality (%)', () => {
  it('Press %, gives 1% of the value in the output', () => {
    cy.visit('http://127.0.0.1:5501/index.html')
    cy.get(':nth-child(13)').click()
    cy.get(':nth-child(14)').click()
    cy.get(':nth-child(15)').click()
    cy.get('#percentage').click()
    cy.get('#output').should("contain", "1.23")
  })
})

describe('testing logic functionality (÷)', () => {
  it('Press ÷, divides the previous value by the new value', () => {
    cy.visit('http://127.0.0.1:5501/index.html')
    cy.get(':nth-child(7)').click()
    cy.get('.buttons > :nth-child(4)').click()
    cy.get(':nth-child(15)').click()
    cy.get('#equals').click()
    cy.get('#output').should("contain", "3")
  })
})

describe('testing logic functionality (×)', () => {
  it('Press ×, multiplies the previous value by the new value', () => {
    cy.visit('http://127.0.0.1:5501/index.html')
    cy.get(':nth-child(7)').click()
    cy.get(':nth-child(8)').click()
    cy.get(':nth-child(15)').click()
    cy.get('#equals').click()
    cy.get('#output').should("contain", "27")
  })
})

describe('testing logic functionality (+)', () => {
  it('Press +, adds the previous value to the new value', () => {
    cy.visit('http://127.0.0.1:5501/index.html')
    cy.get(':nth-child(7)').click()
    cy.get(':nth-child(16)').click()
    cy.get(':nth-child(15)').click()
    cy.get('#equals').click()
    cy.get('#output').should("contain", "12")
  })
})

describe('testing logic functionality (-)', () => {
  it('Press -, subtracts the previous value from the new value', () => {
    cy.visit('http://127.0.0.1:5501/index.html')
    cy.get(':nth-child(7)').click()
    cy.get(':nth-child(12)').click()
    cy.get(':nth-child(15)').click()
    cy.get('#equals').click()
    cy.get('#output').should("contain", "6")
  })
})

describe('testing logic functionality', () => {
  it('Press +, -, ÷, ×, should carry on the value from previous calculations to give correct end value', () => {
    cy.visit('http://127.0.0.1:5501/index.html')
    cy.get(':nth-child(14)').click()
    cy.get(':nth-child(16)').click()
    cy.get(':nth-child(14)').click()
    cy.get('#equals').click()
    cy.get(':nth-child(12)').click()
    cy.get(':nth-child(13)').click()
    cy.get('#equals').click()
    cy.get(':nth-child(8)').click()
    cy.get(':nth-child(15)').click()
    cy.get('#equals').click()
    cy.get('.buttons > :nth-child(4)').click()
    cy.get(':nth-child(15)').click()
    cy.get('#equals').click()
    cy.get('#output').should("contain", "3")
  })
})

// describe('testing displays', () => {
//   it('passes', () => {
//     cy.visit('http://127.0.0.1:5501/index.html')
//   })
// })