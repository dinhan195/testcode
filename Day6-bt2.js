document.getElementById('btn').addEventListener('click', myFunction)
    function myFunction() {
            var num1 = document.getElementById("num1").value;
            var num2 = document.getElementById("num2").value;
            var num3 = document.getElementById("num3").value;
            console.log(num1, num2, num3)
                var num4= Math.round((num1 / (30/12)) + (num1 * (num2/100))/12)
                document.getElementById("num4").value = num4;
                document.getElementById("num5").value = num4 *12*30;
                document.getElementById("num6").value = Math.round(num1 * (num2/100) * 30);

    }
    