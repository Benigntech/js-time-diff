
/**
 * calculate the time difference
 * @param {Date} startTime
 * @param {Date} endTime
 * @returns {Error|string}
 * @constructor
 */
const TimeDiff = ( startTime, endTime ) => {

    startTime = new Date( startTime );

    endTime = endTime ? new Date( endTime ) : new Date();

    const startTimeInMS = startTime.getTime();

    const endTimeInMS = endTime.getTime();

    if( !startTimeInMS ) return new Error('Invalid start date');

    if( !endTimeInMS ) return new Error('Invalid end date');

    /**
     * time difference in milliseconds
     * @type {number}
     */
    let timeDifference = endTimeInMS - startTimeInMS;

    const tense = timeDifference > 0 ? 'ago' : 'after';

    timeDifference = timeDifference > 0 ? timeDifference : - timeDifference;

    /**
     * time difference in seconds
     * @type {number}
     */
    const secondsAgo = timeDifference/1000;

    /**
     * time difference in minutes
     * @type {number}
     */
    const minutesAgo = secondsAgo/60;

    /**
     * time difference in hours
     * @type {number}
     */
    const hoursAgo = minutesAgo/60;

    /**
     * time difference in days
     * @type {number}
     */
    const daysAgo = hoursAgo/24;

    /**
     * time difference in months
     * @type {number}
     */
    const monthsAgo = daysAgo/30;

    /**
     * time difference in years
     * @type {number}
     */
    const yearsAgo = monthsAgo/12;


    if ( monthsAgo >= 12 ){
        const year = Math.round( yearsAgo );
        if( year === 1 ){
            return `${year} year ${tense}`;
        }
        else{
            return `${year} years ${tense}`;
        }
    }

    else if( daysAgo >= 30 ){
        const month = Math.round( monthsAgo );
        if( month === 1 ){
            return `${month} month ${tense}`;
        }
        else{
            return `${month} months ${tense}`;
        }

    }
    else if( hoursAgo >= 24 ){

        const day = Math.round( daysAgo );
        if( day === 1 ){
            return `${day} day ${tense}`;
        }
        else{
            return `${day} days ${tense}`;
        }
    }
    else if( minutesAgo >= 60 ){

        const hour = Math.round( hoursAgo );
        if( hour === 1 ){
            return `${hour} hour ${tense}`;
        }
        else{
            return `${hour} hours ${tense}`;
        }
    }
    else if( secondsAgo >= 60 )
    {
        const minute = Math.round( minutesAgo );
        if( minute === 1 ){
            return `${minute} minute ${tense}`;
        }
        else{
            return `${minute} minutes ${tense}`;
        }
    }
    else {
        const second = Math.round( secondsAgo );
        if (second === 1) {
            return `${second} second ${tense}`;
        }
        else {
            return `${second} seconds ${tense}`;
        }
    }

};

// window.timeDiff = TimeDiff;

// export default TimeDiff;

((() => {
    if (typeof define === 'function' && define.amd)
        define('TimeDiff', () => TimeDiff);
    else if (typeof module !== 'undefined' && module.exports)
        module.exports = TimeDiff;
    else
        window.TimeDiff = TimeDiff;
}))();