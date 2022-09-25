var myArray = [
    {
      stnr: "C1234",
      name: "John",
      lastname: "Doe",
      location: "London",
      path: "Full-Stack",
    },
    {
      stnr: "C2345",
      name: "Jane",
      lastname: "Doe",
      location: "London",
      path: "Data-Science",
    },
    {
      stnr: "C2346",
      name: "Mary",
      lastname: "Ann",
      location: "Paris",
      path: "AWS-Devops",
    },
    {
      stnr: "C2347",
      name: "Adam",
      lastname: "Smith",
      location: "Texas",
      path: "AWS-Devops",
    },
    {
      stnr: "C2444",
      name: "Michael",
      lastname: "Great",
      location: "Arizona",
      path: "Full-Stack",
    },
    {
      stnr: "C2555",
      name: "William",
      lastname: "Cash",
      location: "Manchester",
      path: "Data-Science",
    },
    {
      stnr: "C2455",
      name: "Patrick",
      lastname: "Jane",
      location: "Madrid",
      path: "Full-Stack",
    },
  ];
  
  buildTable(myArray);
  
  function buildTable(data) {
    var table = document.getElementById("myTable");
  
    for (var i = 0; i < data.length; i++) {
      var row = `<tr>
                          <td>${data[i].stnr}</td>
                          <td>${data[i].name}</td>
                          <td>${data[i].lastname}</td>
                          <td>${data[i].location}</td>
                          <td>${data[i].path}</td>
                    </tr>`;
      table.innerHTML += row;
    }
  }