class TaskManager{

constructor(){
 title2 = createElement('h1');
 input2 = createInput("").attribute("placeholder", "Enter your task");
 submitTaskBtn=createButton('Add Task');
this.toDo=null;
this.itemNo=0;


}





writeTask(){
   var taskRef = "tasks/item" + this.itemNo;
    database.ref(taskRef).set({
      task:this.toDo,
});
}
   /* readTask() {
    taskRef.on("value",(data)=>{
    finishedPlayers = data.val();
        });
    }*/

change(){
    if(checkBox.checked()){
console.log("yess");
    }
    else{

        console.log("nonooo");
    }
}

display() {
    form.hide();

   title2.html("Task Manager");
title2.position(displayWidth/2 - 10, 0);
    input2.position(displayWidth/2 -500 , displayHeight/2 - 80);
    submitTaskBtn.position(displayWidth/2 -480, displayHeight/2);

var taskDisplay=0;
    submitTaskBtn.mousePressed(()=>{
        taskDisplay=taskDisplay+50;

        //TO_DO LIST 
        
        checkBox=createCheckbox(input2.value(),false);
        checkBox.position(displayWidth/2+620,displayHeight/2-250+taskDisplay);

       
        textSize(35);
        fill("black");
        textStyle("bold");
        text("Tasks",displayWidth/2+620,displayHeight/2-350)


//text(input2.value(),displayWidth/2 + 100 , displayHeight/2-200+ taskDisplay);

this.toDo=input2.value();
this.writeTask();
this.itemNo=this.itemNo+1;
})

}

 







}