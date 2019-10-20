let carnet_field = document.querySelector("#carnet_field")
let schedule_dropdown = document.querySelector("#schedule_field")
let late_switch = document.querySelector("#late_switch")
let submit_btn = document.querySelector("#submit_btn")

let table_body = document.querySelector("#table_body")
let carnet_regex = new RegExp('^[0-9]{8}$')
let student_list = [];
let serial = 0;


let printArray = () => {
  table_body.innerHTML = ""

  student_list.forEach(element => {
    let new_row = document.createElement("tr")

    new_row.classList.add("table-active")
    new_row.innerHTML =
      `<th scope='row'>${element.carnet}</th>
        <td>${element.horario}</td>
        <td>${element.ingreso}</td>
        <td>${element.tarde}</td>`

    let new_cell = document.createElement("td")
    let new_btn = document.createElement("button")
    let new_text = document.createElement("input")

    new_text.setAttribute("type", "text")
    new_btn.className = "btn btn-danger"
    new_btn.innerText = "Drop"
    new_btn.disabled = true;

    new_btn.value = element.id

    new_text.addEventListener("keyup", event => {
      if (new_text.value == element.carnet) {
        new_btn.disabled = false;
      } else {
        new_btn.disabled = true;

      }

    })
    new_btn.addEventListener("click", event => {
      let id_actual = event.target.value
      console.log(id_actual);
      student_list.forEach((element, pos) => {
        if (id_actual == element.id) {
          student_list.splice(pos, 1)
          printArray()
        }
      })

    })

    new_cell.appendChild(new_btn)
    new_row.appendChild(new_cell)

    new_cell = document.createElement("td")

    new_cell.appendChild(new_text)
    new_row.appendChild(new_cell)
    table_body.appendChild(new_row)

  })

}

let addStudent = (carnet, schedule, late) => {

  let datetime = new Date()
  let datetime_string = datetime.toLocaleString();

  student_list.push({
    "id": serial,
    "carnet": carnet,
    "horario": schedule,
    "tarde": late,
    "ingreso": datetime_string
  })

  serial++
}

let parseLateSwitch = (value) => {
  if (value) {
    return "Tardisimo"
  }
  return "A tiempo"
}

submit_btn.addEventListener("click", () => {
  let carnet = carnet_field.value
  let schedule = schedule_dropdown.options[schedule_dropdown.selectedIndex].text
  let late = parseLateSwitch(late_switch.checked)

  if (carnet_regex.test(carnet)) {
    addStudent(carnet, schedule, late)
    printArray()
  } else {
    alert("Formáto de carnet no válido")
  }
})

carnet_field.addEventListener("keyup", (event) => {
  let keyCode = event.keyCode
  let carnet = carnet_field.value

  if (keyCode == 13) {
    submit_btn.click()
  }

  if (carnet_regex.test(carnet)) {
    submit_btn.disabled = false;
  } else {
    submit_btn.disabled = true;
  }
})