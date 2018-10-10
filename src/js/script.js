function validateEmail (email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

const $mainForm = $('#mainForm')
const $type = $('#type')
const $buttonType = $('.button-type')
const $cardFeatures = $('.card-feature')
const $stateForm = $('.state-form')
const $stateSuccess = $('.state-success')

let formValid = true

$mainForm.on('submit', function (e) {
  $this = $(this)
  $inputs = $this.find('input')

  e.preventDefault()

  $inputs.each(function (index, input) {
    const $input = $(input)
    const value = $input.val().trim()

    if (value === '') {
      formValid = false
    }
  })

  if (formValid) {
    $.post($this.attr('action'), $this.serialize()).then(function () {
      $stateForm.hide()
      $stateSuccess.show()
    })
  }
})

$buttonType.on('click', function () {
  const $this = $(this)
  const type = $this.data('type')
  const $parent = $this.parents('.card-feature')

  $cardFeatures.removeClass('is-active')
  $parent.addClass('is-active')
  $type.prop('value', type)
})
