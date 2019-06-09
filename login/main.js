
    
$(document).ready(function() {
	var check = true;
	var add = true;
    var width = $( window ).width();
    var width_navbar = $("#navbar-index").width();
    var url  = window.location;
    var string = url.toString();
    var loc = string.search("backend_admin");
    var find_url = string.slice(loc);
    var login = "login/login.html";
    var forget_pass = "login/forget.html";
    var profile = "backend_admin/profile/profile.html";
    var index = "backend_admin/index.html";
    if ((sessionStorage.getItem("email-user") == null && find_url != "")&& (sessionStorage.getItem("email-user") == null && find_url != "")) {
        var link = string.replace(find_url, "");
        window.location = link;
    }
    if (sessionStorage.getItem("email-user") == "employee@gmail.com") {
        if (find_url != login && find_url != forget_pass && find_url != list_post && find_url != add_post && find_url != detail_post && find_url != index && find_url != profile) {
            var link = string.replace(find_url, "backend_admin/403.html");
            window.location = link;
        }
    }
    $("#login").validate({
            rules: {
                email:{
                	required: true,
                	email: true,
                },
                password: {
                    required: true,
                    minlength: 8,
                    maxlength: 50,
                },
            },
            messages: {
                email: {
                    required: "This field is required",
                    email: "Please enter correct email address"
                },
                message:{
                	required: "This field is required",
                	minlength: "Password contains at least 8 characters",
                	maxlength: "Password is too long",
                }
            }
    });

	$('#login').submit(function(event){
		event.preventDefault();
		var email = $('#email-login').val();
		var password = $('#password-login').val();

		if (email=="superadmin@gmail.com" && password=="12345678") {
			sessionStorage.setItem("name-user", "SuperAdmin");
            sessionStorage.setItem("email-user", "superadmin@gmail.com");
            sessionStorage.setItem("password-user", "12345678");
            sessionStorage.setItem("position-user", "SuperAdmin");
			window.location = "../index.html";
		}else if (email=="employee@gmail.com" && password=="12345678") {
            sessionStorage.setItem("name-user", "Post Manager");
            sessionStorage.setItem("email-user", "employee@gmail.com");
            sessionStorage.setItem("password-user", "12345678");
            sessionStorage.setItem("position-user", "Post Manager");
            window.location = "../index.html";
        }else{
			toastr.warning('Wrong Login. Try again!');
		}
	});
    $("#forget_password").validate({
            rules: {
                email:{
                    required: true,
                    email: true,
                },  
            },
            messages: {
                email: {
                    required: "This field is required",
                    email: "Please enter correct email address"
                },
            }
    });

    $('#forget_password').submit(function(event){
        event.preventDefault();
        if ($('#forget_password').valid()) {
            sessionStorage.setItem("ForgetPassword", "Success");
            window.location = "login.html";
            
        }
       
    });
    $('.name-user').html(sessionStorage.getItem("name-user"));
	$('.btn-logout').click(function(){
		sessionStorage.clear();
		window.location = "../login/login.html";
	})

	$('.profile').click(function(){
		 $('.dropdown-profile').slideToggle("slow");
	});

	$('.nav-item:first-child').css('border-bottom', 'none');
	$('.nav-item:last-child').css('border-bottom', 'none');
	$('.fa-bars').click(function(){
		if (check == true) {
			$('.items').css('visibility', 'hidden');
            $('.logo-header').hide();
			$('.heading').css('visibility', 'hidden');
			$('.panel-logo').css('width', '3%');
			$('#navbar-index').css('width', '4%');
			$('#content-index').css('width', '96%');
			$('.nav-item').children('i').addClass('static');
            $('.nav-item').children('a').addClass('hover-item');
			check = !check;
		}else{
			$('.items').css('visibility', 'visible');
            $('.logo-header').show();
			$('.heading').css('visibility', 'visible');
			$('.panel-logo').css('width', '18%');
			$('#navbar-index').css('width', '18%');
			$('#content-index').css('width', '82%');
            $('.nav-item').children('i').removeClass('static');
            $('.nav-item').children('a').removeClass('hover-item');
			check = !check;
		}		

	});

	$('.counter').counterUp({
	    delay: 10,
	    time: 1000
	});

	$("#add-employee").validate({
            rules: {
            	name: {
            		required: true,
            	},
                email:{
                	required: true,
                	email: true,
                },
                mobile:{
                	required: true,

                },
                gender: {
                	required: true,
                },
                position:{
                	required: true,
                }, 
            },
            messages: {
            	name: {
            		required: "This field is required",
            	},
                email: {
                    required: "This field is required",
                    email: "Please enter correct email address"
                },
                mobile: {
                	required: "This field is required",              	
                },
                gender: {
                	required: "This field is required",
                },
                position: {
                	required: "This field is required",
                },
                
            }
    });
    $('#add-employee').submit(function(e){
    	e.preventDefault();
    	if ($('#add-employee').valid()) {
    		sessionStorage.setItem("addEmployee", "Success");
    		window.location = "list_employee.html";
    		
    	}
    	
    });
    $('.check').click(function(){
    	if (add == true) {
    		$(this).removeClass('fa-circle-o');
    		$(this).addClass('fa-check-circle');
    		toastr.success('Successfull!', 'Add role');
    		add = !add;
    	}else{
    		$(this).addClass('fa-circle-o');
    		$(this).removeClass('fa-check-circle');
    		toastr.success('Successfull!', 'Delete role')
    		add = !add;
    	}
    	
    });
    $("#list-employee").on('click','.edit',function(){
         // get the current row
         var currentRow=$(this).closest("tr"); 
         
         var col1=currentRow.find("td:eq(2)").text(); 
         var col2=currentRow.find("td:eq(3)").text(); 
         var col3=currentRow.find("td:eq(4)").text();
         var col4=currentRow.find("td:eq(5)").text();
         var col5=currentRow.find("td:eq(6)").text();

         $('#name').val(col1);
         $('#email').val(col2);
         $('#mobile').val(col4);
         $('#date').val("09/10/1997");
         $('#gender').val(col3);
         $('#position').val(col5);
    });
    $("#update-employee").validate({
            rules: {
            	name: {
            		required: true,
            	},
                email:{
                	required: true,
                	email: true,
                },
                mobile:{
                	required: true,

                },
                gender: {
                	required: true,
                },
                position:{
                	required: true,
                }, 
            },
            messages: {
            	name: {
            		required: "This field is required",
            	},
                email: {
                    required: "This field is required",
                    email: "Please enter correct email address"
                },
                mobile: {
                	required: "This field is required",              	
                },
                gender: {
                	required: "This field is required",
                },
                position: {
                	required: "This field is required",
                },
                
            }
    });
    $('#update-employee').submit(function(e){
    	e.preventDefault();
    	if ($('#update-employee').valid()) {
    		sessionStorage.setItem("updateEmployee", "Success");
    		window.location = "list_employee.html";
    		
    	}
    	
    });
    $("#list-category").on('click','.edit',function(){
         // get the current row
         var currentRow=$(this).closest("tr"); 
         
         var col1=currentRow.find("td:eq(2)").text(); 
         var col2=currentRow.find("td:eq(3)").text(); 

         $('#name-update').val(col1);
         $('#desc-update').val(col2);
    });
    $("#update-category").validate({
            rules: {
                name: {
                    required: true,
                },
                desc:{
                    required: true,
                },
            },
            messages: {
                name: {
                    required: "This field is required",
                },
                desc: {
                    required: "This field is required",
                },
                
            }
    });
    $('#update-category').submit(function(e){
        e.preventDefault();
        if ($('#update-category').valid()) {
            sessionStorage.setItem("updateCategory", "Success");
            window.location = "list_category.html";
            
        }
        
    });
    $("#add-category").validate({
            rules: {
                name: {
                    required: true,
                },
                desc:{
                    required: true,
                },
            },
            messages: {
                name: {
                    required: "This field is required",
                },
                desc: {
                    required: "This field is required",
                },               
            }
    });
    $('#add-category').submit(function(e){
        e.preventDefault();
        if ($('#add-category').valid()) {
            sessionStorage.setItem("addCategory", "Success");
            window.location = "list_category.html";
            
        }
        
    });
    $("#add-post").validate({
            rules: {
                title: {
                    required: true,
                    minlength: 10,
                },
                desc:{
                    required: true,
                    minlength: 10,
                },
                content:{
                    required: true,
                },
                status: {
                    required: true,
                },
                category:{
                    required: true,
                },
            },
            messages: {
                title: {
                    required: "This field is required",
                    minlength: "This field contains at least 10 characters"
                },
                desc: {
                    required: "This field is required",
                    minlength: "This field contains at least 10 characters",
                },
                content: {
                    required: "This field is required",                 
                },
                status: {
                    required: "This field is required",
                },
                category: {
                    required: "This field is required",
                },
                
            }
    });
    $('#add-post').submit(function(e){
        e.preventDefault();
        if ($('#add-post').valid()) {
            sessionStorage.setItem("addPost", "Success");
            window.location = "list_post.html";            
        }      
    });
    $("#list-post").on('click','.edit',function(){
         // get the current row
         var currentRow=$(this).closest("tr"); 
         
         var col1=currentRow.find("td:eq(2)").text(); 
         var col2=currentRow.find("td:eq(4)").text(); 
         var col3=currentRow.find("td:eq(3)").text();

        sessionStorage.setItem("title", col1);
        sessionStorage.setItem("desc", col2);
        sessionStorage.setItem("category", col3);
    });
    $("#update-post").validate({
            rules: {
                title: {
                    required: true,
                    minlength: 10,
                },
                desc:{
                    required: true,
                    minlength: 10,
                },
                content:{
                    required: true,
                },
                status: {
                    required: true,
                },
                category:{
                    required: true,
                },
            },
            messages: {
                title: {
                    required: "This field is required",
                    minlength: "This field contains at least 10 characters"
                },
                desc: {
                    required: "This field is required",
                    minlength: "This field contains at least 10 characters",
                },
                content: {
                    required: "This field is required",                 
                },
                status: {
                    required: "This field is required",
                },
                category: {
                    required: "This field is required",
                },
                
            }
    });
    $('#update-post').submit(function(e){
        e.preventDefault();
        if ($('#update-post').valid()) {
            sessionStorage.setItem("updatePost", "Success");
            window.location = "list_post.html";
            
        }
        
    });
    $("#list-role").on('click','.edit',function(){
         // get the current row
         var currentRow=$(this).closest("tr"); 
         
         var col1=currentRow.find("td:eq(2)").text(); 
         var col2=currentRow.find("td:eq(3)").text(); 

         $('#name-update').val(col1);
         $('#desc-update').val(col2);
    });
    $("#update-role").validate({
            rules: {
                name: {
                    required: true,
                },
                desc:{
                    required: true,
                },
            },
            messages: {
                name: {
                    required: "This field is required",
                },
                desc: {
                    required: "This field is required",
                },
                
            }
    });
    $('#update-role').submit(function(e){
        e.preventDefault();
        if ($('#update-role').valid()) {
            sessionStorage.setItem("updateRole", "Success");
            window.location = "list_role.html";
            
        }
        
    });
    $("#add-role").validate({
            rules: {
                name: {
                    required: true,
                },
                desc:{
                    required: true,
                },
            },
            messages: {
                name: {
                    required: "This field is required",
                },
                desc: {
                    required: "This field is required",
                },               
            }
    });
    $('#add-role').submit(function(e){
        e.preventDefault();
        if ($('#add-role').valid()) {
            sessionStorage.setItem("addRole", "Success");
            window.location = "list_role.html";
            
        }
        
    });
    $("#list-permission").on('click','.edit',function(){
         // get the current row
         var currentRow=$(this).closest("tr"); 
         
         var col1=currentRow.find("td:eq(2)").text(); 
         var col2=currentRow.find("td:eq(3)").text(); 

         $('#name-update').val(col1);
         $('#desc-update').val(col2);
    });
    $("#update-permission").validate({
            rules: {
                name: {
                    required: true,
                },
                desc:{
                    required: true,
                },
            },
            messages: {
                name: {
                    required: "This field is required",
                },
                desc: {
                    required: "This field is required",
                },
                
            }
    });
    $('#update-permission').submit(function(e){
        e.preventDefault();
        if ($('#update-permission').valid()) {
            sessionStorage.setItem("updatePermission", "Success");
            window.location = "list_permission.html";
            
        }
        
    });
    $("#add-permission").validate({
            rules: {
                name: {
                    required: true,
                },
                desc:{
                    required: true,
                },
            },
            messages: {
                name: {
                    required: "This field is required",
                },
                desc: {
                    required: "This field is required",
                },               
            }
    });
    $('#add-permission').submit(function(e){
        e.preventDefault();
        if ($('#add-permission').valid()) {
            sessionStorage.setItem("addPermission", "Success");
            window.location = "list_permission.html";
            
        }
        
    });
    $("#update_profile").validate({
            rules: {
                name: {
                    required: true,
                },
                date: {
                    date: true,
                },
                phone: {
                    required: true,
                },
                address: {
                    required: true,
                },               
            },
            messages: {
                name: {
                    required: "This field is required",
                },
                date: {
                    date: "Wrong format of date",
                },
                phone: {
                    required: "This field is required",
                },
                address: {
                    required: "This field is required",
                },
                
            }
    });
    $('#update_profile').submit(function(e){
        e.preventDefault();
        if ($('#update_profile').valid()) {
            sessionStorage.setItem("addProfile", "Success");
            window.location = "../index.html";
            
        }
        
    });
    $("#change_password").validate({
            rules: {
                current_pw: {
                    required: true,
                },
                new_pw: {
                    required: true,
                },
                confirm_pw: {
                    required: true,
                },             
            },
            messages: {
                current_pw: {
                    required: "This field is required",
                },
                new_pw: {
                    required: "This field is required",
                },
                confirm_pw: {
                    required: "This field is required",
                },
                
            }
    });
    $('#change_password').submit(function(e){
        e.preventDefault();
        if ($('#change_password').valid()) {
            var current = sessionStorage.getItem("password-user");
            var password = $('#current_pw').val();
            if (password == current) {
                sessionStorage.setItem("changePassword", "Success");
                window.location = "../profile/profile.html";
            }else{
                toastr.warning("Wrong", "Current password");
            }         
            
        }
        
    });


});

