
/**
 * calculate the time difference
 * @param {Date} startTime
 * @param {Date} endTime
 * @returns {Error|string}
 * @constructor
 */
const TimeDiff = ( startTime, endTime = new Date() ) => {

    startTime = new Date( startTime );

    endTime = new Date( endTime );

    const startTimeInMS = startTime.getTime();

    const endTimeInMS = endTime.getTime();

    if( !startTimeInMS ) return new Error('Invalid start date');

    if( !endTimeInMS ) return new Error('Invalid end date');

    /**
     * time difference in milliseconds
     * @type {number}
     */
    const  timeDifference = endTimeInMS - startTimeInMS;

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
            return year+ " year ago"
        }
        else{
            return year+ " years ago"
        }
    }

    else if( daysAgo >= 30 ){
        const month = Math.round( monthsAgo );
        if( month === 1 ){
            return month+ " month ago"
        }
        else{
            return month+ " months ago"
        }

    }
    else if( hoursAgo >= 24 ){

        const day = Math.round( daysAgo );
        if( day === 1 ){
            return day+ " day ago"
        }
        else{
            return day+ " days ago"
        }
    }
    else if( minutesAgo >= 60 ){

        const hour = Math.round( hoursAgo );
        if( hour === 1 ){
            return hour+ " hour ago"
        }
        else{
            return hour+ " hours ago"
        }
    }
    else if( secondsAgo >= 60 )
    {
        const minute = Math.round( minutesAgo );
        if( minute === 1 ){
            return minute+ " minute ago"
        }
        else{
            return minute+ " minutes ago"
        }
    }
    else {
        const second = Math.round( secondsAgo );
        if( second === 1 ){
            return second+ " second ago"
        }
        else{
            return second+ " seconds ago"
        }
    }

};

window.timeDiff = TimeDiff;

export default TimeDiff;