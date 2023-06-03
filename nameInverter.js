const nameInverter = function (name) {
  if (name === "") {
    return "";
  }
  if (name[0] === " " || name[name.length - 1] === " ") {
    let trimmedName = name.trim();
    return trimmedName;
  }

  return name;
};

module.exports = nameInverter;
