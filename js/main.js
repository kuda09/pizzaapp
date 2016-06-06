(function ($) {

    "use strict";

    var $listOfPizza = $('.listOfPizzas');
    var $viewPizzaContainer = $('.viewPizzaContainer');
    var $editPizza = $('.editPizza');
    var listOfPizzas = ['margherita', 'hawaii', 'pepperoni'];
    var pizzaAttibutes = {};


    var init = function () {

        setEvents();
        //initiliase the first list item
        $listOfPizza.find('li').eq(0).trigger("click");

    }

    var setEvents = function () {

        $listOfPizza.find('li').on("click", handlePizzaClick);
        $(document).on("click", ".viewPizzaContainer button", handleEditPizza);
    }

    var handlePizzaClick = function (e) {

        var $this = $(this);

        $this.parent().find("li").attr('data-state', 'inactive');
        $this.attr('data-state', 'active');
        $editPizza.attr('data-state', 'hidden');


        pizzaAttibutes.name = $(this).attr('data-name');
        pizzaAttibutes.img = $(this).attr('data-img')
        pizzaAttibutes.likes = $(this).attr('data-likes')

        createPizzaView(pizzaAttibutes);

    }


    var createPizzaView = function (pizza) {


        $viewPizzaContainer.html("");

        var $html = "<h2>" + pizza.name + "</h2>";
        $html += "<img src='img/" + pizza.img + "' alt=' " + pizza.name + "'>";
        $html += "<p>" + pizza.likes + "</p>";
        $html += "<button class='btn btn-primary' data-name='" + pizza.name + "'>Edit</button>"


        $viewPizzaContainer.attr('data-state', 'visible');

        $($html).appendTo($viewPizzaContainer);

    }

    var handleEditPizza = function () {

        var $this = $(this);
        var pizzaName = $this.data('name');

        $editPizza.attr('data-state', 'visible');


        $(document).on("click", ".editPizza button", function () {


            $listOfPizza.find("li").each(function () {

                if ($(this).data('name') === pizzaName) {


                    $(this).attr('data-name', $editPizza.find("#Name").val())
                        .attr('data-img', $editPizza.find("#Image").val())
                        .attr('data-likes', $editPizza.find("#Likes").val())
                        .html($editPizza.find("#Name").val());
                }

            })


        });

    }


    return init();


})(jQuery || window.jQuery)