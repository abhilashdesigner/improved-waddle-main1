// Initialize ScrollMoo
let SC = ScrollMoo({
  "body": {
    triggerEnd: -50,
  },

  ".bottom-left": {
    triggerStartElement: "body",
    triggerEndElement: "body",
    triggerEnd: "-50%",
    sync: 0.1,
    keyframes: {
      transform: {
        translateX: {
          0: "0%",
          100: "-100%"
        }
      }
    }
  }
});
