let start = document.querySelector('.start1');
        let c = document.getElementById('c');
        let stop = document.querySelector('.stop1');
        let js = document.querySelector('.JS');
        let name = document.querySelector('.name');
        let clear = document.querySelector('.C');

        name.addEventListener('click', function() {
           js.classList.toggle('text');   
        });

        let i = 0;

        start.addEventListener('click', Start);
        stop.addEventListener('click', Stop);
        clear.addEventListener('click', Clear);

        

        function Start() {
           setInterval(function() {
                i++;
                c.textContent = i;
                
                if(i > 0) { 
                  c.style.color = 'green';
                }

                else if(c.style.color = 'red') {
                  c.style.color = 'green';
                }

             }, 1000);
        }

        function Clear() {
          let s = 0;
          c.style.color = 'orange';

          if(s && Symm() || s && Stop()) {
             i = 0;

             return false;
          }
        }

        function Stop() {
          setInterval(function() {
            c.textContent = i;
            i--;
            
            if(i < 0) {
              c.style.color = 'red';
            }

            else if(c.style.color = 'green') {
              c.style.color = 'red';
            }
          }, 1000);
        }

        js.addEventListener('click', function() {
          setTimeout(function() {
           js.classList.add('block1');
          }, 1000);

          setTimeout(function() {
           js.classList.add('block2');
          }, 2000);

          setTimeout(function() {
            js.classList.remove('block1');
          }, 3000);

          setTimeout(function() {
            js.classList.remove('block2');
          }, 4000);
        });  