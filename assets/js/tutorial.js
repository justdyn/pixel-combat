const driver = window.driver.js.driver

const tutorial = driver({
  popoverClass: 'driverjs-theme',
  prevBtnText: 'Previous', 
  nextBtnText: 'Next',
  doneBtnText: 'Finish',
  overlayColor: 'maroon',
  showProgress: true,
  progressText: 'Step {{current}} of {{total}}',
  steps: [
    { element: '.pausebutton', popover: { title: 'Menu Button', description: 'If you want to disable music and go back to main menu this is the place.', side: "right", align: "center" } },
    { element: '#smallcontainer-canvas', popover: { title: 'Countdown and Health Bar', description: "This contain information about player's health.", side: "bottom", align: "center" } },
    { element: '#player', popover: { title: 'Player on left side', description: "This contain information about left player health." } },
    { element: '#enemy', popover: { title: 'Player on right side', description: "This contain information about right player health." } },
    { element: '#body', popover: { title: 'Good Luck !', description: "<img src='assets/gif/rawr.webp' style='height: 202.5px; width: 270px;' /><span style='font-size: 15px; display: block; margin-top: 10px; text-align: center;'>Rawr ?!</span>" } },
  ]
})

tutorial.drive()


