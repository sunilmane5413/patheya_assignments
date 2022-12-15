const userprofile = [
     userprofile1 = {
        "name":"John",
        "age":25,
        "address":"pune"

    },
     userprofile2 = {
        "name":"sham",
        "age":30,
        "address":"lonawala"

    },

     userprofile3 = {
        "name":"abhi",
        "age":22,

    },
     userprofile4 = {
        "name":"Asha",
        "age":35,
        "address":"katraj"

    },
     userprofile5 = {
        "name":"Ajay",
        "age":20,
        "address":"hadapasar"
},

Sortedprofile = userprofile.sort((userprofile1, userprofile2) => {
    if (userprofile1.age< userprofile2.age) {
      return -1;
    }
    return 0;
  })
console.log("Sorted by Age  ",Sortedprofile);

