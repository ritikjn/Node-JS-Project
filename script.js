try{

fetch("http://universities.hipolabs.com/search?country=United+States").then((data)=>{
    return data.json(); //converted from string array data to object
}).then((objectData)=>{
    console.log(objectData);
    let tableData = "";
    objectData.map((values)=>{
        tableData+=`<tr>
        <td>${values.alpha_two_code}</td>
        <td>${values.domains}</td>
        <td>${values.country}</td>
        <td>${values["state-province"]}</td>
        <td>${values.web_pages}</td>
        <td>${values.name}</td>
      </tr>`;
    });

    document.getElementById("table_content").innerHTML=tableData;  
   
})
}
catch(err){
    console.log(err);
}



