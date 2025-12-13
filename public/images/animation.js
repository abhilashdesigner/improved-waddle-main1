// Initialize ScrollMoo
let SC = ScrollMoo({
  "body": {
    triggerEnd: -60,
  },

  ".bottom-left": {
    triggerStartElement: "body",
    triggerEndElement: "body",
    triggerEnd: "-60%",
    sync: 0.0001,
    keyframes: {
      transform: {
        translateX: {
          0: "0%",
          100: "-200%"
        }
      }
    }
  }
});
