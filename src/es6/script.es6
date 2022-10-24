//
// Timero (v1.0.0): script.es6
// A fresh way to save your time
// ============================================================================

($ => {
  $('.progress-bar').width('100%')
  $('.alarm').trigger('load')
  $('#stop').prop('disabled', true)
  $('#start').on('click', start)
  $('#stop').on('click', stop)
  $('#volume').on('click', muted)

  // console.log( 'Your document is ready!' );

  const opts = {
    timeStatus: '25:00',
    actionTime: 25, // 25 minutes (25m * 60s * 1000ms = 1500000)
    longPause: 25,
    shortPause: 5 // 5 minutes (5m * 60s * 1000ms = 300000)
  }

  let pomodoros = 0
  let cicle = 0
  let started = 0
  let status = 'Ready to use'
  let time = null
  let loop, newTime

  // function blinkTitle () {
  //   let timeoutId
  //   const pageTitle = document.title  // save original title
  //   const alertMsg = 'Trinnnnnn!!!'
  //   const blink = () => {  // function to BLINK browser title
  //     document.title = document.title == alertMsg ? pageTitle : alertMsg
  //     // setTimeout(clearInterval(timeoutId), 60 * 1000);  // stop blink after 1 min if no interaction
  //   }
  //   const clear = () => {  // function to set title back to original
  //     clearInterval(timeoutId)
  //     document.title = pageTitle
  //     window.onmousemove = null
  //     timeoutId = null
  //   }

  //   // console.log(`Document title: ${pageTitle}`);

  //   if (!timeoutId) {
  //     timeoutId = setInterval(blink, 1000)
  //     window.onmousemove = clear  // stop changing title on moving the mouse
  //   }
  // }

  function start () {
    timer(0)
    $('.progress-bar').addClass('progress-bar-animated')
    $('.alarm').trigger('play')
    $('#start').prop('disabled', true)
    $('#stop').prop('disabled', false)
  }

  function muted () {
    let volume = $('#volume').find('svg')
    let volumeOff = volume.hasClass('fa-volume-up')

    if (volumeOff) {
      $('.alarm').prop('volume', 0)
      volume.removeClass('fa-volume-up').addClass('fa-volume-off')
    } else {
      $('.alarm').prop('volume', 1)
      volume.removeClass('fa-volume-off').addClass('fa-volume-up')
    }
  }

  function stop () {
    clearInterval(loop)
    time = null
    pomodoros = 0
    cicle = 0
    started = 0
    status = 'Stopped'
    $('#status').html(status)
    $('#pomodoros').html(`Pomodoros: <strong>${pomodoros}</strong>`)
    $('#timer').html(opts.timeStatus)
    $('.progress-bar').removeClass('progress-bar-animated').width('100%')
    $('#start').prop('disabled', false)
    $('#stop').prop('disabled', true)
  }

  function updateStatus () {
    $('#status').html(status)
    $('#pomodoros').html(`Pomodoros: <strong>${pomodoros}</strong>`)
    $('.progress-bar').width('100%')
  }

  function timer (t) {
    $('#timer').html(opts.timeStatus)
    time = new Date((new Date().getTime()) + (t * 60 * 1000))
    // console.log(`Time: ${time}`);
    loop = setInterval(getTimer, 500)
  }

  function getTimer () {
    if (time == null || typeof time === 'undefined') {
      return null
    } else {
      newTime = time.getTime() - new Date().getTime()
    }
    formatTime(newTime)
  }

  function formatTime (newTime) {
    var diff = new Date(newTime)
    var minutes = diff.getMinutes()
    var seconds = diff.getSeconds()

    if (minutes < 10) minutes = `0${minutes}`
    if (seconds < 10) seconds = `0${seconds}`

    $('#timer').html(`${minutes}:${seconds}`)
    $('.progress-bar').width(`${minutes * 4}.${seconds}%`)

    if (newTime < 0) {
      if (started == 1) {
        $('.alarm').trigger('play')
        // blinkTitle();
      }

      started = 1
      cicle++

      if (cicle % 2 == 1) {
        status = 'Pomodoro'
        clearInterval(loop)
        timer(opts.actionTime)
        pomodoros++
      } else if (cicle != 8) {
        status = 'Short Pause'
        clearInterval(loop)
        timer(opts.shortPause)
      } else {
        status = 'Long Pause'
        clearInterval(loop)
        timer(opts.longPause)
        cicle = 0
      }

      updateStatus()
    }
  }
})(jQuery)
