'use strict';

const Audit = require('lighthouse').Audit;


const MAX_API_TIME = 3000;

class ApiTimeAudit extends Audit {
    static get meta() {
        return {
            id: 'api-audit',
            title: 'api audit',
            category: 'MyPerformance',
            name: 'api-audit',
            description: 'Tiempo entre la petición al api y la respuesta',
            failureDescription: 'La repuesta del api es muy lenta',
            helpText: 'La api se mide desde la petición hasta su actualización de pantalla' ,
            requiredArtifacts: ['TimeToApi']
        };
    }

    static audit(artifacts) {
        const loadedTime = artifacts.TimeToApi;

        const belowThreshold = loadedTime <= MAX_API_TIME;

        return {
            displayValue: loadedTime,
            score: Number(belowThreshold)
        };
    }
}

module.exports = ApiTimeAudit;