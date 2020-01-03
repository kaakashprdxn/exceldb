
let add = document.getElementById("send")
function postToGoogle() {
  let field1 = document.getElementById("nameField").value;
  let field2 = document.getElementById("emailField").value;
  let field3 = document.getElementById("mobField").value;
  let e = document.getElementById("cinema");
  var field4 = e.options[e.selectedIndex].value;
  if (field1 == "") {
    alert('Please Fill Your Name');
    document.getElementById("nameField").focus();
    return false;
  }
  if (field2 == "") {
    alert('Please Fill Your Email');
    document.getElementById("emailField").focus();
    return false;
  }
  if (field3 == "" || field3.length > 10 || field3.length < 10) {
    alert('Please Fill Your Mobile Number');
    document.getElementById("mobField").focus();
    return false;
  }
  if(field1 =="" && field2 =="" && field3 =="" && field4 =="") { alert("Empty values are not alloweded"); }else{
      send.onclick = function addItem() {
  var ul = document.getElementById("dynamic-list");
  let field1 = document.getElementById("nameField").value;
  let field2 = document.getElementById("emailField").value;
  let field3 = document.getElementById("mobField").value;
  let e = document.getElementById("cinema");
  var field4 = e.options[e.selectedIndex].value;
  const div = document.createElement("ul");
  div.innerHTML =`<li>${field1}</li>
                  <li>${field2}</li>
                  <li>${field3}</li>
                  <li>${field4}</li>`
  ul.appendChild(div);
}
  
  $.ajax({
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfDOPYm7aIum8ONENCxX9PtZUCRujd1HTo3p21QhG58VZHbzQ/formResponse?",
    data: {
      "entry.1366953843": field1,
      "entry.1107270968": field2,
      "entry.1378507564": field3,
      "entry.780000694": field4
    },
    type: "POST",
    dataType: "xml",
    success: function (d) {},
    error: function (x, y, z) {

      $('#success-msg').show();
      //      $('#form').hide();

    }
  });
  return false;
}

    }