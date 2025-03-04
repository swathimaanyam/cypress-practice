// import schema from './schema.json'
import apiUser from '../fixtures/users.json'
describe.skip('make api requests', () => {
    it('GET request', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts').then((response) => {
            // expect(response.status).to.eq(200);
            // expect(response.body.length).to.be.greaterThan(0);
            // expect(response.body[1].title).to.eq('qui est esse'); //VERIFY TITLE IS PRESENT IN ARRAY[1]
            // expect(response.body.some(verifyTitle => verifyTitle.title === 'qui est esse')).to.be.true; //VERIFY TITLE IS PRESENT SOMEWHERE IN THE BODY
            // cy.log('first 2', response.body.slice(0, 2));
            // // PRINTS TITLE TO CYPRESS RUNNER
            // response.body.slice(0, 2).forEach(element => {
            //     cy.log(element.title)
            // });
            // // VERIFIES IF TTFB IS GOOD
            // if (response.duration < 100) {
            //     cy.log('TTFB great');
            // }
            // else {
            //     cy.log('TFFB not great');
            // }
            cy.writeFile('cypress/fixtures/get.json', response.body) //WRITES THE DATA TO A  FIXTURE FILE
            // expect(response.body).to.include('qui est esse'); // won't work because the response body is an array
            // expect(response.body).to.be.jsonSchema(schema); // Need to pre-define schema and do npm install chai-json-schema 
        })
    })
    it('POST request with invalid credentials', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/login',
            body: {
                email: 'test',
                password: 'test'
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400);
        })
    })
    it('POST request with valid credentials', () => {
        cy.fixture('users.json').then((valid) => {
            cy.request({
                method: 'POST',
                url: 'https://reqres.in/api/login',
                body: {
                    email: valid.apiUser.email,
                    password: valid.apiUser.password
                }
                // failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(200);
            })
        })
    })
    it('POST request with masked valid credentials', () => {
        cy.fixture('users.json').then((valid) => {
            const maskemail='****@***.com';
            const maskpwd= '*****';
            cy.request({
                method: 'POST',
                url: 'https://reqres.in/api/login',
                body: {
                    email: valid.apiUser.email,
                    password: valid.apiUser.password
                }
            }).then((response) => {
                expect(response.status).to.eq(200);
                console.log(maskemail + 'and'+ maskpwd)
            })
        })
    })
   
    
})
afterEach(() =>
{
    cy.writeFile('cypress/fixtures/get.json','{}'); //DELETES THE DATA FROM THE FIXTURE FILE

})




