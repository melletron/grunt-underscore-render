window.templates=window.templates||{};window.templates.flightDetails=function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n<p>\n    <strong>'+
((__t=(data.outboundRoute))==null?'':__t)+
'</strong> <a data-href="#show-details-outbound">'+
((__t=(messages.getString('babs.init.details', 'Details')))==null?'':__t)+
' <i class="icon-chevron-down open"></i><i class="icon-chevron-up close"></i></a>\n    <br />\n<span class="details" data-target="#show-details-outbound">\n    <span data-include="segments-outbound"></span>\n</span>\n<span data-target="#show-details-outbound">\n<span class="grey">'+
((__t=(messages.getString('babs.productdisplay.text_product_display_general_depart', 'Depart')))==null?'':__t)+
':</span> '+
((__t=(data.departDateOutBound))==null?'':__t)+
'<br/>\n<span class="grey">'+
((__t=(messages.getString('babs.productdisplay.text_product_display_general_arrival', 'Arrival')))==null?'':__t)+
':</span> '+
((__t=(data.arrivalDateOutBound))==null?'':__t)+
'<br/>\n</span>\n</p>\n\n';
 if(data.isReturnFlight) { 
__p+='\n<p>\n    <strong>'+
((__t=(data.inboundRoute))==null?'':__t)+
'</strong> <a data-href="#show-details-inbound">'+
((__t=(messages.getString('babs.init.details', 'Details')))==null?'':__t)+
' <i class="icon-chevron-down open"></i><i class="icon-chevron-up close"></i></a>\n    <br />\n<span class="details" data-target="#show-details-inbound">\n    <span data-include="segments-inbound"></span>\n</span>\n<span data-target="#show-details-inbound">\n<span class="grey">'+
((__t=(messages.getString('babs.productdisplay.text_product_display_general_depart', 'Depart')))==null?'':__t)+
':</span> '+
((__t=(data.departDateInBound))==null?'':__t)+
'<br/>\n<span class="grey">'+
((__t=(messages.getString('babs.productdisplay.text_product_display_general_arrival', 'Arrival')))==null?'':__t)+
':</span> '+
((__t=(data.arrivalDateInBound))==null?'':__t)+
'<br/>\n</span>\n</p>\n';
 } 
__p+='\n\n<p>\n    <strong>'+
((__t=(data.numPassengers))==null?'':__t)+
' '+
((__t=(messages.getString('babs.init.passengers', 'passengers')))==null?'':__t)+
'</strong> <a data-href="#show-details-flight">'+
((__t=(messages.getString('babs.init.flights_show', 'Show')))==null?'':__t)+
' <i class="icon-chevron-down open"></i><i class="icon-chevron-up close"></i></a>\n    <br />\n<span class="details" data-target="#show-details-flight">\n';
 _.each(data.passengerDetails, function (passenger) { 
__p+='\n        '+
((__t=(passenger.title))==null?'':__t)+
' '+
((__t=(passenger.firstName))==null?'':__t)+
' '+
((__t=(passenger.lastName))==null?'':__t)+
'<br/>\n';
 }); 
__p+='\n'+
((__t=(messages.getString('babs.init.checked_baggage', 'Checked baggage')))==null?'':__t)+
' x'+
((__t=(data.baggageCount ))==null?'':__t)+
'<br />\n';
 if(data.carbonNeutral) { 
__p+='\n'+
((__t=(messages.getString('babs.init.carbon_offset', 'Carbon offset')))==null?'':__t)+
'<br/>\n';
 } 
__p+='\n</span>\n</p>\n';
}
return __p;
};window.templates.hotelDetails=function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n<ul class="list-unstyled">\n    <li>\n        <strong>'+
((__t=(data.hotelName))==null?'':__t)+
'</strong>\n        ';
 if (data.topSecret) { 
__p+=' <br/>\n        '+
((__t=(data.topSecret))==null?'':__t)+
'\n        <br/> ';
 } 
__p+='\n        <!--<span class="visible-xs">'+
((__t=(data.hotelPrice))==null?'':__t)+
'</span></li>-->\n    <li class="hidden-xs" data-toggle="#full-details-and-cancellation-policy">\n        <i class="icon-star '+
((__t=(data.onestar))==null?'':__t)+
'"></i>\n        <i class="icon-star '+
((__t=(data.twostars))==null?'':__t)+
'"></i>\n        <i class="icon-star '+
((__t=(data.threestars))==null?'':__t)+
'"></i>\n        <i class="icon-star '+
((__t=(data.fourstars))==null?'':__t)+
'"></i>\n        <i class="icon-star '+
((__t=(data.fivestars))==null?'':__t)+
'"></i>\n    </li>\n</ul>\n\n<p class="hidden-xs" data-toggle="#full-details-and-cancellation-policy">'+
((__t=(data.hotelAddress))==null?'':__t)+
'</p>\n\n<ul class="list-unstyled">\n    <li><span>'+
((__t=(messages.getString('babs.productdisplay.text_product_display_general_checkin')))==null?'':__t)+
':</span> '+
((__t=(data.checkInDate))==null?'':__t)+
'</li>\n    <li><span>'+
((__t=(messages.getString('babs.productdisplay.text_product_display_general_checkout')))==null?'':__t)+
':</span> '+
((__t=(data.checkOutDate))==null?'':__t)+
'</li>\n</ul>\n\n<ul class="list-unstyled hidden-xs" data-toggle="#full-details-and-cancellation-policy">\n    <li><strong>'+
((__t=(data.numberOfRooms))==null?'':__t)+
', '+
((__t=(data.totalGuests))==null?'':__t)+
' '+
((__t=(messages.getString('babs.productdisplay.text_guests','guests')))==null?'':__t)+
'</strong></li>\n    <li>'+
((__t=(data.roomDescriptions))==null?'':__t)+
'</li>\n</ul>\n\n\n\n';
 if (data.cancellationPolicy) { 
__p+='\n<ul class="list-unstyled hidden-xs" data-toggle="#full-details-and-cancellation-policy">\n    <li><a data-href="#cancellation-policy">'+
((__t=(messages.getString('babs.productdisplay.text_cancellation_policy','Cancellation policy')))==null?'':__t)+
' <i class="icon-chevron-down open"></i><i class="icon-chevron-up close"></i></a></li>\n</ul>\n<p class="cancellationPolicy" data-toggle="#full-details-and-cancellation-policy">'+
((__t=(data.cancellationPolicy))==null?'':__t)+
'</p>\n';
 } 
__p+='\n\n<ul class="list-unstyled visible-xs" data-toggle="#full-details-and-cancellation-policy">\n    <li><a data-href="#full-details-and-cancellation-policy">'+
((__t=(messages.getString('babs.productdisplay.text_full_details_cancellation_policy','Full details and cancellation policy')))==null?'':__t)+
'</a></li>\n</ul>\n\n';
 if (!data.hidePrice) { 
__p+='\n\n<ul class="list-unstyled hidden-xs">\n    <li>'+
((__t=(messages.getString('babs.productdisplay.text_product_display_general_total_amount_payable', 'Total amount payable')))==null?'':__t)+
'\n    </li>\n    <li><strong>'+
((__t=(data.hotelPrice))==null?'':__t)+
'</strong></li>\n</ul>\n\n';
 } 
__p+='\n\n<hr class="hidden-xs"/>\n\n\n';
}
return __p;
};