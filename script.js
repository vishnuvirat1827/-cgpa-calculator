let totalGradePoints = 0;
let totalCredits = 0;

function addSubject(){

    const subject = document.getElementById("subject").value;
    const grade = document.getElementById("grade");
    const gradePoint = Number(grade.value);
    const gradeText = grade.options[grade.selectedIndex].text;
    const credits = Number(document.getElementById("credits").value);

    if(subject === "" || credits <= 0){

        alert("Enter valid details");
        return;
    }

    const tbody = document.getElementById("subjectList");

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${subject}</td>
        <td>${gradeText}</td>
        <td>${credits}</td>
        <td>
            <button class="delete-btn"
            onclick="deleteSubject(this,${gradePoint},${credits})">
            Delete
            </button>
        </td>
    `;

    tbody.appendChild(row);

    totalGradePoints += gradePoint * credits;
    totalCredits += credits;

    calculateCGPA();

    document.getElementById("subject").value = "";
    document.getElementById("credits").value = "";
}

function calculateCGPA(){

    const cgpa = totalGradePoints / totalCredits;

    document.getElementById("cgpa").textContent =
    cgpa.toFixed(2);
}

function deleteSubject(button, gradePoint, credits){

    button.parentElement.parentElement.remove();

    totalGradePoints -= gradePoint * credits;
    totalCredits -= credits;

    if(totalCredits === 0){
        document.getElementById("cgpa").textContent = "0.00";
        return;
    }

    calculateCGPA();
}