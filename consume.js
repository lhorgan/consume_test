
var consumed = null;  
function initialize() {
//import the first consumable
importConsumable;

//make sure the buttons work
//if yes button is clicked, save it as yes and return consumable.
$('#yes').click(saveYes);
//if no button is clicked, save it as no and return consumable.
$('#no').click(saveNo);
}
    
    
//function to pull in a new consumable.
function importConsumable(){
//the getConsumables() function takes as input the class, set, number of consumables to pull in.
//The class and set names are created in the "Manage Consumables" Tab of your research team.
getConsumables("consumeDemo", 'set1', 1, function(data, err) {
  //and returns an array where the consumable object as the first item. 
  consumed = data[0];
  //write the consumable object into the "consumed" div.
  $('#consumed').html(consumed);
});

}
function saveYes(){
//save data in Volunteer Science - "[consumable imported], yes"
submit(consumed+','+'yes');
//tell Volunteer Science this person consumed this object from the class "consumableDemo" and set named "set1"
setConsumables("consumeDemo",'set1',consumed);
//Give the user feedback
$('#consumed').html('you clicked yes');
//import the next consumable
importConsumable;

}
function saveNo(){
//save data in Volunteer Science - "[consumable imported], no"
submit(consumed+','+'no');
//tell Volunteer Science this person consumed this object from the class "consumableDemo" and set named "set1"
setConsumables("consumeDemo",'set1',consumed);
//Give the user feedback
$('#consumed').html('you clicked no');
//import the next consumable
importConsumable;
}