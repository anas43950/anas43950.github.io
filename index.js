$(document).ready(function () {
    let expression = ""
    let numbersRegex = /^\d+$/
    let operatorsRegex = /[+\-/\*]/

    $('.grid-item').attr('tabindex', '-1')
    $('.digit-btn,.opr-btn').click(function () {
        let value = $(this).html()
        $(this).addClass("pressed")
        setTimeout(() => {
            $(this).removeClass("pressed")
        }, 100);
        addToExpression(value)
    })

    $('body').keydown(function (event) {
        let key = event.key
        if (key == "Enter") {
            $('.equal-btn').click()
        } else if (key == " ") {
            $('.clear-btn').click()
        }
        else if (key.match(numbersRegex) || key.match(operatorsRegex)) {
            addToExpression(event.key)
        }

    })
    $('.clear-btn').click(function () {
        expression = ""
        $('input').val("")
        $('.previous-expression').html("")
    })


    $('.equal-btn').click(function () {
        $('.previous-expression').html(expression + "=")
        $('input').val(math.evaluate(expression))
    })

    function addToExpression(value) {
        if (!value.match(numbersRegex) && !value.match(operatorsRegex)) {
            return;
        } else if (value.match(operatorsRegex)) {
            let currentExpression = $('input').val()
            if (currentExpression[currentExpression.length - 1].match(operatorsRegex)) {
                return;
            }
        }
        expression = expression + value
        document.getElementsByTagName('input')[0].value = expression
    }



})