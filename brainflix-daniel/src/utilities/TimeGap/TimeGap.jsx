//utility function for obtain the time gap between current time and the time where comments/videos where submitted.
//It also format the answer based in the length of that gap 

  function timeGap(date) {
    const difference = Math.floor((new Date() - new Date(date))/1000)  
    let proportion = difference/31536000
    if (proportion > 1) {
     return Math.floor(proportion) + ' ' + 'years ago'
    }
    proportion = difference/2592000
    if (proportion > 1) {
     return Math.floor(proportion) + ' ' + 'months ago'
    }
    proportion = difference/86400
    if (proportion > 1) {
     return Math.floor(proportion) + ' ' + 'days ago'
    }
    proportion = difference/3600
    if (proportion > 1) {
     return Math.floor(proportion) + ' ' + 'hours ago'
    }
    proportion = difference/60
    if (proportion > 1) {
     return Math.floor(proportion) + ' ' + 'minutes ago'
    } else {
     return Math.floor(proportion) + ' ' + 'seconds ago'}
   
}

export default timeGap;