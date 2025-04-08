var isDate = function (input) {
  //   write your code here
	 if (input instanceof Date && !isNaN(input)) {
    return true;
  }
  if (typeof input === 'string') {
    const parsed = new Date(input);
    return !isNaN(parsed);
  }
  return false;
	
};

// Do not change the code below.
// const input = prompt("Enter Date.");
// alert(isDate(input));
