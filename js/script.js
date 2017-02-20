$(document).ready(function() {

    $("#blanks form").submit(function(event) {
        var one = document.getElementById("name").value;
        var two = document.getElementById("game").value;
        var threel = document.getElementById("animal").value;
        var four = document.getElementById("sport").value;


        var groceries = [one, two, three, four]

        groceries.forEach(function(grocerie) {
            alert('You will get' + ' ' + grocerie + '!');
        });

        function makeUL(array) {
            // Create the list element:
            var list = document.createElement('ul');

            for(var i = 0; i < array.length; i++) {
                // Create the list item:
                var item = document.createElement('li');

                // Set its contents:
                item.appendChild(document.createTextNode(array[i]));

                // Add it to the list:
                list.appendChild(item);
            }

            // Finally, return the constructed list:
            return list;
        }

        // Add the contents of options[] to #foo:
        document.getElementById('foo').appendChild(makeUL(groceries));

        });


    });
});
