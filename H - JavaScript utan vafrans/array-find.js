const names = ["Eve", "Bob", "Trix", "John"];

const nameToFind = "Joe";

const found = names.find((name) => {
  return name === nameToFind;
});

if (found) {
  console.log("Found", found);
} else {
  console.log("Did not find", nameToFind);
}
