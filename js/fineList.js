"use strict";
window.fineList = {
  searchFines: searchFines,
};

let DB = data.finesData;
console.log(DB);

<<<<<<< HEAD
function searchFines(searchKey){
    
=======
  searchKey = searchKey.toLowerCase();
  return data.finesData.filter((item) => {
    return (
      item.номер.toLowerCase().includes(searchKey) ||
      item.тип.toLowerCase().includes(searchKey)
    );
  });
>>>>>>> ivakhnenko
}



