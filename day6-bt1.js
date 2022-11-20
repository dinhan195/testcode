document.getElementById("card").addEventListener("submit", myFunction); 	
	
    function myFunction(e){
        var radios = document.getElementsByName('gender');
        var height = Number(document.getElementById("num1").value);
        var weight = Number(document.getElementById("num2").value);
        var bmi = weight / (height * height)*10000;	
                e.preventDefault();
                document.getElementById("result").innerHTML = bmi.toFixed(2);
            for (var i = 0, length = radios.length; i < length; i++){
                if (radios[i].checked){
                    break;
                }
            }
                    if (radios[i].value == 0){
                        
                    if(bmi < 20.7) {
                            document.getElementById("message").innerHTML = "Gầy";
                        return;
                        }
                            else if (bmi <= 26.4) {
                            document.getElementById("message").innerHTML = "Bình thường";
                        return;
                        }
                        
                    else if (bmi <= 27.8) {
                            document.getElementById("message").innerHTML = "Thừa cân nhẹ";
                        return;
                        }
                        
                    else if (bmi <= 31.1) {
                            document.getElementById("message").innerHTML = "Trên lý tưởng";
                        return;
                        }
                        
                    else if (bmi > 31.1) {
                            document.getElementById("message").innerHTML = "Béo phì";
                        return;
                        }
                        
                    }
                        else{
                                if (bmi < 19.1) {
                            document.getElementById("message").innerHTML = "Gầy";
                        return;
                        }
                    else if (bmi <= 25.8) {
                            document.getElementById("message").innerHTML = "Bình thường";
                        return;
                        }
                        
                    else if (bmi <= 27.3) {
                            document.getElementById("message").innerHTML = "Thừa cân nhẹ";
                        return;
                        }
                        
                    else if (bmi <= 32.3) {
                            document.getElementById("message").innerHTML = "Trên lý tưởng";
                        return;
                        }
                        
                    else if (bmi > 32.3) {
                            document.getElementById("message").innerHTML = "Béo phì";
                        return;
                        } 		
                    }
    }