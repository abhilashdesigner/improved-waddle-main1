// Initialize ScrollMoo
let SC = ScrollMoo({
  "body": {
    triggerEnd: -1,
  },

  ".bottom-left": {
    triggerStartElement: ".project-row",
    triggerEndElement: ".project-row",
    triggerEnd: "-1%",
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
