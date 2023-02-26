const NAME_REGEX = /^[A-Z]{1}[a-zA-Z]{2,}$/;

function onFormSubmit()
{
    
    
    var text =document.RegForm.Name.value;
    var prof =document.RegForm.profile.value;
    var gender =document.RegForm.gender.value;
    var notes =document.RegForm.Notes.value;
                           
   
    if (text==""||NAME_REGEX.test(text)==false) {
        window.alert("Please enter your name properly.");
        document.getElementById("name").focus();
       
        return false;
    }
   
    if (prof=="") {
        window.alert("select atleast one profile.");
        return false;
    }
    if (gender=="") {
        window.alert("select atleast one gender.");
        return false;
    }
    
    var e = document.getElementById("salary");
    var strUser = e.options[e.selectedIndex].value;
    if (strUser == -1) {
        window.alert("Give Salary amount.");
        return false;
    }
    if (notes=="") {
        window.alert("Enter some note.");
        document.getElementById("notes").focus();
        return false;
    }
    var department = [];
    var checkboxes = document.getElementsByName("department");
    for(var i=0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            // Populate department array with selected values
            department.push(checkboxes[i].value);
        }
    } 
    var dataPreview = "You've entered the following details: \n" +"{\n"+
                          "Name: " + text + "\n" +
                          "Profile: " + prof + "\n" +
                          "Gender: " + gender + "\n" +
                          "Salary: " + strUser + "\n" +
                          "notes: " + notes + "\n";
                          
        if(department.length) {
            dataPreview += "departments: " + department.join(", ")+"\n}";
        }
        alert(dataPreview);
        // var dt=[{text,prof,gender,strUser,notes}];
        // for (let i = 0; i < dt.length; i++) {
        //           let x={
        //             "Name" : "dt[i].text",
        //             "Profile":"dt[i].prof",
        //             "Gender" : "dt[i].gender",
        //             "Salary":"dt[i].strUser",
        //             "notes":"dt[i].notes"
        //            }
        //            alert(x);
        //         }

    
    window.location.href = "http://127.0.0.1:5500/pages/empPayroll.html";
    return true;
}


//    

// let v=document.getElementById("fname").value
// let Sample=[
//     {"firstName":"John", "lastName":"Doe","mobile":"73330545123", "email":"abc@gmail.com"},
//     {"firstName":"Praveen", "lastName":"Kumar","mobile":"99330545144", "email":"sssss@gmail.com"},
//     {"firstName":"Vijay", "lastName":"Kumar","mobile":"88830545777", "email":"vijay44@gmail.com"}
// ];



  
//  for (let i = 0; i < Sample.length; i++) {
//       let x={
//         firstname : Sample[i].firstName,
//         lastname:Sample[i].lastName
//        }
//        console.log(x);
//     }


