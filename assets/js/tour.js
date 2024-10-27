const driver = window.driver.js.driver

const tour = driver({
  popoverClass: 'driverjs-theme',
  prevBtnText: 'Previous', 
  nextBtnText: 'Next',
  doneBtnText: 'Finish',
  overlayColor: 'maroon',
  showProgress: true,
  progressText: 'Step {{current}} of {{total}}',
  steps: [
    { element: '.logo', popover: { title: 'Welcome to Pixel Combat', description: 'To full imerse, press F11.', side: "bottom", align: "start" } },
    { element: '.play_button', popover: { title: 'Play', description: 'Press this button to play pixel combat.', side: "top", align: "center" } },
    { element: '.setting_button', popover: { title: 'Setting', description: 'If you want to disable the music, this is the place.' } },
    { element: '#body', popover: { title: 'Enjoy bro !', description: "<img src='assets/gif/rawr.webp' style='height: 202.5px; width: 270px;' /><span style='font-size: 15px; display: block; margin-top: 10px; text-align: center;'>Rawr ?!</span>" } },
  ]
})

tour.drive()


