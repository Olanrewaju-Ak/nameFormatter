const nameInverter = function (name) {
  if (name === "") {
    return "";
  }
  // if (name[0] === " " || name[name.length - 1] === " ") {
  //   let trimmedName = name.trim();
  //   return trimmedName;
  // }

  //its like this condition works for two tests at a time??
  if (/\s/.test) {
    reversedName = name.trim().split(" ").reverse().join(", ");
    console.log(reversedName);
    return reversedName;
  }

  return name;
};

nameInverter(" 		 Chan    ");

module.exports = nameInverter;
