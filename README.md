# twitchChromeExtension
Just like in terminal, this will map the up arrow to the last text submitted

# Goals
- [x] Get the up arrow + ctrl to be captured as a hotkey for toggling the event.
- [x] Get a way to insert text into the text box that can get sent
  - [ ] Find a way to get it to not require an edit before sending. Works if copy pasted back in
  - [ ] Possibly use the paste buffer
- [ ] Find a way to allow logging of last text written
  The goal with this is to allow some common phrases to be resaid without needing to retype, or scroll up and find the text and copy-paste.
- [ ] Learn about interaction with multiple instances of a single page
- [ ] Learn more about how chrome extensions can extend interactions on specific sites.

# Tasks
Get a basic version, which will be all pages of the app go into one data storage

More robust version, add where the comment was made as one of the keys, and allow this to only select the correct channels last message

Full initial concept version, each page will have its own localstorage, which will allow for single page searching, or with an additional button pressed, say ctrl, I want to allow a global lookup. Say something across all channels.
