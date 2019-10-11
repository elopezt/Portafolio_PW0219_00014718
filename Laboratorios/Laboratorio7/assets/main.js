var parseLateSwitch = value => {
  if (value) {
    return "Tarde";
  }
  return "A tiempo";
};

function addStudent(carnet, schedule, late, tBody) {
  let newRow = document.createElement("tr");
  let date = new Date();

  newRow.innerHTML = `<td><b>${carnet}</b></td>
  <td>${schedule}</td>
  <td>${date.toLocaleString()}</td>
  <td>${late}</td>`;

  tBody.appendChild(newRow);
}

window.onload = () => {
  let submit_btn = document.querySelector("#submit_btn");
  let carnet_field = document.querySelector("#carnet_field");
  let schedule_field = document.querySelector("#schedule_field");
  let late_switch = document.querySelector("#late_switch");
  let tBody = document.querySelector("#table_body");

  var carnetRegex = new RegExp("^[0-9]{8}$");

  submit_btn.addEventListener("click", function() {
    let carnet = carnet_field.value;
    let schedule = schedule_field.options[schedule_field.selectedIndex].text;
    let late = parseLateSwitch(late_switch.checked);

    if (carnetRegex.test(carnet)) {
      addStudent(carnet, schedule, late, tBody);
    }
  });

  carnet_field.addEventListener("keyup", function() {
    let carnet = carnet_field.value;
    if (carnetRegex.test(carnet)) {
      submit_btn.disabled = false;
    } else {
      submit_btn.disabled = true;
    }
  });
};
