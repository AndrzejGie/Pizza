//const newLocal = "czosnkowy";
$(function () {
    let order = {
        "imie": "",
        "nazwisko": "",
        "ulica": "",
        "nrDom": "",
        "kodPocz": "",
        "miasto": "",
        "sos": [],
        "pizza": "",


    }

    const pizza = [{
            id: 0,
            name: "wybierz",
            price: 0
        },
        {
            id: 1,
            name: "Chłopska",
            price: 20
        },
        {
            id: 2,
            name: "Wegańska",
            price: 30
        },
        {
            id: 3,
            name: "Hawajska",
            price: 22
        },
        {
            id: 4,
            name: "Calzone",
            price: 28
        },
        {
            id: 5,
            name: "Capriciosa",
            price: 34
        },
    ]


    let error = []

    //---start funkcja pokazująca formularz zamówienia---
    $('#showOrder').click(function () {
        $('.order').css({
            "display": "block"
        })
    })
    //---end funkcja pokazująca formularz zamówienia---

    //---start pobieranie danych z formularza---
    $('#send').click(function () {
        $('.err').empty();
        if (checkValue($('#imie').val())) {
            order.imie = $('#imie').val()
        } else {
            error.push("Nie podałeś imienia.")
        }

        if (checkValue($('#nazwisko').val())) {
            order.nazwisko = $('#nazwisko').val()
        } else {
            error.push("Nie podałeś nazwiska.")
        }

        if (checkValue($('#ulica').val())) {
            order.ulica = $('#ulica').val()
        } else {
            error.push("Nie podałeś ulicy.")
        }

        if (checkValue($('#nrDom').val())) {
            order.nrDom = $('#nrDom').val()
        } else {
            error.push("Nie podałeś numeru domu.")
        }

        if (checkValue($('#kodPocz').val())) {
            order.kodPocz = $('#kodPocz').val()
        } else {
            error.push("Nie podałeś kodu pocztowego.")
        }

        if (checkValue($('#miasto').val())) {
            order.miasto = $('#miasto').val()
        } else {
            error.push("Nie podałeś miasta.")
        }
        if ($('#czosnkowy').is(':checked')) {
            order.sos.push($('#czosnkowy').val())
        }
        if ($('#pomidorowy').is(':checked')) {
            order.sos.push($('#pomidorowy').val())
        }
        if (order.sos.length === 0) {
            alert("Nie wybrałeś sosów.")
        }
        if (error.length == 0) {
            console.log(order);
        }
        else {
            error.forEach(function(element){
                $('.err').append("<li>" + element + "</li>")
                console.log(error);

            })
        }

        //$('mainSelect')
        //console.log($('#czosnkowy').is(':checked'))
        //console.log($('#pomidorowy').is(':checked'))
        //order.imie = ""

        error = [];
    })
    //---end pobieranie danych z formularza---

    //---start select pizza---
    $('#mainSelect').change(function () {
        let pizzaSelect = $(this).val()
        const pricePizza = $("#pricePizza");
        if (pizzaSelect == 0) {
            pricePizza.text("Cena za Placka : 0 zł");
            return;
        }
        pizza.forEach(function(element) {
            console.log(element)
            if (element.id == pizzaSelect) {
                pricePizza.text("Cena za placka :" + element.price);
                order.pizza = element.name;
            }
        });

    });


    //---end select pizza---

    //---start alert o braku wyboru---

    //---end alert o braku wyboru---

    //---start funckja sprawdzająca zawartość pola---

    function checkValue(val) {
        if (val) {
            return true
        }
    }

    //---end funckja sprawdzająca zawartość pola---
})

