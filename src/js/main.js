/**
 * 
 */
function IndexQuery() {};




/**
 * 
 * @param {String} param 
 * @param {Function} callbackOnFail 
 * @returns {String|null}
 */
IndexQuery.prototype.get = function( param, callbackOnFail ) {

    var value = sessionStorage.getItem( param );

    if ( value !== null ) {

        return value;

    }

    var urlParams   = new URLSearchParams( window.location.search );
    var value       = urlParams.get( param );

    if ( value !== null ) {

        return value;

    } else {

        if ( arguments.length === 2 ) {

            callbackOnFail( param );

        }

        return null;

    }

};

/**
 * Gets the value first from URL and not from sessionStorage
 * Then sets the session storage for possible future usage
 * 
 * @param {String} param 
 * @returns {String|null}
 */
IndexQuery.prototype.getURL = function( param ) {

    var urlParams   = new URLSearchParams( window.location.search );
    var value       = urlParams.get( param );

    if ( value === null ) {

        value = sessionStorage.getItem( param );

    } else {

        sessionStorage.setItem( param, value );

    }

    return value;

};




var indexQuery = new IndexQuery();