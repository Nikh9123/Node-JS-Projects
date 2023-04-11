const event = {
  name: "republic day",
  guestlist: ["nikhil"," chittu"," suyash", "deppanker", "sunny"],
  printGuestList() {
    console.log('this is the list for event', this.name)
    this.guestlist.forEach(Element => console.log(Element, "will come in", this.name))

  }
}
event.printGuestList();