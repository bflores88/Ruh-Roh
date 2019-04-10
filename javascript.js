function emailCount() {
  let uniqueEmails;
  let dataset = require('./email_log.json');
  let emails = dataset.emails;

  const getEmails = (function(){ 
    uniqueEmails = emails.reduce(function (previous, current) {
      if (!previous.hasOwnProperty(current.email)) {
        previous[current.email] = 1;
      } else {
        previous[current.email] += 1;
      }
      return previous;
    }, {});
    return uniqueEmails;
  }())

  return {
    getEmails: getEmails
  }
}

let getUniqueEmails = emailCount();

console.log(getUniqueEmails);