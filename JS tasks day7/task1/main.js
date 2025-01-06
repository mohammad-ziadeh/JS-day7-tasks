{
  let user = {
    name: "Adam",
    age: 25,
    gender: "male",
  };

  console.log(user.name, user.age, user.gender);
}
//###############################################################
console.log("2-");

{
  let user = {
    name: "Adam",
    age: 25,
  };
  user.gender = "male";
  console.log(user);
}

//###############################################################

console.log("3-");

{
  let user = {
    name: "Adam",
    age: 25,
  };
  user.gender = "male";
  console.log(user["name"], user["gender"], user["age"]);
}

//###############################################################

console.log("4-");

{
  let user = {
    name: "Adam",
    age: 25,
  };
  console.log(user.name);
}

//###############################################################

console.log("5-");

{
  let user = {
    name: "Adam",
    age: 25,
  };
  console.log(user["name"]);
}

//###############################################################

console.log("6-");

{
  let user = {
    name: "Adam",
    age: 25,
    gender: "male",
  };
  for (let key in user) {
    console.log(key, user[key]);
  }
}

//###############################################################

console.log("7-");

{
  let user = {
    name: "Adam",
    age: 25,
    gender: "male",
  };
  console.log(Object.keys(user));
}

//###############################################################

console.log("8-");

{
  let user = {
    name: "Adam",
    age: 25,
    gender: "male",
  };
  console.log(Object.values(user));
}

//###############################################################

console.log("9-");

{
  let user = {
    name: "Adam",
    age: 25,
    gender: "male",
  };
  console.log(Object.entries(user));
}

//###############################################################

console.log("10-");


{
  let user = {
    name: "Adam",
    age: 25,
  };
  let p = { gender: "male" };
  console.log(Object.assign(user, p));
}

//###############################################################

console.log("11-");

{
  let user = {
    name: "Adam",
    age: 25,
  };
  Object.freeze(user);
  let p = { gender: "male" };
  console.log(user, p);
}

//###############################################################

console.log("12-");

{
  let user = {
    name: "Adam",
    age: 25,
  };
  Object.seal(user);
  user.name = "mohammad";
  console.log(user);
}
