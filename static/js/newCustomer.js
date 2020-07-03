//JQuery
//Display New Pet After User Click Save
$(document).ready(function() {
        $('#save-customer-details').click(function(){
            $('#customer-details-section').hide('slow');
            $('#pet-details-section').show('slow');
        });
});

//Pet Back Button
$(document).ready(function() {
        $('#new-pet-back-button').click(function(){
            $('#pet-details-section').hide('slow');
            $('#customer-details-section').show('slow');
        });
});
