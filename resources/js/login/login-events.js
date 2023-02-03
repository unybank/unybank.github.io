function openAsanModal(){modal=document.getElementById("modal-asan").style.display="block";}
function openAsanInfoModal(){modal=document.getElementById("modal-info").style.display="block";}
function openLicenceModal(data){modal=document.getElementById("modal-licence").style.display="block";}
function closeLicenceModal(){modal=document.getElementById("modal-licence").style.display="none";}
function openForgotPasswordModal(){modal=document.getElementById("modal-forgot-password").style.display="block";}
function closeForgotPasswordModal(){modal=document.getElementById("modal-forgot-password").style.display="none";}
function openChangePasswordModal(){modal=document.getElementById("modal-change-password").style.display="block";}
function closeChangePasswordModal(){modal=document.getElementById("modal-change-password").style.display="none";}
function handleAcceptLicence(data){var ajaxStatus=data.status;switch(ajaxStatus){case "success":modal=document.getElementById("modal-licence").style.display="none";break;}}
function openOtpModal(){var otpStatus=$('#sentOtpStatus').val();console.log("status otp "+otpStatus);if(otpStatus==="true"){clearInterval(qrCodeInterval);clearInterval(qrCodeRefreshInterval);modal=document.getElementById("modal-otp").style.display="block";}}
function closeOtpModalSimple(){checkScanQRCode();refreshQRCode();modal=document.getElementById("modal-otp").style.display="none";}
function closeOtpModal(){var checkStatus=$('#checkOtpStatus').val();console.log("check status "+checkStatus);if(checkStatus==="true"){modal=document.getElementById("modal-otp").style.display="none";}}
function handleOtpStatus(data){var ajaxstatus=data.status;switch(ajaxstatus){case "begin":openSpinModal();break;case "complete":break;case "success":closeSpinModal();$("#openOtpModalBtn").click();$("#otp").focus();break;}}
function handleOtpAccept(data){var ajaxstatus=data.status;var checkStatus=$('#checkOtpStatus').val();switch(ajaxstatus){case "begin":openSpinModal();data.source.disabled=true;break;case "success":closeSpinModal();data.source.disabled=false;if(checkStatus==="true"){$("#closeOtpModalBtn").click();}
break;}}
function handleForgotPassword(data){var ajaxstatus=data.status;var errorStatus=$('#errorStatus').val();switch(ajaxstatus){case "begin":openSpinModal();data.source.disabled=true;break;case "success":closeSpinModal();if(errorStatus==='true'){closeForgotPasswordModal();openChangePasswordModal();}
data.source.disabled=false;break;}}
function handleChangePassword(data){var ajaxstatus=data.status;var errorStatus=$('#changePasswordErrorStatus').val();switch(ajaxstatus){case "begin":openSpinModal();data.source.disabled=true;break;case "success":closeSpinModal();if(errorStatus==='true'){closeChangePasswordModal();}
data.source.disabled=false;break;}}
function handleOtpLogin(data){var ajaxstatus=data.status;switch(ajaxstatus){case "begin":openSpinModal();closeOtpModal();data.source.disabled=true;break;case "success":closeSpinModal();data.source.disabled=false;break;}}
var qrCodeInterval;var qrCodeRefreshInterval;function checkScanQRCode(){clearInterval(qrCodeInterval);qrCodeInterval=setInterval(function(){document.getElementById('checkScanStatusQRCodeBtn').click();},2000);}
function refreshQRCode(){clearInterval(qrCodeRefreshInterval);qrCodeRefreshInterval=setInterval(function(){document.getElementById('qrCodeRefreshLink').click();},30000*5);}
function handleQRCodeScanStatus(data){var ajaxstatus=data.status;var qrCodeStatus=$('#qrCodeCheckStatus').val();switch(ajaxstatus){case "success":if(qrCodeStatus==='SCANNED'){clearInterval(qrCodeInterval);clearInterval(qrCodeRefreshInterval);$('#qrCodeLoginBtn').click();}else if(qrCodeStatus==='NOT_REGISTERED'){clearInterval(qrCodeInterval);clearInterval(qrCodeRefreshInterval);$('#qrCodeRegisterBtn').click();}
break;}}
function handleQRCodeLogin(data){var ajaxstatus=data.status;var loginStatus=$('#qrCodeLoginStatus').val();switch(ajaxstatus){case "begin":openSpinModal();break;case "success":if(loginStatus!=='true'){checkScanQRCode();refreshQRCode();}
closeSpinModal();break;}}
function spinLoader(data){var ajaxstatus=data.status;var loader=document.getElementsByClassName("loader");switch(ajaxstatus){case "begin":console.log("log:"+ajaxstatus);openSpinModal();break;case "complete":console.log("log2:"+ajaxstatus);break;case "success":closeSpinModal();break;}}
function openSpinModal(){modal=document.getElementById("loadSpinModal").style.display="block";}
function closeSpinModal(){document.getElementById("loadSpinModal").style.display="none";}
function closeAsanModal(){document.getElementById("modal-asan").style.display="none";}
function closeAsanInfoModal(){modal=document.getElementById("modal-info").style.display="none";}
function handleScroll(){$('#terms').scroll(function(){if(($(this).height()+100)>$(this)[0].scrollHeight-$(this).scrollTop()){$('#acceptLicenceBtn').removeAttr('disabled');$('#modalAcceptBtn').css('background-color','#f7b200');$('#acceptLicenceBtn').css('background-color','#f7b200');}});}
function handleInputsNullable(){}