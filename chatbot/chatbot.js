'use-strict'
const dialogflow = require('dialogflow');
const structjson = require('./structjson');
const config = require('../config/keys');
const {struct} = require('pb-util');
//const mongoose = require('mongoose');



const credentials = {
    client_email: config.googleClientEmail,
    private_key: config.googlePrivateKey
}

const projectID = config.googleProjectID;
const sessionID = config.dialogFlowSessionID;

const sessionClient = new dialogflow.SessionsClient({projectID, credentials});
//const sessionPath = sessionClient.sessionPath(projectID, sessionID);
//const sessionPath = sessionClient.sessionPath(projectID, sessionID);

//const Registration = mongoose.model('registration');

module.exports = {
    textQuery: async function(text, userID, parameters = {}) {
        let self = module.exports;
        const sessionPath = sessionClient.sessionPath(projectID, sessionID + userID);
        const request = {
            session: sessionPath,
            queryInput: {
              text: {
                    text: text,
                    languageCode: config.dialogFlowSessionLanguageCode,
              },
            },
            queryParams: {
                payload: {
                    data: parameters
                }
            }
          };

         let responses = await sessionClient.detectIntent(request);
         responses = await self.hendleActoin(responses);
         return responses;
    },
    eventQuery: async function(event, userID,  parameters = {}) {
        let self = module.exports;
        const sessionPath = sessionClient.sessionPath(projectID, sessionID + userID);
        const request = {
            session: sessionPath,
            queryInput: {
                event: {
                    name: event,
                   // parameters: structjson.jsonToStructProto(parameters),
                    parameters: struct.encode(parameters),
                    languageCode: config.dialogFlowSessionLanguageCode,
              },
            }
          };
         let responses = await sessionClient.detectIntent(request);
         responses = await self.hendleActoin(responses);
         return responses;
    },

    hendleActoin: function(responses) {
       //let queryResult = responses[0].queryResult;
       // let self = module.exports;

       // switch (queryResult.action) {
           // case 'recommendcourses-yes':
                //if(queryResult.allRequiredParamsPresent) {
                //    self.saveRegistration(queryResult.parameters.fields);
               // }
               // break;
       // }
        return responses;
    }/*,
    saveRegistration: async function(fields) {
        const registration = new Registration({
            name: fields.name.stringValue,
            address: fields.address.stringValue,
            phone: fields.phone.stringValue,
            email: fields.email.stringValue,
            dateSent: Date.now()
        });
        try {
            let reg = await registration.save()
            console.log(reg);
        }
        catch(err) {
            console.log(err);
        }
    }*/

}