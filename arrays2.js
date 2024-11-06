
  function isArrayLengthOdd(numbers) {
    const sizeOfArray = numbers.length;
    if (sizeOfArray % 2) {
        return true;
    } else {
        return false;
    }
  }

  console.log(isArrayLengthOdd( [1,2,3,4]));



  function isArrayLengthEven(numbers) {
    const sizeOfArray = numbers.length;
    if (sizeOfArray % 2) {
        return false;
    } else {
        return true;
    }
  }

  console.log(isArrayLengthEven( [1,2,3,4]));


  function isArrayLengthEven(numbers) {
    return !isArrayLengthOdd(numbers);

  }

  console.log(isArrayLengthEven( [1,2,3]));

  function addLailaToArray(instructors) {
    const newInstructors = instructors;
    newInstructors.push("Laila");
    return newInstructors; 
  }
  console.log (addLailaToArray(["Mshary", "Hasan"]));

  function eliminateTeam (teams){
    const lastTeam = teams.pop();
    return lastTeam;

  }

  console.log(eliminateTeam(["brazil", "germany", "italy"]));


  function secondHalfOfArrayEven(fruits) {
    if (isArrayLengthEven(fruits)) {
  
        return fruits.slice (fruits.length / 2 ,fruits.length );
    } else { return[]
    }
  }
  console.log(secondHalfOfArrayEven(["orange","apple","pear","cherry","watermelon","kiwi"]));



  function youGottaCalmDown(shout) {
    if (shout[shout.length - 1] !== "!"){
        return shout;
    }
    const shoutWithOneExclMark = shout.slice( 0, shout.indexOf("!") + 1);
return shoutWithOneExclMark
  }

  console.log (youGottaCalmDown("Hello!!!!"));




