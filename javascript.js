function emailCount() {
  let dataset = require('./email_log.json');

  let emails = dataset.emails;

  let uniqueEmails = emails.reduce(function (previous, current) {
    if (!previous.hasOwnProperty(current.email)) {
      previous[current.email] = 1;
    } else {
      previous[current.email] += 1;
    }
    return previous;
  }, {});

  return uniqueEmails;
}

let getUniqueEmails = emailCount();