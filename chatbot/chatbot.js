'use-strict'
const dialogflow = require('dialogflow');
const structjson = require('./structjson');
const config = require('../config/keys');
const {struct} = require('pb-util');



const credentials = {
    client_email: config.googleClientEmail,
    private_key: config.googlePrivateKey
}

const projectID = config.googleProjectID;
const sessionID = config.dialogFlowSessionID;

const sessionClient = new dialogflow.SessionsClient({projectID, credentials});
//const sessionPath = sessionClient.sessionPath(projectID, sessionID);

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
        return responses;
    }
}