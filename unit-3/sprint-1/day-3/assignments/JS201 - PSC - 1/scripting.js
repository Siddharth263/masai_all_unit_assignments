let form = document.getElementById("student_data");
form.addEventListener("submit", Submit);

let students = [];
class dataCreate {
    constructor(name,image,course,batch,unit) {
        this.name = name;
        this.image = image;
        this.course = course;
        this.batch = batch;
        this.unit = unit;
    };

}

function Submit() {
    event.preventDefault();
    let name = form.name.value;
    let image = form.image.value;
    let course = form.course.value;
    let batch = form.batch.value;
    let unit = form.unit.value;
    let data = new dataCreate(name,image,course,batch,unit);
    students.push(data);
    localStorage.setItem("students_data", JSON.stringify(students));
}