const Resume = {
  Name: "Balamurugan",
  Dept:"ECE",
  Year: "2017",
  Graduated: "yes"
};

//For 
for (let key in Resume) {
  console.log(Resume[key]);
}
//For of
for (let data of Object.keys(Resume)) {
  console.log(Resume[data]);
}
//For in
for (let i = 0; i < Object.values(Resume).length; i++) {
  console.log(Object.values(Resume)[i]);
}
//For Each
Object.values(Resume).forEach((data) => console.log(data));
