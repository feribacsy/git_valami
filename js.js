            const szoveg_1_btn = document.getElementById("sz1_btn");

            szoveg_1_btn.onclick = function () {
              sz1.select();
              document.execCommand("Copy");
            };

