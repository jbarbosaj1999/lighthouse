'use strict';

const Gatherer = require('lighthouse').Gatherer;


class TimeToApi extends Gatherer {
    afterPass(options) {
        const driver = options.driver;

        const ini = driver.evaluateAsync('window.apiRequest').then(apiRequestStart =>
         {
            if (!apiRequestStart) 
                {
                    throw new Error('Unable to find card load metrics in page');
                }
                return apiRequestStart;
        }
        );
        
        return ini;

    
    }
    
}
module.exports = TimeToApi;