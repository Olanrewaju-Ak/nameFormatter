const nameInverter = function (name) {
  if (name === undefined) {
    throw Error("Error");
  }
  let trimmedName = name.trim();
  splitName = trimmedName.split(" ");
  const validateTitle = (prefix) => {
    if (prefix === "Dr." || prefix === "Mr." || prefix === "Mrs." || prefix === "Ms.") {
      return true;
    }
  };
  if (trimmedName === "") {
    return "";
  } else if (validateTitle(trimmedName)) {
    return "";
  } else if (splitName.length === 3 && validateTitle(splitName[0])) {
    finalString = `${splitName[0]} ${splitName[2]}, ${splitName[1]}`;
    return finalString;
  } else if (splitName.length === 2) {
    finalString = `${splitName[1]}, ${splitName[0]}`;
    return finalString;
  } else {
    return trimmedName;
  }
};

console.log(nameInverter("Dr. Bella Shmurda"));

module.exports = nameInverter;
