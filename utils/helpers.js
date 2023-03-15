module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_name: (name) => {
    // pulls first name only from user.name
    return name.split(' ')[0];
  },
};
